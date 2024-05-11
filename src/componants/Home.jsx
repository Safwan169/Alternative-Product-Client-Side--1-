import React from 'react';

const Home = () => {

    // const data = useLoaderData()
    // // console.log(data)

    // const slicedData = data.slice(0, 6);
    // // console.log(data)
    return (
        <div></div>
//         <>

//         {/* <Helmet>
//             <title>Brite || Home</title>
//         </Helmet> */}

//         <Swiper
//             spaceBetween={30}
//             centeredSlides={true}
//             autoplay={{
//                 delay: 3000,
//                 disableOnInteraction: false,
//             }}
//             pagination={{
//                 clickable: true,
//             }}
//             navigation={true}
//             modules={[Autoplay, Pagination, Navigation]}
//             className="mySwiper"
//         >
//             <SwiperSlide ><img className=' w-full bg-cover h-svh lg:h-[650px]' src={data[0].url} alt="" /></SwiperSlide>
//             <SwiperSlide ><img className=' w-full bg-cover h-svh lg:h-[650px]' src={data[1].url} alt="" /></SwiperSlide>
//             <SwiperSlide ><img className=' w-full bg-cover h-svh lg:h-[650px]' src={data[2].url} alt="" /></SwiperSlide>
//             <SwiperSlide ><img className=' w-full bg-cover h-svh lg:h-[650px]' src={data[3].url} alt="" /></SwiperSlide>
//             <SwiperSlide ><img className=' w-full bg-cover h-svh lg:h-[650px]' src={data[4].url} alt="" /></SwiperSlide>
//             <SwiperSlide ><img className=' w-full bg-cover h-svh lg:h-[650px]' src={data[5].url} alt="" /></SwiperSlide>

//         </Swiper>
//         <div className='text-center text-4xl font-semibold my-20  flex justify-center '>
//             <span className='border-b-2 px-6 italic  pb-4 w-max'>Tourists Spots</span>
//         </div>
//         <div className="lg:grid  lg:grid-cols-3 justify-center gap-4 w-full lg:w-[1200px] mx-auto my-10">

//             {/* {
//                 slicedData.map((d, id) => <Card idx={id} data={d}></Card>)
//             } */}
//         </div>
//         <div className='text-center text-4xl font-semibold my-20  flex justify-center '>
//             <span className='border-b-2 px-6 italic  pb-4 w-max'>Countries</span>
//         </div>
//         <div className="lg:grid  lg:grid-cols-3 justify-center gap-4 w-full lg:w-[1200px] mx-auto my-10">
// {/* 
//             {
//                 slicedData.map((d, id) => <Countrycard idx={id} datas={d}></Countrycard>)
//             } */}
//         </div>

//         <div className='  lg:ml-20 text-4xl border-b-2 pb-4 px-4 border-blue-300 w-max font-semibold mb-2  mt-28  '>
//             <span className=' mb-4 pb-4 '>Question From
//             </span>
//             <p className=' font-light text-xs lg:text-xl italic'>Here you can ask any Question in our system related
//             </p>
//         </div>
//         <div className=" w-full lg:w-[1200px] mx-auto my-2">

//             <div>
//                 <div className="hero   ">
//                     <div className="hero-content flex-col lg:flex-row-reverse">

//                         <div className="card  shrink-0 lg:w-[600px] ">
//                             <form className="card-body">
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text text-xl font-bold ">Name</span>
//                                     </label>
//                                     <input type="text" placeholder="Your Name" className="input input-bordered" required />
//                                 </div>
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text text-xl font-bold ">Email</span>
//                                     </label>
//                                     <input type="email" placeholder="Email" className="input input-bordered" required />

//                                 </div>
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text text-xl font-bold ">Write Question</span>
//                                     </label>
//                                     <textarea className="textarea textarea-bordered" placeholder="write Here"></textarea>
//                                 </div>
//                                 <div className="form-control mt-6">
//                                     <button className="btn bg-blue-400 text-white">Submit</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//             <div className='mb-10'>
//                 <div className='  lg:ml-20 text-4xl border-b-2 pb-4 px-4 border-blue-300 w-max font-semibold mb-10  mt-10  '>
//                     <span className=' mb-4 pb-4 '>Clients Reviews
//                     </span>

//                 </div>
//             </div>
//             <div className="lg:flex-row flex flex-col gap-5 mb-10">
//                 <div className=' mt-5'>

//                     <div className="h-[400px] card w-96 rounded-1/2  bg-base-100 shadow-xl">
//                         <figure><img src="https://i.ibb.co/R3D6G0k/1s.jpg" alt="" /></figure>
//                         <div className="card-body">

//                             <p>Smooth and efficient! Booking my rides has never been easier since I started using this transport website. From user-friendly interfaces to lightning-fast booking processes, it's a traveler's dream come true.</p>

//                         </div>
//                     </div>

//                 </div>
//                 <div className=' mt-5'>

//                     <div className="h-[400px] card w-96 rounded-1/2  bg-base-100 shadow-xl">
//                         <figure><img src="https://i.ibb.co/4KQR7kv/2d.jpg" alt="" /></figure>
//                         <div className="card-body">

//                             <p>Reliable and convenient! I've relied on this transport website for all my travel needs, whether it's a quick ride across town or a long-distance journey. With real-time updates and a wide range of transportation options, I always feel in control of my travel plans.</p>

//                         </div>
//                     </div>

//                 </div>
//                 <div className=' mt-5'>

//                     <div className="h-[400px] card w-96 rounded-1/2  bg-base-100 shadow-xl">
//                         <figure><img className='h-[200px] w-[200px]' src="https://i.ibb.co/fdvNbML/3d.jpg" alt="" /></figure>
//                         <div className="card-body">

//                             <p>Top-notch service! This transport website sets the standard for excellence. From the moment I land on the homepage to the completion of my trip, every aspect is carefully crafted for a seamless experience. It's like having a personal travel assistant at my fingertips.</p>

//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//         </>

    );
};

export default Home;