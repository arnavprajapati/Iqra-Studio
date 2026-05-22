import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center w-full h-full text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-5xl font-custom font-bold text-gray-900 mb-4">Contact Us</h1>
      <p className="text-gray-600 max-w-md">Reach out to us for any custom gift requests or inquiries.</p>
    </motion.div>
  );
};

export default ContactPage;
