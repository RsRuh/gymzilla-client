import { async } from "@firebase/util";
import { useEffect, useState } from "react";

const Products = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [dashbardData, setDashboardData] = useState(null)

    useEffect(() => {
        async function fetchDashboardData() {
            const res = await fetch('http://localhost:5000/products')

            const data = await res.json()
            setDashboardData(data)
            setIsLoading(false)

        }
        fetchDashboardData()
    }, []);

    if(isLoading){
        return <div>Loading...</div>
    }

    return (
        <div>
            <div className="p-6 mt-10 py-12 bg-violet-400 text-gray-900">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-6xl tracking-tighter font-bold">SHOP OUR PRODUCT
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            Welcome to shop our products "Made in Bangladesh"
                        </div>
                        <a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 text-gray-900 border-gray-400">Shop Now</a>
                    </div>
                </div>
            </div>
            <section>
                <div className="max-w-screen-xl mx-auto">
                    <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
                        {
                            dashbardData?.map((data, i) => <li key={i}>
                                <a href="#" className="block overflow-hidden group">
                                    <img
                                        src={data?.productImg}
                                        alt=""
                                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    />

                                    <div className="relative border p-3 bg-white">
                                        <h3
                                            className="text-2xl font-semibold text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            {data?.productName}
                                        </h3>

                                        <p className="mt-2">
                                            <span className="sr-only"> Regular Price </span>

                                            <span className="tracking-wider font-semibold text-gray-900"> {data?.price}/BDT </span>
                                        </p>
                                    </div>
                                </a>
                            </li>)

                        }

                    </ul>
                </div>
            </section>
            <div className="2xl:mx-auto 2xl:container mx-4 pb-1 pt-16">
                <div className="w-full relative flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1526401485004-46910ecc8e51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="dining" className="w-full h-full absolute z-0 hidden xl:block" />
                    <img src="https://images.unsplash.com/photo-1526401485004-46910ecc8e51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="dining" className="w-full h-full absolute z-0 hidden sm:block xl:hidden" />
                    <img src="https://images.unsplash.com/photo-1526401485004-46910ecc8e51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="dining" className="w-full h-full absolute z-0 sm:hidden" />
                    <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                        <h1 className="text-4xl font-semibold leading-9 text-white text-center">SUBSCRIBE US FOR OFFERS & HEALTH TIPS</h1>
                        <div className="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
                            <input className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white" placeholder="Email Address" />
                            <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;