'use client';

import Nav from "@/components/About/Nav";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type SectionKey = "_Introdução" | "_História" | "_Tecnologias" | "_CV";

export default function About() {
  const [activeSection, setActiveSection] = useState<SectionKey>("_Introdução");

  return (
    <main className="h-screen flex justify-center items-center z-10">
      <Nav setActive={setActiveSection} active={activeSection} />
      <AnimatePresence mode="wait">
        {activeSection === "_Introdução" && (
          <motion.div
            key="_Introdução"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-screen flex justify-center items-center bg-neutral-900 text-white top-0 left-0"
          >
            <h1 className="text-4xl font-bold">Bem-vindo à Introdução</h1>
          </motion.div>
        )}
        {activeSection === "_História" && (
          <motion.div
            key="_História"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-screen flex justify-center items-center bg-neutral-800 text-white top-0 left-0"
          >
            <h1 className="text-4xl font-bold">História</h1>
          </motion.div>
        )}
        {activeSection === "_Tecnologias" && (
          <motion.div
            key="_Tecnologias"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-screen flex justify-center items-center bg-neutral-700 text-white top-0 left-0"
          >
            <h1 className="text-4xl font-bold">Tecnologias</h1>
          </motion.div>
        )}
        {activeSection === "_CV" && (
          <motion.div
            key="_CV"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-screen flex justify-center items-center bg-neutral-600 text-white top-0 left-0"
          >
            <h1 className="text-4xl font-bold">Currículo</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
