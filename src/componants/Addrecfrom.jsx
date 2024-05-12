import React, { useState } from 'react';
import Contex from './Contex';

const Addrecfrom = () => {



    const { user } = Contex()
    const [datee, setDate] = useState();
    const handleSubmit = (e) => {
        e.preventDefault()
        setDate(Date.now())
        const date = datee
// console.log(datee)
        const email = user.email;
        const user_name = user.displayName;
        const image = user.photoURL;

        const Recname=e.target.recName.value;
        // const namee = e.target.productt_namee.value;
   
        // const productt_title = e.target.productt_title.value;
       
        // const urll = e.target.urll.value;
        // const brandd_name = e.target.brandd_name.value;
        // const reasonn = e.target.reasonn.value;
        // console.log(product_title,brand_name,email,name,url,reason)
        // console.log(email, name, user_name, image, title, url, brand, reason)
        // const userr = {_id,user_name,image,date, email, namee, brandd_name, reasonn, urll,productt_title }
        // send data to the server
       
console.log(ID,Recname)
            // update recommendation
        fetch(`http://localhost:5000/recc/${ID}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userr)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                // fetch(`http://localhost:5000/rec`, {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(userr)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log(data);
                //         if (data.insertedId) {
        
                //             Swal.fire({
                //                 title: "Good job!",
                //                 text: "You have successfully added",
                //                 icon: "success",
                //                 showConfirmButton: false,
                //                 timer: 2000
        
                //             });
                //             e.target.reset()
                //         }
        
                    // })



                // if (data.insertedId) {

                //     Swal.fire({
                //         title: "Good job!",
                //         text: "You have successfully added",
                //         icon: "success",
                //         showConfirmButton: false,
                //         timer: 2000

                //     });
                //     // e.target.reset()
                // }

            })
    }
    return (
        <div>
            <div className='flex justify-center  w-full'>
                <p className=' font-bold text-3xl border-b border-black pb-2 w-max text-center'>Add A Recommendation</p>

            </div>
            <form onSubmit={handleSubmit} action="">
                <div className='mt-20  space-y-8 lg:w-[1000px] mx-auto'>

                    <div className='flex gap-10 justify-center '>
                        {/* product name */}
                        <div className=' w-full'>
                            <label for="small-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recommendation Product Name</label>
                            <input required name='recName' type="text" id="small-input" placeholder='Recommendation Product name' className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        {/* brand */}
                        <div className='w-full'>
                            <label for="small-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recommendation Brand Name</label>
                            <input required name='recBrand' type="text" placeholder='Recommendation Brand name' id="small-input" className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                    </div>

                    <div className='flex gap-10 justify-center '>
                        {/* title */}
                        <div className=' w-full'>
                            <label for="small-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recommendation TItle </label>
                            <input required name='recTitle' type="text" id="small-input" placeholder='Recommendation Product Title' className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>

                        {/* url */}
                        <div className=' w-full'>
                            <label for="small-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recommendation Product Image</label>
                            <input required name='recUrl' type="text" id="small-input" placeholder='Recommendation Product Image' className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                    </div>
                    <div className='flex gap-10 justify-center '>
                        {/* reason */}
                        <div className='w-full'>
                            <label for="small-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Recommendation Reason</label>
                            <textarea required name='recReason' id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                        </div>
                    </div>
                    <button className='btn bg-blue-500 text-white font-bold w-full rounded-xl p-3  '>Add Recommendation</button>
                </div>
            </form>
        </div>
    );
};

export default Addrecfrom;