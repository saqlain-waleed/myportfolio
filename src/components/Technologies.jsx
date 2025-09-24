import React from 'react'
import { motion } from "motion/react"
import { RiReactjsLine } from 'react-icons/ri'
import { DiDjango } from "react-icons/di"; // Django
import { DiMysql } from "react-icons/di"; // MySQL
import { AiFillHtml5 } from "react-icons/ai"; // HTML
import { DiCss3 } from "react-icons/di"; // CSS
import { DiJavascript1 } from "react-icons/di"; // JavaScript
import { DiGit } from "react-icons/di"; // Git
import { AiFillGithub } from "react-icons/ai"; // GitHub
import { BsBootstrapFill } from "react-icons/bs"; // Bootstrap
import { SiTailwindcss } from "react-icons/si"; // Tailwind CSS
import { SiPandas } from "react-icons/si"; // Pandas
import { SiNumpy } from "react-icons/si"; // NumPy
import { SiPython } from "react-icons/si"; // Python
// import { SiCsharp } from "react-icons/si"; // C#
import { SiDotnet } from "react-icons/si"; // ASP.NET / .NET

import { animate } from 'motion';

const iconvariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

function Technologies() {
  return (
    <div id="technologies" className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl">Technologies</motion.h1>

      {/* First Row */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-2">
        <motion.div
          variants={iconvariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2">
          <AiFillHtml5 className="text-2xl md:text-8xl sm:text-7xl text-orange-500" /> {/* HTML */}
        </motion.div>
        <motion.div
          variants={iconvariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2">
          <DiCss3 className="text-2xl md:text-8xl sm:text-7xl text-blue-500" /> {/* CSS */}
        </motion.div>
        <motion.div
          variants={iconvariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2">
          <DiJavascript1 className="text-2xl md:text-8xl sm:text-7xl text-yellow-500" /> {/* JavaScript */}
        </motion.div>
        <motion.div
          variants={iconvariants(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2">
          <RiReactjsLine className="text-2xl md:text-8xl sm:text-7xl text-cyan-500" /> {/* React */}
        </motion.div>
        <motion.div
          variants={iconvariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2">
          <DiMysql className="text-2xl md:text-8xl sm:text-7xl text-blue-700" /> {/* MySQL */}
        </motion.div>
      </motion.div>

      {/* Second Row */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-2 my-4">

        <motion.div
          variants={iconvariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2">
          <BsBootstrapFill className="text-2xl md:text-8xl sm:text-7xl text-purple-700" /> {/* Bootstrap */}
        </motion.div>
        <motion.div
          variants={iconvariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2">
          <SiTailwindcss className="text-2xl md:text-8xl sm:text-7xl text-blue-400" /> {/* Tailwind CSS */}
        </motion.div>
        <motion.div
          variants={iconvariants(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2">
          <SiNumpy className="text-2xl md:text-8xl sm:text-7xl text-indigo-500" /> {/* NumPy */}
        </motion.div>
        <motion.div
          variants={iconvariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2">
          <SiPandas className="text-2xl md:text-8xl sm:text-7xl text-teal-500" /> {/* Pandas */}
        </motion.div>
        <motion.div
          variants={iconvariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2">
          <SiDotnet className="text-2xl md:text-8xl sm:text-7xl text-purple-600" /> {/* ASP.NET */}
        </motion.div>
      </motion.div>

      {/* Third Row */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-2 my-4">
        <motion.div
          variants={iconvariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2">
          <DiGit className="text-2xl md:text-8xl sm:text-7xl text-red-500" /> {/* Git */}
        </motion.div>
        <motion.div
          variants={iconvariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2">
          <AiFillGithub className="text-2xl md:text-8xl sm:text-7xl text-gray-800" /> {/* GitHub */}
        </motion.div>

      </motion.div>
    </div>
  );



}

export default Technologies
