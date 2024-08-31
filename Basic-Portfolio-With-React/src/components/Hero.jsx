import React, { useState } from "react";
import { HERO } from "../constants/index";
import profileImage from "../assets/tanmaya.jpeg";
import { motion } from "framer-motion";
import { IoEnterOutline } from "react-icons/io5";

function Hero() {
   const [clicked, setClicked] = useState(false)

   const handleClick = () =>  {
      setClicked(true)
      window.location.href = 'https://drive.google.com/file/d/13sAttpDWJ8GuYpZTw6YjpJ-AmwvBfLO2/view?usp=drive_link';
   }
  return (
    <section className="flex min-h-screen flex-wrap  items-center ">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2"
      >
        <h2 className="my-8 mt-20 p-2 text-4xl font-bold md:text-5xl lg:text-7xl">
          {HERO.name}
        </h2>
        <p className="p-2 text-2xl tracking-tighter md:text-3xl lg:text-4xl ">
          {HERO.greet}
        </p>
        <p className="mb-8 p-2 text-lg md:text-xl">{HERO.description}</p>
        <p className="mb-0 p-1 text-lg">{HERO.email}</p>
        <p className="mb-4 mt-0 p-1 text-lg">{HERO.phone}</p>
        <button className= {clicked ? "mb-4 mt-0 p-1 text-lg font-bold bg-orange-800 py-1 px-2 rounded-xl flex" : 
         "mb-4 mt-0 py-1 px-2 text-lg text-stone-200 font-bold flex rounded-xl hover:opacity-80  bg-orange-500"}
          onClick={handleClick}
          style={{
            cursor: "pointer",
            transition: "color 0.3s",
          }}
        >
          My Resume <p className="mx-2 mt-1"><IoEnterOutline className="text-xl " /></p>
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 xlg:p-8 "
      >
        <div className="flex justify-center lg:mt-10 ">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={profileImage}
            width={550}
            height={550}
            alt="Profile Pic"
            className="rounded-3xl"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
