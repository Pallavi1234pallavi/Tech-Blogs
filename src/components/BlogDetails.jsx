import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';



const BlogDetails = ({post}) => {
    
  return (


// < className="  flex gap-x-3 justify-center ">
   
<div className='max-w-[400px] mx-auto p-4 bg-slate-900 text-white md:ml-[20px] md:p-6 w-screen rounded-xl shadow-lg hover:shadow-white   transition-transform duration-300'>
   
   
    
     <NavLink to={`/blog/${post.id}`} className="mt-[80px]" >
       <h2 className='font-bold  text-lg '>{post.title}</h2>
     </NavLink>
     <p className='text-sm mt-2'>
       By
       <span className='italic'>{post.author}</span>
       on {' '}
       <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
           <span className='underline font-bold'>{post.category}</span>
       </NavLink>
     </p>
     <p className='text-sm mt-2'> Posted on {post.date} </p>
     <p className='text-md mt-4 mr-9'> {post.content}</p>
     <div className='flex flex-wrap mt-4 '>
       {post.tags.map( (tag, index) => (
           <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
               <span className="text-blue-700  font-bold text-xs mt-2 mr-2">{`#${tag}`}</span>
           </NavLink>
       ) )}
     </div>
   </div>
  



   
 

  )
}

export default BlogDetails
