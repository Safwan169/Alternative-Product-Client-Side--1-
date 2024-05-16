import React, { useEffect, useState } from 'react';
import Contex from './Contex';

const Recforme = () => {
    const { user,load } = Contex()

    const [Data,setData]=useState()
    // const [load,setLoad]=useState(false)
    useEffect(()=>{fetch('https://assinment-11-server-side-alpha.vercel.app/rec')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[load])

    const allData = Data?Data.filter(d => d.email === user.email):''
    return (
        <div className='mt-10 lg:w-[1200px] mx-auto'>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                {/* <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Our products
                <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
            </caption> */}
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Brand
                        </th>
                        <th scope="col" className="px-6  text-center py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 text-center py-3">
                            date
                        </th>
                        {/* <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th> */}
                    </tr>
                </thead>
                <tbody>
                    {allData?allData.map(d => <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 lg:w-11   py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {d.Recname}
                        </th>
                        <td className="px-6 lg:w-11 py-4">
                            {d.brandd_name}
                        </td>
                        <td className="px-6 text-center py-4 w-60">
                            {d.productt_title}
                        </td>
                        <td className="px-6  w-20 py-4">
                            {new Date(d.date).toLocaleString()}
                        </td>
                        {/* <td className="px-6  w-[30px]  py-4 text-right">
                            <a onClick={()=>handleSubmit((d.querieId),(d._id))} href="#" className="font-medium  w-min text-blue-600 dark:text-blue-500 hover:underline"><MdDelete size={25} />
                            </a>
                        </td> */}
                    </tr>):''}


                </tbody>
            </table>
        </div>
        {/* {
        allData.map(d => <MY datas={d}></MY>)
    } */}

    </div>
    );
};

export default Recforme;