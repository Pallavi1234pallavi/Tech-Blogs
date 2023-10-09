import React, { useState } from 'react';


export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    
    <header className="py-4 border-b-2 border-b-gray-300 drop-shadow-md fixed top-0 inset-x-0 bg-[#35B5A5] z-[100]">
      <h1 className="font-comic-sans text-white text-bold text-3xl uppercase text-center">
         Blogs
      </h1>
      
     
    </header>


  );
}
