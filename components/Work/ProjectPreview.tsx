'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Project = {
  imageUrl: string;
};

export default function ProjectPreview({ project }: { project: Project | null }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        {project ? (
          <motion.div
            key={project.imageUrl}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${project.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ) : (
          <motion.div
            key="placeholder"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h1 className="text-neutral-500 md:text-9xl text-6xl uppercase -rotate-90">
              _Work
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
