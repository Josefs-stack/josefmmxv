'use client';

import { motion } from "framer-motion";

type SectionKey = "_Introdução" | "_História" | "_Skills" | "_CV";

interface NavProps {
  setActive: (val: SectionKey) => void;
  active: SectionKey;
}

const navItems = [
  { textNav: '_Introdução', url: '/' },
  { textNav: '_História', url: '/' },
  { textNav: '_Skills', url: '/' },
  { textNav: '_CV', url: '/' },
];

export default function Nav({ setActive, active }: NavProps) {
  const navItems: SectionKey[] = ["_Introdução", "_História", "_Skills", "_CV"];

  return (
    <motion.ul
      className="absolute w-auto h-auto top-8 md:left-8 left-auto md:right-auto right-16 flex flex-col justify-around items-start z-30 gap-4 md:rotate-0 rotate-90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    >
      {navItems.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, rotateX: '90deg' }}
          animate={{ opacity: 1, rotateX: '0deg' }}
          transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
          className='cursor-pointer'
        >
          <motion.button
            initial={{ x: '-150%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 + index * 0.3 }}
            onClick={() => setActive(item)}
            className={`md:text-xl text-sm font-extrabold uppercase transition-all duration-500 cursor-pointer ${
              active === item
                ? 'text-white translate-x-4'
                : 'text-neutral-500 hover:text-white'
            }`}
          >
            {item}
          </motion.button>
        </motion.li>
      ))}
    </motion.ul>
  );
}