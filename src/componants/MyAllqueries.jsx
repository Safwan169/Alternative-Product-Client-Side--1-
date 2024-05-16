import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Contex from './Contex';
// import { Helmet } from 'react-helmet-async';


const MyAllqueries = ({ datas }) => {
    const { _id, url, name, reason, product_title, email, image, date, brand_name, user_name, recommendationCount } = datas
    const datee = new Date(date).toLocaleString()
    // console.log(datas)
    const {load,setLoad}=Contex()
    const navigate=useNavigate()
    const handleUpdate = id => {
        navigate(`/update/${id}`)
    }

    const handleDelet = id => {


        // const userr={}
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
        fetch(`https://assinment-11-server-side-alpha.vercel.app/queries/${id}`,
            {
                method: 'delete',
                headers: {
                    'content-type': 'application/json'
                },
                // body: JSON.stringify(userr)
            }
        )
            .then(res => res.json())
            .then(data=>{
                setLoad(!load)
                        // console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                              'Deleted!',
                              'Your Queries has been deleted.',
                              'success'
                            )
                }})
    }})}
    return (
        <div >

            {/* <Helmet>
                <title>
                    TSpluse || MY Queries
                </title>
            </Helmet> */}
            <div className="max-w-sm my-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg w-[400px] h-[300px]" src={`${url}`} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product_title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{name}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Brand : {brand_name}</p>
                    <p className="mb-3 font-normal h-10 text-gray-700 dark:text-gray-400">Reason : {reason}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Post : {datee}</p>
                    <p className='mb-3 font-normal text-gray-700  items-center dark:text-gray-400'>Recommendation-Count :{recommendationCount}</p>
                    <p className=" font-normal text-gray-700 flex items-center gap-10 dark:text-gray-400 my-5"><span onClick={() => handleUpdate(_id)} className='btn bg-green-400 p-3 text-white  rounded-xl'>Update</span><span onClick={() => handleDelet(_id)} className='btn bg-red-500 text-white p-3' >Delete</span></p>

                    <Link to={`/details/${_id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        View Details
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link >
                </div>
            </div>

        </div>
    );
};

export default MyAllqueries;