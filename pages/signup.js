import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";


const signup = () => {

    const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
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
                
                const userInfo = {
                    name: name,
                    email: email,
                    userImg: imageData.data.display_url,
                }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(user => {
                        createUser(email, password)
                            .then((result) => {
                                const user = result.user;
                                updateUserProfile(name, imageData.data.display_url)
                                    .then(() => {
                                        form.reset();
                                        // window.location.reload()
                                    }).catch((error) => { });
                            })
                            .catch((error) => {
                                console.error(error);
                            });
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            })

    }




    return (
        <div className="relative md:flex h-full w-full">
            <div className="h-screen md:w-1/2 bg-gray-200">
                <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-black xl:w-1/2">
                    <div>
                        <p className="text-2xl">Create Account</p>
                    </div>
                    <div className="my-6">
                        <button className="flex w-full justify-center rounded-3xl border-none bg-white p-1 text-black hover:bg-gray-200 sm:p-2"><img src="https://freesvg.org/img/1534129544.png" className="mr-2 w-6 object-fill" />Sign in with Google</button>
                    </div>
                    <div>
                        <fieldset className="border-t border-solid border-gray-600">
                            <legend className="mx-auto px-2 text-center text-sm">Or login via our secure system</legend>
                        </fieldset>
                    </div>
                    <div className="mt-10">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label className="mb-2.5 block font-extrabold" htmlhtmlFor="email">Name</label>
                                <input name="name" type="text" id="name" className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30" placeholder="RsRuh" />
                            </div>
                            <div>
                                <label className="mb-2.5 block font-extrabold" htmlhtmlFor="email">Photo</label>
                                <input name="photo" type="file" id='photo' className="file-input file-input-bordered file-input-info w-full max-w-xs inline-block rounded-full bg-white leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30" />
                            </div>
                            <div>
                                <label className="mb-2.5 block font-extrabold" htmlhtmlFor="email">Email</label>
                                <input name="email" type="email" id="email" className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30" placeholder="mail@user.com" />
                            </div>
                            <div className="mt-4">
                                <label className="mb-2.5 block font-extrabold" htmlhtmlFor="email">Password</label>
                                <input name="password" type="password" id="password" className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow" />
                            </div>

                            <div className="my-10">
                                <button type="submit" className="w-full rounded-full bg-orange-600 p-5 hover:bg-orange-800">Signup</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="h-screen hidden md:block w-1/2 bg-blue-600">
                <img src="https://images.unsplash.com/photo-1560847335-b9dc6c736974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="h-full w-full" />
            </div>
        </div>
    );
};

export default signup;