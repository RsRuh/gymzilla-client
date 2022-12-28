
import { useEffect, useState } from "react";
import { MdOutlineDoneAll } from "react-icons/md";

const packages = () => {


    const [isLoading, setIsLoading] = useState(true)
    const [packagesData, setPackagesData] = useState(null)

    useEffect(() => {
        async function fetchDashboardData() {
            const res = await fetch('http://localhost:5000/packages')

            const data = await res.json()
            setPackagesData(data)
            setIsLoading(false)

        }
        fetchDashboardData()
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }

    console.log(packagesData);

    return (
        <div>
            <h1 className="text-center text-3xl font-bold">OUR HEALTH CARE PACKAGES</h1>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    packagesData?.map(pack => <div key={pack._id} className="overflow-hidden border my-5 rounded-lg shadow transition hover:shadow-lg">
                        <img
                            alt="Office"
                            src={pack?.packImg}
                            className="h-96 w-full object-cover"
                        />

                        <div className="max-w-md p-8 flex text-black">
                            <div className="flex-shrink-0 w-14 mb-6 mr-3 h-14 sm:h-16 sm:w-16 sm:mb-0">
                                <img src={pack?.icon} alt="" className="object-cover object-center w-full h-full rounded bg-gray-500" />
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div>
                                    <h2 className="text-2xl font-semibold">{pack?.packName}</h2>
                                    <div className="flex gap-1"><span className="text-sm text-gray-400">{pack?.trainingTime} Training</span>
                                        <span className="text-sm text-gray-400">{pack?.sessionTime} Session</span></div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-4 sm:p-6">
                            <h2 className="text-3xl font-semibold mb-6">Package Includes:</h2>
                            <p className="flex items-center gap-2 text-xl mt-2"><MdOutlineDoneAll className="text-green-600" />{pack?.feature1}</p>
                            <p className="flex items-center gap-2 text-xl mt-2"><MdOutlineDoneAll className="text-green-600" />{pack?.feature2}</p>
                            <p className="flex items-center gap-2 text-xl mt-2"><MdOutlineDoneAll className="text-green-600" />{pack?.feature3}</p>
                            <p className="flex items-center gap-2 text-xl mt-2"><MdOutlineDoneAll className="text-green-600" />{pack?.feature4}</p>
                            <p className="flex items-center gap-2 text-xl mt-2"><MdOutlineDoneAll className="text-green-600" />{pack?.feature5}</p>
                        </div>
                        <div className="flex gap-5 justify-center border py-5">
                            <button
                                className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-12 py-6 text-white focus:outline-none focus:ring active:bg-indigo-500"

                            >
                                <span
                                    className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </span>

                                <span className="text-sm font-medium transition-all group-hover:mr-4">
                                    MORE DETAILS
                                </span>
                            </button>
                            <button
                                className="group relative inline-flex items-center overflow-hidden rounded border border-current px-12 py-6 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"

                            >
                                <span
                                    className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </span>

                                <span className="text-sm font-medium transition-all group-hover:mr-4">
                                    JOIN NOW
                                </span>
                            </button>
                        </div>
                    </div>)

                }
            </div>
        </div>
    );
};

export default packages;