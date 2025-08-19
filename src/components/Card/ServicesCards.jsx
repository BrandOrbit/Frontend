import React from 'react'
import { Link } from 'react-router-dom';

// NativeAdCard.jsx
export default function ServicesCards({ item }) {
  return (
    <div className="bg-white rounded-xl p-8 transition-all duration-400 text-center  mx-auto border border-[#f2f2f4] 
      hover:shadow-2xl hover:border-transparent group">
      <div className="flex justify-center mb-4">
        <div className="rounded-full w-20 h-20 flex items-center justify-center ">
           <img src={`${item.icon}`} alt="image " className='rounded-full' />
        </div>
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-gray-900">{item.title}</h3>
      <p className="text-gray-500 mb-6">{item.description}</p>
     <Link to={item.linkToInfo}>
      <button
        className="px-8 py-2 rounded border-2 border-[#fd2e6a] text-[#fd2e6a] font-semibold transition 
        duration-1000 group-hover:bg-gradient-to-r group-hover:from-[#fd2e6a] group-hover:to-[#ff5c5c] 
        group-hover:text-white group-hover:border-transparent cursor-pointer"
      >
        Read More
      </button></Link>
    </div>
  );
}


