import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import HeroContent from '../components/HeroContent';

import bgImage from '../assets/images/Serene beige fabric with delicate florals.png';
import imgBouquet from '../assets/images/elegant gift arrangement with roses.png';
import potli from '../assets/images/wrapped gift and sprig.png';

const OptimizedImg = ({ src, alt, className, style, loading = "lazy", fetchPriority = "auto", ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <motion.img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      onLoad={() => setIsLoaded(true)}
      className={`${className} transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={style}
      {...props}
    />
  );
};

function HomePage() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/home');
  };

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-start md:justify-center pt-[105px] sm:pt-[115px] md:pt-0 pointer-events-auto overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <OptimizedImg 
          src={bgImage} 
          alt="Serene Beige Fabric with Florals" 
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
      </div>

      <OptimizedImg
        src={imgBouquet}
        alt="Elegant Gift Arrangement with Roses"
        loading="lazy"
        className="hidden md:block absolute bottom-[-10%] left-[-5%] w-[350px] lg:w-[500px] aspect-square object-cover z-0 pointer-events-none"
        style={{
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 75%)',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 75%)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      <OptimizedImg
        src={potli}
        alt="Potli Gift Box"
        loading="lazy"
        className="hidden md:block absolute bottom-[-10%] right-[-6%] w-[350px] lg:w-[500px] aspect-square object-contain z-0 pointer-events-none"
        style={{
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 75%)',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 75%)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      <HeroContent onExploreClick={handleExploreClick} />
    </motion.div>
  );
}

export default HomePage;
