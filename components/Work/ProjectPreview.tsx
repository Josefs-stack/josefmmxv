'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Project = {
  videoUrl: string;
};

export default function ProjectPreview({ project }: { project: Project | null }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        {project ? (
          <motion.video
            key={project.videoUrl}
            src={project.videoUrl}
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        ) : (
          <motion.div
            key="placeholder"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
           <h1 className='text-neutral-500 text-9xl uppercase -rotate-90'>_Work</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
