import React, { useEffect, useState } from 'react';
import Contex from './Contex';
import Allqueries from './Allqueries';
import MyAllqueries from './MyAllqueries';
const Myqueries = () => {
    const {user,load}=Contex()
    const email=user.email
    const [userr,setData]=useState()
    useEffect(()=>{fetch(`http://localhost:5000/myqueries/${email}`)
                .then(res=>res.json())
                .then(data=>setData(data))
                .then(error=>console.log(error))}
    ,[load])
    console.log(userr)
    const sortedData = userr?.sort((a, b) => (b.date - a.date));

    return (
        <div className='lg:grid mt-40 lg:grid-cols-3 justify-center gap-4 w-full lg:w-[1200px] mx-auto my-10'>
            {
                sortedData?.map(d=><MyAllqueries datas={d}></MyAllqueries>)
            }
            
        </div>
    );
};

export default Myqueries;