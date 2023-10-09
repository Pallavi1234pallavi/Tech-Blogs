import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';


const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div className='mt-[90px]'>
        <Header/>

        <div className='ml-4 justify-center gap-6 flex' >
            <button 
         className='bg-gray-200 border border-gray-400 rounded-md h-[35px] w-[60px] px-1'
            onClick={() => navigation(-1)}
            >
                Back
            </button>
            <h2 className='font-bold'>
                Blogs Tagged  <span className='text-blue-600 ml-2'>#{tag}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
      
    </div>
  )
}

export default TagPage
