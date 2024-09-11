import React from 'react';
import Icon from '../Icon'; // Import komponen Icon

interface ButtonWithIconProps {
  iconName: 'github' | 'handshake' | 'earth'; // Tambahkan lebih banyak icon
  title: string;
  onClick?: () => void;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ iconName, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 bg-white border-4 border-black shadow-[4px_4px_0px_#000]
      text-black font-medium rounded hover:bg-gray-200 transition-colors duration-300 hover:shadow-[8px_8px_0px_#000]`}
    >
      <Icon name={iconName} />
      <span>{title}</span>
    </button>
  );
};

export default ButtonWithIcon;
