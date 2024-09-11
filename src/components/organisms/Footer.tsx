import React from 'react';
import Logo from '../atoms/Logo';
import Button from '../atoms/Button/Button';
import NavigationLinks from '../atoms/Link';

const Footer: React.FC = () => {
    const navigationLinks = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Contact', path: '/contact' },
    ];
    return (
        <footer className="bg-white border-t-4 border-black p-8 shadow-[8px_8px_0px_#000]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
                {/* Logo Section */}
                <Logo />

                {/* Links Section */}
                <div className="flex space-x-6 mb-6 lg:mb-0">
                    <NavigationLinks links={navigationLinks} />
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-6">
                    <Button iconName="github" href="#" iconSize={24} iconColor="white" />
                    <Button iconName="github" href="#" iconSize={24} iconColor="white" />
                    <Button iconName="github" href="#" iconSize={24} iconColor="white" />
                </div>
            </div>

            <div className="text-center mt-6 text-sm font-medium text-gray-600">
                &copy; 2024 Brutalism UI. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
