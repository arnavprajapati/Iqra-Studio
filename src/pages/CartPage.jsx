import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { easing } from '../animations';

const WHATSAPP = '916306049213';

const WaIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const CartItem = ({ item, onRemove, onQty }) => (
  <motion.div
    layout
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 40, transition: { duration: 0.25 } }}
    transition={{ duration: 0.35, ease: easing }}
    className="flex items-center gap-4 bg-white rounded-2xl p-4"
    style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
  >
    {/* Image */}
    <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#f5f3f0] shrink-0">
      {item.image ? (
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-2xl">🎁</div>
      )}
    </div>

    {/* Info */}
    <div className="flex-1 min-w-0">
      <h3 className="font-custom font-semibold text-[#1a1a2e] text-[17px] leading-snug truncate">
        {item.name}
      </h3>
      {item.description && (
        <p className="text-[14px] font-semibold text-gray-400 mt-0.5 truncate">{item.description}</p>
      )}
      <p className="font-custom font-bold text-[#1a1a2e] text-[16px] mt-1">{item.price}</p>
    </div>

    {/* Qty + Remove */}
    <div className="flex flex-col items-end gap-2 shrink-0">
      <button
        onClick={() => onRemove(item.id, item.categoryId)}
        className="text-gray-300 hover:text-red-400 transition-colors text-xl leading-none font-light"
      >×</button>
      <div className="flex items-center gap-1 bg-[#f5f3f0] rounded-full px-2 py-1">
        <button
          onClick={() => onQty(item.id, item.categoryId, item.qty - 1)}
          className="w-7 h-7 flex items-center justify-center text-[#1a1a2e] font-bold text-base hover:bg-[#facc15] rounded-full transition-colors"
        >−</button>
        <span className="text-[#1a1a2e] font-semibold text-sm w-5 text-center">{item.qty}</span>
        <button
          onClick={() => onQty(item.id, item.categoryId, item.qty + 1)}
          className="w-7 h-7 flex items-center justify-center text-[#1a1a2e] font-bold text-base hover:bg-[#facc15] rounded-full transition-colors"
        >+</button>
      </div>
    </div>
  </motion.div>
);

const EmptyCart = ({ onShop }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.92 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: easing }}
    className="flex flex-col items-center justify-center py-24 text-center"
  >
    <div className="w-24 h-24 rounded-full bg-[#f5f3f0] flex items-center justify-center mb-5 text-5xl">🛍️</div>
    <h3 className="font-custom text-2xl font-semibold text-[#1a1a2e] tracking-tight mb-2">Cart is Empty</h3>
    <p className="text-gray-400 text-xl max-w-xs leading-relaxed mb-8">
      No items added yet — let's go find the perfect gift!
    </p>
    <motion.button
      onClick={onShop}
      className="bg-[#1a1a2e] text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wide shadow-lg"
      whileTap={{ scale: 0.96 }}
    >
      Browse Gifts
    </motion.button>
  </motion.div>
);

const CartPage = () => {
  const { cart, removeFromCart, updateQty, clearCart, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('page-scroll', { detail: 0 }));
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, []);

  const handleScroll = (e) => {
    window.dispatchEvent(new CustomEvent('page-scroll', { detail: e.currentTarget.scrollTop }));
  };

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;
    const itemLines = cart.map(i => `• ${i.name} × ${i.qty}  —  ${i.price}`).join('\n');
    const total = `₹${totalPrice.toLocaleString('en-IN')}`;
    const msg = encodeURIComponent(
      `Hi! I'd like to place an order:\n\n${itemLines}\n\nTotal: ${total}\n\nPlease confirm. 🙏`
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
  };

  return (
    <motion.div
      ref={scrollRef}
      onScroll={handleScroll}
      className="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden bg-[#fbfaf8] no-scrollbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.97, filter: 'blur(4px)', transition: { duration: 0.3 } }}
      transition={{ duration: 0.35, ease: easing }}
    >
      {/* ── Header ── */}
      <div className="w-full flex flex-col items-center text-center pt-24 md:pt-28 pb-6 px-6">
        <motion.h1
          initial={{ opacity: 0, scale: 1.06, filter: 'blur(5px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.1, ease: easing }}
          className="font-custom text-[2.4rem] md:text-[3rem] font-semibold text-[#1a1a2e] tracking-tight leading-tight mb-1"
        >
          Your Cart
        </motion.h1>

        {totalItems > 0 && (
          <p className="text-gray-400 text-sm font-medium mt-1">
            {totalItems} {totalItems === 1 ? 'item' : 'items'}
          </p>
        )}

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.25, ease: easing }}
          className="mt-4 h-[3px] w-14 rounded-full bg-[#facc15] origin-left"
        />
      </div>

      {/* ── Content ── */}
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 pb-32">
        {cart.length === 0 ? (
          <EmptyCart onShop={() => navigate('/home')} />
        ) : (
          <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
            <div className="flex-1 w-full">
            {/* Items */}
            <AnimatePresence mode="popLayout">
              <div className="flex flex-col gap-3">
                {cart.map(item => (
                  <CartItem
                    key={`${item.id}-${item.categoryId}`}
                    item={item}
                    onRemove={removeFromCart}
                    onQty={updateQty}
                  />
                ))}
              </div>
            </AnimatePresence>
            </div>

            {/* Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.45, ease: easing }}
              className="w-full lg:w-[400px] shrink-0 bg-white rounded-3xl p-6"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm font-semibold">Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
                <span className="font-custom font-bold text-[#1a1a2e] text-xl text-right">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600 text-sm font-semibold">Delivery</span>
                <span className="text-green-600 text-sm font-semibold text-right">To be confirmed</span>
              </div>
              <div className="h-px bg-gray-100 mb-4" />

              <button
                onClick={clearCart}
                className="text-[14px] font-semibold text-gray-400 hover:text-red-400 transition-colors mb-4 block w-full text-right underline underline-offset-2"
              >
                Clear Cart
              </button>

              {/* WhatsApp CTA */}
              <motion.button
                onClick={handleWhatsAppOrder}
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white font-semibold text-[15px] py-4 rounded-2xl shadow-lg tracking-wide"
                whileTap={{ scale: 0.97 }}
              >
                <WaIcon />
                Order on WhatsApp
              </motion.button>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CartPage;
