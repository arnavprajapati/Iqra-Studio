import React from 'react';
import { motion } from 'framer-motion';

const DemoPage = ({ title }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.h1 
        className="font-custom text-5xl md:text-7xl font-bold text-gray-900 tracking-tight capitalize"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {title}
      </motion.h1>
    </div>
  );
};

export default DemoPage;
