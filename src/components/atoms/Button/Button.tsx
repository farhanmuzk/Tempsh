import React from 'react';
import { motion } from 'framer-motion';
import Icon, { IconName } from '../Icon'; // Import Icon and IconName

interface ButtonProps {
  text?: string; // Optional text for button
  iconName?: IconName; // Icon name from Icon component
  iconSize?: number; // Icon size, default is 24
  iconColor?: string; // Icon color, default is black
  type?: 'solid' | 'border'; // Button type, solid or border
  href: string; // Link for button
}

const Button: React.FC<ButtonProps> = ({
  text,
  iconName,
  iconSize = 24,
  iconColor = 'black',
  type = 'solid',
  href,
}) => {
  const baseClass = `inline-flex items-center justify-center border-2 rounded-lg transition-all`;
  const buttonSizeClass = iconName ? 'w-10 h-10' : 'px-6 py-3';
  const buttonStyleClass =
    type === 'solid'
      ? 'bg-black text-white hover:bg-amber-500'
      : 'bg-white text-black hover:scale-105';
  const shadowClass = 'shadow-[6px_6px_0px_#000] hover:shadow-[10px_10px_0px_#000]';

  return (
    <motion.a
      href={href}
      className={`${baseClass} ${buttonSizeClass} ${buttonStyleClass} ${shadowClass}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {iconName ? (
        <Icon name={iconName} size={iconSize} color={iconColor} />
      ) : (
        text
      )}
    </motion.a>
  );
};

export default Button;
