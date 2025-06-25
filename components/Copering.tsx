'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Copering() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className='fixed -left-20 top-1/4 h-2/4 flex justify-center items-center overflow-visible mix-blend-difference z-50'
    >
      <a
        href='https://github.com/josef-stack'
        target='_blank'
        className="transform -rotate-90 w-full text-xs font-bold text-neutral-50"
      >
        @ MMXXV - Josef Developer 
      </a>
    </motion.div>
  );
}