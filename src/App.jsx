import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Header from './components/Header';
import HeroContent from './components/HeroContent';
import FloatingCollage from './components/FloatingCollage';
import './index.css';

function App() {
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  const mouseX = useSpring(rawMouseX, { stiffness: 38, damping: 22, mass: 0.6 });
  const mouseY = useSpring(rawMouseY, { stiffness: 38, damping: 22, mass: 0.6 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    rawMouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawMouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      className="relative w-screen h-screen overflow-hidden bg-[#fcfbf9] flex flex-col items-center justify-center border-[12px] border-[#6b7280]/20 box-border rounded-[32px] sm:m-2 sm:h-[calc(100vh-16px)] sm:w-[calc(100vw-16px)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
    >
      <Header />
      <FloatingCollage mouseX={mouseX} mouseY={mouseY} />
      <HeroContent />
    </motion.div>
  );
}

export default App;