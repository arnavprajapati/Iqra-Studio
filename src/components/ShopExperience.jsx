import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { shopContainerVariants, shopItemVariants } from '../animations';
import CategoryCards from './CategoryCards';

const ShopExperience = () => {
  return (
    <motion.div
      className="relative z-40 w-full flex flex-col items-center pt-[270px] sm:pt-[290px] md:pt-[270px] lg:pt-[290px]"
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
