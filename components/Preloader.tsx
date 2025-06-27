'use client'
import { motion } from 'framer-motion'

const slideUp = {
  initial: {
    top: 0
  },
  exit: {
    top: "-100%",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      delay: 0.2
    }
  }
}

export default function Preloader() {

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className='introduction fixed top-0 left-0 w-full h-full z-30 bg-neutral-500'
    >
    </motion.div>
  )
}