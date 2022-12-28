import { GiGymBag } from "react-icons/gi";
import { IoFastFoodSharp } from "react-icons/io5";
import { BsMusicPlayerFill } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";

const Instruments = () => {
    return (
        <div className="">
            <p className='text-right text-3xl font-semibold mb-10'>Instruments</p>
            <div className="flex flex-col lg:flex-row bg-gray-100 pt-10 px-3">
                <div className="max-w-xl pr-16 mx-auto mb-10">
                    <img src='https://images.unsplash.com/photo-1656565565158-b4e1ed1f9135?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' />
                </div>
                <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <GiGymBag className="text-4xl" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 text-3xl py-2">Gym Instruments</h6>
                        <p className="text-gray-700">
                        We are supplying all type of Gym instruments in very reasonable price. Please collect any Gym instruments as your need for your friends and family
                        </p>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <IoFastFoodSharp className="text-4xl" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 text-3xl py-2">Food Supplies</h6>
                        <p className="text-gray-700">
                        We have a very nice collection of hygienic food, juice and so on to supply by your demand. Your fitness demand foods are available for here.
                        </p>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <BsMusicPlayerFill className="text-4xl" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 text-3xl py-2">Music</h6>
                        <p className="text-gray-700">
                        We have collection of all the top listed English, Rock, Metal, Hindi, Bangla and other big collections of song as well as instrumentals.
                        </p>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <MdOutlineSecurity className="text-4xl" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 text-3xl py-2">A slice of heaven</h6>
                        <p className="text-gray-700">
                        Silver Gym provides Digital ID card and and finger print modern security system for you and for the safety of your goods you bring with you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instruments;