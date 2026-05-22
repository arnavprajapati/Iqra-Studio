import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import HeroContent from '../components/HeroContent';
import FloatingCollage from '../components/FloatingCollage';

function HomePage() {
  const navigate = useNavigate();
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  const mouseX = useSpring(rawMouseX, { stiffness: 38, damping: 22, mass: 0.6 });
  const mouseY = useSpring(rawMouseY, { stiffness: 38, damping: 22, mass: 0.6 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    rawMouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawMouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleExploreClick = () => {
    navigate('/home');
  };

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
    >
      <FloatingCollage mouseX={mouseX} mouseY={mouseY} />
      <HeroContent onExploreClick={handleExploreClick} />
    </motion.div>
  );
}

export default HomePage;
