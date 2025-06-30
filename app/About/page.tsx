'use client';

import CV from "@/components/About/CV";
import Nav from "@/components/About/Nav";
import Skills from "@/components/About/Skills";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type SectionKey = "_Introdução" | "_História" | "_Skills" | "_CV";

export default function About() {
  const [activeSection, setActiveSection] = useState<SectionKey>("_Introdução");

  return (
    <main className="h-screen flex justify-center items-center z-10 overflow-hidden">
      <Nav setActive={setActiveSection} active={activeSection} />
      <AnimatePresence mode="wait">
        {activeSection === "_Introdução" && (
          <motion.div
            key="_Introdução"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-screen flex justify-center items-center top-0 left-0"
          >
            <h1 className="text-center text-4xl font-bold">Bem-vindo à Introdução</h1>
          </motion.div>
        )}
        {activeSection === "_História" && (
          <motion.div
            key="_História"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-screen flex justify-center items-center top-0 left-0"
          >
            <h1 className="text-4xl font-bold">História</h1>
          </motion.div>
        )}
        {activeSection === "_Skills" && (
          <motion.div
            key="_Skills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-screen flex justify-center md:items-center items-end top-0 left-0"
          >
            <Skills />
          </motion.div>
        )}
        {activeSection === "_CV" && (
          <motion.div
            key="_CV"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-screen flex justify-center items-center top-0 left-0"
          >
            <CV />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
