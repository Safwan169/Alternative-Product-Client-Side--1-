import React from 'react';
import Swal from 'sweetalert2';

const Add = () => {


    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e.target.options.value)
        const email = e.target.email.value;
        const name = e.target.name.value;
        const Country = e.target.Country.value;
        const spot = e.target.spot.value;
        const location = e.target.location.value;
        const visitors = e.target.visitors.value;
        const cost = e.target.cost.value;
        const time = e.target.time.value;
        const url = e.target.url.value;
        const options = e.target.options.value;
        const description = e.target.description.value;
        console.log(email, name, options, description)
        const user = { email, name, options, description, time, url, cost, visitors, location, spot, Country }
        // send data to the server
        fetch("http://localhost:5000/queries", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {

                    Swal.fire({
                        title: "Good job!",
                        text: "You have successfully added a spot",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 2000

                    });
                }

            })
    }
    return (
        <form onSubmit={handleSubmit} action="">
            <div className='mt-20  space-y-8 lg:w-[1200px] mx-auto'>
                <div className='flex gap-10 justify-center '>
                    <div className=' w-full'>
                        <label for="small-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                        <input name='product-name' type="text" id="small-input" placeholder='Product name' className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className='w-full'>
                        <label for="small-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand Name</label>
                        <input name='brand-name ' type="text" placeholder='Brand name' id="small-input" className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                </div>
                <div className='flex gap-10 justify-center '>
                    <div className=' w-full'>
                        <label for="small-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Query TItle </label>
                        <input name='Query TItle ' type="text" id="small-input" placeholder='Product name' className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>


                    <div className=' w-full'>
                        <label for="small-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Image</label>
                        <input name='url' type="text" id="small-input" placeholder='Product Image' className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                </div>
                <div className='flex gap-10 justify-center '>

                    <div className='w-full'>
                        <label for="small-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Boycotting Reason</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                    </div>
                </div>
            </div>
        </form>
    );
};

export default Add;