import React from 'react';

interface DropdownProps {
  items: Array<{ label: string; href: string }>;
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  return (
    <div className="absolute top-full right-0 mt-2 w-40 bg-white border-2 border-black rounded shadow-[4px_4px_0px_#000] z-10">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="block px-4 py-2 hover:bg-gray-200 border-b border-black last:border-b-0 transition-colors duration-200"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default Dropdown;
