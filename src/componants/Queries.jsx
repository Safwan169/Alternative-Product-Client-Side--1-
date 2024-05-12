import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Allqueries from './Allqueries';

const Queries = () => {
    const data = useLoaderData()
    // console.log(data)
    const sortedData = data.sort((a, b) => (b.date - a.date));


    return (
        <div className="lg:grid mt-40 lg:grid-cols-3 justify-center gap-4 w-full lg:w-[1200px] mx-auto my-10">
            {
                sortedData.map(datas => <Allqueries datas={datas}></Allqueries>)
            }
        </div>
    );
};

export default Queries;