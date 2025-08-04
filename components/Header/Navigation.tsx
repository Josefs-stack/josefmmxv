'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaGithub, FaGlobe, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Menu = [
  { textNav: '_Início', url: '/' },
  { textNav: '_Sobre', url: '/About' },
  { textNav: '_Projetos', url: '/Projects' },
  { textNav: '_Contato', url: '/Contact' }
];

const Social = [
  { icon: <FaGithub />, url: 'https://github.com/josef-stack' },
  { icon: <FaWhatsapp />, url: 'https://wa.me/5521971246822' },
  { icon: <FaInstagram />, url: 'https://instagram.com/seuPerfil' },
  { icon: <FaGlobe />, url: 'https://seusite.com' }
];


export default function Navigation({ closeMenu }: { closeMenu: () => void }) {
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight })
  }, []);

const bezier = [0.76, 0, 0.24, 1] as [number, number, number, number];

const [offsetLeft, setOffsetLeft] = useState('-100vh');

  useEffect(() => {
    const updateOffset = () => {
      const width = window.innerWidth - 64;
      setOffsetLeft(`-${width}px`);
    };

    updateOffset(); 
    window.addEventListener('resize', updateOffset); 

    return () => window.removeEventListener('resize', updateOffset);
  }, []);

const slideUp: {
  initial: {
    top: string;
    transition: {
      duration: number;
      ease: [number, number, number, number];
      delay: number;
    };
  };
  animate: {
    top: number;
    transition: {
      duration: number;
      ease: [number, number, number, number];
      delay: number;
    };
  };
  exit: {
    top: string;
    transition: {
      duration: number;
      ease: [number, number, number, number];
      delay: number;
    };
  };
} = {
  initial: {
    top: '-100vh',
    transition: {
      duration: 0.8,
      ease: bezier,
      delay: 1.5,
    },
  },
  animate: {
    top: 0,
    transition: {
      duration: 0.8,
      ease: bezier,
      delay: 0.8,
    },
  },
  exit: {
    top: '-100vh',
    transition: {
      duration: 0.8,
      ease: bezier,
      delay: 1.5,
    },
  },
}

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate="animate"
      exit="exit"
      className='navigation mr-16 pl-10 md:pl-20 pt-40 md:pt-0 flex justify-around items-center flex-col md:flex-row bg-green-500 z-30'
      style={{ left: offsetLeft }}
    > 
      {dimension.width > 0 && (
        <>
          <motion.ul
            initial="initial"
            animate="animate"
            exit="exit"
            className='w-[80%] sm:h-3/5 h-2/4 flex flex-col items-left justify-around z-40'
          >
            {Menu.map((item, index) => (
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
                  className='w-auto h-1/4 lg:text-8xl md:text-5xl sm:text-5xl text-2xl text-neutral-950 hover:text-neutral-50 font-extrabold sm:hover:translate-x-10 hover:translate-x-0 duration-500 flex justify-between items-center uppercase'
                >
                  {item.textNav}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
          <motion.ul
            initial="initial"
            animate="animate"
            exit="exit"
            className='sm:left-40 left-24 md:w-auto w-3/5 md:h-3/5 h-2/4 flex md:flex-col flex-row items-left justify-around z-40'
          >
            {Social.map((item, index) => (
              <motion.li
                key={index} 
                initial={{ opacity: 0, rotateX: '90deg' }}
                animate={{ opacity: 1, rotateX: '0deg' }}
                exit={{ opacity: 0, rotateX: '-90deg' }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className='w-full h-full flex justify-start items-center z-40'
              >
                <a
                  href={item.url}
                  target='_blank'
                  className='w-5/6 h-auto lg:text-8xl md:text-5xl text-3xl text-neutral-950 hover:text-neutral-50 font-extrabold hover:scale-110 duration-500 flex justify-between items-center uppercase'
                >
                  {item.icon}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </>
      )}
    </motion.div>
  )
}