import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC = () => (
  <motion.div
    className="text-2xl font-extrabold text-black cursor-pointer"
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    <u> Tempsh UI</u>
  </motion.div>
);

export default Logo;
