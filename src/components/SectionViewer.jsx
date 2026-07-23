import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
};

const SectionViewer = ({ activeView, children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeView}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default SectionViewer;
