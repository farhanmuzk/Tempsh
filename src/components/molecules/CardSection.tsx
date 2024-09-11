import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Card from './Card';// Contoh ikon dari react-icons

const cards = [
    {
        title: 'Javascript',
        description: 'Create component with',
        svg:
            <svg viewBox="0 0 128 128">
                <path fill="#F0DB4F" d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
            </svg> // SVG dinamis
    },
    {
        title: 'Livewire',
        description: 'Create component with',
        svg:
            <svg viewBox="0 0 128 128">
                <path
                    style={{ stroke: 'none', fillRule: 'evenodd', fill: '#fb70a9', fillOpacity: 1 }} // Perbaikan pada style
                    d="M87.621 99.645c-1.277.605-1.785 2.222-1.156 3.668.867 1.976 4.34 1.976 5.187 0 1.133-2.583-1.425-4.922-4.03-3.668Zm2.824.75c1.035.625 1.133 2.312.145 3.207-.41.41-.7.507-1.567.507-.918 0-1.113-.074-1.64-.652-1.809-1.93.746-4.512 3.062-3.062Zm-78.773.722c-.578.602-.723.844-.7 1.543 0 1.133.34 1.762 1.208 2.195 1.543.75 3.547-.046 3.836-1.566.336-1.617-.797-2.824-2.653-2.824-.847 0-1.113.12-1.691.652Zm-8.418.047c-.336.195-.625.582-.77 1.016-.144.527-.218 4.27-.144 11.89l.023 11.121.532.508c.601.672 1.59.817 2.554.457 1.305-.554 1.281-.074 1.281-12.715v-11.433l-.699-.578c-.773-.63-1.836-.746-2.777-.266Z"
                />
            </svg>
    },
    {
        title: 'AdonisJs',
        description: 'Create component with',
        svg:
            <svg viewBox="0 0 128 128">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 64c0 51.617 12.383 64 64 64 51.617 0 64-12.383 64-64 0-51.617-12.383-64-64-64C12.383 0 0 12.383 0 64zm25.808 13.295l20.075-45.621C49.27 23.984 55.788 19.813 64 19.813c8.212 0 14.729 4.17 18.118 11.86l20.074 45.622c.912 2.216 1.694 5.084 1.694 7.56 0 11.34-7.951 19.291-19.292 19.291-3.862 0-6.93-.985-10.035-1.983-3.182-1.022-6.403-2.057-10.559-2.057-4.108 0-7.408 1.044-10.653 2.071-3.138.993-6.225 1.969-9.941 1.969-11.34 0-19.292-7.95-19.292-19.29 0-2.477.783-5.345 1.695-7.561zM64 39.625l-19.813 44.84c5.866-2.738 12.644-4.041 19.813-4.041 6.909 0 13.947 1.303 19.552 4.04L64 39.626z" fill="#5A45FF"></path>
            </svg>
    },
    {
        title: 'Bootstrap',
        description: 'Description for card 4',
        svg:
            <svg viewBox="0 0 128 128">
                <defs><linearGradient id="a" x1="76.079" x2="523.48" y1="10.798" y2="365.95" gradientTransform="translate(1.11 14.613) scale(.24566)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#9013fe"></stop><stop offset="1" stop-color="#6610f2"></stop></linearGradient><linearGradient id="b" x1="193.51" x2="293.51" y1="109.74" y2="278.87" gradientTransform="translate(0 52)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"></stop><stop offset="1" stop-color="#f1e5fc"></stop></linearGradient><filter id="c" width="197" height="249" x="161.9" y="135.46" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="8"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs><path fill="url(#a)" d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099-.228 6.546.068 15.026 2.202 21.94 2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883-2.134 6.914-2.43 15.394-2.202 21.94.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098.228-6.546-.068-15.026-2.203-21.94-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883 2.135-6.914 2.43-15.394 2.203-21.94z"></path><path fill="url(#b)" d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941z" filter="url(#c)" transform="translate(1.494 2.203) scale(.24566)"></path>
            </svg>

    },
    {
        title: 'React',
        description: 'Description for card 5',
        svg: <svg viewBox="0 0 128 128">
            <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
        </svg>
    },
];

const CardSection: React.FC = () => {
    const controls = useAnimation();
    const [isPaused, setIsPaused] = useState(false);
    const [currentX, setCurrentX] = useState(0); // Simpan posisi terakhir animasi

    const cardWidth = 300; // Lebar tiap card
    const gap = 24; // Jarak antar card
    const totalWidth = (cardWidth + gap) * cards.length; // Total panjang slide

    // Fungsi untuk memulai animasi infinite
    const startInfiniteScroll = (startX: number) => {
        controls.start({
            x: [startX, -totalWidth],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: (totalWidth - Math.abs(startX)) / 50, // Durasi berdasarkan sisa jarak
                    ease: 'linear',
                },
            },
        });
    };

    // Mulai animasi infinite scroll saat komponen dimuat
    useEffect(() => {
        if (!isPaused) {
            startInfiniteScroll(currentX);
        } else {
            controls.stop();
        }
    }, [isPaused, controls, currentX, totalWidth]);

    // Pause animasi saat hover
    const handleMouseEnter = () => {
        controls.stop();
        setIsPaused(true);
    };

    // Lanjutkan animasi saat mouse keluar, dengan posisi terakhir
    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    return (
        <div className="relative p-6 overflow-hidden">
            <motion.div
                className="flex space-x-6"
                animate={controls}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onUpdate={(latest) => setCurrentX(Number(latest.x))} // Melacak posisi x terbaru
            >
                {cards.concat(cards).map((card, index) => (
                    // Menggabungkan duplikasi untuk menciptakan efek infinite scroll
                    <motion.div
                        key={index}
                        className="min-w-[300px] cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Card
                            title={card.title}
                            description={card.description}
                            svg={card.svg} // Kirimkan SVG dinamis
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default CardSection;
