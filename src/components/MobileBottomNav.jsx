import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const MobileBottomNav = () => {
  const location = useLocation();
  const { totalItems } = useCart();
  const currentPath = location.pathname;

  const navItems = [
    {
      label: 'Home',
      path: '/',
      isExact: true,
      icon: (active) => (
        <svg className="w-5 h-5" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={active ? '0' : '1.8'} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      )
    },
    {
      label: 'Occasions',
      path: '/home',
      icon: (active) => (
        <svg className="w-5 h-5" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={active ? '0' : '1.8'} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H4.5a1.5 1.5 0 01-1.5-1.5v-8.25M12 21V11.25m0 0h8.25m-8.25 0H3.75m11.25-3.75a3.375 3.375 0 10-6.75 0m6.75 0a3.375 3.375 0 11-6.75 0m6.75 0H3.75m8.25 0h8.25" />
        </svg>
      )
    },
    {
      label: 'Studio',
      isCustom: true,
      onClick: () => {
        if (currentPath === '/') {
          const el = document.getElementById('customizer-sandbox');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = '/#customizer-sandbox';
        }
      },
      icon: (active) => (
        <svg className="w-5 h-5" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={active ? '0' : '1.8'} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      )
    },
    {
      label: 'Bag',
      path: '/cart',
      hasBadge: true,
      icon: (active) => (
        <svg className="w-5 h-5" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={active ? '0' : '1.8'} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      )
    },
    {
      label: 'WhatsApp',
      isExternal: true,
      href: 'https://wa.me/919876543210?text=Hi%20Lunar%20Pearl!%20I%20would%20like%20to%20inquire%20about%20custom%20gifts.',
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      )
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#faf8f5]/90 backdrop-blur-lg border-t border-[#be9456]/20 shadow-[0_-4px_20px_rgba(181,137,83,0.08)] px-2 py-1.5">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item, idx) => {
          const isActive = item.isExact
            ? currentPath === item.path
            : item.path
            ? currentPath.startsWith(item.path)
            : false;

          if (item.isExternal) {
            return (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center py-1 px-2 text-[#7a7267] hover:text-[#25D366] transition-colors"
              >
                <div className="relative">
                  {item.icon(false)}
                </div>
                <span className="text-[10px] font-semibold tracking-tight mt-0.5">
                  {item.label}
                </span>
              </a>
            );
          }

          if (item.isCustom) {
            return (
              <button
                key={idx}
                onClick={item.onClick}
                className="flex flex-col items-center justify-center py-1 px-2 text-[#7a7267] hover:text-[#be9456] transition-colors"
              >
                <div className="relative">
                  {item.icon(false)}
                </div>
                <span className="text-[10px] font-semibold tracking-tight mt-0.5">
                  {item.label}
                </span>
              </button>
            );
          }

          return (
            <NavLink
              key={idx}
              to={item.path}
              className={({ isActive: active }) =>
                `flex flex-col items-center justify-center py-1 px-2 transition-colors relative ${
                  active ? 'text-[#be9456]' : 'text-[#7a7267] hover:text-[#2b2724]'
                }`
              }
            >
              {({ isActive: active }) => (
                <>
                  <div className="relative">
                    {item.icon(active)}
                    {item.hasBadge && totalItems > 0 && (
                      <span className="absolute -top-1.5 -right-2 bg-[#be9456] text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-sm">
                        {totalItems > 9 ? '9+' : totalItems}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-semibold tracking-tight mt-0.5">
                    {item.label}
                  </span>
                  {active && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute -bottom-1 w-1 h-1 rounded-full bg-[#be9456]"
                    />
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
