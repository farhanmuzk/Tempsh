import React from 'react';
import Navbar from '../components/organisms/Navbar';
import Footer from '../components/organisms/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  showNavbar?: boolean;
  showFooter?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, showNavbar = true, showFooter = true }) => (
  <div className="flex flex-col min-h-screen bg-transparent">
    {/* Navbar */}
    {showNavbar && <Navbar />}

    {/* Main content with flex-grow to fill available space */}
    <main className="flex-grow">
      {children}
    </main>

    {/* Footer */}
    {showFooter && <Footer />}
  </div>
);

export default MainLayout;
