import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const addproducts = () => {

    const { user } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const price = form.price.value;
        const photo = form.photo.files;


        const formData = new FormData()
        formData.append('image', photo[0])


        const url = 'https://api.imgbb.com/1/upload?key=456a147c4a050b2e4f1039b382b545df';
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {
                console.log(imageData.data.display_url);

                const productInfo = {
                    productName: name,
                    email: email,
                    productImg: imageData.data.display_url,
                    price: price,
                }
                fetch('http://localhost:5000/products', {
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
        <div className="mx-auto max-w-screen-2xl py-[200px] bg-gray-200">
            <div className="py-12  md:py-24">
                <div className="max-w-lg px-4 mx-auto lg:px-8">
                    <form onSubmit={handleSubmit} className="grid grid-cols-6 gap-4">
                        <div className="col-span-3">
                            <label
                                htmlFor="FirstName"
                                className="block text-xl font-medium text-gray-700"
                            >
                                Products Name
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full mt-1 pl-2 py-2 border-black border rounded-md shadow-sm text-xl"
                            />
                        </div>

                        <div className="col-span-3">
                            <label
                                htmlFor="price"
                                
                                className="block text-xl font-medium text-gray-700"
                            >
                                Price
                            </label>

                            <input
                                type="number"
                                id="price"
                                name="price"
                                className="w-full pl-2 py-2 mt-1 border-black border rounded-md shadow-sm text-xl"
                            />
                        </div>

                        <div className="col-span-6">
                            <label htmlFor="photo" className="block text-xl font-medium text-gray-700">
                                Add Picture
                            </label>
                            <input name="photo" type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />
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
                                Add Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default addproducts;