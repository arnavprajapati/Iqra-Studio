import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { shopContainerVariants, shopItemVariants } from '../animations';
import CategoryCards from './CategoryCards';

const ShopExperience = () => {
  return (
    <motion.div
      className="relative z-40 w-full flex flex-col items-center pt-[180px] sm:pt-[220px] md:pt-[260px] lg:pt-[280px]"
      variants={shopContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={shopItemVariants} className="w-full pb-32">
        <CategoryCards />
      </motion.div>
    </motion.div>
  );
};

export default ShopExperience;
