import React from "react";
import { motion } from "motion/react"
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

function About() {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}           
      className="my-20 text-center text-4xl">
        About
        <motion.span
        whileInView={{opacity:1, y:0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1}}     
        className="text-neutral-500"> Me</motion.span>
      </motion.h1>
      <motion.div
      whileInView={{opacity:1, x:0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1}}
      className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg-p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} width={380} alt="aboutImg" />
          </div>
        </div>
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity: 0, x: 200}}
        transition={{duration: 1}}
        className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-1 max-w-xl px-3">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
