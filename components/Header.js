import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import Logo from '../assets/logo.png'
import { AuthContext } from "../context/AuthProvider";
import { MdOutlineDashboard } from "react-icons/md";

const Header = () => {

    const { user, logout } = useContext(AuthContext);

console.log(user);

    return (
        <div className="navbar bg-violet-400">
            <div className="navbar-start">
                <div className="dropdown md:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/about'>About</Link></li>
                        <li><Link href='/packages'>Packages</Link></li>
                        <li><Link href='/blog'>Blog</Link></li>
                        <li><Link href='/gallery'>Gallery</Link></li>
                        <li><Link href='/shop'>Shop</Link></li>
                        <li><Link href='/events'>Events</Link></li>
                        <li><Link href='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <Link href='/' className="hidden md:block">
                    <div className="flex items-center">
                        <Image className="h-14 w-14" src={Logo} alt='' />
                        <h1 className="text-3xl font-bold uppercase">Gymzilla</h1>
                    </div>
                </Link>

            </div>
            <div className="navbar-center md:block hidden">
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-xl font-semibold">
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/about'>About</Link></li>
                        <li><Link href='/packages'>Packages</Link></li>
                        <li><Link href='/blog'>Blog</Link></li>
                        <li><Link href='/gallery'>Gallery</Link></li>
                        <li><Link href='/shop'>Shop</Link></li>
                        <li><Link href='/events'>Events</Link></li>
                        <li><Link href='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </div>
            {
                user?.email ?
                    <div className="navbar-end">
                        <Link href='/dashboard' className="btn btn-ghost btn-circle mr-3">
                            <div>
                                <MdOutlineDashboard className="text-3xl"/>
                            </div>
                        </Link>

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <p>{user?.displayName}</p>
                                </li>
                                <li>
                                    <p>{user?.email}</p>
                                </li>
                                <li>
                                    <button onClick={logout}>Logout</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    :
                    <div className="navbar-end">
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                <span className="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </button>

                        <div className="dropdown dropdown-end">
                            <Link href='/login' className="btn btn-ghost text-xl font-semibold">Login</Link>
                        </div>
                    </div>




            }
        </div>
    );
};

export default Header;