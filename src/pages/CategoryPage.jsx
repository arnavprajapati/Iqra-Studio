import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { categoryProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { easing } from '../animations';

const WaIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const TAG_STYLES = {
  Bestseller: 'bg-[#be9456] text-white',
  Popular:    'bg-[#be9456] text-white',
  Trending:   'bg-amber-600 text-white',
  New:        'bg-[#2b2724] text-white',
  Premium:    'bg-[#2b2724] text-[#be9456]',
};

const ProductCard = ({ product, onAddToCart, index }) => {
  const [imgErr, setImgErr] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [added, setAdded] = useState(false);
  const tag = product.tag;
  const tagStyle = TAG_STYLES[tag] || 'bg-gray-100 text-gray-700';

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: easing }}
      className="group flex flex-col bg-white/90 backdrop-blur-[2px] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] border border-[#be9456]/15 shadow-[0_4px_20px_rgba(181,137,83,0.06)]"
    >
      <div className="relative overflow-hidden bg-[#faf8f5] aspect-square w-full">
        {tag && (
          <span className={`absolute top-2.5 left-2.5 z-20 text-[9px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full ${tagStyle}`}>
            {tag}
          </span>
        )}
        
        {/* Shimmer Placeholder */}
        {!imgLoaded && !imgErr && (
          <div className="absolute inset-0 bg-[#fbf9f6] animate-pulse z-10" />
        )}

        {imgErr ? (
          <div className="w-full h-full flex items-center justify-center relative z-0">
            <span className="text-4xl opacity-30">🎁</span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.07] relative z-0 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgErr(true)}
          />
        )}
      </div>

      <div className="flex flex-col flex-1 p-3 sm:p-4 md:p-5">
        <h3 className="font-playfair text-[#2b2724] text-[14px] sm:text-[15px] md:text-[17px] font-semibold leading-snug tracking-tight line-clamp-1">
          {product.name}
        </h3>
        {product.description && (
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] md:text-[13px] text-gray-500 leading-relaxed font-medium line-clamp-2">
            {product.description}
          </p>
        )}

        <div className="mt-auto pt-3 md:pt-4 flex items-center justify-between gap-1.5 md:gap-2">
          <span className="font-playfair font-bold text-[#2b2724] text-[15px] sm:text-[18px] md:text-[20px] tracking-tight">
            {product.price}
          </span>
          <button
            onClick={handleAdd}
            className={`flex-shrink-0 flex items-center justify-center gap-1 rounded-full outline-none border-none font-bold uppercase tracking-wider transition-colors duration-250 px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 text-[9px] sm:text-[10px] md:text-[11px] shadow-sm ${
              added ? 'bg-[#be9456]/20 text-[#be9456]' : 'bg-[#be9456] text-white hover:bg-[#a57f49]'
            }`}
          >
            <AnimatePresence mode="wait">
              {added ? (
                <motion.span
                  key="check"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-1"
                >
                  ✓ <span className="hidden sm:inline">Added</span>
                </motion.span>
              ) : (
                <motion.span
                  key="add"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-1"
                >
                  + <span className="hidden sm:inline">Add to Cart</span><span className="sm:hidden">Add</span>
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </motion.article>
  );
};

const EmptyState = ({ title, whatsapp }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.92 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, ease: easing }}
    className="col-span-full flex flex-col items-center justify-center py-20 text-center"
  >
    <div className="w-20 h-20 rounded-full bg-[#f5f3f0] flex items-center justify-center mb-5">
      <span className="text-4xl">🎁</span>
    </div>
    <h3 className="font-custom text-2xl font-semibold text-[#1a1a2e] tracking-tight mb-2">Coming Soon</h3>
    <p className="text-gray-400 text-sm max-w-xs leading-relaxed mb-8">
      We're carefully curating gifts for <strong className="text-[#1a1a2e] font-medium">{title}</strong>. Check back soon!
    </p>
    <motion.a
      href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(`Hi! I'm interested in gifts — ${title}`)}`}
      target="_blank" rel="noreferrer"
      className="inline-flex items-center gap-2 bg-[#1a1a2e] text-white px-7 py-3 rounded-full text-sm font-semibold shadow-lg"
      whileHover={{ scale: 1.04, transition: { duration: 0.15 } }}
      whileTap={{ scale: 0.96 }}
    >
      <WaIcon /> Ask on WhatsApp
    </motion.a>
  </motion.div>
);

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const data = categoryProducts[categoryId];
  const scrollRef = useRef(null);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('page-scroll', { detail: 0 }));
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [categoryId]);

  const handleScroll = (e) => {
    window.dispatchEvent(new CustomEvent('page-scroll', { detail: e.currentTarget.scrollTop }));
  };

  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart({ ...product, categoryId });
  };

  if (!data) {
    return (
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-transparent"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      >
        <div className="text-center">
          <p className="font-playfair text-2xl text-[#7a7267] mb-6">Category not found</p>
          <button onClick={() => navigate(-1)} className="bg-[#be9456] text-white px-8 py-3 rounded-full text-sm font-medium shadow-md hover:bg-[#a57f49]">← Go Back</button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden bg-transparent no-scrollbar"
      ref={scrollRef}
      onScroll={handleScroll}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.97, filter: 'blur(4px)', transition: { duration: 0.35 } }}
      transition={{ duration: 0.4, ease: easing }}
    >

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easing }}
        className="relative w-full flex flex-col items-center text-center pb-4 md:pb-6 px-6 pt-[146px] md:pt-[112px] z-30"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 1.08, filter: 'blur(6px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.1, ease: easing }}
          className="font-playfair text-[2.6rem] md:text-[3.4rem] font-medium text-[#2b2724] tracking-tight leading-[1.1] mb-2"
        >
          {data.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-[#7a7267] text-sm md:text-[15px] font-medium max-w-sm leading-relaxed"
        >
          {data.subtitle}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease: easing }}
          className="mt-5 h-[3px] w-16 rounded-full bg-[#be9456] origin-left"
        />
      </motion.div>

      <div className="w-full max-w-5xl mx-auto px-3 sm:px-6 md:px-8 pb-36 pt-4 md:pt-8">
        {data.products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {data.products.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                index={i}
              />
            ))}
          </div>
        ) : (
          <EmptyState title={data.title} whatsapp={data.whatsappNumber || '919876543210'} />
        )}
      </div>
    </motion.div>
  );
};

export default CategoryPage;
