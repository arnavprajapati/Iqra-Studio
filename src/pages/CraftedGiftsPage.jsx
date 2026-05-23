import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TransitionOverlay from '../components/TransitionOverlay';
import ShopExperience from '../components/ShopExperience';

const CraftedGiftsPage = () => {
  const [showShop, setShowShop] = useState(false);

  const handleScroll = (e) => {
    window.dispatchEvent(new CustomEvent('page-scroll', { detail: e.currentTarget.scrollTop }));
  };

  return (
    <motion.div 
      className="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden bg-transparent no-scrollbar"
      onScroll={handleScroll}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <TransitionOverlay onComplete={() => setShowShop(true)} />
      
      <AnimatePresence>
        {showShop && <ShopExperience key="shop-experience" />}
      </AnimatePresence>
    </motion.div>
  );
};

export default CraftedGiftsPage;
