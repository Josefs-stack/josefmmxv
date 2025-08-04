'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './Navigation'

const Menu = () => {
  
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuText = isOpen ? "Fechar" : "Menu"
  const chars = menuText.split('')

  return (
    <>
      <motion.button  
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.5 }}
        onClick={toggleMenu}
        className='mt-10 w-26 h-16 flex text-green-500/50 hover:text-green-500 text-lg justify-center items-center transition-colors group overflow-hidden z-50 rotate-90 cursor-pointer'
      >
        {chars.map((char, index) => (
          <motion.span
            key={`${char}-${isOpen}`}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ 
              duration: 0.2, 
              delay: index * 0.1
            }}
            className="inline-block uppercase text-md"
          >
            {char}
          </motion.span>
        ))}
      </motion.button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <Navigation closeMenu={toggleMenu} />
        )}
      </AnimatePresence>
    </>
  )
}

export default Menu