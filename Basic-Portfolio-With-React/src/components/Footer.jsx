import React from "react";
import logo from "../assets/logo2.png";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import {motion} from 'framer-motion'

function Footer() {
  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center">
        <motion.img initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5}}
        src={logo} width={300} height={300} alt="logo" className="my-20" />
      </div>
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.2, delay: index * 0.5}}
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy;2024 Designed by{" "}
        <a
          href="https://www.linkedin.com/in/abhishek-tripathy-a79152213"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 font-semibold hover:text-blue-700"
        >
          Abhishek Tripathy
        </a>
        .
      </p>
    </div>
  );
}

export default Footer;
