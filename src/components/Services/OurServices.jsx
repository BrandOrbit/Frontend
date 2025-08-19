import React from 'react'
import ServicesCards from '../Card/ServicesCards'

const OurServices = () => {
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
        },
        {
            title:"Media Buying",
            description:"Strategic ad placements across various channels to maximize reach and engagement."
        },
        {
            title:"SEO & Organic Growth",
            description:"Implementing strategies to improve search engine rankings and drive organic traffic."
        },
        {
            title:"Meta Ads",
            description:"Leveraging social media platforms for targeted advertising and brand visibility."
        },
        {
            title:"Programmatic Buying",
            description:"Automating the buying and placement of ads in real-time to optimize campaigns."
        },
        {
            title:"Search and Display campaigns",
            description:"Targeting users through search engines and display networks to increase visibility."
        },
    ]
  return (
     <section className=" py-12 w-full mx-auto">
           {/* upper text */}
           <div className="w-6xl mx-auto flex flex-col justify-center items-center ">
             <h2 className="text-4xl font-semibold text-pink-800 mb-4">
               Our Services 
             </h2>
            
           </div>
           {/* Services cards */}
           <div className="max-w-6xl w-full mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 justify-items-center">
                   { itemInfo.map((item,index) => (
                     <ServicesCards key={index} item={item} />
                   ))}
           </div>
         </section>
  )
}

export default OurServices
