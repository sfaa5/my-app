"use client";

import {
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaHtml5,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Correct capitalization
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const about = {
  title: "about me",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel illo aliquid commodi non, inventore ratione pariatur totam sit et voluptas eligendi dolorem earum assumenda .",
  info: [
    {
      filedName: "Name",
      filedValue: "Youssef Safa",
    },
    {
      filedName: "phone",
      filedValue: "+20 1000 797 470",
    },
    {
      filedName: "Experience",
      filedValue: "2 Years",
    },
    {
      filedName: "Nationality",
      filedValue: "Egyption",
    },
    {
      filedName: "email",
      filedValue: "ym6772003@gmail.com",
    },
    {
      filedName: "Freelance",
      filedValue: "Available",
    },
    {
      filedName: "Language",
      filedValue: "English, Arapic",
    },
  ],
};

const experience = {
  icon: "assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel illo aliquid commodi non, inventore ratione pariatur totam sit et voluptas eligendi dolorem earum assumenda.",
  items: [
    {
      institution: "web Design Studio",
      degree: "Front-End Developer Intern",
      duration: "Summer 2021",
    },
    {
      institution: "web Design Studio",
      degree: "Front-End Developer Intern",
      duration: "Summer 2021",
    },
    {
      institution: "web Design Studio",
      degree: "Front-End Developer Intern",
      duration: "Summer 2021",
    },
    {
      institution: "web Design Studio",
      degree: "Front-End Developer Intern",
      duration: "Summer 2021",
    },
    {
      institution: "web Design Studio",
      degree: "Front-End Developer Intern",
      duration: "Summer 2021",
    },
    {
      institution: "web Design Studio",
      degree: "Front-End Developer Intern",
      duration: "Summer 2021",
    },
    {
      institution: "web Design Studio",
      degree: "Front-End Developer Intern",
      duration: "Summer 2021",
    },
    {
      institution: "web Design Studio",
      degree: "Front-End Developer Intern",
      duration: "Summer 2021",
    },
  ],
};

const skills = {
  title: "My Skils",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel illo aliquid commodi non, inventore ratione pariatur totam sit et voluptas eligendi dolorem earum assumenda.",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javaScript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                            {" "}
                            {item.institution}
                          </h3>
                          <div className=" flex items-center gap-3">
                            {/* dot */}
                            <span
                              className="w-[6px] h-[6px] rounded-full
                   bg-accent"
                            ></span>
                            <p className="text-white/60">{item.degree}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>

            {/* skils */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>

                  <ul className="grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                    {skills.skillsList.map((skills, index) => {
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                        <Tooltip>
               
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group gap-5">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skills.icon}</div>
                            </TooltipTrigger>

                            <TooltipContent>
                              <p className="capitalize">{skills.name}</p>
                            </TooltipContent>
             
                        </Tooltip>
                        
                        </TooltipProvider></li>;
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex felx-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx:-0">{about.description}</p>
                <ul>
                  {about.info.map((item,index)=>{
                    return(
                      <li key={index}>
<span>{item.filedName}</span>
<span>{item.filedValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
