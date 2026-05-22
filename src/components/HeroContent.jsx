import React from 'react';
import { motion } from 'framer-motion';
import { headingVariants, paragraphVariants, ctaVariants } from '../animations';

const PERSPECTIVE = { transformPerspective: 900 };

const HeroContent = ({ onExploreClick }) => {
  return (
    <motion.div 
      className="relative z-10 flex flex-col items-center text-center max-w-2xl px-6 mt-8 md:mt-10"
      initial="hidden"
      animate="visible"
      exit="exit"
    >

      <motion.h1
        className="font-custom text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-6 leading-[1.1] md:leading-[1.15] tracking-tight"
        style={PERSPECTIVE}
        variants={headingVariants}
      >
        Made for<br className="block md:hidden" /> Your<br className="hidden md:block" /> People
      </motion.h1>

      <motion.p
        className="hidden md:block text-gray-600 text-sm md:text-base lg:text-lg mb-8 md:mb-10 max-w-xs md:max-w-md lg:max-w-[480px] font-medium leading-relaxed"
        style={PERSPECTIVE}
        variants={paragraphVariants}
      >
        Personalized gifts for birthdays, celebrations, memories,
        and every little moment that matters.
      </motion.p>

      <motion.button
        className="bg-[#2a2a2a] text-white px-10 py-4 md:px-10 md:py-4 rounded-full text-[15px] md:text-sm font-medium tracking-wider shadow-lg cursor-pointer pointer-events-auto mt-2 md:mt-0"
        style={PERSPECTIVE}
        variants={ctaVariants}
        onClick={onExploreClick}
        whileHover={{
          scale: 1.05,
          backgroundColor: '#111111',
          boxShadow: '0 24px 52px -8px rgba(0,0,0,0.42)',
          transition: { duration: 0.22, ease: 'easeOut' },
        }}
        whileTap={{
          scale: 0.97,
          transition: { duration: 0.1 },
        }}
      >
        EXPLORE GIFTS
      </motion.button>

    </motion.div>
  );
};

export default HeroContent;
