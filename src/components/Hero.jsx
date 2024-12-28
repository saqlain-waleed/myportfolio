import React from 'react';
import { motion } from "motion/react";
import { HERO_CONTENT } from "../constants";
import saqlainpic from "../assets/saqlainpic.jpg";
import { Link } from 'react-scroll';  // Use react-scroll Link instead
import { delay } from 'motion';
import cvFile from '../assets/Saqlainresume.pdf'; 

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  return (
    <div  className="border-b border-neutral-900 pb-8 lg:mb-20">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-4 text-5xl font-thin tracking-tight lg:mt-8 lg:text-7xl"
            >
              Saqlain Waleed
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-4 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="flex gap-4 mt-4"
            >
              {/* Use Link from react-scroll */}
              <Link
                to="contact" // ID of the Contact section
                smooth={true} // Enable smooth scrolling
                duration={800} // Duration of scroll
                className="px-6 py-3 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-700 transition duration-300"
              >
                Hire Me
              </Link>
              <a
  href={cvFile}
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-gray-200 text-gray-900 rounded-full shadow-lg hover:bg-orange-100 transition duration-300"
>
  View CV
</a>
            </motion.div>
          </div>
        </div>
        <div className="mt-5 w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={saqlainpic}
              width={350}
              alt="profilepic"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;