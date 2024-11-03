"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "+201000797470" },
  { icon: <FaEnvelope />, title: "Email", description: "yussefmhamed226@gmail.com" },
  { icon: <FaMapMarkerAlt />, title: "Address", description: "Downtown, Cairo, Egypt" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ""
    }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstname) tempErrors.firstname = "Firstname is required";
    if (!formData.lastname) tempErrors.lastname = "Lastname is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
    if (!formData.phone) tempErrors.phone = "Phone number is required";
    if (!formData.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true); // Show loading state

    emailjs
      .sendForm(
        "service_kfhhc1q", // replace with your EmailJS service ID
        "template_k2uye3j", // replace with your EmailJS template ID
        e.target,
        "_ZKzAHgHb2L6f8Ztm" // replace with your EmailJS user ID
      )
      .then((result) => {
        console.log("Email successfully sent!", result.text);
        setIsSubmitted(true);
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          message: ""
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error.text);
      })
      .finally(() => {
        setIsLoading(false); // Hide loading state
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I look forward to collaborating on your project and helping you achieve your goals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
                  <Input
                    type="text"
                    name="firstname"
                    placeholder="Firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                  {errors.firstname && <p className="text-red-500">{errors.firstname}</p>}
             
          
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="Lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                  {errors.lastname && <p className="text-red-500">{errors.lastname}</p>}
           
            
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red-500">{errors.email}</p>}
             
              
                  <Input
                    type="text"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <p className="text-red-500">{errors.phone}</p>}
               
              </div>

              <div>
                <Textarea
                  className="h-[200px]"
                  placeholder="Type your message here"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <p className="text-red-500">{errors.message}</p>}
              </div>

              <Button size="md" className="max-w-40" type="submit" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send message"}
              </Button>

              {isSubmitted && (
                <p className="text-green-500 mt-4">
                  Your message has been sent successfully!
                </p>
              )}
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
