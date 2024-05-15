import React, { useEffect, useState } from 'react';
import Contex from './Contex';
import MyAllqueries from './MyAllqueries';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';

const Myqueries = () => {
    const { user, load } = Contex()
    const email = user.email
    console.log(email,load)
    const [userr, setData] = useState()
    useEffect(() => {
        fetch(`https://assinment-11-server-side-alpha.vercel.app/myqueries/${email}`)
            .then(res => res.json())
            .then(data => setData(data))
            .then(error => console.log(error))
    }
        , [load])
    // console.log(userr)
    const sortedData = userr?.sort((a, b) => (b.date - a.date));

    return (

        <div>
            {/* <Helmet>
                <title>
                    TSpluse || MY Queries
                </title>
            </Helmet> */}
            <div className='flex mt-20  justify-around '>
                 <span className=' absolute left-[150px]   h-svh text-blue-800 font-bold text-4xl'>

                    <h1 style={{ paddingTop: '5rem', margin: ' 0', fontWeight: 'normal' }}>
                        Every <br />{''} Question Has <br /> An {' '}
                        <span style={{ color: 'blueviolet', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Answer...', 'Answer....', 'Answer....', 'Answer....']}
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

                    <Link to={'/add'}  className='mt-10 text-xl text-white btn rounded-xl hover:bg-red-600 hover:scale-105 bg-red-500'>Add Queries</Link >

                    </span>
              

                <img className='  ' src="https://i.ibb.co/SdGFnyz/prof-logo.png" alt="" />
            </div>

            <div className='lg:grid mt-40 lg:grid-cols-3 justify-center gap-4 w-full lg:w-[1200px] mx-auto my-10'>
                {
                    sortedData?.map(d => <MyAllqueries datas={d}></MyAllqueries>)
                }

            </div>
        </div>
    );
};

export default Myqueries;