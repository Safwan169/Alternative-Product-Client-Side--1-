import React from 'react';

const Add = () => {
    return (
        <div className='mt-20  space-y-8 lg:w-[1200px] mx-auto'>
            <div className='flex gap-10 justify-center '>
                <div className=' w-full'>
                    <label for="small-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                    <input name='product-name' type="text" id="small-input" placeholder='Product name' className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className='w-full'>
                    <label for="small-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand Name</label>
                    <input name='brand-name ' type="text"  placeholder='Brand name' id="small-input" className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
            </div>
            <div className='flex gap-10 justify-center '>
                <div className=' w-full'>
                    <label for="small-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                    <input name='product-name' type="text" id="small-input" placeholder='Product name' className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className='w-full'>
                    <label for="small-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand Name</label>
                    <input name='brand-name ' type="text"  placeholder='Brand name' id="small-input" className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
            </div>
            <div className='flex gap-10 justify-center '>
                <div className=' w-full'>
                    <label for="small-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Image</label>
                    <input name='url' type="text" id="small-input" placeholder='Product Image' className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className='w-full'>
                    <label for="small-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand Name</label>
                    <input name='brand-name ' type="text"  placeholder='Brand name' id="small-input" className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
            </div>
        </div>
    );
};

export default Add;