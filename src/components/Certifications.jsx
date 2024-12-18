import React from 'react';
import { motion } from "motion/react"
import { CERTIFICATIONS } from '../constants';


function Certifications() {
  return (
    <div id="certifications" className='border-b border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}        
      className='my-20 text-center text-4xl'>Certifications</motion.h1>
      <div>
        {CERTIFICATIONS.map((certifications, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1}}             
            className="w-full lg:w-1/4">
            <img
              src={certifications.image}
              alt={certifications.title}
              width={150}
              height={150}
              className='mb-6 rounded'
            />
            </motion.div>
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 1}} 
            className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>{certifications.title}</h6>
              <p  className='mb-4 text-neutral-400'>{certifications.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;