import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Contex from './Contex';
import { Typewriter } from 'react-simple-typewriter';

const Add = () => {
    const { user, load, setLoad } = Contex()
    const [datee, setDate] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        setDate(Date.now())
        const date = (new Date(datee))
        console.log(datee)
        console.log(new Date(datee))
        const recommendationCount = 0
        const email = user.email;
        const user_name = user.displayName;
        const image = user.photoURL;

        const name = e.target.productname.value;
        // const Country = e.target.Country.value;
        // const spot = e.target.spot.value;
        // const location = e.target.location.value;
        const product_title = e.target.product_title.value;
        // const cost = e.target.cost.value;
        // const time = e.target.time.value;
        const url = e.target.url.value;
        const brand_name = e.target.brand_name.value;
        const reason = e.target.reason.value;
        // console.log(product_title,brand_name,email,name,url,reason)
        // console.log(email, name, user_name, image, title, url, brand, reason)
        const userr = { user_name, image, date, email, name, brand_name, reason, url, product_title, recommendationCount }
        // send data to the server
        fetch("http://localhost:5000/queries", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userr)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setLoad(!load)
                if (data.insertedId) {

                    Swal.fire({
                        title: "Good job!",
                        text: "You have successfully added",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 2000

                    });
                    e.target.reset()
                }

            })
    }
    return (
        <div className='mt-12'>
            <div className='text-3xl text-center '>
                <h1 style={{ paddingTop: '5rem', margin: ' 0', fontWeight: 'normal' }}>
                    Add  {' '}
                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Queries']}
                            loop={50}
                            cursor
                            cursorStyle='_'
                            typeSpeed={180}
                            deleteSpeed={150}
                            delaySpeed={1000}
                        // onLoopDone={handleDone}
                        // onType={handleType}
                        />
                    </span>
                </h1>
            </div>
            <form onSubmit={handleSubmit} action="">
                <div className='mt-20  space-y-8 lg:w-[1200px] mx-auto'>
                    <div className='flex gap-10 justify-center '>
                        {/* product name */}
                        <div className=' w-full'>
                            <label for="small-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                            <input required name='productname' type="text" id="small-input" placeholder='Product name' className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        {/* brand */}
                        <div className='w-full'>
                            <label for="small-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand Name</label>
                            <input required name='brand_name' type="text" placeholder='Brand name' id="small-input" className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                    </div>

                    <div className='flex gap-10 justify-center '>
                        {/* title */}
                        <div className=' w-full'>
                            <label for="small-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Query TItle </label>
                            <input required name='product_title' type="text" id="small-input" placeholder='Product name' className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>

                        {/* url */}
                        <div className=' w-full'>
                            <label for="small-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Image</label>
                            <input required name='url' type="text" id="small-input" placeholder='Product Image' className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                    </div>
                    <div className='flex gap-10 justify-center '>
                        {/* reason */}
                        <div className='w-full'>
                            <label for="small-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Boycotting Reason</label>
                            <textarea required name='reason' id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                        </div>
                    </div>
                    <button className='btn bg-blue-500 text-white font-bold w-full rounded-xl p-3  '>Add Queries</button>
                </div>
            </form>
        </div>
    );
};

export default Add;