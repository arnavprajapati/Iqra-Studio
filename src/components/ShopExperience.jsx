import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { shopContainerVariants, shopItemVariants } from '../animations';

const ShopExperience = () => {
  return (
    <motion.div
      className="absolute inset-0 z-40 bg-[#fbfaf8] flex flex-col items-center overflow-y-auto overflow-x-hidden pt-[35vh]"
      variants={shopContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.nav
        className="w-full max-w-7xl px-8 py-6 flex flex-col md:flex-row items-center justify-between border-b border-gray-200"
        variants={shopItemVariants}
      >
        <div className="flex space-x-8 mb-4 md:mb-0">
          <Link to="/" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Shop</Link>
          <Link to="/home" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Crafted Gifts</Link>
          <Link to="/contact" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Contact</Link>
          <Link to="/country" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Country</Link>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Best Sellers</a>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search gifts..."
            className="bg-white border border-gray-300 rounded-full py-2 px-6 text-sm w-64 focus:outline-none focus:border-black"
          />
        </div>
      </motion.nav>

      <div className="w-full max-w-7xl px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div
            key={i}
            className="group cursor-pointer flex flex-col"
            variants={shopItemVariants}
          >
            <div className="w-full aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden mb-4 shadow-sm">
              <img
                src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=600&q=80`}
                alt="Gift placeholder"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80';
                }}
              />
            </div>
            <h3 className="font-semibold text-lg text-gray-900">Curated Item {i}</h3>
            <p className="text-gray-500 text-sm mt-1">$45.00</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ShopExperience;
