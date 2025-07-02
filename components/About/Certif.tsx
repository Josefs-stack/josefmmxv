'use client';

import { motion } from 'framer-motion';

export default function Certif() {
  const cursos = [
    { name: 'HTML Básico', org: 'Instituto Bradesco', year: '2021' },
    { name: 'CSS', org: 'Instituto Bradesco', year: '2021' },
    { name: 'Bootcamp Impulso JavaScript Evolution', org: 'DIO.me', year: '2022' },
    { name: 'Code Update TQI - Backend com Kotlin e Java', org: 'DIO.me', year: '2023' },
  ];

  const formacao = {
    name: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    org: 'IBMR',
    period: '2022 - 2025',
  };

  return (
    <article className="mt-8 h-4/5 w-5/6 flex flex-col justify-around items-center px-4 py-12 overflow-y-scroll md:overflow-hidden Scroll-none space-y-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
        className="w-full h-auto sm:text-6xl text-2xl text-center text-neutral-500 font-bold"
      >
        Certificados & Escolaridade
      </motion.h1>

      <div className="h-auto sm:h-1/2 grid grid-cols-1 md:grid-cols-2 gap-10 w-full mb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
          className="bg-neutral-500 shadow-md rounded-lg p-6"
        >
          <h2 className="text-center sm:text-4xl text-xl font-semibold mb-4 text-neutral-950">
            Cursos & Certificados
          </h2>
          <ul className="space-y-3 text-neutral-800">
            {cursos.map((curso) => (
              <li key={curso.name} className="flex flex-col">
                <span className="font-semibold">{curso.name}</span>
                <span className="text-sm text-neutral-700">
                  {curso.org} · {curso.year}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: 'easeOut' }}
          className="bg-neutral-500 shadow-md rounded-lg p-6 flex flex-col justify-between sm:pb-28"
        >
          <h2 className="text-center sm:text-4xl text-xl font-semibold mb-4 text-neutral-950">
            Formação Acadêmica
          </h2>
          <div className="text-neutral-800 space-y-2">
            <p className="font-semibold">{formacao.name}</p>
            <p className="text-sm text-neutral-800">
              {formacao.org} · {formacao.period}
            </p>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
