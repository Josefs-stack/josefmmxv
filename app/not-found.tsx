"use client"
import NotFoundScene from "@/components/NotFound/NotFoundScene";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="relative flex flex-col justify-center items-center overflow-hidden">
      <NotFoundScene />
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.5
        }}
        className="bottom-10 z-10"
      >
        <Link 
          href="/"
          className="px-4 py-2 w-70 h-14 flex items-center rounded-lg shadow hover:bg-neutral-50 hover:text-neutral-950 uppercase text-neutral-50 bg-neutral-950 text-center border-l-6 border-t-6 border-r-2 border-b-2 hover:border-l-1 hover:border-t-1 hover:border-r-6 hover:border-b-6 border-green-500 transition-all"
        >
          Volte a HomePage
        </Link>
      </motion.div>
    </main>
  );
}
