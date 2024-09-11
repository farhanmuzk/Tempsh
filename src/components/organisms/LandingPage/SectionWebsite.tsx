import React from 'react';

const SectionWebsite: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-7xl bg-white shadow-2xl border-4 border-black rounded-lg overflow-hidden">
                {/* Browser Header (Tab bar) */}
                <div className="flex items-center space-x-2 bg-gray-900 p-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1 text-white text-center font-semibold">My Web App</div>
                </div>

                <div className="w-full">
                    <iframe
                        className="w-full h-[calc(100vh-64px)]" // Kalkulasi tinggi berdasarkan viewport dan tinggi header
                        src="https://www.youtube.com/embed/oLFNE1bTKGw?si=AbFix_oZWJt8Trlh"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default SectionWebsite;
