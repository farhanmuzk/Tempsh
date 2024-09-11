import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface NavigationLink {
  label: string;
  path: string;
}

interface NavigationLinksProps {
  links: NavigationLink[];
}

const NavigationLinks: React.FC<NavigationLinksProps> = ({ links }) => {
  return (
    <div className="flex space-x-6 mb-6 lg:mb-0">
      {links.map((link, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1, color: '#1D4ED8' }} // Animasi hover untuk memperbesar dan mengganti warna teks
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link to={link.path} className="text-lg font-bold">
            {link.label}
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default NavigationLinks;
