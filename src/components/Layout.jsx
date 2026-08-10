import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
import MobileBottomNav from './MobileBottomNav';

import bgImage from '../assets/images/Serene beige fabric with delicate florals.png';

const Layout = () => {
  const location = useLocation();
  
  return (
    <div 
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col overflow-hidden bg-fixed"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="relative z-50 pointer-events-none">
        <Header />
      </div>
      <div className="relative w-full flex-1 flex flex-col min-h-0">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </div>
      <MobileBottomNav />
    </div>
  );
};

export default Layout;
