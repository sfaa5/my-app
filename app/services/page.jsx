
"use client"

import {BsArrowDownRight} from "react-icons/bs"
import Link from "next/link";

const services =[
  {
    num:'01',
    title:'web Development',
    description:'Building responsive, user-friendly websites from the ground up, tailored to your needs, and ensuring smooth performance across all devices.',
    href:""
  },
  {
    num:'02',
    title:`Backend  & Data Management`,
    description:'Creating secure, efficient systems to manage your data and support seamless connections between your website and server.',
    href:""
  },
  {
    num:'03',
    title:'Project Delivery & Support',
    description:'Ensuring ongoing support to keep your project running efficiently and reliable.',
    href:""
  },
]

import {motion} from "framer-motion";


const Services = () => {
  return (
   <section className="min-h-[80vh] flex-col justify-center py-12 xl:py-0">
<div className="container mx-auto">
  <motion.div 
  initial={{ opacity: 0 }}
  animate={{
    opacity:1,
    transition:{delay:2.4 ,duration:0.4,ease:"easeIn"},
  }}

  className ="flex flex-col gap-[65px]"
  >
{
  services.map((service,index)=>{
    return(
      <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
        {/* {top} */}
        <div className="w-full flex justify-between items-center">
          <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 ">{service.num}</div>
          <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
          <BsArrowDownRight className="text-primary text-3xl"/>
          </Link>
        </div>
        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
        <p className="text-white/60">{service.description}</p>
        <div className="border-b border-white/20 w-full"></div>
      </div>
    )
  })
}
  </motion.div>
</div>
   </section>
  )
}

export default Services;