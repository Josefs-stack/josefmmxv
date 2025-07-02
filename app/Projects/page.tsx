'use client';

import React, { useState } from 'react';
import ProjectPreview from '@/components/Work/ProjectPreview';
import Modal from '@/components/Work/Modal';
import { projects } from '../data/projects';

type Project = {
  id: string;
  title: string;
  videoUrl: string;
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
    <div className="flex sm:flex-row flex-col work h-screen border-l-2 border-l-neutral-500 ml-16">
      <div className="w-1/2 h-full relative overflow-hidden border-r-2 border-neutral-500">
        <ProjectPreview project={activeProject} />
      </div>

      <div className="w-1/2 h-full flex flex-col justify-center items-center bg-gray-100">
        {projects.map((project) => (
          <button
            key={project.id}
            onMouseEnter={() => setActiveProject(project)}
            onMouseLeave={() => setActiveProject(null)}
            onClick={() => handleOpenModal(project)}
            className="w-full h-1/5 border border-neutral-500 transition"
          >
            {project.title}
          </button>
        ))}
      </div>

      <Modal
        project={modalProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
