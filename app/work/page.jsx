"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image"; // Import Next.js Image component

import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "GivingCircle",
    title: "project 1",
    description:
      "a user-friendly donation platform designed to make giving and receiving as easy as online shopping. Donors can seamlessly contribute, track their impact, and understand their donation eligibility through a points system, while recipients can choose what they need with simplicity and dignity. ",
    stack: [{ name: "React.js" }, { name: "mongoDB" }, { name: "node.js" }],
    image: "/assets/work/GC3.png",
    live: "",
    github: "https://github.com/sfaa5/GivingCircle",
  },

  {
    num: "02",
    category: "MUKTI",
    title: "project 2",
    description:
      "This hospital management system streamlines operations for doctors and provides patients with easy access to care. Patients can book appointments and be assigned to specific doctors based on their needs, ensuring a smooth process from check-in to quarantine when necessary.",
    stack: [{ name: "React.js" }, { name: "Bootstrap" }, { name: "EJS" },{ name: "node.js" }],
    image: "/assets/work/m8.png",
    live: "",
    github: "https://github.com/sfaa5/depi-project",
  },

  {
    num: "03",
    category: "Dashboard",
    title: "project 3",
    description:
      "This dashboard efficiently manages users, supervisors, and donations. It allows admins to add, edit, and assign users, oversee incoming donations, and handle requests with options to accept or reject. By streamlining donation processing and organizing inventory, the dashboard ensures a smooth and efficient management experience.",
    stack: [
      { name: "React.js" },
      { name: "Javascript" },
      { name: "mongoDB" },
    ],
    image: "/assets/work/D2.png",
    live: "",
    github: "https://github.com/sfaa5/Dashboared",
  },

  {
    num: "04",
    category: "Sfsf social media",
    title: "project 3",
    description:
      "This social platform enables users to connect and interact, much like early Facebook. Users can view posts, like, comment, add friends, and manage their connections, creating a simple and engaging social experience.",
    stack: [
      { name: "React.js" },
      { name: "node.js" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/So.png",
    live: "",
    github: "https://github.com/sfaa5/Social",
  }
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based oncurrent slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {" "}
                {project.num}{" "}
              </div>
              {/* project category */}

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stock  */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the Lost commo */}
                      {index !== project.stack.length - 1 && ","}{" "}
                    </li>
                  );
                })}{" "}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>

              {/* buttons */}

              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center">
                        <BsArrowUpRight className="text-white text-3xl  group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center">
                        <BsGithub className="text-white text-3xl  group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}

                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)) xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
