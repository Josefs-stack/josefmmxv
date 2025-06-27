'use client';

'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ContactForm from '@/components/Contact/Formulario'; 

export default function Contact() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default';
          window.scrollTo(0, 0);
        }, 400);
      }
    )();
  }, []);

  return (
    <main className="h-full overflow-y-scroll scrollbar-hide contact">
      <div className='w-full md:h-full h-[150vh] md:pt-10 pt-20 px-10 flex flex-col justify-center items-center md:overflow-hidden'>
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 2 }}
          className='w-[90%] h-28 lg:text-7xl md:text-6xl sm:text-5xl text-[1.5rem] text-left font-bold md:mt-10 md:mb-4 mb-0 text-neutral-500 uppercase'
        >
          Vamos Conversar?
        </motion.h1>
        <motion.div
          initial={{ top: '-200%', opacity: 0 }}
          animate={{ top: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 2.2 }}
          className='w-full h-full flex justify-center items-center'
        >
          <ContactForm />
        </motion.div>
      </div>
    </main>
  );
}
