import { TfiUser } from "react-icons/tfi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const contact = () => {




    return (
        <section className='section bg-gray-200 py-10 md:py-[200px] text-black' id='contact'>
            <div className="">
                <h2 className="text-center text-5xl md:text-7xl text-black font-semibold">Contact me</h2>
                <p className='text-black mb-5 md:mb-20 font-semibold text-3xl mt-3 text-center'><span className='text-[#DC143C]'>|</span> Get in Touch <span className='text-[#DC143C]'>|</span></p>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className='flex justify-end'>
                        <div className=" m-2 md:w-1/2 ">
                            <h1 className='text-black text-4xl mb-10 font-bold'>Get in Touch</h1>
                            <p className='mb-10 text-black text-xl font-semibold'>We have found the best workouts from around the world and put them in one database that you can search by days per week, type of program, and much more!.</p>
                            <div className="flex gap-4">
                                <TfiUser className='text-5xl md:text-6xl text-[#DC143C]' />
                                <div className="font-semibold text-md md:text-2xl mb-10">
                                    <div className="head">Name</div>
                                    <div className="sub-title">Rs Ruhul</div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <FaMapMarkerAlt className='text-5xl md:text-6xl text-[#DC143C]' />
                                <div className="font-semibold text-md md:text-2xl mb-10">
                                    <div className="head">Address</div>
                                    <div className="sub-title">Dhaka, Bangladesh</div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <MdEmail className='text-5xl md:text-6xl text-[#DC143C]' />
                                <div className="font-semibold text-md md:text-2xl mb-10">
                                    <div className="head">Email</div>
                                    <div className="sub-title">rshridoysr@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex  justify-start">
                        <div className='m-2 md:w-3/5'>
                            <h1 className="text-black text-4xl font-bold mb-10">Message me</h1>
                            <form>

                                <input id="name" name='name' type="text" className='border-black border-2 rounded my-2 py-2 text-2xl pl-2 w-full' placeholder="Name" required />

                                <input id="email" name='email' type="email" className='border-black border-2 rounded my-2 py-2 text-2xl pl-2 w-full' placeholder="Email" required />

                                <input id="subject" type="text" name='subject' className='border-black border-2 rounded my-2 py-2 text-2xl pl-2 w-full' placeholder="Subject" required />

                                <textarea id="message" cols="30" name='message' className='border-black border-2 rounded my-2 py-2 text-2xl pl-2 w-full' rows="5" placeholder="Message.." required></textarea>

                                <button type='submit' className='btn btn-md bg-[#DC143C] hover:bg-transparent hover:text-[#DC143C] hover:border-2 hover:border-[#DC143C] md:btn-lg transition-all'>
                                    Send Message
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default contact;