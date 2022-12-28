
const about = () => {


    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="image" loading="lazy" width="" height="" />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-4xl text-gray-900 font-bold mb-8 md:text-7xl">ABOUT Gymzilla GYM</h2>
                        <h2 className="text-xl text-green-600 font-bold md:text-2xl">Many workouts accomplish different goals at the same time. For example, a muscle building workout will almost always help build strength at the same time. Choose the goal that is MOST important to you, and the workouts that are shown will be geared more toward your chosen goal.</h2>
                        <p className="mt-6 text-gray-600 text-xl">A Split Bodypart Routine means that you work different body parts on different days. For example, one workout might have you work biceps and chest on one day, then triceps and back on a different day. This is the most common type of workout program.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default about;