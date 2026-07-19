import React, { useEffect } from 'react';
import { motion, useAnimation, useTransform } from 'framer-motion';

import framedImg     from '../assets/images/framed.png';
import cardImg       from '../assets/images/card.png';
import keychainImg   from '../assets/images/keychain.png';
import giftBoxImg    from '../assets/images/gift_box.png';

import mugGold       from '../assets/images/coffee-mugs-love-heart-gold_ts.webp';
import elephantNero  from '../assets/images/elephant-pad-nero_ts.webp';
import dove          from '../assets/images/girard-ornaments-dove_ts.webp';
import elephantCognac from '../assets/images/key-ring-elephant-cognac_ts.webp';
import catWhite      from '../assets/images/resting-cat-white_ts.webp';
import owl           from '../assets/images/zoo-timer-omar-the-owl_ts.webp';

const EASE = [0.22, 1, 0.36, 1];

const FloatingCard = ({
  wrapperClass = '',  
  cardClass    = '',   
  children,
  entrance     = { opacity: 0, y: 30 }, 
  finalRotate  = 0,                       
  floatY       = [0, -10, 0],             
  floatDuration = 7,
  delay        = 0.35,
  mouseX,
  mouseY,
  px = 4,  
  py = 3,
  isTransitioning = false,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    let alive = true;

    const run = async () => {
      await controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        rotate: finalRotate,
        transition: { duration: 0.95, delay, ease: EASE },
      });

      if (alive && !isTransitioning) {
        controls.start({
          y: floatY,
          transition: {
            duration: floatDuration,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.5, 1],
          },
        });
      }
    };

    if (!isTransitioning) {
      run();
    } else {
      controls.stop();
      controls.start({
        opacity: 0,
        x: (Math.random() - 0.5) * 400,
        y: (Math.random() - 0.5) * 400,
        rotate: finalRotate + (Math.random() - 0.5) * 90,
        scale: 0.5,
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
      });
    }

    return () => { alive = false; };
  }, [isTransitioning]); 

  const pX = useTransform(mouseX, [-0.5, 0.5], [-px, px]);
  const pY = useTransform(mouseY, [-0.5, 0.5], [-py, py]);

  return (
    <motion.div className={wrapperClass} style={{ x: pX, y: pY }}>
      <motion.div className={cardClass} initial={entrance} animate={controls}>
        {children}
      </motion.div>
    </motion.div>
  );
};


