import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SwiperSlide,Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Home = () => {

    const data = useLoaderData()

    const pp=data[0].date
   
    const dateObject = new Date(pp).toLocaleString();
  


;


      const sortedData = data.sort((a, b) => (b.date-a.date ));

    // const slicedData = data.slice(0, 6);
    console.log(sortedData)









    
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
            
            modules={[Autoplay ]}
            className="mySwiper"
        >
            <SwiperSlide ><img className=' w-full bg-cover h-svh lg:h-[650px]' src="https://i.ibb.co/5R4Gpqy/1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide ><img className=' w-full bg-cover h-svh lg:h-[650px]' src="https://i.ibb.co/5R4Gpqy/1.jpg"alt="" /></SwiperSlide>
            <SwiperSlide ><img className=' w-full bg-cover h-svh lg:h-[650px]' src="https://i.ibb.co/5R4Gpqy/1.jpg"alt="" /></SwiperSlide>
            <SwiperSlide ><img className=' w-full bg-cover h-svh lg:h-[650px]' src="https://i.ibb.co/5R4Gpqy/1.jpg" alt="" /></SwiperSlide>
            

        </Swiper>
//      
        </>

    );
};

export default Home;