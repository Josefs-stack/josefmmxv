'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Nemu = [
  { textNav: '_Início', url: '/' },
  { textNav: '_Sobre', url: '/About' },
  { textNav: '_Projetos', url: '/Projects' },
  { textNav: '_Contato', url: '/Contact' }
];

export default function Navigation({ closeMenu }: { closeMenu: () => void }) {
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight })
  }, []);

const bezier = [0.76, 0, 0.24, 1] as [number, number, number, number];

const slideUp: {
  initial: {
    top: number;
    left: string;
    opacity: number;
    transition: {
      duration: number;
      ease: [number, number, number, number];
      delay: number;
    };
  };
  animate: {
    top: number;
    left: string;
    opacity: number;
    transition: {
      duration: number;
      ease: [number, number, number, number];
      delay: number;
    };
  };
  exit: {
    top: number;
    left: string;
    opacity: number;
    transition: {
      duration: number;
      ease: [number, number, number, number];
      delay: number;
    };
  };
} = {
  initial: {
    top: 0,
    left: '-100vh',
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: bezier,
      delay: 0.8,
    },
  },
  animate: {
    top: 0,
    left: '-100vw',
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: bezier,
      delay: 0.8,
    },
  },
  exit: {
    top: 0,
    left: '-100vh',
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: bezier,
      delay: 0.8,
    },
  },
}

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate="animate"
      exit="exit"
      className='navigation bg-neutral-50 z-30'
    >
      {dimension.width > 0 && (
        <>
          <motion.ul
            initial="initial"
            animate="animate"
            exit="exit"
            className='absolute top-1/5 sm:left-40 left-24 w-full sm:w-[90%] sm:h-3/5 h-2/4 flex flex-col items-left justify-around z-40'
          >
            {Nemu.map((item, index) => (
              <motion.li
                key={index} 
                initial={{ opacity: 0, rotateX: '90deg' }}
                animate={{ opacity: 1, rotateX: '0deg' }}
                exit={{ opacity: 0, rotateX: '-90deg' }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className='w-full h-full flex justify-start items-center z-40'
              >
                <Link
                  href={item.url}
                  onClick={closeMenu}
                  className='w-5/6 h-1/4 lg:text-9xl md:text-6xl sm:text-5xl text-3xl text-neutral-500 hover:text-neutral-950 font-extrabold hover:translate-x-10 duration-500 flex justify-between items-center uppercase'
                >
                  {item.textNav}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </>
      )}
    </motion.div>
  )
}