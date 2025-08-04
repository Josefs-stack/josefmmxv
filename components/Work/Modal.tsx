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
            className="relative bg-white max-w-md w-full p-6 md:p-8 rounded-2xl shadow-2xl flex flex-col items-center text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition"
            >
              <FaTimes size={18} />
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-neutral-800">
              {project.title}
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-neutral-900 text-white rounded-lg shadow hover:bg-neutral-700 transition"
              >
                GitHub
              </a>

              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition"
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
