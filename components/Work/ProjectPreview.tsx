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

  const imageUrl = isLgUp
    ? project?.imageUrl
    : project?.mobileImageUrl;

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        {project ? (
          <motion.div
            key={imageUrl}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ) : (
          <motion.div
            key="placeholder"
            className="absolute  bg-green-500 inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-neutral-950 md:text-9xl text-4xl uppercase lg:-rotate-90">
              _Work
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
