import React, { useEffect, useState } from 'react';
import Contex from './Contex';
const Myqueries = () => {
    const {user}=Contex()
    const email=user.email
    console.log(email)
    const [userr,setData]=useState()
    useEffect(()=>{fetch(`http://localhost:5000/myqueries/${email}`)
                .then(res=>res.json())
                .then(data=>setData(data))
                .then(error=>console.log(error))}
    ,[])
    console.log(userr)
    return (
        <div>
            
        </div>
    );
};

export default Myqueries;