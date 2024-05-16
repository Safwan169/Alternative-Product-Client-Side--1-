import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import Contex from './Contex';
import { signOut } from 'firebase/auth';
import Swal from 'sweetalert2';
import { auth } from './firebase/firebase.config';

const Nav = () => {
    // toggle theme
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        if (localTheme) {
            setTheme(localTheme);
            document.querySelector('html').setAttribute('data-theme', localTheme);
        }
    }, []);

    const handleToggle = (e) => {
        const newTheme = e.target.checked ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.querySelector('html').setAttribute('data-theme', newTheme);
    };





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

        <ul className="flex flex-col lg:flex-row gap-5 p-4  mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50  rtl:space-x-reverse    dark:bg-black dark:text-white  dark:border-gray-700">
            <li>
                <NavLink to={'/'} className={({ isActive }) =>
                    isActive ? 'text-blue-500 border-b-2 border-blue-600  py-3  transition duration-300 ease-in-out ' : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} >Home</NavLink>
            </li>
            <li>
                <NavLink to={'/queries'} className={({ isActive }) =>
                    isActive ? 'text-blue-500 border-b-2 border-blue-600  py-3  transition duration-300 ease-in-out ' : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}>Queries</NavLink>
            </li>
            {
                user ? <div className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
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


            <div className='static navbar bg-base-100 w-full lg:px-20'>
                <div className="navbar-start">

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow  rounded-box w-52">
                            {allNav}
                        </ul>
                    </div>
                    <a className="flex items-center text-xl"><img className="w-24 h-full" src="https://i.ibb.co/hVCrvJt/ts-removebg-preview.png" alt="" /> </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {allNav}
                    </ul>
                </div>
               
                <div className="navbar-end lg:flex md:flex     w-[120px] ml-4">
                    {
                        user ? <div onClick={() => setUse(!use)} className="  -ml-[50px] tooltip hover:tooltip-open tooltip-left z-30" data-tip={user.displayName ? user.displayName : "Not Available"}  ><img className="rounded-[50%] w-[50px] bg-white " src={user.photoURL} alt="" /></div> : <button onClick={() => setUse(!use)} className=" text-black justify-center  "><FaUserCircle size={40} className="hover:text-red-400" /></button>}
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
                <div className=" ml-4">


                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="toggleTheme"
                            checked={theme === 'dark'}
                            onChange={handleToggle}
                            className="hidden"
                        />
                        <label
                            htmlFor="toggleTheme"
                            className={`w-12 h-6 flex items-center pl-1 rounded-full cursor-pointer ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
                                }`}
                        >
                            <span className={`block w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ${theme === 'dark' ? 'translate-x-6' : ''}`}></span>
                        </label>
                    </div>


                </div>


            </div>



            {/* *************** */}




        </div>
    );
};

export default Nav;