const FloatingCollage = ({ mouseX, mouseY, isTransitioning }) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">

      <FloatingCard
        wrapperClass="absolute top-[6%] lg:top-[8%] left-[4%] lg:left-[6%] w-48 lg:w-52 hidden md:block z-10"
        cardClass="w-full shadow-soft bg-[#fbfaf8] p-3 pb-4 border border-gray-100"
        entrance={{ opacity: 0, x: -38, y: -22, rotate: -12 }}
        finalRotate={2}
        floatY={[0, -10, 0]}
        floatDuration={7}
        delay={0.35}
        mouseX={mouseX}
        mouseY={mouseY}
        isTransitioning={isTransitioning}
        px={6}
        py={3}
      >
        <img
          src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=600&q=80"
          alt="Friendship Memory"
          className="w-full aspect-[4/4] object-cover shadow-sm opacity-95"
        />
        <div className="flex flex-col items-center justify-center mt-3 mb-1">
          <span
            className="text-sm font-bold tracking-widest text-gray-800"
            style={{ fontFamily: "'Coming Soon', cursive, sans-serif" }}
          >
            MEMORIES
          </span>
          <span className="text-[10px] text-gray-500 font-medium tracking-widest mt-0.5">
            EST. 2026
          </span>
        </div>
      </FloatingCard>

      <FloatingCard
        wrapperClass="absolute top-[10%] lg:top-[12%] right-[5%] lg:right-[8%] w-56 lg:w-64 hidden md:block z-0"
        cardClass="w-full"
        entrance={{ opacity: 0, x: 42, y: -28, rotate: 11 }}
        finalRotate={4}
        floatY={[0, -12, 0]}
        floatDuration={8}
        delay={0.5}
        mouseX={mouseX}
        mouseY={mouseY}
        isTransitioning={isTransitioning}
        px={7}
        py={4}
      >
        <img
          src={framedImg}
          alt="Framed Picture"
          className="w-full h-auto object-cover rounded-sm opacity-95 shadow-soft"
        />
      </FloatingCard>

      <FloatingCard
        wrapperClass="absolute bottom-[20%] lg:bottom-[24%] left-[4%] lg:left-[6%] w-52 lg:w-56 hidden md:block z-0"
        cardClass="w-full"
        entrance={{ opacity: 0, x: -38, y: 42, rotate: -16 }}
        finalRotate={-8}
        floatY={[0, -14, 0]}
        floatDuration={9}
        delay={0.6}
        mouseX={mouseX}
        mouseY={mouseY}
        isTransitioning={isTransitioning}
        px={5}
        py={6}
      >
        <img src={cardImg} alt="Birthday Card" className="w-full h-auto object-cover" />
      </FloatingCard>

      <FloatingCard
        wrapperClass="absolute bottom-[18%] lg:bottom-[22%] left-[12%] lg:left-[14%] w-32 lg:w-36 hidden md:block z-20"
        cardClass="w-full mix-blend-multiply opacity-95"
        entrance={{ opacity: 0, y: 44, rotate: 9 }}
        finalRotate={0}
        floatY={[0, -8, 0]}
        floatDuration={6}
        delay={0.72}
        mouseX={mouseX}
        mouseY={mouseY}
        isTransitioning={isTransitioning}
        px={3}
        py={5}
      >
        <img src={keychainImg} alt="Keychain" className="w-full h-auto object-cover" />
      </FloatingCard>

      <FloatingCard
        wrapperClass="absolute bottom-[25%] lg:bottom-[28%] right-[10%] lg:right-[15%] w-48 lg:w-56 hidden md:block z-10"
        cardClass="w-full"
        entrance={{ opacity: 0, x: 38, y: 42, rotate: 9 }}
        finalRotate={3}
        floatY={[0, -12, 0]}
        floatDuration={8.5}
        delay={0.55}
        mouseX={mouseX}
        mouseY={mouseY}
        isTransitioning={isTransitioning}
        px={7}
        py={5}
      >
        <img
          src={giftBoxImg}
          alt="Gift Box"
          className="w-full h-auto object-cover shadow-soft"
        />
      </FloatingCard>

      <div className="absolute top-[-4%] left-[50%] -translate-x-1/2 w-32 md:hidden z-0">
        <FloatingCard
          wrapperClass="w-full"
          cardClass="w-full"
          entrance={{ opacity: 0, y: -28 }}
          finalRotate={170}
          floatY={[0, -8, 0]}
          floatDuration={7}
          delay={0.35}
          mouseX={mouseX}
          mouseY={mouseY}
          px={0}
          py={2}
        >
          <img src={elephantNero} alt="Elephant Nero" className="w-full h-auto object-contain" />
        </FloatingCard>
      </div>

      <FloatingCard
        wrapperClass="absolute top-[16%] left-[-15%] w-28 md:hidden z-0"
        cardClass="w-full"
        entrance={{ opacity: 0, x: -26, y: -16 }}
        finalRotate={0}
        floatY={[0, -10, 0]}
        floatDuration={8}
        delay={0.45}
        mouseX={mouseX}
        mouseY={mouseY}
        isTransitioning={isTransitioning}
        px={2}
        py={2}
      >
        <img src={catWhite} alt="Resting Cat" className="w-full h-auto object-contain" />
      </FloatingCard>

      <FloatingCard
        wrapperClass="absolute top-[15%] right-[-18%] w-32 md:hidden z-0"
        cardClass="w-full"
        entrance={{ opacity: 0, x: 26, y: -16 }}
        finalRotate={15}
        floatY={[0, -10, 0]}
        floatDuration={9}
        delay={0.5}
        mouseX={mouseX}
        mouseY={mouseY}
        isTransitioning={isTransitioning}
        px={2}
        py={2}
      >
        <img src={dove} alt="Dove Ornament" className="w-full h-auto object-contain" />
      </FloatingCard>

      <FloatingCard
        wrapperClass="absolute bottom-[28%] left-[-10%] w-24 md:hidden z-0"
        cardClass="w-full"
        entrance={{ opacity: 0, x: -22, y: 22 }}
        finalRotate={10}
        floatY={[0, -8, 0]}
        floatDuration={6}
        delay={0.6}
        mouseX={mouseX}
        mouseY={mouseY}
        isTransitioning={isTransitioning}
        px={2}
        py={2}
      >
        <img src={owl} alt="Owl Timer" className="w-full h-auto object-contain" />
      </FloatingCard>

      <FloatingCard
        wrapperClass="absolute bottom-[22%] right-[-18%] w-40 md:hidden z-0"
        cardClass="w-full"
        entrance={{ opacity: 0, x: 26, y: 26 }}
        finalRotate={-15}
        floatY={[0, -10, 0]}
        floatDuration={8.5}
        delay={0.65}
        mouseX={mouseX}
        mouseY={mouseY}
        isTransitioning={isTransitioning}
        px={2}
        py={2}
      >
        <img src={elephantCognac} alt="Elephant Cognac" className="w-full h-auto object-contain" />
      </FloatingCard>

      <div className="absolute bottom-[2%] left-[50%] -translate-x-1/2 w-32 md:hidden z-0">
        <FloatingCard
          wrapperClass="w-full"
          cardClass="w-full"
          entrance={{ opacity: 0, y: 28 }}
          finalRotate={0}
          floatY={[0, -8, 0]}
          floatDuration={7}
          delay={0.5}
          mouseX={mouseX}
          mouseY={mouseY}
          isTransitioning={isTransitioning}
          px={0}
          py={2}
        >
          <img src={mugGold} alt="Gold Heart Mug" className="w-full h-auto object-contain" />
        </FloatingCard>
      </div>

    </div>
  );
};

export default FloatingCollage;
