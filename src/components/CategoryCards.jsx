import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    image: '/assets/categories/for_her.png',
    title: 'For Her',
    categoryId: 'for-her',
    message: "Hi! I'm interested in gifts For Her"
  },
  {
    image: '/assets/categories/for_him.png',
    title: 'For Him',
    categoryId: 'for-him',
    message: "Hi! I'm interested in gifts For Him"
  },
  {
    image: '/assets/categories/bestie.png',
    title: 'For Best Friends',
    categoryId: 'for-bestfriends',
    message: "Hi! I'm interested in gifts For Best Friends",
    isContain: true
  },
  {
    image: '/assets/categories/birthday.png',
    title: 'For Birthdays',
    categoryId: 'for-birthdays',
    message: "Hi! I'm interested in gifts For Birthdays"
  },
  {
    image: '/assets/categories/anniversary.png',
    title: 'For Anniversaries',
    categoryId: 'for-anniversaries',
    message: "Hi! I'm interested in gifts For Anniversaries"
  },
  {
    image: '/assets/categories/farewell.png',
    title: 'For Farewells',
    categoryId: 'for-farewells',
    message: "Hi! I'm interested in gifts For Farewells"
  },
  {
    image: '/assets/categories/custom.png',
    title: 'For Memories',
    categoryId: 'for-memories',
    message: "Hi! I'm interested in gifts For Memories"
  },
  {
    image: '/assets/categories/hampers.png',
    title: 'For Little Moments',
    categoryId: 'for-little-moments',
    message: "Hi! I'm interested in gifts For Little Moments"
  }
];

const CategoryCards = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (cat) => {
    if (cat.categoryId) {
      navigate(`/category/${cat.categoryId}`);
    }
  };

  return (
    <section className="w-full bg-white py-20 px-6 shrink-0 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-custom text-4xl md:text-5xl font-semibold mb-3 tracking-tight text-[#1a1a2e]">
            Shop by Occasion
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 w-full place-items-center">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => handleCategoryClick(cat)}
            >
              <div className={`w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-300 border-[3px] border-transparent group-hover:border-[#facc15]/30 group-hover:scale-105 ${cat.isContain ? 'bg-white p-1' : ''}`}>
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className={`w-full h-full rounded-full transition-transform duration-500 group-hover:scale-110 ${cat.isContain ? 'object-contain' : 'object-cover'}`}
                />
              </div>
              <h3 className="mt-5 text-[15px] md:text-[17px] font-medium text-gray-800 group-hover:text-black transition-colors">
                {cat.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategoryCards;
