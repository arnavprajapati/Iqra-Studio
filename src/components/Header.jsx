import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate, Link } from 'react-router-dom';

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

  useEffect(() => {
    const handleScroll = (e) => setScrollY(e.detail);
    window.addEventListener('page-scroll', handleScroll);
    return () => window.removeEventListener('page-scroll', handleScroll);
  }, []);

  const scrollStage = scrollY === 0 ? 0 : scrollY < 80 ? 1 : 2;

  const showAllLinks = scrollStage < 2 || isHovered;
  const isYellow = scrollStage > 0 || isHovered;

  return (
    <motion.header
      className={`absolute top-0 left-0 w-full z-50 px-6 md:px-12 transition-all duration-500 ease-in-out flex items-center justify-between pointer-events-none ${scrollStage > 0 ? 'py-4' : 'py-8'
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
            className={`flex items-center overflow-hidden rounded-full p-1.5 transition-colors duration-300 ${isYellow ? 'bg-[#facc15] shadow-sm' : 'bg-transparent'}`}
          >
            <Link
              to="/shop"
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${isYellow ? 'text-black hover:bg-black/10' : 'text-gray-800 hover:text-black'}`}
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
                  className="flex items-center whitespace-nowrap origin-left"
                >
                  {['Gifts', 'Custom', 'Moments'].map((item) => (
                    <Link
                      key={item}
                      to={`/${item.toLowerCase()}`}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isYellow ? 'text-black hover:bg-black/10' : 'text-gray-800 hover:text-black'}`}
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
          <Link to="/" className="font-custom text-3xl md:text-4xl font-bold text-gray-900 tracking-tight lowercase">
            Lunar pearl
          </Link>
        </div>
      </div>

      <div className="flex-1 flex justify-end">
        {showFullNav && (
          <div className="flex items-center gap-4">
            <div className="relative hidden md:flex items-center">
              <svg className="w-4 h-4 text-gray-400 absolute left-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input
                type="text"
                placeholder="Search gifts..."
                className={`pl-9 pr-4 py-2 border rounded-full text-sm outline-none w-48 focus:border-gray-400 transition-colors ${scrollStage > 0 ? 'bg-white border-gray-200' : 'bg-transparent border-gray-300'}`}
              />
            </div>

            <motion.div
              layout
              className={`flex items-center overflow-hidden rounded-full p-1.5 transition-colors duration-300 ${scrollStage > 0 ? 'bg-[#facc15] shadow-sm' : 'bg-transparent'}`}
            >
              <Link
                to="/cart"
                className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition-colors ${scrollStage > 0 ? 'text-black hover:bg-black/10' : 'text-gray-800 hover:text-black'}`}
              >
                Bag
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
