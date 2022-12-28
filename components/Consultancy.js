
const Consultancy = () => {
    return (
        <div className="bg-[#BAD7E9] pl-10 py-5">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                    <img className="h-14" src="https://i.ibb.co/kyGkSrs/Screenshot-1-removebg-preview.png" />
                    </div>
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        Consultancy
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                        Please drop your question our expert you give you the answer .Do not worry your Question will be hidden and safe.
                        </p>
                    </div>
                    <div>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                            <svg
                                className="inline-block w-3 ml-2"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                            >
                                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center -mx-4 lg:pl-8">
                    <div className="flex flex-col items-end px-3">
                        <img
                            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                            src="https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt=""
                        />
                        <img
                            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                            src="https://images.unsplash.com/photo-1532384555668-bc0c32a17ffd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt=""
                        />
                    </div>
                    <div className="px-3">
                        <img
                            className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                            src="https://images.unsplash.com/photo-1548932813-88dcf75599c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Consultancy;