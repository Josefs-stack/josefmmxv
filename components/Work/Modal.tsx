'use client';

import { motion, AnimatePresence } from 'framer-motion';

type Project = {
  title: string;
  github: string;
  website: string;
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
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            key="modal-content"
            className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <h2 className="text-xl font-bold mb-4">{project.title}</h2>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-black text-white rounded"
              >
                GitHub
              </a>
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Website
              </a>
            </div>

            <button
              onClick={onClose}
              className="mt-4 text-gray-500 hover:text-black"
            >
              Fechar
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
