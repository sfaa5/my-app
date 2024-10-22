"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";



import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
 const info = [ 
   {  icon: <FaPhoneAlt />,
     title: "Phone",
      description: "(+40) 321 654 876",
      },   {  icon: <FaEnvelope />,
        title: "Email",
         description: "ym6772003@gmail.com",
         },  {  icon: <FaMapMarkerAlt />,
          title: "Addrss",
           description: "Downtown, Cairo, Egypt",
           }, ];

import {motion} from "framer-motion"

const Contact = () => {
  return <motion.div> contact page</motion.div>;
};

export default Contact;
