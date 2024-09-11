import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../atoms/Button/Button';

interface CardProps {
  title: string;
  description: string;
  svg?: React.ReactNode;
  isBlog?: boolean;
  showButton?: boolean;
  postId?: number; // Tambahkan postId untuk link dinamis
}

const Card: React.FC<CardProps> = ({ title, description, svg, isBlog = false, showButton = true, postId }) => (
  <motion.div
    className="bg-white p-4 rounded-lg border-2 border-black shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_#000] transition-shadow duration-300 cursor-pointer flex flex-col w-64"
    whileHover={{ scale: 1.05 }}
    style={{ minWidth: '250px' }}
  >
    {/* Render SVG hanya jika disediakan */}
    {svg && (
      <div className="h-40 w-full overflow-hidden mb-4">
        {svg}
      </div>
    )}

    {/* Bagian konten di bawah SVG */}
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <p className="text-gray-500 text-sm m-0">{description}</p>
        {/* Gunakan Link dari react-router-dom untuk judul */}
        <Link to={`/blog/detail-page/${postId}`}>
          <h3 className={`font-extrabold text-black ${isBlog ? 'text-lg hover:text-blue-600' : 'text-3xl'}`}>
            {title}
          </h3>
        </Link>
      </div>

      {/* Render Button hanya jika showButton adalah true */}
      {showButton && (
        <Button
          href="#"
          iconName="chevronRight"
          iconColor="white"
          iconSize={24}
          type="solid"
        />
      )}
    </div>
  </motion.div>
);

export default Card;
