import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TransitionOverlay from '../components/TransitionOverlay';
import ShopExperience from '../components/ShopExperience';

const CraftedGiftsPage = () => {
  const [showShop, setShowShop] = useState(false);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col w-full h-full"
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
