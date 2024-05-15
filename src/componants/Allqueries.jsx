import React from 'react';
import { Link } from 'react-router-dom';

const Allqueries = ({datas}) => {
    const { _id,url, name, reason, product_title, email, image, date, brand_name, user_name,recommendationCount } = datas
    // const datee = new Date(date).toLocaleString()
    const datee=(new Date(date).toLocaleString())
// console.log(datas)
    return (
        <div className=' flex justify-center' >


            <div className="max-w-sm my-5   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg w-[400px] h-[300px]" src={`${url}`} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product_title}</h5>
                    </a>
                    <p className="mb-3 font-bold texts-xl text-blue-700 dark:bg-black dark:text-gray-400">{name}</p>
                    <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">Brand : {brand_name}</p>
                    <p className="mb-3 font-bold  h-10 text-red-500 dark:text-gray-400">Reason : {reason}</p>
                    <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">Post : {datee}</p>
                    <p className="mb-3 font-bold text-gray-700 flex items-center gap-10 dark:text-gray-400"><span><img className='w-16 rounded-xl h-16' src={image} alt="" /></span><span>{user_name}</span></p>
                    <p className='mb-3 font-bold text-gray-700  items-center dark:text-gray-400'>Recommendation-Count :<span className='font-bold text-green-500'> {recommendationCount}</span></p>
                    <Link to={`/details/${_id}`}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                       Recommended
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link >
                </div>
            </div>

        </div>
    );
};

export default Allqueries;