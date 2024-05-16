import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Recent from './Recent';
import Compare from './Compare';
// import { Helmet } from 'react-helmet-async';

const Home = () => {
    const navigate = useNavigate()
    const btns = () => {
        navigate("/queries")
    }
    const data = useLoaderData()
    const [Data, setData] = useState()

    useEffect(() => {
        fetch('https://assinment-11-server-side-alpha.vercel.app/rec')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    // console.log(Data)
    // const pp = data[0].date
    // console.log(data)
    // const dateObject = new Date(pp).toLocaleString();






    // const sortedData = data.sort((a, b) => (b.date - a.date));

    const slicedData = data ? data.slice(0, 6) : '';
    // console.log(sortedData)
    // console.log(slicedData)




    const [com, setCom] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e)
        const yourproduct = e.target.Yourproductname.value;
        const recproduct = e.target.Recproductname.value;
        // console.log(yourproduct, recproduct)
        const uu = { yourproduct, recproduct }
        setCom(uu)
        // console.log(com)
    }



    return (

        <>
            {/* 
//         <Helmet>
//             <title>TSpluse || Home</title>
//         </Helmet> */}

            <Swiper
                spaceBetween={30}
                autoplay={{
                    delay: 3000,
                }}

                modules={[Autoplay]}
                className="mySwiper mt-20"
            >
                <SwiperSlide ><img className=' w-full bg-cover mt-10  h-svh lg:h-[600px]' src="https://i.ibb.co/C1TbC60/11.jpg" alt="" /></SwiperSlide>
                <SwiperSlide ><img className=' w-full bg-cover mt-10 h-svh lg:h-[600px]' src="https://i.ibb.co/pyt33vz/2.png" alt="" /></SwiperSlide>
                <SwiperSlide ><img className=' w-full bg-cover mt-10 h-svh lg:h-[600px]' src="https://i.ibb.co/tX399kj/3.png" alt="" /></SwiperSlide>
                <SwiperSlide ><img className=' w-full bg-cover mt-10 h-svh lg:h-[600px]' src="https://i.ibb.co/JsXVpGc/any-ideas-blackboard-businessman-suit-54219124-1.png" alt="" /></SwiperSlide>


            </Swiper>
            <div>


                <div className='relative'>
                    <p className='font-bold text-center text-3xl my-20'>Have Any Questions..?</p>
                    <img className='w-full' src="https://i.ibb.co/1zpp40s/banner.jpg" alt="" />
                    <div className='absolute space-y-3 text-indigo-800 lg:top-1/4 lg:left-[100px] lg:text-4xl top-[120px] left-[10px] font-bold '>
                        Explore our selection of <br /> alternative  health and  wellness products. <br />
                        <button onClick={() => btns()} className='btn border-0 mt-6  text-white font-bold bg-red-700'>All Queries</button>
                    </div>
                </div>
                <div className='font-bold  lg:text-3xl flex justify-center mt-20'>
                    Recent Queries
                </div>
                <div className="grid  lg:grid-cols-3 md:grid-cols-2  justify-center gap-4 w-full lg:w-[1200px] mx-auto my-10">

                    {
                        slicedData ? slicedData.map((d, id) => <Recent idx={id} datas={d}></Recent>) : ''
                    }
                </div>
                <div className='text-3xl font-bold text-center my-6'>
                    Compare From
                </div>
                <div className=' text-gray-500 font-semibold text-center'>
                    You can compare your Queries With Recommended Queries with Product name
                </div>
                <div>
                    <div className='flex border border-gray-300 rounded-xl my-6 p-6 lg:mx-auto mx-2 lg:w-[1000px] justify-center'>
                        {/* <form  onSubmit={compare}>

                            <div>
                                <div className=' w-full'>
                                    <label for="small-input" className="  block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Product Name</label>
                                    <input required name='Yourproductname' type="text" id="small-input" placeholder='Your Product name' className=" block lg:w-[600px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div className=' w-full'>
                                    <label for="small-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recommended Product Name</label>
                                    <input required name='Recproductname' type="text" id="small-input" placeholder='Recommended Product name' className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <button type="button" class="text-white btn bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Compare</button>
                            </div>
                        </form> */}

                        <form onSubmit={handleSubmit} action="">
                            <div className='space-y-5'>
                                <div className='space-y-5'>
                                    <div className=' w-full'>
                                        <label for="small-input" className="  block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Product Name</label>
                                        <input required name='Yourproductname' type="text" id="small-input" placeholder='Your Product name' className=" block lg:w-[600px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <div className=' w-full'>
                                        <label for="small-input" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recommended Product Name</label>
                                        <input required name='Recproductname' type="text" id="small-input" placeholder='Recommended Product name' className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                </div>


                                <button className='btn bg-blue-500 text-white font-bold w-full rounded-xl p-3  '>Add Queries</button>
                            </div>
                        </form>
                    </div>
                </div>


                <div className='border mt-10 mx-auto lg:w-[1000px] rounded-xl p-6 border-gray-300'>
                    <div className=' text-30 mb-6 lg:text-4xl text-center font-bold'>
                        Here Your Comparison
                    </div>

                    <Compare datas={data} Data={Data} Com={com} ></Compare>

                </div>
            </div>

        </>

    );
};

export default Home;