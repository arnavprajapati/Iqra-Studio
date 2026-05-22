import React from 'react';

const HeroContent = () => {
  return (
    <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-6 mt-8 md:mt-10">
      <h1 className="font-custom text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-6 leading-[1.1] md:leading-[1.15] tracking-tight">
        Made for<br className="block md:hidden" /> Your<br className="hidden md:block" /> People
      </h1>
      <p className="hidden md:block text-gray-600 text-sm md:text-base lg:text-lg mb-8 md:mb-10 max-w-xs md:max-w-md lg:max-w-[480px] font-medium leading-relaxed">
        Personalized gifts for birthdays, celebrations, memories, and every little moment that matters.
      </p>
      <button className="bg-[#2a2a2a] text-white px-10 py-4 md:px-10 md:py-4 rounded-full text-[15px] md:text-sm font-medium tracking-wider hover:scale-105 hover:bg-black transition-all duration-300 shadow-lg cursor-pointer pointer-events-auto mt-2 md:mt-0">
        EXPLORE GIFTS
      </button>
    </div>
  );
};

export default HeroContent;
