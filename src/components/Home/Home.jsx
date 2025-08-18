import React, { useState } from 'react'

const Home = () => {
    const [hovered, setHovered] = useState(false);
  return (
    <div className="flex justify-center">
      <section className="bg-white pt-12 pb-20 w-full max-w-6xl">
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center w-full">
          {/* Right Text Section */}
          <div className="md:w-1/2 md:pl-12 flex flex-col justify-center">
          <span className="bg-pink-100 text-pink-600 uppercase font-semibold px-3 py-1 rounded-full w-fit mb-4 tracking-widest text-xs">
            Performance Marketing Company
          </span>
          <h1 className="text-xl md:text-5xl font-extrabold leading-tight text-gray-800 mb-5">
            Global Performance Marketing Agency
          </h1>
           <p className='text-gray-700 mb-4 text-lg'>Are You Looking for Best Performance Marketing Agency in India That Delivers Real Results?</p>
          <p className="text-gray-700 mb-4 text-lg">
            At <span className="font-bold text-pink-600">Brand Orbit Media</span>, we help businesses grow with data-driven performance marketing strategies. From <span className="font-bold">Affiliate marketing</span> and <span className="font-bold">native ads</span> to <span className="font-bold">Email Marketing</span>, we focus on what matters most – ROI and scalable growth.
          </p>
          <p className="text-gray-700 mb-8 text-lg">
            Whether you're looking to maximize your ROI, generate high-quality leads, or boost online sales, we create customized campaigns that convert.
          </p>
          <button className="ml-40 hover:bg-pink-700 hover:text-white text-pink-600 px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 text-lg w-fit mb-2">
            Get Started
          </button>
        </div>
          {/* Left Image Section */}
          <div
            className="md:w-1/2 flex justify-center transition-all duration-700 ease-in-out"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img
              src="/HeroSection.png"
              alt="Hero graphic"
              className={`rounded-xl shadow-lg object-cover w-110 h-125 transition-all duration-700 ${
                hovered
                  ? "scale-105 opacity-100"
                  : "scale-100 opacity-90"
              }`}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
