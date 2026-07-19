import React from 'react';
import { motion } from 'framer-motion';

const HeroContent = ({ onExploreClick }) => {
  return (
    <motion.div 
      className="relative z-10 flex flex-col items-center text-center w-full px-4 mt-2 sm:mt-4 md:mt-[60px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <svg className="w-3.5 h-3.5 text-[#c49859] mb-2 md:mb-3" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>

      <div className="flex items-center gap-3 mb-4 md:mb-5">
        <div className="h-[1px] w-6 md:w-10 bg-[#c49859] opacity-40"></div>
        <p className="text-[#b58953] uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-bold">
          Made for Your People
        </p>
        <div className="h-[1px] w-6 md:w-10 bg-[#c49859] opacity-40"></div>
      </div>

      <div className="flex flex-col items-center mb-2">
        <h1 className="font-playfair text-[#2b2724] text-[40px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-medium leading-none tracking-tight">
          Gifts That Speak
        </h1>
        <div className="flex items-center justify-center gap-1 mt-1">
          <h2 className="font-style-script text-[#b58953] text-[44px] sm:text-[52px] md:text-[68px] lg:text-[80px] font-normal" style={{ lineHeight: 0.9 }}>
            from the Heart
          </h2>
          <svg className="w-7 h-7 md:w-10 md:h-10 text-[#b58953] mt-2" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mb-3 md:mb-4 mt-2">
        <div className="h-[1px] w-12 md:w-24 bg-[#d4c3b3] opacity-0 hidden"></div>
      </div>

      <p className="text-[#3a3532] text-[13px] md:text-[15px] max-w-[320px] md:max-w-[460px] mb-6 md:mb-8 font-medium leading-[1.8]">
        Personalized gifts for birthdays, celebrations,
        memories, and every little moment that matters.
      </p>

      <motion.button
        className="bg-[#be9456] text-white px-8 md:px-9 py-[12px] rounded-[24px] text-[13px] md:text-[14px] font-bold tracking-[0.15em] shadow-md hover:bg-[#a57f49] transition-colors cursor-pointer pointer-events-auto flex items-center gap-2"
        onClick={onExploreClick}
      >
        EXPLORE GIFTS 
        <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </motion.button>

      <div className="relative z-20 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 md:gap-x-4 mt-[28px] md:mt-[50px] text-[#3a3532] text-[10px] font-bold uppercase tracking-[0.15em] max-w-[760px] mx-auto md:divide-x divide-[#b58953]/40 w-full px-2">
        
        <div className="flex flex-col items-center text-center gap-3 md:gap-4 md:px-6">
          <svg className="w-7 h-7 md:w-8 md:h-8 text-[#b58953]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H4.5a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 21V11.25m0 0h8.25m-8.25 0H3.75m11.25-3.75a3.375 3.375 0 1 0-6.75 0m6.75 0a3.375 3.375 0 1 1-6.75 0m6.75 0H3.75m8.25 0h8.25" />
          </svg>
          <span className="leading-[1.4]">Premium<br/>Quality</span>
        </div>

        <div className="flex flex-col items-center text-center gap-3 md:gap-4 md:px-6">
          <svg className="w-7 h-7 md:w-8 md:h-8 text-[#b58953]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          <span className="leading-[1.4]">Made<br/>With Love</span>
        </div>

        <div className="flex flex-col items-center text-center gap-3 md:gap-4 md:px-6">
          <svg className="w-7 h-7 md:w-8 md:h-8 text-[#b58953]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
          </svg>
          <span className="leading-[1.4]">Personalised<br/>Just For You</span>
        </div>

        <div className="flex flex-col items-center text-center gap-3 md:gap-4 md:px-6">
          <svg className="w-7 h-7 md:w-8 md:h-8 text-[#b58953]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
          </svg>
          <span className="leading-[1.4]">Safe & Fast<br/>Delivery</span>
        </div>

      </div>
    </motion.div>
  );
};

export default HeroContent;
