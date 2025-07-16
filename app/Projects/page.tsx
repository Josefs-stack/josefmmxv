'use client';

import React, { useState } from 'react';
import ProjectPreview from '@/components/Work/ProjectPreview';
import Modal from '@/components/Work/Modal';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

type Project = {
  id: string;
  title: string;
  imageUrl: string;
  mobileImageUrl: string;
  github: string;
  website: string;
};

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Project) => {
    setModalProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalProject(null);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 , delay: 1.7 }}
      className="flex lg:flex-row flex-col work h-screen border-l-2 border-l-neutral-500 mx-16"
    >
      <div className="xl:w-1/3 lg:w-1/2 lg:h-full h-1/3 relative overflow-hidden border-x-2 border-neutral-500">
        <ProjectPreview project={activeProject} />
      </div>

      <div className="xl:w-2/3 lg:w-1/2 lg:h-full h-2/3 flex flex-col justify-around items-center">
        {projects.map((project) => (
          <button
            key={project.id}
            onMouseEnter={() => setActiveProject(project)}
            onMouseLeave={() => setActiveProject(null)}
            onClick={() => handleOpenModal(project)}
            className="
              group relative w-full h-1/5 flex items-center justify-center 
              border-y-2 border-y-neutral-500 cursor-pointer overflow-hidden
            "
          >
            <span 
              className="
                absolute inset-0 bg-neutral-500 
                scale-y-0 group-hover:scale-y-100 
                origin-center transition-transform duration-500 ease-in-out
                z-0
              "
            ></span>
            <span 
              className="
                relative z-10 text-neutral-500 group-hover:text-neutral-950
                transition-colors duration-500 uppercase md:text-5xl xl:text-6xl text-xl
              "
            >
              {project.title}
            </span>
          </button>
        ))}
      </div>

      <Modal
        project={modalProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </motion.div>
  );
}
