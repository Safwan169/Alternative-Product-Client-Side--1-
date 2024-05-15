import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Contex from './Contex';
import Swal from 'sweetalert2';
import RecComment from './RecComment';

const Details = () => {
    const dataId = useParams()
    const ID = dataId.id
    const [datada, setDataa] = useState()
    const [load, setLoad] = useState(false)
    // console.log(ID)
    // const data = useLoaderData()
    // console.log(data)
const [rec,setRec]=useState()
    useEffect(()=>{fetch('')
        .then(res=>res.json())
        .then(data=>setRec(data))
    })
    // recommendation data filter by id
    const Rec=rec?.filter(d=>d.querieId==ID)
    console.log(Rec)
    useEffect(() => {
        fetch('https://assinment-11-server-side-alpha.vercel.app/queries')
        .then(res => res.json())
        .then(data => setDataa(data))
    }, [load])
    // console.log(datada)
    const allData = datada?datada.find(d => d._id == ID):''
    // console.log(allData._id)
    // const {_id}=allData
    // console.log(_id)

    const { _id, url, name, reason, product_title, email, image, date, brand_name, user_name, recommendationCount } = allData
    const dateee = new Date(date).toLocaleString()


    const { user } = Contex()
    // const [dd, setDate] = useState();
    const handleSubmit = (e) => {
        e.preventDefault()
        // setDate(Date.now())
        const date = Date.now()
        // console.log(dat)
        const user_email = user.email;
        const user_name1 = user.displayName;
        const image1 = user.photoURL;

        const Recname = e.target.recName.value;
        // const namee = e.target.productt_namee.value;

        const productt_title = e.target.recTitle.value;

        const urll = e.target.recUrl.value;
        const brandd_name = e.target.recBrand.value;
        const reasonn = e.target.recReason.value;
        // console.log(product_title,brand_name,email,name,url,reason)
        // console.log(email, name, user_name, image, title, url, brand, reason)
        const querieId=_id
        const userr = { querieId,email,user_name,image, user_name1, image1, date, user_email, Recname, brandd_name, reasonn, urll, productt_title }
        // send data to the server

        // console.log(ID,Recname)
        // update recommendation
        fetch(`https://assinment-11-server-side-alpha.vercel.app/recc/${ID}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userr)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setLoad(!load)

                fetch(`https://assinment-11-server-side-alpha.vercel.app/rec`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userr)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
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
        <div className='mt-40 lg:w-[1200px] mx-auto'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='rounded-3xl my-2 w-[400px] bg-cover h-[400px]' src={url} alt="" /></figure>
                <div className="card-body">
                    <h2 className="font-bold text-blue-500 text-xl card-title">{product_title}</h2>
                    <p className='font-bold'>Product Name : {name}</p>
                    <p className='font-bold'>Brand :{brand_name}</p>
                    <p className='font-bold text-red-500'> Alternation Reason : {reason}</p>
                    <p className='font-bold'>Post :{dateee}</p>
                    <p className='font-bold'>Recommendation Count : {recommendationCount}</p>
                    <p  className="mt-3 font-bold text-gray-700 flex items-center gap-5 dark:text-gray-400">Created By :<span><img className='w-12 rounded-xl h-12' src={image} alt="" /></span><span>{user_name}</span></p>

                </div>
            </div>
            

            <div>
                  {
                    Rec?.map(d=><RecComment datas={d}></RecComment>)
                  }

            </div>


            {/* add recommendation form */}
            <div className=' mt-20'>
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
        </div>
    );
};

export default Details;