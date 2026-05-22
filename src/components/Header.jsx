import React from 'react';
import { motion } from 'framer-motion';
import { logoVariants } from '../animations';

const Header = () => {
  return (
    <div className="absolute top-20 md:top-10 w-full text-center z-50">
      <motion.span
        className="font-custom text-2xl md:text-3xl font-bold text-gray-900 tracking-tight lowercase"
        variants={logoVariants}
        initial="hidden"
        animate="visible"
      >
        iqra crafted.
      </motion.span>
    </div>
  );
};

export default Header;
