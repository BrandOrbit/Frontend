import React, { useState } from 'react'
import ServicesCards from '../Card/ServicesCards';

const Home = () => {
    const [hovered, setHovered] = useState(false);

    const itemInfo=[
        {

  title: "Performance Marketing",
  description: "Maximizing ROI through data-driven and results-oriented strategies."
  
},
        {
            title:"Mobile Marketing",
            description:"Targeting mobile users with personalized and impactful campaigns."
        },
        {
            title:"Native Ads",
            description:"Integrating ads seamlessly into content for enhanced user experience."
        }
    ]
  return (
    <div className="flex flex-col items-center w-full">
      <section className="bg-white pt-12 pb-20  w-6xl mx-auto">
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center w-full">
          {/* Left Text Section */}
          <div className="md:w-1/2 md:pl-12 flex flex-col justify-center ">
            <span className="bg-pink-100 text-pink-600 uppercase font-semibold px-3 py-1 rounded-full w-fit mb-4 tracking-widest text-xs ml-26">
              Performance Marketing Company
            </span>
            <h1 className="text-xl md:text-5xl font-extrabold leading-tight text-gray-800 mb-5">
              Global Performance Marketing Agency
            </h1>
            <p className='text-gray-700 mb-4 text-lg'>Are You Looking for Best Performance Marketing Agency in India That Delivers Real Results?</p>
            <p className="text-gray-700 mb-4 text-lg ">
              At <span className="font-bold text-pink-600">Brand Orbit Media</span>, we help businesses grow with data-driven performance marketing strategies. From <span className="font-bold">Affiliate marketing</span> and <span className="font-bold">native ads</span> to <span className="font-bold">Email Marketing</span>, we focus on what matters most – ROI and scalable growth.
            </p>
            <p className="text-gray-700 mb-8 text-lg">
              Whether you're looking to maximize your ROI, generate high-quality leads, or boost online sales, we create customized campaigns that convert.
            </p>
            <button className="hover:bg-pink-700 hover:text-white text-pink-600 px-6 py-3 rounded-full font-semibold shadow-lg transition duration-600 text-lg w-fit mb-2 mx-auto cursor-pointer">
              Get Started
            </button>
          </div>
          {/* Right Image Section */}
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


        {/* Services Section */}
      <section className="bg-gray-100 py-12 w-full mx-auto">
        {/* upper text */}
        <div className="w-6xl mx-auto flex flex-col justify-center items-center ">
          <h2 className="text-4xl font-semibold text-pink-800 mb-4">
            Our Services &amp; Features
          </h2>
          <p className="text-lg text-gray-700  w-130  text-center">
            We offer wide range of services include affiliate marketing, email marketing, native ads, and social media ads, Content Marketing, Mobile Delivery and more.
          </p>
        </div>
        {/* Services cards */}
        <div className="max-w-6xl w-full mx-auto flex justify-center items-center gap-x-8 mt-8">
                { itemInfo.map((item,index) => (
                  <ServicesCards key={index} item={item} />
                ))}
        </div>
      </section>


      {/* Third Section */}
       <section className='my-15'>
         {/* upper image and text */}
        <section className="bg-white pt-12 pb-20  w-6xl mx-auto">
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center w-full">
          {/* Left Text Section */}
          <div className="md:w-1/2 md:pl-12 flex flex-col justify-center ">
          
            <h1 className="text-xl md:text-4xl font-extrabold leading-tight text-pink-700 mb-5">
             Why Choose Brand Orbit Media?

            </h1>
            
            <p className="text-gray-700 mb-4 text-lg text-justify">
              Choose <span className="font-bold text-pink-600">Brand Orbit Media</span> for innovation, results-driven marketing solutions that elevate your brand. We are Best Digital Marketing Agency in India. Our expert team specializes in  <span className="font-bold">Affiliate marketing,</span> <span className="font-bold">Performance Marketing</span> and <span className="font-bold">mobile marketing, </span><span className="font-bold">native ads</span> and <span className="font-bold">social media ads</span>, creating customized strategies to maximize ROI. With a focus on data, performance, and growth, we’re committed to delivering measurable results and driving your business forward in today’s competitive digital landscape.
            </p>
            
          </div>
          {/* Right Image Section */}
          <div
            className="md:w-1/2 flex justify-center transition-all duration-700 ease-in-out"
            // onMouseEnter={() => setHovered(true)}
            // onMouseLeave={() => setHovered(false)}
          >
            <img
              src="/Why.png"
              alt="Hero graphic"
              className={`  w-150 h-100 transition-all duration-700`}
            />
          </div>
        </div>
      </section>

           {/* below image and text */}
          <section className="bg-white pt-12 pb-20  w-6xl mx-auto">
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center w-full">
               {/* Right Image Section */}
          <div
            className="md:w-1/2 flex justify-center transition-all duration-700 ease-in-out"
            // onMouseEnter={() => setHovered(true)}
            // onMouseLeave={() => setHovered(false)}
          >
            <img
              src="/Benefits.png"
              alt="Hero graphic"
              className={`  w-110 h-100 transition-all duration-700 ${
                hovered
                  ? "scale-105 opacity-100"
                  : "scale-100 opacity-90"
              }`}
            />
          </div>
          {/* Left Text Section */}
          <div className="md:w-1/2 md:pl-12 flex flex-col justify-center ">
              <h1 className="text-xl md:text-3xl font-extrabold leading-tight text-pink-600 ">Our Benefits</h1>
            <h1 className="text-xl md:text-3xl font-bold leading-tight text-black-100 mb-5">
            GET MORE TRAFFIC ON YOUR BRAND.

            </h1>
            
            <p className="text-gray-700 mb-4 text-lg text-justify">
           Brand Orbit Media is a results-driven performance marketing agency in Noida committed to delivering measurable growth. We optimize every campaign for maximum ROI, helping you reach the right audience with precision and impact.
            </p>
            
          </div>
        
        </div>
      </section>
       </section>
    </div>
  )
}

export default Home
