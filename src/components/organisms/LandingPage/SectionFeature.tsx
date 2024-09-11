import React, { useEffect, useRef, useState } from 'react';

const SectionFeature: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.4 } // Trigger when 10% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className="py-16" ref={sectionRef}>
            {/* Header Section */}
            <div className="max-w-6xl mx-auto text-left mb-12">
                <h2
                    className={`text-4xl font-bold transition-colors duration-700 delay-150 ${
                        isVisible ? 'text-gray-900' : 'text-gray-500'
                    } mb-4`}
                >
                    Designed to build any complex application
                </h2>
                <p
                    className={`text-lg transition-colors duration-700 delay-200 ${
                        isVisible ? 'text-gray-600' : 'text-gray-500'
                    }`}
                >
                    Lorem ipsum dolor sit amet consectetur duis auctor netus nibh urna nunc rhoncus nunc duis integer.
                </p>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column - Feature Points */}
                <div className="relative">
                    {/* Vertical line */}
                    <div
                        className={`absolute top-0 left-2.5 bottom-0 w-0.5 transition-colors duration-700 delay-300 ${
                            isVisible ? 'bg-black' : 'bg-gray-500'
                        }`}
                    ></div>

                    <div className="space-y-8">
                        {/* Feature Point 1 */}
                        <div className="relative pl-10">
                            <div
                                className={`absolute left-0.5 top-0 w-4 h-4 rounded-full transition-colors duration-700 delay-400 ${
                                    isVisible ? 'bg-black' : 'bg-gray-500'
                                }`}
                            ></div>
                            <h3
                                className={`text-2xl font-bold transition-colors duration-700 delay-400 ${
                                    isVisible ? 'text-gray-900' : 'text-gray-500'
                                } mb-2`}
                            >
                                01. Pick a template
                            </h3>
                            <p
                                className={`transition-colors duration-700 delay-500 ${
                                    isVisible ? 'text-gray-600' : 'text-gray-500'
                                }`}
                            >
                                Lorem ipsum dolor sit amet consectetur duis auctor netus nibh urna nunc rhoncus nunc.
                            </p>
                        </div>

                        {/* Feature Point 2 */}
                        <div className="relative pl-10">
                            <div
                                className={`absolute left-0.5 top-1.5 w-4 h-4 rounded-full transition-colors duration-700 delay-600 ${
                                    isVisible ? 'bg-black' : 'bg-gray-500'
                                }`}
                            ></div>
                            <h3
                                className={`text-2xl font-bold transition-colors duration-700 delay-600 ${
                                    isVisible ? 'text-gray-900' : 'text-gray-500'
                                } mb-2`}
                            >
                                02. Brand your app
                            </h3>
                            <p
                                className={`transition-colors duration-700 delay-700 ${
                                    isVisible ? 'text-gray-600' : 'text-gray-500'
                                }`}
                            >
                                Lorem ipsum dolor sit amet consectetur duis auctor netus nibh urna nunc rhoncus nunc.
                            </p>
                        </div>

                        {/* Feature Point 3 */}
                        <div className="relative pl-10">
                            <div
                                className={`absolute left-0.5 top-1.5 w-4 h-4 rounded-full transition-colors duration-700 delay-800 ${
                                    isVisible ? 'bg-black' : 'bg-gray-500'
                                }`}
                            ></div>
                            <h3
                                className={`text-2xl font-bold transition-colors duration-700 delay-800 ${
                                    isVisible ? 'text-gray-900' : 'text-gray-500'
                                } mb-2`}
                            >
                                03. Edit content
                            </h3>
                            <p
                                className={`transition-colors duration-700 delay-900 ${
                                    isVisible ? 'text-gray-600' : 'text-gray-500'
                                }`}
                            >
                                Lorem ipsum dolor sit amet consectetur duis auctor netus nibh urna nunc rhoncus nunc.
                            </p>
                        </div>

                        {/* Feature Point 4 */}
                        <div className="relative pl-10">
                            <div
                                className={`absolute left-0.5 top-1.5 w-4 h-4 rounded-full transition-colors duration-700 delay-1000 ${
                                    isVisible ? 'bg-black' : 'bg-gray-500'
                                }`}
                            ></div>
                            <h3
                                className={`text-2xl font-bold transition-colors duration-700 delay-1000 ${
                                    isVisible ? 'text-gray-900' : 'text-gray-500'
                                } mb-2`}
                            >
                                04. Publish easily
                            </h3>
                            <p
                                className={`transition-colors duration-700 delay-1100 ${
                                    isVisible ? 'text-gray-600' : 'text-gray-500'
                                }`}
                            >
                                Lorem ipsum dolor sit amet consectetur duis auctor netus nibh urna nunc rhoncus nunc.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Full Image Card */}
                <div className="bg-gray-200 rounded-lg shadow-lg">
                    {/* Placeholder for the image */}
                    <img
                        src="https://via.placeholder.com/600x400"
                        alt="Feature Image"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default SectionFeature;
