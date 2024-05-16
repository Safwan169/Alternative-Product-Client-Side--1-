import React from 'react';

const Compare = ({ datas, Data, Com }) => {
    // const datee = new Date(date).toLocaleString()
    // console.log(Com.yourproduct)
    const main = datas.find(d => (d.name) == (Com?.yourproduct))
    // console.log(main)
    const Reco = Data?.find(d => d.Recname == Com?.recproduct)
    // const  { _id, url, name, reason, product_title, email, image, date, brand_name, user_name, recommendationCount } = main

    return (
        <div className=''>

            {
                Com ? <div className='lg:flex-row md:flex-row flex flex-col gap-6 mx-auto border justify-between '>
                  <div>
                  <p className='text-xl font-black underline text-gray-500 mb-6'> Queries</p>
                    <div className="max-w-sm my-5 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        

                        <a href="#">
                            <img className="rounded-t-lg w-[400px] h-[300px]" src={`${main?.url}`} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{main?.product_title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{main?.name}</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Brand : {main?.brand_name}</p>
                            <p className="mb-3 font-normal h-10 text-gray-700 dark:text-gray-400">Reason : {main?.reason}</p>
                            {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Post : {datee}</p> */}
                            {/* <p className='mb-3 font-normal text-gray-700  items-center dark:text-gray-400'>Recommendation-Count :{recommendationCount}</p>
                            <p className=" font-normal text-gray-700 flex items-center gap-10 dark:text-gray-400 my-5"><span onClick={() => handleUpdate(_id)} className='btn bg-green-400 p-3 text-white  rounded-xl'>Update</span><span onClick={() => handleDelet(_id)} className='btn bg-red-500 text-white p-3' >Delete</span></p> */}

                            {/* <Link to={`/details/${_id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        View Details
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                            </Link > */}
                        </div>
                    </div>
                  </div>
                    <span className='font-bold text-3xl flex items-center justify-center'>VS</span>
                    <div>
                        <p className='text-xl font-black underline text-gray-500 mb-6'>Recommended</p>

                        {
                            Reco ? <div className="max-w-sm my-5 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg w-[400px] h-[300px]" src={`${Reco?.urll}`} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Reco?.productt_title}</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{Reco?.Recname}</p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Brand : {Reco?.brandd_name}</p>
                                    <p className="mb-3 font-normal h-10 text-gray-700 dark:text-gray-400">Reason : {Reco?.reasonn}</p>
                                    {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Post : {datee}</p> */}
                                    {/* <p className='mb-3 font-normal text-gray-700  items-center dark:text-gray-400'>Recommendation-Count :{recommendationCount}</p>
                    <p className=" font-normal text-gray-700 flex items-center gap-10 dark:text-gray-400 my-5"><span onClick={() => handleUpdate(_id)} className='btn bg-green-400 p-3 text-white  rounded-xl'>Update</span><span onClick={() => handleDelet(_id)} className='btn bg-red-500 text-white p-3' >Delete</span></p> */}

                                    {/* <Link to={`/details/${_id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        View Details
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link > */}
                                </div>
                            </div> : <div className='text-3xl font-bold text-center flex items-center text-gray-400'>No Recommendation Available</div>
                        }
                    </div>
                </div> : <div className='lg:text-3xl mb-6 font-bold text-gray-500 text-center'> please add Comparison</div>
            }
        </div>
    );
};

export default Compare;