"use client";

import { FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; // Correct capitalization
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";
const about ={
  title:"about me", 
  description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel illo aliquid commodi non, inventore ratione pariatur totam sit et voluptas eligendi dolorem earum assumenda ." ,
  info:[
    {
      filedName:"Name",
      filedValue:"Youssef Safa"
    },  {
      filedName:"phone",
      filedValue:"+20 1000 797 470"
    },  {
      filedName:"Experience",
      filedValue:"2 Years"
    },  {
      filedName:"Nationality",
      filedValue:"Egyption"
    },{
      filedName:"email",
      filedValue:"ym6772003@gmail.com"
    },{
      filedName:"Freelance",
      filedValue:"Available"
    },{
      filedName:"Language",
      filedValue:"English, Arapic"
    },
  ]
}

const experience ={
  icon:"assets/resume/badge.svg",
  title:"My experience",
  description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel illo aliquid commodi non, inventore ratione pariatur totam sit et voluptas eligendi dolorem earum assumenda.",
  iterms:[
    {
      institution:"web Design Studio",
      degree:"Front-End Developer Intern",
      duration:"Summer 2021"
    },    {
      institution:"web Design Studio",
      degree:"Front-End Developer Intern",
      duration:"Summer 2021"
    },    {
      institution:"web Design Studio",
      degree:"Front-End Developer Intern",
      duration:"Summer 2021"
    },    {
      institution:"web Design Studio",
      degree:"Front-End Developer Intern",
      duration:"Summer 2021"
    },
  ]

  

}

 const skills ={
  title:"My Skils",
  description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel illo aliquid commodi non, inventore ratione pariatur totam sit et voluptas eligendi dolorem earum assumenda.",
  skillsList:[
    {
      icon:<FaHtml5/>,
      name:"html 5"
    },
    {
      icon:<FaCss3/>,
      name:"css 3"
    },{
      icon:<FaJs/>,
      name:"javaScript"
    },{
      icon:<FaReact/>,
      name:"react.js"
    },{
      icon:<SiNextdotjs/>,
      name:"next.js"
    },
    {
      icon:<SiTailwindcss/>,
      name:"tailwind.css"
    },
    {
      icon:<FaNodeJs/>,
      name:"node.js"
    },
    {
      icon:<FaFigma/>,
      name:"figma"
    }

  ]
 }


const Resume = () => {
  return (
 < motion.div 
 initial={{opacity:0}}
 animate={{
  opacity:1,
  transition:{delay:2.4,duration:0.4,ease:"easeIn"},
 }}
 className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
 >
<div className="container mx-auto">
  <Tabs
  defaultValue="experience"
className="flex flex-col xl:flex-row gap-[60px]"
  >
    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
      <TabsTrigger value="experience">
        Experience
      </TabsTrigger>

      <TabsTrigger value="skils">
        Skils
      </TabsTrigger>

      <TabsTrigger value="about">
        About me
      </TabsTrigger>
    </TabsList>
{/* content */}
    <div className="min-h-[70vh] w-full">
      
      {/* experience */}
      <TabsContent  value="experience" className="w-full">
experience
      </TabsContent>
    </div>
  </Tabs>
</div>
 </motion.div>
  )
}

export default Resume