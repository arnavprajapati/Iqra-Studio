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
  Bestseller: 'bg-[#facc15] text-[#1a1a1a]',
  Popular:    'bg-[#facc15] text-[#1a1a1a]',
  Trending:   'bg-amber-500 text-white',
  New:        'bg-[#1a1a2e] text-white',
  Premium:    'bg-[#1a1a2e] text-[#facc15]',
};

const ProductCard = ({ product, onAddToCart, index }) => {
  const [imgErr, setImgErr] = useState(false);
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
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: easing }}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden"
      style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}
    >
      <div className="relative overflow-hidden bg-[#f5f3f0]" style={{ aspectRatio: '4 / 3' }}>
        {tag && (
          <span className={`absolute top-3 left-3 z-10 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${tagStyle}`}>
            {tag}
          </span>
        )}
        {imgErr ? (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-5xl opacity-30">🎁</span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
            onError={() => setImgErr(true)}
          />
        )}
      </div>

      <div className="flex flex-col flex-1 p-4 md:p-5">
        <h3 className="font-custom font-semibold text-[#1a1a2e] text-[15px] md:text-[17px] leading-snug tracking-tight">
          {product.name}
        </h3>
        {product.description && (
          <p className="mt-2 text-[13px] md:text-[14px] text-gray-600 leading-relaxed line-clamp-2 font-medium">
            {product.description}
          </p>
        )}

        <div className="mt-auto pt-4 flex items-center justify-between gap-2">
          <span className="font-custom font-bold text-[#1a1a2e] text-[18px] md:text-[20px] tracking-tight">
            {product.price}
          </span>
          <button
            onClick={handleAdd}
            style={{
              background: added ? '#facc15' : '#1a1a2e',
              color: added ? '#1a1a1a' : '#ffffff',
              border: 'none',
              outline: 'none',
              padding: '10px 18px',
              borderRadius: '999px',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'background 0.25s, color 0.25s',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
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
                  ✓ Added
                </motion.span>
              ) : (
                <motion.span
                  key="add"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-1"
                >
                  + Add to Cart
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
        className="absolute inset-0 flex items-center justify-center bg-[#fbfaf8]"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      >
        <div className="text-center">
          <p className="font-custom text-2xl text-gray-400 mb-6">Category not found</p>
          <button onClick={() => navigate(-1)} className="bg-[#1a1a2e] text-white px-8 py-3 rounded-full text-sm font-medium">← Go Back</button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden bg-[#fbfaf8] no-scrollbar"
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
        className="w-full flex flex-col items-center text-center pt-24 md:pt-28 pb-8 px-6"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 1.08, filter: 'blur(6px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.1, ease: easing }}
          className="font-custom text-[2.6rem] md:text-[3.4rem] font-semibold text-[#1a1a2e] tracking-tight leading-[1.1] mb-2"
        >
          {data.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-gray-400 text-sm md:text-[15px] font-medium max-w-sm leading-relaxed"
        >
          {data.subtitle}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease: easing }}
          className="mt-5 h-[3px] w-16 rounded-full bg-[#facc15] origin-left"
        />
      </motion.div>

      <div className="w-full max-w-5xl mx-auto px-4 md:px-8 pb-28">
        {data.products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.4, ease: easing }}
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 md:hidden"
      >
        <motion.a
          href={`https://wa.me/${data.whatsappNumber || '919876543210'}?text=${encodeURIComponent(`Hi! I'm looking for gifts — ${data.title}`)}`}
          target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white text-[13px] font-semibold px-6 py-3 rounded-full shadow-xl"
          whileHover={{ scale: 1.04, transition: { duration: 0.15 } }}
          whileTap={{ scale: 0.95 }}
        >
          <WaIcon /> Chat on WhatsApp
        </motion.a>
      </motion.div>

    </motion.div>
  );
};

export default CategoryPage;
