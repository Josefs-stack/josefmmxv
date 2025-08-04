'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

type Project = {
  title: string;
  github: string;
  website?: string;
};

type ModalProps = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({ project, isOpen, onClose }: ModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal-backdrop"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            key="modal-content"
            className="relative bg-neutral-950 w-82 h-50 p-6 md:p-8 border-l-8 border-t-8 border-r-2 border-b-2 border-green-500 shadow-2xl flex flex-col items-center justify-around text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-red-500/50 hover:text-red-500 hover:scale-125 cursor-pointer transition-all"
            >
              <FaTimes size={18} />
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-neutral-50">
              {project.title}
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 w-28 h-14 flex items-center rounded-lg shadow text-neutral-50 bg-neutral-950 border-l-6 border-t-6 border-r-2 border-b-2 hover:border-l-1 hover:border-t-1 hover:border-r-6 hover:border-b-6 border-green-500 transition-all"
              >
                GitHub
              </a>

              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 w-28 h-14 flex items-center rounded-lg shadow text-neutral-950 bg-neutral-50 border-l-6 border-t-6 border-r-2 border-b-2 hover:border-l-1 hover:border-t-1 hover:border-r-6 hover:border-b-6 border-green-500 transition-all"
                >
                  Website
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
