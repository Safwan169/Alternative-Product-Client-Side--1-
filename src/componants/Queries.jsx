import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Allqueries from './Allqueries';
import { AiFillLayout } from 'react-icons/ai';
import { RiLayoutColumnLine } from 'react-icons/ri';
import { TfiLayoutColumn2Alt, TfiLayoutColumn3Alt } from 'react-icons/tfi';
import { TbLayoutAlignBottomFilled } from 'react-icons/tb';
import { VscLayoutCentered } from 'react-icons/vsc';

const Queries = () => {
    const data = useLoaderData()
    console.log(data)
    const [allData, setData] = useState(data)
    const sortedData = allData.sort((a, b) => (b.date - a.date));
    console.log(sortedData)
    // setData(sortedData)
    const [grid, setGrid] = useState('grid-cols-3')

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        console.log(name)
        // console.log(sortedData[0].name)
        const serch = data.filter(d =>( (d.name).toUpperCase() == name.toUpperCase()))
        setData(serch)
        if (name == '') {
            setData(data)

        }
        console.log(allData)
        if (serch.length==1) {
            setGrid('grid-cols-1')
            
        }
        else(setGrid('grid-cols-3'))
    }
    const [layout, setLayout] = useState(false)


    return (
        <div>
            <div className='mt-24 flex flex-col lg:items-center lg:flex-row'>

                <form onSubmit={handleSubmit} class="max-w-md  w-full mx-auto">
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"></label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center p-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input name='name' type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." />
                        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
                <div>
                    <div className=' flex w-full mt-5 lg:mt-0 lg:justify-normal lg:pr-0 justify-end pr-[30px] lg:w-[80px]  gap-2 lg:mr-20 items-center'><span className='  text-gray-500'> view :</span><span className=''><AiFillLayout onClick={() => setLayout(!layout)} size={20} /></span></div>
                    
                       <div className='block'>{
                         layout ? <div className='flex absolute justify-end ml-56 lg:ml-0 lg:mr-0 lg:justify-normal gap-3 mt-5'>
                            <span className='' onClick={()=>setGrid('grid-cols-1')}>
                                <VscLayoutCentered />
                            </span>
                            <span className='' onClick={()=>setGrid('grid-cols-2')}>
                                <TfiLayoutColumn2Alt />
                            </span>
                            <span onClick={()=>setGrid('grid-cols-3')}>
                                <TfiLayoutColumn3Alt />
                            </span>
                        </div> : ''}
                       </div>
                    
                </div>
            </div>
            <div className={`lg:grid mt-5 lg:mt-12 lg:${grid}  justify-center gap-4 w-full lg:w-[1200px] mx-auto my-10`}>
                {
                    sortedData?.map(datas => <Allqueries  datas={datas}></Allqueries>)
                }
            </div>
        </div>
    );
};

export default Queries;