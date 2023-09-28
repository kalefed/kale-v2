"use client";
import { motion } from "framer-motion";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 64 },
  visible: { opacity: 1, y: 0 },
};

export const FadeInUp = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 2 }}
      variants={fadeInUpVariants}
    >
      {children}
    </motion.div>
  );
};
