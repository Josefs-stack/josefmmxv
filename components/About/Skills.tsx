'use client';

import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
} from 'react-icons/si';
import { FaPeopleArrows, FaComments, FaLightbulb } from 'react-icons/fa';

export default function Skills() {
  const skills = [
    {
      category: 'Linguagens & Marcação',
      items: [
        { name: 'HTML5', icon: SiHtml5 },
        { name: 'CSS3', icon: SiCss3 },
        { name: 'JavaScript (ES6+)', icon: SiJavascript },
        { name: 'TypeScript', icon: SiTypescript },
      ],
    },
    {
      category: 'Frameworks & Bibliotecas',
      items: [
        { name: 'React.js', icon: SiReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Framer Motion', icon: SiFramer },
      ],
    },
    {
      category: 'Ferramentas & Deploy',
      items: [
        { name: 'Git', icon: SiGit },
        { name: 'GitHub', icon: SiGithub },
        { name: 'Vercel', icon: SiVercel },
        { name: 'Figma', icon: SiFigma },
      ],
    },
    {
      category: 'Soft Skills',
      items: [
        { name: 'Trabalho em Equipe', icon: FaPeopleArrows },
        { name: 'Comunicação', icon: FaComments },
        { name: 'Resolução de Problemas', icon: FaLightbulb },
      ],
    },
  ];

  return (
    <article className="h-full w-full flex flex-col justify-center items-center px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
        className="text-4xl text-neutral-500 font-bold mb-12"
      >
        Skills & Ferramentas
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-full">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8 + index * 0.3,
              duration: 0.8,
              ease: 'easeOut',
            }}
            className="bg-neutral-500 shadow-md rounded-lg p-6"
          >
            <h2 className="text-xl font-semibold mb-4 text-neutral-950">{skill.category}</h2>
            <ul className="space-y-3 text-neutral-800 ">
              {skill.items.map(({ name, icon: Icon }) => (
                <li key={name} className="flex items-center gap-3">
                  <Icon className="text-2xl" />
                  {name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </article>
  );
}
