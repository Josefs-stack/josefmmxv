'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import DownloadButton from './DonwloadButton';

export default function CV() {
  return (
    <article className="h-full w-auto lg:pt-10 pt-32 flex flex-col items-center justify-around text-center p-8 space-y-6">
      
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" sm:text-5xl text-2xl font-bold flex justify-center sm:text-center text-left items-center text-green-500"
      >
        Clique <br/> para baixar <br/> ou escaneie o QR Code.
      </motion.h1>

      <DownloadButton />

      <motion.div
        className="w-1/3 flex justify-around items-center space-x-6 pt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <a
          href="https://linkedin.com/in/seu-perfil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-800 hover:text-green-500 hover:scale-110 text-4xl transition-all"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/seu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-800 hover:text-green-500  hover:scale-110 text-4xl transition-all"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/seu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-800 hover:text-green-500  hover:scale-110 text-4xl transition-all"
        >
          <FaTwitter />
        </a>
      </motion.div>
    </article>
  );
}