import React from 'react';
import { motion } from 'framer-motion';
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

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const NavLink = ({ text, to }) => {
  const navigate = useNavigate();
  return (
    <motion.a 
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
      }}
      variants={itemVariants}
      className="group relative cursor-pointer text-[11px] md:text-xs uppercase tracking-[0.15em] font-semibold text-gray-800"
    >
      {text}
      <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gray-900 transition-all duration-300 ease-out group-hover:w-full"></span>
    </motion.a>
  );
};

const Header = () => {
  const location = useLocation();
  const showFullNav = location.pathname !== '/';

  return (
    <motion.header 
      className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-8 grid grid-cols-3 items-center pointer-events-none"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Navigation */}
      <div className="hidden md:flex justify-start gap-8 pointer-events-auto">
        {showFullNav && ['Shop', 'Gifts', 'Custom', 'Moments'].map((item) => (
          <NavLink key={item} text={item} to={`/${item.toLowerCase()}`} />
        ))}
      </div>

      {/* Mobile Menu Toggle (Visible only on mobile) */}
      <div className="flex md:hidden justify-start pointer-events-auto">
        {showFullNav && <NavLink text="Menu" to="#" />}
      </div>

      {/* Center Logo */}
      <motion.div variants={itemVariants} className="flex justify-center pointer-events-auto">
        <Link to="/" className="font-custom text-2xl md:text-3xl font-bold text-gray-900 tracking-tight lowercase cursor-pointer">
          iqra crafted
        </Link>
      </motion.div>

      {/* Right Navigation */}
      <div className="hidden md:flex justify-end gap-8 pointer-events-auto">
        {showFullNav && ['Search', 'Cart', 'WhatsApp'].map((item) => (
          <NavLink key={item} text={item} to={`/${item.toLowerCase()}`} />
        ))}
      </div>

      {/* Mobile Cart */}
      <div className="flex md:hidden justify-end pointer-events-auto">
        {showFullNav && <NavLink text="Cart" to="/cart" />}
      </div>
    </motion.header>
  );
};

export default Header;
