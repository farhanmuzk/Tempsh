import React from 'react';
import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/organisms/LandingPage/HeroSection';
import CardSection from '../components/molecules/CardSection';
import FAQ from '../components/organisms/LandingPage/FaqSection';
import SectionCode from '../components/organisms/LandingPage/SectionWebsite';
import SectionFeature from '../components/organisms/LandingPage/SectionFeature';
import SectionThanks from '../components/organisms/LandingPage/SectionThanks';
import SectionBlog from '../components/organisms/LandingPage/SectionBlog';

const HomePage: React.FC = () => (
    <MainLayout>
        <HeroSection />
        <CardSection />
        <div className="py-16 mt-16">
            <SectionFeature />
        </div>
        <div className="py-16 mt-16">
            <SectionCode />
        </div>
        <div className="py-16 mt-16">
            <SectionBlog />
        </div>
        <div className="py-16">
            <FAQ />
        </div>
        <div className="py-16">
            <SectionThanks />
        </div>
    </MainLayout>
);

export default HomePage;
