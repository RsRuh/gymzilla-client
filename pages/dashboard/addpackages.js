import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const addpackages = () => {

    const { user } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const packName = form.packName.value;
        const trainingTime = form.trainingTime.value;
        const sessionTime = form.sessionTime.value;
        const photo = form.packPhoto.files;
        const email = user?.email;
        const feature1 = form.feature1.value;
        const feature2 = form.feature2.value;
        const feature3 = form.feature3.value;
        const feature4 = form.feature4.value;
        const feature5 = form.feature5.value;



        const formData = new FormData()
        formData.append('image', photo[0])


        const url = 'https://api.imgbb.com/1/upload?key=456a147c4a050b2e4f1039b382b545df';
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {
                console.log(imageData);
                const productInfo = {
                    packName: packName,
                    email: email,
                    trainingTime: trainingTime,
                    sessionTime: sessionTime,
                    feature1: feature1,
                    feature2: feature2,
                    feature3: feature3,
                    feature4: feature4,
                    feature5: feature5,
                    packImg: imageData.data.display_url,
                }
                
                fetch('http://localhost:5000/packages', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(productInfo)
                })
                    .then(res => res.json())
                    .then(user => {
                        form.reset();
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            })

    }

    return (
        <div className="mx-auto max-w-screen-2xl py-10 bg-gray-200">
            <div className="py-12  md:py-24">
                <div className="max-w-lg px-4 mx-auto lg:px-8">
                    <form onSubmit={handleSubmit} className="grid grid-cols-6 gap-4">

                        <div className="col-span-3">
                            <label
                                htmlFor="packName"
                                className="block text-xl font-medium text-gray-700"
                            >
                                Package Name
                            </label>

                            <input
                                type="text"
                                id="packName"
                                name="packName"
                                className="w-full mt-1 pl-2 py-2 border-black border rounded-md shadow-sm text-xl"
                            />
                        </div>

                        <div className="col-span-3">
                            <label
                                htmlFor="trainingTime"

                                className="block text-xl font-medium text-gray-700"
                            >
                                Training Time
                            </label>

                            <select className="select w-full max-w-xs" name="trainingTime">
                                <option>01 month</option>
                                <option>06 month</option>
                                <option>01 Year</option>
                            </select>
                        </div>
                        <div className="col-span-6">
                            <label
                                htmlFor="sessionTime"

                                className="block text-xl font-medium text-gray-700"
                            >
                                Session Time
                            </label>

                            <select className="select w-full max-w-xs" name="sessionTime">
                                <option>10 Min</option>
                                <option>30 Min</option>
                                <option>01 Hour</option>
                            </select>
                        </div>


                        <div className="col-span-6">
                            <label htmlFor="photo" className="block text-xl font-medium text-gray-700">
                                Add Picture
                            </label>
                            <input name="packPhoto" type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />
                        </div>
                        <div className="col-span-6">
                            <label
                                htmlFor="feature1"
                                className="block text-xl font-medium text-gray-700"
                            >
                                Feature 1
                            </label>

                            <input
                                type="text"
                                id="feature1"
                                name="feature1"
                                className="w-full mt-1 pl-2 py-2 border-black border rounded-md shadow-sm text-xl"
                            />
                        </div>
                        <div className="col-span-6">
                            <label
                                htmlFor="feature2"
                                className="block text-xl font-medium text-gray-700"
                            >
                                Feature 2
                            </label>

                            <input
                                type="text"
                                id="feature2"
                                name="feature2"
                                className="w-full mt-1 pl-2 py-2 border-black border rounded-md shadow-sm text-xl"
                            />
                        </div>
                        <div className="col-span-6">
                            <label
                                htmlFor="feature3"
                                className="block text-xl font-medium text-gray-700"
                            >
                                Feature 3
                            </label>

                            <input
                                type="text"
                                id="feature3"
                                name="feature3"
                                className="w-full mt-1 pl-2 py-2 border-black border rounded-md shadow-sm text-xl"
                            />
                        </div>
                        <div className="col-span-6">
                            <label
                                htmlFor="feature4"
                                className="block text-xl font-medium text-gray-700"
                            >
                                Feature 4
                            </label>

                            <input
                                type="text"
                                id="feature4"
                                name="feature4"
                                className="w-full mt-1 pl-2 py-2 border-black border rounded-md shadow-sm text-xl"
                            />
                        </div>
                        <div className="col-span-6">
                            <label
                                htmlFor="feature5"
                                className="block text-xl font-medium text-gray-700"
                            >
                                Feature 5
                            </label>

                            <input
                                type="text"
                                id="feature5"
                                name="feature5"
                                className="w-full mt-1 pl-2 py-2 border-black border rounded-md shadow-sm text-xl"
                            />
                        </div>

                        <div className="col-span-6">
                            <label htmlFor="Phone" className="block text-xl font-medium text-gray-700">
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full mt-1 border-black border rounded-md pl-2 py-2 shadow-sm text-xl"
                                disabled
                                placeholder={user?.email}
                            />
                        </div>


                        <div className="col-span-6">
                            <button
                                type="submit"
                                className="block w-full  rounded-md bg-black p-2.5 text-xl text-white transition hover:shadow-lg"
                            >
                                Add Packages
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default addpackages;