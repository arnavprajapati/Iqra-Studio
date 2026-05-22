import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';

const Layout = () => {
  const location = useLocation();
  
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#fcfbf9] flex flex-col items-center justify-center border-[12px] border-[#6b7280]/20 box-border rounded-[32px] sm:m-2 sm:h-[calc(100vh-16px)] sm:w-[calc(100vw-16px)]">
      <Header />
      <AnimatePresence mode="wait">
        <Outlet key={location.pathname} />
      </AnimatePresence>
    </div>
  );
};

export default Layout;
