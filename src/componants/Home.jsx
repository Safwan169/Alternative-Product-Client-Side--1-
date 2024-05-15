import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Recent from './Recent';
const Home = () => {
    const navigate=useNavigate()
const btn=()=>{
 navigate("/queries")
}
    const data = useLoaderData()
    const [Data,setData]=useState()

//     useEffect(()=>{fetch('https://assinment-11-server-side-alpha.vercel.app/queries')
//         .then(res=>res.json())
//         .then(data=>setData(data))
//     },[])
// console.log(Data)
    // const pp = data[0].date
console.log(data)
    // const dateObject = new Date(pp).toLocaleString();



    


    // const sortedData = data.sort((a, b) => (b.date - a.date));

    const slicedData = data?data.slice(0, 6):'';
    // console.log(sortedData)
    // console.log(slicedData)










    return (

        <>

//         {/* <Helmet>
//             <title>Brite || Home</title>
//         </Helmet> */}

            <Swiper
                spaceBetween={30}
                autoplay={{
                    delay: 3000,
                }}

                modules={[Autoplay]}
                className="mySwiper"
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
                    <div className='absolute space-y-3 text-indigo-800 top-1/4 left-[100px] text-4xl font-bold '>
                    Explore our selection of <br /> alternative  health and  wellness products. <br />
                    <button onClick={btn()} className='btn border-0 mt-6 text-white font-bold bg-red-700'>All Queries</button>
                    </div>
                </div>
                <div className='font-bold text-3xl flex justify-center mt-20'>
                    Recent Queries
                </div>
                <div className="lg:grid  lg:grid-cols-3 justify-center gap-4 w-full lg:w-[1200px] mx-auto my-10">

                    {
                        slicedData?slicedData.map((d, id) => <Recent idx={id} datas={d}></Recent>):''
                    }
                </div>
            </div>
//
        </>

    );
};

export default Home;