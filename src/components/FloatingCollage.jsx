import React from 'react';
import framedImg from '../assets/images/framed.png';
import cardImg from '../assets/images/card.png';
import keychainImg from '../assets/images/keychain.png';
import giftBoxImg from '../assets/images/gift_box.png';

const FloatingCollage = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">

      <div className="absolute top-[6%] lg:top-[8%] left-[4%] lg:left-[6%] w-48 lg:w-52 animate-float-1 shadow-soft bg-[#fbfaf8] p-3 pb-4 rotate-[2deg] hidden md:block border border-gray-100 z-10">
        <img
          src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=600&q=80"
          alt="Friendship Memory"
          className="w-full aspect-[4/4] object-cover shadow-sm opacity-95"
        />
        <div className="flex flex-col items-center justify-center mt-3 mb-1">
          <span className="text-sm font-bold tracking-widest text-gray-800" style={{ fontFamily: "'Coming Soon', cursive, sans-serif" }}>MEMORIES</span>
          <span className="text-[10px] text-gray-500 font-medium tracking-widest mt-0.5">EST. 2026</span>
        </div>
      </div>

      <div className="absolute top-[10%] lg:top-[12%] right-[5%] lg:right-[8%] w-56 lg:w-64 animate-float-2 shadow-soft rotate-[4deg] hidden md:block z-0">
        <img src={framedImg} alt="Framed Picture" className="w-full h-auto object-cover rounded-sm opacity-95" />
      </div>

      <div className="absolute bottom-[4%] lg:bottom-[8%] left-[4%] lg:left-[6%] w-52 lg:w-56 animate-float-3 shadow-soft rotate-[-8deg] hidden md:block z-0">
        <img src={cardImg} alt="Birthday Card" className="w-full h-auto object-cover" />
      </div>

      <div className="absolute bottom-[5%] lg:bottom-[8%] left-[24%] lg:left-[26%] w-32 lg:w-36 animate-float-4 hidden lg:block z-20 mix-blend-multiply opacity-95">
        <img src={keychainImg} alt="Keychain" className="w-full h-auto object-cover" />
      </div>

      <div className="absolute bottom-[8%] lg:bottom-[12%] right-[10%] lg:right-[15%] w-48 lg:w-56 animate-float-5 shadow-soft rotate-[3deg] hidden md:block z-10">
        <img src={giftBoxImg} alt="Gift Box" className="w-full h-auto object-cover" />
      </div>

    </div>
  );
};

export default FloatingCollage;
