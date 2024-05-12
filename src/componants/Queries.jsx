import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Queries = () => {
    const data=useLoaderData()
    console.log(data)
    return (
        <div>
            
        </div>
    );
};

export default Queries;