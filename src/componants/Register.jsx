import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaKey } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { auth } from './firebase/firebase.config';
import Contex from './Contex';
import { updateProfile } from 'firebase/auth';
// import { Helmet } from 'react-helmet-async';

const Register = () => {
    const [eye, setEye] = useState(false);
    const [ok, setOk] = useState()
    const [okk, setOkk] = useState()
  
    const {createUser,setDep,user}=Contex()

    const handleSubmit = (e) => {
        console.log(user)
        e.preventDefault()
        const email = (e.target.email.value)
        const password = (e.target.password.value)
        const Name = (e.target.name.value)
        const photoURL = (e.target.photoURL.value)
        setOkk('')
        setOk('')

        if (password.length < 6) {
          
            setOkk("Your password must be 6 letters")
            return
        }
        else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
          
            setOkk("Password must include both uppercase and lowercase letters")
           

            return
        }
        // console.log(ok)

        createUser(email, password, Name, photoURL)
            .then((userCredential) => {
                const user = userCredential.user;
                // toast.success('You have successfully registered')
                Swal.fire({
                    title: "Good job!",
                    text: "You have successfully registered",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000

                });
                e.target.reset();


                updateProfile(auth.currentUser, {
                    displayName: `${Name}`, photoURL: `${photoURL}`
                }).then((e) => {
                    // Profile updated!
                    setDep(true)


                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                    // setLoading(false)
                });

            })
            .catch((error) => {

                // toast.error('Email already in use', {
                //     position: 'top-center',
                //     style: {
                //         marginTop: '80px',
                //         marginLeft: '10px',

                //         border: '1px solid red',

                //     }
                // })

                setOk("Email already in use ")

            })


    }

    return (
        <div className='flex lg:flex-row md:flex-row flex-col gap-20 items-center mt-32  justify-center'>



            {/* <div className="hero min-h-screen "> */}
                 {/* <Helmet>
                <title>TSpluse || Register</title>
            </Helmet> */}



            {/* <div className="animate__animated animate__bounceInDown animate__delay-0.99s hero-content flex-col lg:flex-row-reverse">

                    <div className="card shrink-0 w-[500px] max-w-sm  bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <p className='lg:text-4xl  md:text-4xl text-2xl mb-5 pb-4  border-b border-black font-semibold  '>Create a Account</p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                {
                                    ok && <p className=' ml-3 text-red-500'>{ok}</p>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='flex'>
                                    <input type={eye ? 'text' : 'password'} name='password' placeholder="password" className="input w-full input-bordered" required /><div className='absolute mt-4 left-[325px]'>{eye ? <p onClick={() => setEye(!eye)}><FaEyeSlash /></p> : <p onClick={() => setEye(!eye)}><FaEye /></p>}</div>

                                </div>

                                {
                                    okk && <p className=' ml-2 text-red-500'>{okk}</p>
                                }
                                <label className="label">
                                    <span className="label-text">photoURL</span>
                                </label>
                                <input type="url" name='photoURL' placeholder="Your photoURL" className="input input-bordered" required />
                                <p className='mt-6 ml-3'>Already have an account?<Link className='ml-2 text-blue-500 underline font-semibold hover:text-blue-600' to={'/login'} >Sign In</Link ></p>

                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-primary">Register</button>

                            </div>


                            {/* <Toaster></Toaster> */}
            {/* </form>
                    </div> */}
            {/* </div> */}

            {/* </div> */}

            {/* ************** */}
            <img className='lg:w-[400px]' src="https://i.ibb.co/rd4dn0X/re.jpg" alt="" />

            <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={handleSubmit} class="space-y-6" action="#">
                    <h5 class="text-xl font-medium text-gray-900 dark:text-white">Register in to our platform</h5>

                    <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                    <div class="flex">
                        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </span>
                        <input name='name' type="text" id="website-admin" class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your name" />
                    </div>
                    <label for="input-group-1" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                            </svg>
                        </div>
                        <input name='email' type="email" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email" required />
                        {
                            ok && <p className=' ml-3 text-red-500'>{ok}</p>
                        }

                    </div>
                    <label for="input-group-1" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <FaKey className='text-gray-500' />
                        </div>
                        <input type={eye ? 'text' : 'password'} name='password' placeholder="Enter Your Password" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /><div data-aos="zoom-in" className='absolute mt-4  bottom-3 left-[260px] lg:left-[290px]'>{eye ? <p onClick={() => setEye(!eye)}><FaEyeSlash /></p> : <p onClick={() => setEye(!eye)}><FaEye /></p>}</div>
                    </div>
                    {
                        okk && <p className=' ml-2 text-red-500'>{okk}</p>
                    }
                    <div className="flex flex-col">
                        <label className="label mb-4">
                            <span className="label-text">photoURL</span>
                        </label>
                        <input type="url" name='photoURL' id='input-group-1' placeholder="Your photoURL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>

                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                    <p className='mt-6 ml-3'>Already have an account?<Link className='ml-2 text-blue-500 underline font-semibold hover:text-blue-600' to={'/login'} >Sign In</Link ></p>

                </form>
            </div>

        </div>
    );
};

export default Register;