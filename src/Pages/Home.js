import React from 'react'
import Blogs from '../components/Blogs'
import Header from '../components/Header'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <>
      <Header/>
      
      <div className='p-7 mt-7 flex gap-x-3 '>   <Blogs/></div>
   <Pagination/>
      
      </>
    
  )
}

export default Home
