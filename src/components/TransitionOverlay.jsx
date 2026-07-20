import React from 'react';
import { motion } from 'framer-motion';
import { 
  overlayVariants, 
  giantTextContainerVariants, 
  letterVariants, 
  dotVariants, 
  taglineVariants 
} from '../animations';

const PERSPECTIVE = { transformPerspective: 900 };

const TransitionOverlay = ({ text = "Crafted Gifts", onComplete }) => {
  const words = text.split(" ");

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-screen z-50 flex flex-col items-center justify-center overflow-hidden pointer-events-none"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div 
        className="flex flex-col items-center"
        variants={giantTextContainerVariants}
        initial="hidden"
        animate={["visible", "shiftUp"]} // Run visible, then shiftUp
        style={PERSPECTIVE}
        onAnimationComplete={(definition) => {
          if (definition === "shiftUp" && onComplete) {
            onComplete();
          }
        }}
      >
        <div className="flex flex-row flex-nowrap whitespace-nowrap justify-center space-x-4 md:space-x-6 leading-[0.9]">
          {words.map((word, wordIndex) => (
            <div key={wordIndex} className="inline-block overflow-hidden pb-4 md:pb-8">
              {word.split("").map((letter, letterIndex) => {
                if (letter.toLowerCase() === 'i') {
                  return (
                    <div key={letterIndex} className="relative inline-block">
                      <motion.span
                        className="inline-block font-playfair font-medium text-[#2b2724]"
                        style={{ fontSize: 'clamp(3.5rem, 15vw, 20rem)', clipPath: 'inset(38% 0 0 0)' }}
                        variants={letterVariants}
                      >
                        {letter}
                      </motion.span>
                      
                      <motion.span
                        className="absolute inset-0 inline-block font-playfair font-medium text-[#2b2724]"
                        style={{ 
                          fontSize: 'clamp(3.5rem, 15vw, 20rem)', 
                          clipPath: 'inset(0 0 72% 0)',
                          transformOrigin: '50% 15%'
                        }}
                        variants={dotVariants}
                      >
                        {letter}
                      </motion.span>
                    </div>
                  );
                }

                return (
                  <motion.span
                    key={letterIndex}
                    className="inline-block font-playfair font-medium text-[#2b2724]"
                    style={{ fontSize: 'clamp(3.5rem, 15vw, 20rem)' }}
                    variants={letterVariants}
                  >
                    {letter}
                  </motion.span>
                );
              })}
            </div>
          ))}
        </div>
        
        <motion.p
          className="mt-6 md:mt-4 font-playfair text-[#3a3532] text-xl md:text-[1.8rem] w-full px-4 text-center mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.33, 1, 0.68, 1] }}
        >
          <span className="text-[#b58953]">Thoughtful</span> gifts for your <span className="text-[#b58953]">people &</span> moments.
        </motion.p>
      </motion.div>

    </motion.div>
  );
};

export default TransitionOverlay;
