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

const CategoryCardItem = ({ cat, idx, onClick }) => {
  const [imgLoaded, setImgLoaded] = React.useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="flex flex-col items-center cursor-pointer group"
      onClick={() => onClick(cat)}
    >
      <div className={`relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-300 border-[3px] border-transparent group-hover:border-[#be9456]/40 group-hover:scale-105 ${cat.isContain ? 'bg-white p-1' : ''}`}>
        {!imgLoaded && (
          <div className="absolute inset-0 bg-[#fbf9f6] animate-pulse z-10 rounded-full" />
        )}
        <img 
          src={cat.image} 
          alt={cat.title} 
          className={`w-full h-full rounded-full transition-all duration-500 group-hover:scale-110 relative z-0 ${cat.isContain ? 'object-contain' : 'object-cover'} ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImgLoaded(true)}
        />
      </div>
      <h3 className="mt-5 font-playfair text-[16px] md:text-[18px] font-medium text-[#3a3532] group-hover:text-[#b58953] transition-colors">
        {cat.title}
      </h3>
    </motion.div>
  );
};

const CategoryCards = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category.categoryId}`);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <svg className="w-3.5 h-3.5 text-[#c49859] mb-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>

          <div className="flex items-center gap-3 mb-5">
            <div className="h-[1px] w-6 md:w-10 bg-[#c49859] opacity-40"></div>
            <p className="text-[#b58953] uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-bold">
              Browse Categories
            </p>
            <div className="h-[1px] w-6 md:w-10 bg-[#c49859] opacity-40"></div>
          </div>

          <h2 className="font-playfair text-4xl md:text-5xl font-medium mb-3 tracking-tight text-[#2b2724]">
            Shop by Occasion
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 w-full place-items-center">
          {categories.map((cat, idx) => (
            <CategoryCardItem key={idx} cat={cat} idx={idx} onClick={handleCategoryClick} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategoryCards;
