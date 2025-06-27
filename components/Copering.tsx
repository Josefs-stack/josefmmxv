'use client'
import { motion } from 'framer-motion';

export default function Copering() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className='fixed left-4 top-1/4 h-2/4 w-10 flex justify-center items-center overflow-visible mix-blend-difference z-50 '
    >
      <a
        href='https://github.com/josef-stack'
        target='_blank'
        className="min-w-60 -rotate-90 text-xs font-bold text-neutral-500 hover:text-white overflow-visible"
      >
        @ MMXXV - Josef Developer 
      </a>
    </motion.div>
  );
}