import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogDetails = ({ post }) => {
  return (
    <div className="max-w-[400px] mx-auto p-4 ml-10 mr-7 mb-8 bg-opacity-80 backdrop-blur-md border border-gray-200 rounded-xl text-white text-shadow-lg">
      <NavLink to={`/blog/${post.id}`} className="block">
        <h2 className="font-bold text-lg mb-2">{post.title}</h2>
      </NavLink>
      <p className="text-sm">
        By <span className="italic">{post.author}</span> on{' '}
        <NavLink to={`/categories/${post.category.replaceAll(' ', '-')}`}>
          <span className="underline font-bold">{post.category}</span>
        </NavLink>
      </p>
      <p className="text-sm mt-2">Posted on {post.date}</p>
      <p className="text-md mt-4">{post.content}</p>
      <div className="flex flex-wrap mt-4">
        {post.tags.map((tag, index) => (
          <NavLink
            key={index}
            to={`/tags/${tag.replaceAll(' ', '-')}`}
            className="text-blue-600 font-bold text-sm mt-2 mr-2"
          >
            {`#${tag}`}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
