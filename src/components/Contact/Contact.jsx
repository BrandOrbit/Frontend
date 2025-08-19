import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
import { FaEnvelopeOpenText, FaPhone, FaPhoneVolume, FaUniversity } from "react-icons/fa";
import { PiPhoneDisconnectBold } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";
const Contact = () => {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
   const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/adrdnnea", userInfo);
    // console.log(userInfo);
    // alert("Your message has been sent");
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
     <section className="bg-white pt-12 pb-20  w-6xl mx-auto">
          <h1 className='flex justify-center items-center font-bold text-2xl '>Contact Us</h1>
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center w-full">
          {/* Left Text Section */}
          <div className="md:w-1/2 md:pl-12 flex flex-col justify-center ">
          
            <h1 className="text-xl md:text-4xl font-extrabold ml-30 leading-tight text-pink-700 mb-5">
             Welcome !!

            </h1>
            
            <form
            onSubmit={handleSubmit(onSubmit)}
           
            className="bg-gray-100 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">FullName*</label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"
              />
              {errors.name && <span className='text-red-500'>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address*</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
              />
              {errors.email && <span className='text-red-500'>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Enter your Query*</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                type="text"
                placeholder="Enter your Query"
              />
              {errors.message && <span className='text-red-500'>This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-pink-700 text-white rounded-xl px-3 py-2 hover:scale-105 cursor-pointer duration-300"
            >
              Send
            </button>
          </form>
            
          </div>
          {/* Right Image Section */}
          <div className="md:w-1/2 mb-10 transition-all duration-700 ease-in-out">
            <img
              src="/logo.png"
              alt="Hero graphic"
              className={` ml-50  w-40 h-40 transition-all duration-700`}
            />
              <span className='text-xl text-pink-600 font-bold ml-50'>Brand Orbit Media</span>

              <div className="ml-35 items-center space-x-6 text-gray-700 my-2">
  <p className="flex items-center space-x-2 pb-2">
    <FaUniversity />
    <span>Your partner in digital marketing excellence.</span>
  </p>
  <p className="flex items-center space-x-2 pb-2">
    <IoIosMail />
    <span>info@example.com</span>
  </p>
  <p className="flex items-center space-x-2 pb-2">
   <PiPhoneDisconnectBold />
    <span>+1 234 567 890</span>
  </p>
  <p className="flex items-center space-x-2 pb-2">
    <FaPhoneVolume />
    <span>Call us anytime</span>
  </p>
</div>
          </div>
         
        </div>
      </section>
  )
}

export default Contact
