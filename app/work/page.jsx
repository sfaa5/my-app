"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ components/ui/tooltip";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam modi.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "0",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam modi.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam modi.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  
];

const Work = () => {
  return <div>work page</div>;
};

export default Work;
