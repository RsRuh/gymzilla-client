import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const login = () => {

    const { signin } = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signin(email, password)
            .then((result) => {
                const user = result.user;

            })
            .catch((error) => {
                console.error(error);
            });
    }


    return (

        <div className="relative md:flex h-full w-full">
            <div className="h-screen my-20 md:my-0 md:w-1/2 md:bg-gray-200">
                <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-black xl:w-1/2">
                    <div>
                        <p className="text-2xl">Login|</p>
                        <p>please login to continue|</p>
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
                        <form onSubmit={handleLogin}>
                            <div>
                                <label className="mb-2.5 block font-extrabold" htmlhtmlFor="email">Email</label>
                                <input type="email" id="email" name="email" className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30" placeholder="mail@user.com" />
                            </div>
                            <div className="mt-4">
                                <label className="mb-2.5 block font-extrabold" htmlhtmlFor="email">Password</label>
                                <input type="password" name="password" id="password" className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow" />
                            </div>
                            <div className="my-10">
                                <button type="submit" className="w-full rounded-full bg-orange-600 p-5 hover:bg-orange-800">Login</button>
                            </div>
                        </form>
                        <div className="text-grey-dark mt-6">
                            Don't have an account?
                            <Link className="no-underline ml-2 border-b border-blue text-blue" href="/signup">
                                Sign up
                            </Link>.
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-screen md:block hidden w-1/2 bg-blue-600">
                <img src="https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80" className="h-full w-full" />
            </div>
        </div>
    );
};

export default login;