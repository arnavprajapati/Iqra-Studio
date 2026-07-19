import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';

const Layout = () => {
  const location = useLocation();
  
  return (
    <div className="w-full min-h-screen bg-[#fcfaf8]">
      <div className="relative w-full h-full min-h-screen overflow-hidden bg-[#fcfaf8] flex flex-col rounded-[1.5rem] md:rounded-[2rem] border-[8px] md:border-[16px] border-[#e8e8e8]">
        <div className="relative z-50 pointer-events-none">
          <Header />
        </div>
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Layout;
