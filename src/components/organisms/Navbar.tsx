import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '../atoms/Logo';
import ButtonWithIcon from '../atoms/Button/ButtonWithIcon'; // Import ButtonWithIcon
import Dropdown from '../molecules/Dropdown'; // Import Dropdown
import Icon from '../atoms/Icon';

// Definisikan tipe untuk dropdown item
interface DropdownItem {
    label: string;
    href: string;
}

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false); // Mobile menu toggle
    const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState<boolean>(false); // State untuk dropdown "More"
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState<boolean>(false); // State untuk dropdown "Language"
    const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false); // State untuk modal pencarian
    const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [activeParentButton, setActiveParentButton] = useState<number | null>(null);

    // Toggle mobile menu
    const toggleMenu = (): void => setIsOpen(!isOpen);

    // Dropdown "More" handlers
    const handleMouseEnterMore = (): void => {
        if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
        setIsMoreDropdownOpen(true);
    };

    const handleMouseLeaveMore = (): void => {
        dropdownTimeout.current = setTimeout(() => {
            setIsMoreDropdownOpen(false);
        }, 200);
    };

    // Dropdown "Language" handlers
    const handleMouseEnterLanguage = (): void => {
        if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
        setIsLanguageDropdownOpen(true);
    };

    const handleMouseLeaveLanguage = (): void => {
        dropdownTimeout.current = setTimeout(() => {
            setIsLanguageDropdownOpen(false);
        }, 200);
    };

    // Toggle search modal
    const toggleSearchModal = (): void => setIsSearchModalOpen(!isSearchModalOpen);

    // Fungsi untuk menutup modal pencarian saat mengklik di luar modal
    const closeModalOnClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        if ((e.target as HTMLElement).id === 'search-modal') setIsSearchModalOpen(false);
    };

    const handleParentButtonClick = (index: number): void => {
        setActiveParentButton(activeParentButton === index ? null : index); // Toggle parent button
    };


    const bilingualItems: DropdownItem[] = [
        { label: 'English', href: '/english' },
        { label: 'Indonesian', href: '/indonesian' },
    ];


    const parentButtons: DropdownItem[] = [
        { label: 'Button 1', href: '#' },
        { label: 'Button 2', href: '#' },
        { label: 'Button 3', href: '#' },
        { label: 'Button 4', href: '#' },
        { label: 'Button 5', href: '#' },
        { label: 'Button 6', href: '#' },
    ];

    // Child Buttons Data for Each Parent Button
    const childButtonsData: { [key: number]: DropdownItem[] } = {
        0: [
            { label: 'Child 1.1', href: '#' },
            { label: 'Child 1.2', href: '#' },
        ],
        1: [
            { label: 'Child 2.1', href: '#' },
            { label: 'Child 2.2', href: '#' },
        ],
        2: [
            { label: 'Child 3.1', href: '#' },
            { label: 'Child 3.2', href: '#' },
        ],
        3: [
            { label: 'Child 4.1', href: '#' },
            { label: 'Child 4.2', href: '#' },
        ],
        4: [
            { label: 'Child 5.1', href: '#' },
            { label: 'Child 5.2', href: '#' },
        ],
        5: [
            { label: 'Child 6.1', href: '#' },
            { label: 'Child 6.2', href: '#' },
        ],
    };

    return (
        <>
            {/* Navbar */}
            <nav className="relative bg-white px-6 py-3 shadow-[8px_8px_0px_#000] border-b-4 border-black z-20">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        {/* Logo */}
                        <Link to="/">
                            <Logo />
                        </Link>

                        {/* Search Bar */}
                        <div className="relative ml-4">
                            <button onClick={toggleSearchModal} className="flex items-center px-4 py-2 bg-white border-2 border-black rounded-lg hover:bg-gray-200">
                                <Icon name="search" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="ml-2 text-sm text-black focus:outline-none placeholder-gray-400 w-16 sm:w-26 md:w-40 lg:w-64 bg-transparent"
                                />
                            </button>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden sm:flex justify-center flex-grow">
                        {/* Dropdown More */}
                        <div
                            className="relative group"
                            onMouseEnter={handleMouseEnterMore}
                            onMouseLeave={handleMouseLeaveMore}
                        >
                            <button className="flex items-center gap-2 text-lg font-bold px-4 py-2 hover:text-blue-600">Resources</button>
                            {isMoreDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-12 right-0 mt-2 w-[400px] bg-white border-2 border-black rounded shadow-[4px_4px_0px_#000] z-40 p-4"
                                >
                                    <div className="grid grid-cols-2 gap-4">
                                        {/* Kolom Kiri (Parent Buttons) */}
                                        <div className="flex flex-col space-y-4">
                                            {parentButtons.map((item, index) => (
                                                <div key={index}>
                                                    <button
                                                        onClick={() => handleParentButtonClick(index)}
                                                        className={`w-full py-2 px-4 ${activeParentButton === index ? 'bg-gray-700' : 'bg-black'} text-white font-bold hover:bg-gray-800 transition-all rounded-lg`}
                                                    >
                                                        {item.label}
                                                    </button>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Kolom Kanan (Child Buttons) */}
                                        <div className="flex flex-col space-y-2">
                                            {activeParentButton !== null && (
                                                <div className="ml-4 mt-2 space-y-2">
                                                    {childButtonsData[activeParentButton].map((childItem, childIndex) => (
                                                        <button
                                                            key={childIndex}
                                                            className="w-full py-1 px-2 bg-white border-2 border-black text-black hover:bg-gray-200 transition-all rounded-lg"
                                                        >
                                                            {childItem.label}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                        </div>

                        {/* Links */}
                        <Link to="/blog" className="text-lg font-bold px-4 py-2 hover:text-blue-600">
                            Blog
                        </Link>
                        <Link to="/blocks" className="text-lg font-bold px-4 py-2 hover:text-blue-600">
                            Blocks
                        </Link>
                    </div>

                    {/* Language Dropdown */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <ButtonWithIcon iconName="github" title="GitHub" onClick={() => window.open('https://github.com', '_blank')} />
                        <ButtonWithIcon iconName="handshake" title="Donate" onClick={() => window.open('https://donate.com', '_blank')} />

                        <div
                            className="relative group"
                            onMouseEnter={handleMouseEnterLanguage}
                            onMouseLeave={handleMouseLeaveLanguage}
                        >
                            <ButtonWithIcon iconName="earth" title="Language" />
                            {isLanguageDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-12 right-0 mt-2 w-40 bg-white z-40"
                                >
                                    <Dropdown items={bilingualItems} />
                                </motion.div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu (Conditional Rendering) */}
                {isOpen && (
                    <motion.div
                        className="lg:hidden mt-4 space-y-4 text-lg font-medium text-black bg-white border-t-4 border-black shadow-[6px_6px_0px_#000] px-6 py-4"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                        {['Home', 'About', 'Services', 'Contact'].map((link) => (
                            <Link to={`/${link.toLowerCase()}`} key={link} className="block border-b-2 border-black py-2 hover:bg-gray-100">
                                {link}
                            </Link>
                        ))}

                        {/* Additional Buttons for Mobile */}
                        <div className="flex flex-col space-y-4">
                            <ButtonWithIcon iconName="github" title="GitHub" onClick={() => window.open('https://github.com', '_blank')} />
                            <ButtonWithIcon iconName="handshake" title="Donate" onClick={() => window.open('https://donate.com', '_blank')} />

                            {/* Bilingual Dropdown */}
                            <div
                                className="relative group"
                                onMouseEnter={handleMouseEnterLanguage}
                                onMouseLeave={handleMouseLeaveLanguage}
                                onClick={toggleMenu} // Toggle dropdown on mobile
                            >
                                <ButtonWithIcon iconName="earth" title="Language" />
                                {isLanguageDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute top-full right-0 mt-2 w-40 bg-white border-2 border-black rounded-lg shadow-[6px_6px_0px_#000] z-40"
                                    >
                                        <Dropdown items={bilingualItems} />
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </nav>

            {/* Search Modal */}
            {isSearchModalOpen && (
                <div
                    id="search-modal"
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
                    onClick={closeModalOnClickOutside}
                >
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-white p-8 border-4 border-black shadow-[12px_12px_0px_#000] max-w-md w-full lg:w-[50%]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <input
                            type="text"
                            className="w-full px-4 py-2 text-lg font-bold border-1 border-black bg-white text-black focus:outline-none focus:ring-4 focus:ring-black placeholder:text-black"
                            placeholder="Search..."
                        />
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold border-b-4 border-black pb-2">Recent Searches</h3>
                            <ul className="mt-4">
                                <motion.li
                                    whileHover={{ scale: 1.05 }}
                                    className="py-3 flex justify-between items-center bg-gray-200 border-2 border-black hover:bg-blue-200 cursor-pointer px-4 shadow-[6px_6px_0px_#000]"
                                >
                                    Search 1
                                    <Icon name="chevronRight" />
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.05 }}
                                    className="py-3 flex justify-between items-center bg-gray-200 border-2 border-black hover:bg-blue-200 cursor-pointer px-4 shadow-[6px_6px_0px_#000] mt-2"
                                >
                                    Search 2
                                    <Icon name="chevronRight" />
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.05 }}
                                    className="py-3 flex justify-between items-center bg-gray-200 border-2 border-black hover:bg-blue-200 cursor-pointer px-4 shadow-[6px_6px_0px_#000] mt-2"
                                >
                                    Search 3
                                    <Icon name="chevronRight" />
                                </motion.li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default Navbar;
