import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.2,
      staggerChildren: 0.1
    }
  }
};

const Header = () => {
  const location = useLocation();
  const showFullNav = location.pathname !== '/';
  const [scrollY, setScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = (e) => setScrollY(e.detail);
    window.addEventListener('page-scroll', handleScroll);
    return () => window.removeEventListener('page-scroll', handleScroll);
  }, []);

  const scrollStage = scrollY === 0 ? 0 : scrollY < 80 ? 1 : 2;

  const showAllLinks = scrollStage < 2 || isHovered;
  const showSearchFull = scrollStage < 2 || isSearchHovered;
  const isYellow = scrollStage > 0 || isHovered;

  return (
    <motion.header
      className={`absolute top-0 left-0 w-full z-50 px-6 md:px-12 transition-all duration-500 ease-in-out flex items-center justify-between pointer-events-none ${scrollStage > 0 ? 'pt-8 pb-4 md:py-4' : 'pt-14 pb-4 md:py-8'
        }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex-1 flex justify-start pointer-events-auto">
        {showFullNav && (
          <motion.div
            layout
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`hidden md:flex items-center overflow-hidden rounded-full p-1.5 transition-colors duration-300 ${isYellow ? 'bg-[#be9456] shadow-sm border border-transparent' : 'bg-white/60 backdrop-blur-md shadow-sm border border-white/40'}`}
          >
            <Link
              to="/shop"
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${isYellow ? 'text-white hover:bg-black/10' : 'text-gray-900 hover:text-black'}`}
            >
              Shop
            </Link>

            <AnimatePresence>
              {showAllLinks && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 'auto', opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="hidden md:flex items-center whitespace-nowrap origin-left"
                >
                  {['Gifts', 'Custom', 'Moments'].map((item) => (
                    <Link
                      key={item}
                      to={`/${item.toLowerCase()}`}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${isYellow ? 'text-white hover:bg-white/15' : 'text-gray-900 hover:text-black'}`}
                    >
                      {item}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      <div className="flex-1 flex justify-center pointer-events-auto">
        <div className={`transition-all duration-500 transform ${scrollStage > 0 ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100 pointer-events-auto'}`}>
          <Link to="/" className="font-style-script text-4xl sm:text-5xl md:text-6xl text-gray-900 tracking-tight whitespace-nowrap">
            Lunar pearl
          </Link>
        </div>
      </div>

      <div className="flex-1 flex justify-end pointer-events-auto">
        {showFullNav && (
          <div className="hidden md:flex items-center gap-4">
            <motion.div
              layout
              onMouseEnter={() => setIsSearchHovered(true)}
              onMouseLeave={() => setIsSearchHovered(false)}
              className={`relative hidden md:flex items-center overflow-hidden rounded-full transition-colors duration-300 ${scrollStage > 0 ? 'bg-white shadow-sm border border-gray-200' : 'bg-white/60 backdrop-blur-md shadow-sm border border-white/40'}`}
            >
              <svg className={`w-4 h-4 absolute left-[11px] z-10 pointer-events-none transition-colors duration-300 ${scrollStage > 0 ? 'text-gray-400' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <motion.input
                type="text"
                placeholder="Search gifts..."
                layout
                initial={false}
                animate={{ width: showSearchFull ? '12rem' : '2.25rem' }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`h-9 pl-8 py-2 bg-transparent text-sm outline-none transition-all duration-300 ${scrollStage > 0 ? 'text-gray-800 placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'} ${!showSearchFull ? 'pr-0 cursor-pointer placeholder-transparent' : 'pr-4 focus:cursor-text'}`}
              />
            </motion.div>

            <motion.div
              layout
              className={`flex items-center overflow-hidden rounded-full p-1.5 transition-colors duration-300 ${scrollStage > 0 ? 'bg-[#be9456] shadow-sm border border-transparent' : 'bg-white/60 backdrop-blur-md shadow-sm border border-white/40'}`}
            >
              <Link
                to="/cart"
                className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition-colors ${scrollStage > 0 ? 'text-white hover:bg-black/10' : 'text-gray-800 hover:text-black'}`}
              >
                Bag
                <span className="relative">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                  </svg>
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#1a1a2e] text-white text-[9px] font-bold rounded-full flex items-center justify-center leading-none">
                      {totalItems > 9 ? '9+' : totalItems}
                    </span>
                  )}
                </span>
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
