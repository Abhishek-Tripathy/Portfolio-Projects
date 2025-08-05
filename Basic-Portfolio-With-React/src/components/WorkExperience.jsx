import React from 'react'
import { EXPERIENCES } from '../constants'
import {motion} from 'framer-motion'

function WorkExperience() {
  return (
    <section className='pt-20' id='work'>
      <motion.h2 initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1}}
      className='text-center text-4xl font-semibold tracking-tighter'>Work Experience</motion.h2>
      <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1, delay: 0.5}}
      className="space-y-8 p-10 ">
         {EXPERIENCES.map((curr, index) => (
            <motion.div initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1, delay: index*0.3}}
            key={index} className='rounded-xl border border-stone-50/30 bg-white/10 p-4'>
               <h3 className='text-xl font-semibold sm:text-2xl'>{curr.title}</h3>
               <p className='text-2xl sm:text-4xl'>{curr.company}</p>
               <p className='text-stone-300 text-xs sm:text-sm'>{curr.duration}</p>
               <p className='mt-2 text-sm sm:text-base'>{curr.description}</p>
            </motion.div>
         ))}
      </motion.div>
    </section>
  )
}

export default WorkExperience