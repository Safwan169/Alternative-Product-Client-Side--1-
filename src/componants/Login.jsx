import React, { useState } from 'react';
// import { myContext } from './All';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import 'animate.css'
// import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { GithubAuthProvider} from "firebase/auth";

import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
// import { myContext } from './Authentication';
// import { auth } from '../Firebase/firebase.config';
import Swal from 'sweetalert2';
import Contex from './Contex';
import swal from 'sweetalert';
import { FaKey } from 'react-icons/fa';
import { auth } from './firebase/firebase.config';
// import { Helmet } from 'react-helmet-async';

const Login = () => {






    const navigate = useNavigate()
    const [eye, setEye] = useState(false)
    const [ok, setOk] = useState([])
    const [okk, setOkk] = useState()
    // const info = useContext(myContext)
    const { signInUser } = Contex()
    const google = () => {
        const provider = new GoogleAuthProvider();

        // google(provider)
        signInWithPopup(auth, provider)
            .then(() => {
                navigate('/')
                Swal.fire({
                    title: "Good job!",
                    text: "You have successfully Sign In",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000

                });

            })
            .catch((error) => {
                // console.log(error.message)
            })
        // console.log(google)
    }

    const git = () => {
        const provider = new GithubAuthProvider();

        signInWithPopup(auth, provider)
            .then(() => {
                navigate('/')
                // toast.success('You have successfully Sign In', {
                //     position: 'top-center',
                //     style: {
                //         marginTop: '80px',
                //         marginLeft: '10px',

                //         border: '1px solid green',

                //     }
                // })
                swal.fire({
                    title: "Good job!",
                    text: "You have successfully Sign In",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000

                });

            })
            .catch((error) => {
                // console.log(error.massage)
            })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('hoida')
        const email = (e.target.email.value)
        const password = (e.target.password.value)
        setOkk('')
        setOk('')
        // console.log(email, password)

        signInUser(email, password)
            .then((userCredential) => {
                // const user = userCredential.user;
                // toast.success('You have successfully registered')
                navigate('/')


            })
            .catch((error) => {
                // toast.error('Incorrect email or password',{
                //     position:'top-center',
                //     style:{
                //         marginTop:'80px',
                //     marginLeft:'10px',

                //     border:'1px solid red',

                // }})
                setOk('Incorrect email or password')
                // toast.error('Incorrect email or password')

                // console.log('fasdfjhsda')

            })
    }
    return (

        <div className='flex gap-20 justify-center my-20 items-center'>
            {/* <Helmet>
                <title>TSpluse || Log In</title>
            </Helmet> */}
        


            {/* ******** */}
            <img className=' w-[400px] mr-10' src="https://i.ibb.co/S35ZBH6/saf.jpg" alt="" />

            <div className="w-full text-center max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={handleSubmit} className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                    <div className='flex-col items-center flex gap-5'>
                        <button onClick={() => google()} type="button" className="btn gap-5 border border-gray-300 rounded-xl p-2 w-full  justify-center items-center flex bg-gray-5">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 48 48" enablebackground="new 0 0 48 48" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657        C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36        c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                <path
                                    fill="#1976D2"
                                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
                                         c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                ></path>
                            </svg>
                            <span>Sign in with google</span>
                        </button>

                        <button onClick={() => git()} type="button" className="btn p-2 border-gray-300 rounded-xl  w-full  justify-center border items-center flex gap-5 bg-gray-5">
                            <svg width="21" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                <path
                                    fill="currentColor"
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                ></path>
                            </svg>

                            <span>Sign in with github</span>
                        </button>

                    </div>

                    <div className=" my-6 text-xs  text-center text-gray-500">or continue with</div>




                    <label for="input-group-1" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                            </svg>
                        </div>
                        <input name='email' type="email" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email" required/>
                    </div>
                    <label for="input-group-1" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <FaKey className='text-gray-500' />
                        </div>
                        <input  type={eye ? 'text' : 'password'} name='password' placeholder="Enter Your Password" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /><div data-aos="zoom-in" className='absolute mt-4  bottom-3 left-[290px]'>{eye ? <p onClick={() => setEye(!eye)}><FaEyeSlash /></p> : <p onClick={() => setEye(!eye)}><FaEye /></p>}</div>
                    </div>

                    {
                        ok && <p className=' ml-2 text-left text-red-500'>{ok}</p>
                    }

                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500"><Link to={"/register"}>Create account</Link></a>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default Login;