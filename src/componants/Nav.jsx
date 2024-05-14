import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import Contex from './Contex';
import { signOut } from 'firebase/auth';
import Swal from 'sweetalert2';
import { auth } from './firebase/firebase.config';

const Nav = () => {
    const { user, dep2, setDep2 } = Contex()
    const [use, setUse] = useState(false)
    const [min, setMin] = useState(true);
    const toggle = () => {
        setMin(!min)
    }
    const signOutt = () => {

        signOut(auth)
            .then(() => {


                Swal.fire({
                    title: "You have been successfully logged out",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000

                });
                setDep2(!dep2)


            })
    }

    const allNav = <>

        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
                <NavLink to={'/'} className={({ isActive }) =>
                    isActive ? 'text-blue-500 border-b-2 border-blue-600  py-3  transition duration-300 ease-in-out ' : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} >Home</NavLink>
            </li>
            <li>
                <NavLink to={'/queries'} className={({ isActive }) =>
                    isActive ? 'text-blue-500 border-b-2 border-blue-600  py-3  transition duration-300 ease-in-out ' : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}>Queries</NavLink>
            </li>
            {
                user ? <div  className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                    <li>
                        <NavLink to={'/rec-for-me'} className={({ isActive }) =>
                            isActive ? 'text-blue-500 border-b-2 border-blue-600  py-3  transition duration-300 ease-in-out ' : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} >Recommendations For me</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/myqueries'} className={({ isActive }) =>
                            isActive ? 'text-blue-500 border-b-2 border-blue-600  py-3  transition duration-300 ease-in-out ' : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}>My Queries</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/my-rec'} className={({ isActive }) =>
                            isActive ? 'text-blue-500 border-b-2 border-blue-600  py-3  transition duration-300 ease-in-out ' : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}>My recommendations</NavLink>
                    </li>
                </div> : ""
            }

        </ul>

    </>





    return (
        <div>

            <nav className="bg-white items-center border  dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl    flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        {/* website logo */}
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"> */}
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 border items-center   md:space-x-0 rtl:space-x-reverse">
                        <div className="navbar-end lg:flex md:flex  items-center  text-center  justify-end  lg:w-[120px] ml-4">
                            {
                                user ? <div onClick={() => setUse(!use)} className=" h-full -ml-[50px] tooltip hover:tooltip-open tooltip-left z-30" data-tip={user.displayName ? user.displayName : "Not Available"}  ><img className="rounded-[50%] w-[30px]   lg:w-[50px] bg-white " src={user.photoURL} alt="" /></div> : <button onClick={() => setUse(!use)} className=" text-black justify-center  "><FaUserCircle size={40} className="hover:text-red-400" /></button>}
                            {
                                use ? <div className="absolute border-2 z-50 bg-gray-400 text-white space-y-2 border-gray-300 rounded-xl py-2 top-16  right-9 px-10 mt-4  font-semibold">
                                    {
                                        user ? <Link className="hover:underline" onClick={() => signOutt()}>Sign Out</Link > : <div className="flex flex-col space-y-2">
                                            <Link className="hover:underline" to={"/login"}>Sign In</Link >
                                            <Link className="hover:underline" to={"/register"} >Register</Link >
                                        </div>
                                    }
                                </div> : ''
                            }

                        </div>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">
                                {allNav}


                            </span>
                            <svg onClick={() => toggle()} className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between ${min ? 'hidden' : 'visible'}  w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">


                        {allNav}

                    </div>
                </div>
            </nav>


        </div>
    );
};

export default Nav;