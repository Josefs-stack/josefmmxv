'use client'

import { motion } from "framer-motion";
import Menu from "./Menu";
import BackgroundMusic from "./BackgroundMusic";

export default function Header() {
    return (
        <motion.div
         className="w-16 h-full py-5 fixed flex flex-col justify-between items-center bottom-0 right-0 bg-noise border-l-2 border-neutral-50/50 z-50"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1.5 }}
        >
          <Menu />
          {/*<BackgroundMusic />*/}
        </motion.div>
    );
}