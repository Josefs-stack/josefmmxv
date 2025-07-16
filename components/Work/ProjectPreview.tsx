'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Project = {
  imageUrl: string; 
  mobileImageUrl: string;
};

function useIsLgUp() {
  const [isLgUp, setIsLgUp] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const handler = () => setIsLgUp(mediaQuery.matches);
    handler();
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return isLgUp;
}

export default function ProjectPreview({ project }: { project: Project | null }) {
  const isLgUp = useIsLgUp();

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        {project ? (
          <>
            {isLgUp ? (
              <motion.div
                key="desktop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url(${project.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            ) : (
              <motion.div
                key="mobile"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url(${project.mobileImageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            )}
          </>
        ) : (
          <motion.div
            key="placeholder"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h1 className="text-neutral-500 md:text-9xl text-6xl uppercase lg:-rotate-90">
              _Work
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
