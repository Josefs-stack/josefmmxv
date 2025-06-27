'use client'
import { motion } from 'framer-motion';

export default function Copering() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className='fixed sm:left-1/3 left-0 bottom-8 sm:w-1/3 w-full h-8 flex justify-center items-center overflow-visible mix-blend-difference z-50'
    >
      <a
        href='https://github.com/josef-stack'
        target='_blank'
        className="transform w-auto text-xs font-bold text-neutral-500 hover:text-neutral-50 transition-all"
      >
        @ MMXXV - Josef Developer 
      </a>
    </motion.div>
  );
}