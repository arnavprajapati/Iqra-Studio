import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

import mugGold from '../assets/images/coffee-mugs-love-heart-gold_ts.webp';
import mugCrimson from '../assets/images/coffee-mugs-love-heart-crimson_ts.webp';
import polaroidImg from '../assets/images/polaroid.png';

const PRODUCTS = [
  {
    id: 'mug',
    name: 'Heart-Engraved Mug',
    price: '₹599',
    variants: [
      { id: 'gold', name: 'Imperial Gold', image: mugGold, hex: '#be9456' },
      { id: 'crimson', name: 'Crimson Red', image: mugCrimson, hex: '#8b0000' }
    ]
  },
  {
    id: 'polaroid',
    name: 'Retro Polaroid Frame',
    price: '₹349',
    variants: [
      { id: 'classic', name: 'Classic White', image: polaroidImg, hex: '#f3f4f6' }
    ]
  }
];

const GiftCustomizer = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [selectedVariant, setSelectedVariant] = useState(PRODUCTS[0].variants[0]);
  const [customText, setCustomText] = useState('');
  const [isAdded, setIsAdded] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleProductChange = (prod) => {
    setSelectedProduct(prod);
    setSelectedVariant(prod.variants[0]);
  };

  const handleTextChange = (e) => {
    const text = e.target.value;
    setCustomText(text);
    const lower = text.toLowerCase().trim();
    if (lower === 'love' || lower === 'lunar' || lower === 'heart' || lower === 'easter') {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 5000);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: `custom-${selectedProduct.id}-${selectedVariant.id}`,
      name: `Customized ${selectedProduct.name}`,
      description: `Engraving: "${customText || 'No Engraving'}" (${selectedVariant.name})`,
      price: selectedProduct.price,
      image: selectedVariant.image,
      categoryId: 'custom-gifting'
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const whatsappMessage = `Hi Lunar Pearl! I would like to order a customized ${selectedProduct.name} (${selectedVariant.name}) with the engraving: "${customText || 'Hello'}"`;
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="customizer-sandbox" className="w-full max-w-6xl mx-auto px-6 pt-16 pb-36 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-playfair text-[#2b2724] text-3xl md:text-5xl font-medium tracking-tight">
          Interactive Design Studio
        </h2>
        <p className="text-[#7a7267] text-sm md:text-base font-medium max-w-lg mx-auto mt-3 leading-relaxed">
          See your personal touch instantly. Customize the details and view a live preview of your custom gift.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Preview Frame (Left Pane) */}
        <div className="lg:col-span-7 flex justify-center relative w-full aspect-square md:aspect-[4/3] bg-white/40 backdrop-blur-[2px] rounded-3xl p-6 md:p-12 border border-[#be9456]/10 shadow-[0_24px_50px_rgba(181,137,83,0.06)] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedProduct.id}-${selectedVariant.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center pointer-events-none"
            >
              {/* Product Background Image */}
              <img
                src={selectedVariant.image}
                alt={selectedVariant.name}
                className="w-full h-full object-contain drop-shadow-[0_16px_32px_rgba(43,39,36,0.12)]"
              />

              {/* Live Engraving Overlay Layer */}
              {selectedProduct.id === 'mug' && (
                <div
                  className="absolute text-center select-none"
                  style={{
                    top: '51%',
                    left: '49%',
                    transform: 'translate(-50%, -50%) rotate(-4deg) skewX(-4deg)',
                    width: '120px',
                    fontFamily: "'Style Script', cursive",
                    color: selectedVariant.id === 'gold' ? '#3e2a0f' : '#faebd7',
                    opacity: 0.78,
                    textShadow: selectedVariant.id === 'gold' 
                      ? '1px 1px 1px rgba(250,235,215,0.2), -0.5px -0.5px 0.5px rgba(0,0,0,0.5)'
                      : '0.5px 0.5px 1px rgba(0,0,0,0.6)',
                    lineHeight: 0.9,
                    pointerEvents: 'none'
                  }}
                >
                </div>
              )}

              {selectedProduct.id === 'polaroid' && (
                <div
                  className="absolute text-center select-none animate-pulse-subtle"
                  style={{
                    bottom: '10%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '150px',
                    fontFamily: "'Style Script', cursive",
                    color: '#2b2724',
                    opacity: 0.9,
                    pointerEvents: 'none'
                  }}
                >
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Floating Hearts Easter Egg */}
          <AnimatePresence>
            {showEasterEgg && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      scale: 0.2,
                      x: `${20 + Math.random() * 60}%`,
                      y: '90%'
                    }}
                    animate={{
                      opacity: [0, 0.9, 0.9, 0],
                      scale: [0.2, 1, 1.2, 0.8],
                      y: '-10%',
                      x: `${20 + Math.random() * 60 + (Math.random() - 0.5) * 20}%`
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 2.5 + Math.random() * 1.5,
                      ease: 'easeOut',
                      delay: i * 0.15
                    }}
                    className="absolute text-[#be9456] text-xl"
                  >
                    💛
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#be9456] text-white text-[11px] font-bold uppercase tracking-[0.1em] px-4 py-2 rounded-full shadow-lg pointer-events-none"
                >
                  ✨ Secret Unlocked: Made with love! 💛
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Configuration Controls (Right Pane) */}
        <div className="lg:col-span-5 flex flex-col">
          <span className="text-[#be9456] text-[11px] font-bold uppercase tracking-[0.2em] mb-2">
            Design Sandbox
          </span>
          <h3 className="font-playfair text-[#2b2724] text-2xl md:text-3xl font-medium tracking-tight mb-6">
            Configure Your Item
          </h3>

          {/* Select Product */}
          <div className="mb-6">
            <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#7a7267] block mb-3">
              1. Choose Product
            </span>
            <div className="grid grid-cols-2 gap-3">
              {PRODUCTS.map((prod) => (
                <button
                  key={prod.id}
                  onClick={() => handleProductChange(prod)}
                  className={`px-4 py-3 rounded-xl border text-[13px] font-semibold text-left transition-all duration-300 ${
                    selectedProduct.id === prod.id
                      ? 'border-[#be9456] bg-[#be9456]/5 text-[#2b2724] shadow-sm'
                      : 'border-gray-200 hover:border-gray-300 text-gray-500 bg-white/30'
                  }`}
                >
                  <p className="truncate">{prod.name}</p>
                  <p className="text-[11px] text-[#be9456] font-medium mt-0.5">{prod.price}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Variants Swatches */}
          {selectedProduct.variants.length > 1 && (
            <div className="mb-6">
              <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#7a7267] block mb-3">
                2. Style Variant: <span className="text-[#2b2724]">{selectedVariant.name}</span>
              </span>
              <div className="flex gap-3">
                {selectedProduct.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    style={{ backgroundColor: v.hex }}
                    className={`w-8 h-8 rounded-full border transition-all duration-200 ${
                      selectedVariant.id === v.id
                        ? 'border-gray-900 scale-110 shadow-md ring-2 ring-[#be9456]/20 ring-offset-2'
                        : 'border-transparent opacity-80 hover:opacity-100'
                    }`}
                    title={v.name}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Engraving Input */}
          <div className="mb-8">
            <label
              htmlFor="engraving-text"
              className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#7a7267] block mb-3"
            >
              {selectedProduct.id === 'polaroid' ? '2. Polaroid Caption' : '3. Engraving Text'}
            </label>
            <div className="relative">
              <input
                id="engraving-text"
                type="text"
                value={customText}
                onChange={handleTextChange}
                placeholder={selectedProduct.id === 'polaroid' ? 'e.g. Memory Frame' : 'e.g. John Doe'}
                maxLength={selectedProduct.id === 'polaroid' ? 20 : 12}
                className="w-full h-11 px-4 bg-white/80 border border-gray-200 rounded-xl text-sm font-medium outline-none focus:border-[#be9456] transition-all duration-300"
              />
              <span className="absolute right-3 top-3 text-[10px] text-gray-400 font-bold tracking-widest uppercase">
                {customText.length} / {selectedProduct.id === 'polaroid' ? 20 : 12}
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleAddToCart}
              className={`w-full h-12 rounded-full font-bold text-sm tracking-[0.15em] uppercase flex items-center justify-center gap-2 border border-transparent shadow-sm transition-all duration-300 ${
                isAdded
                  ? 'bg-[#be9456]/20 text-[#be9456]'
                  : 'bg-[#be9456] hover:bg-[#a57f49] text-white cursor-pointer'
              }`}
            >
              {isAdded ? '✓ Added to Bag' : 'Add Custom Item to Bag'}
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full h-12 rounded-full font-bold text-sm tracking-[0.15em] uppercase flex items-center justify-center gap-2 border border-[#be9456] text-[#be9456] bg-white/60 hover:bg-[#be9456]/5 transition-colors duration-300"
            >
              Order via WhatsApp
            </a>

            <button
              onClick={() => navigate('/home')}
              className="mt-2 text-[#be9456] text-[11px] md:text-[12px] font-bold tracking-[0.15em] uppercase hover:underline cursor-pointer flex items-center justify-center gap-1.5"
            >
              Explore Full Collection
              <svg className="w-3.5 h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftCustomizer;
