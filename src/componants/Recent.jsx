import React from 'react';
import 'animate.css'
import { IoTimeOutline } from 'react-icons/io5';
import { CiLocationOn } from 'react-icons/ci';
const Recent = ({ datas }) => {
    console.log(datas)
    const { url, name, reason, product_title, email, image, date, brand_name, user_name } = datas
    const datee = new Date(date).toLocaleString()
    return (
        <div>


            <div className="max-w-sm my-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg w-[400px] h-[300px]" src={`${url}`} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product_title}</h5>
                    </a>
                    <p className="mb-3 text-xl  text-blue-700 font-semibold dark:text-gray-400">{name}</p>
                    <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">Brand : {brand_name}</p>
                    <p className="mb-3 font-semibold h-10 text-red-400 dark:text-gray-400">Reason : {reason}</p>
                    <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">Post : {datee}</p>
                    <p className="mb-3 font-semibold text-gray-700 flex items-center gap-5 dark:text-gray-400"><span><img className='w-12 rounded-2xl h-12' src={image} alt="" /></span><span className='font-bold'>{user_name}</span></p>
                    {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a> */}
                </div>
            </div>

        </div>
    );
};

export default Recent;