import React from 'react';
import { motion } from "motion/react"

function Footer() {
  return (
    <motion.div
    whileInView={{opacity:1, x:0}}
    initial={{opacity: 0, x: -100}}
    transition={{duration: 0.5}} 
    className="text-center mt-10 text-lg">
      <p>
        Made with <span className="text-red-500">❤️</span> by 
        <span className="font-semibold"> Saqlain Waleed</span>
      </p>
    </motion.div>
  );
}

export default Footer;
