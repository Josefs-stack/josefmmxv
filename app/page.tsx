'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Preloader from '@/components/Preloader';
import dynamic from 'next/dynamic'

const Ball = dynamic(() => import('../components/Home/Ball'), {
  ssr: false, 
})

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 200);
    })();
  }, []);

  return (
    <main className="h-[100vh]">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      
      <div className="w-full h-full flex justify-center items-center relative">
        
        <div className="absolute w-full h-full z-10 flex flex-col items-center justify-center pointer-events-none overflow-hidden">
          <motion.h1 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 2 }}
            className="xl:text-[15rem] text-9xl text-neutral-500 text-center sm:rotate-0 uppercase -rotate-90" 
            style={{ WebkitTextStroke: '4px black' }}
          >
            Josef
          </motion.h1>
          <motion.h3 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 2 }} 
            className="text-4xl sm:h-auto h-0 sm:w-auto w-0 text-neutral-500 text-center overflow-hidden uppercase" 
            style={{ WebkitTextStroke: '2px black' }}
          >
            Creative Web Developer
          </motion.h3>
        </div>
        <div className="absolute w-full h-full">
          <Ball />
        </div>
        
      </div>
    </main>
  );
}
