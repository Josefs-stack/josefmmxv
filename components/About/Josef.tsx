'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CJ from '@/public/assets/caio.jpg';

export default function Josef() {
  return (
    <article className="mt-[20vh] md:mt-0 md:h-[80vh] h-[80vh] w-5/6 flex flex-col md:flex-row justify-around items-center px-4 overflow-y-scroll Scroll-none md:overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative md:w-[500px] md:h-[500px] h-0 flex-shrink-0 border-l-10 border-t-10 border-r-2 border-b-2 border-green-500 rounded-full overflow-hidden"
      >
        <Image
          src={CJ}
          alt="Caio José"
          fill
          className="object-cover object-top rounded-full"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="ml-5 sm:w-2/4 w-4/5 h-auto flex flex-col md:flex-row gap-12 items-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <h1 className="sm:text-5xl text-2xl text-neutral-300 leading-relaxed">
            Olá! Eu sou <br/> <span className="sm:text-5xl text-2xl text-green-500 font-semibold">Caio José !</span>
          </h1>
          
          <h2 className="sm:text-4xl text-lg text-neutral-300 leading-relaxed">  
            Desenvolvedor Front-end !
          </h2>
          <p className="sm:text-lg text-sm text-neutral-400">
            Sou apaixonado por criar experiências digitais incríveis, combinando design e funcionalidade.
            Com experiência em React, Next.js e Tailwind CSS, busco sempre aprender e evoluir.
          </p>
          <p className="sm:text-lg text-sm text-neutral-400">
            Meu objetivo é transformar ideias em interfaces bonitas, funcionais e impactantes.
            Fora do código, adoro aprender coisas novas, explorar tecnologias e criar projetos que unem design e desenvolvimento.
          </p>
        </motion.div>
      </motion.div>
    </article>
  );
}
