import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '../../atoms/Button/Button'; // Pastikan komponen ini sudah ada di proyek
import Icon from '../../atoms/Icon'; // Pastikan komponen ini sudah ada di proyek
import videoSrc from '../../../assets/video/video-example.mp4';
import Dropdown from '../../molecules/Dropdown';
// Komponen AudioCard

const VideoCard: React.FC = () => {
    const [duration, setDuration] = useState<string>('00:00');
    const [currentTime, setCurrentTime] = useState<string>('00:00');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    // Format waktu dari detik ke format MM:SS
    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    };

    // Handle loading blur effect (2 detik)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 detik blur saat loading
        return () => clearTimeout(timer); // Bersihkan timer saat komponen unmount
    }, []);

    // Update durasi ketika video dimuat
    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            const videoDuration = videoRef.current.duration;
            setDuration(formatTime(videoDuration));
        }
    };

    // Update current time setiap ada perubahan waktu pada video
    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const currentTime = videoRef.current.currentTime;
            setCurrentTime(formatTime(currentTime));
        }
    };

    // Autoplay video saat pertama kali dimuat
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    return (
        <motion.div
            className='absolute top-0 right-[-8%]'
            animate={{ y: [0, -10, 0] }} // Animasi atas-bawah
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} // Durasi 2 detik dan berulang terus-menerus
        >
            <div className="relative z-10 top-10 right-[-10%] border-2 border-black rounded-lg shadow-md p-4 w-80">
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                    <div
                        className={`absolute inset-0 z-10 flex items-center justify-center transition-all duration-500 ${isLoading ? 'backdrop-blur-xl' : ''
                            }`}
                    >
                        <video
                            ref={videoRef}
                            className="absolute inset-0 w-full h-full object-cover"
                            onLoadedMetadata={handleLoadedMetadata}
                            onTimeUpdate={handleTimeUpdate} // Update waktu setiap video berjalan
                            loop // Membuat video looping
                            muted
                            autoPlay // Video autoplay
                            playsInline
                        >
                            <source src={videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="absolute bottom-0 left-0 z-20 m-2 p-1 bg-black/50 rounded-md backdrop-blur-sm">
                        <span className="text-white text-sm">{currentTime} / {duration}</span> {/* Waktu berjalan & total durasi */}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const UserProfileCard = () => {
    return (
        <motion.div
            className="absolute bottom-40 top-50 right-[-10%] flex items-center bg-white p-2 rounded-lg shadow-md w-full max-w-sm border-2 border-black"
            initial={{ y: 0 }}
            animate={{ y: [0, -5, 0] }} // Gerakan atas-bawah
            transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut" // Gerakan smooth
            }}
        >
            {/* User Avatar and Info */}
            <div className="flex items-center">
                {/* Avatar */}
                <img
                    src="https://i.pinimg.com/564x/76/05/ab/7605ab036f99d17edb5e82ffd5370a43.jpg"
                    alt="User Avatar"
                    className="h-8 w-8 rounded-full border-2 border-black object-cover"
                />

                {/* User Info */}
                <div className="ml-2">
                    <h3 className="font-semibold text-sm">Sam Rolfeswit</h3>
                    <div className="flex items-center space-x-1">
                        <span className="text-gray-500 text-xs">@samrolfes</span>
                        <span className="text-purple-500 font-medium text-xs cursor-pointer">• Follow</span>
                    </div>
                </div>
            </div>

            {/* Post Images */}
            <div className="flex ml-auto space-x-1">
                {/* Image 1 */}
                <img
                    src="https://i.pinimg.com/564x/50/0f/1a/500f1afd49b1d00e8c74f90ffd9ac953.jpg"
                    alt=""
                    className="h-8 w-8 rounded-md"
                />

                {/* Image 2 */}
                <img
                    src="https://i.pinimg.com/564x/93/62/68/93626854135af77433f58daa18bc0961.jpg"
                    alt="Post Image 2"
                    className="h-8 w-8 rounded-md"
                />
            </div>
        </motion.div>
    );
};

const Pagination: React.FC = () => {
    const totalPages = 10; // Dummy total pages
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    // Animasi infinite gerakan ke atas-bawah
    const paginationMotion = {
        y: [0, -10, 0], // Bergerak dari posisi 0 ke -10px lalu kembali ke 0
        transition: {
            y: {
                repeat: Infinity, // Mengulang animasi tanpa batas
                duration: 2, // Waktu animasi bergerak (dalam detik)
                ease: 'easeInOut', // Gerakan smooth
            },
        },
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (!isHovered) {
            interval = setInterval(() => {
                setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1)); // Loop dari 1 ke 10
            }, 500); // Kecepatan perpindahan antar halaman
        }
        return () => clearInterval(interval); // Bersihkan interval ketika hover
    }, [isHovered]);

    const getMiddlePages = (start: number, end: number): number[] => {
        const pages: number[] = [];
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    };

    const generatePageNumbers = (): (number | string)[] => {
        const pageNumbers: (number | string)[] = [1];

        if (currentPage <= 3) {
            pageNumbers.push(...getMiddlePages(2, 5));
            if (totalPages > 5) pageNumbers.push('...', totalPages);
        } else if (currentPage > 3 && currentPage < totalPages - 3) {
            pageNumbers.push('...', ...getMiddlePages(currentPage - 1, currentPage + 1), '...', totalPages);
        } else {
            pageNumbers.push('...', ...getMiddlePages(totalPages - 4, totalPages));
        }

        return pageNumbers;
    };

    const changePage = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <motion.div
            className="absolute bottom-[20%] left-[-8%]  flex items-center space-x-2 p-2 bg-gray-50 border-2 border-black shadow-lg"
            onMouseEnter={() => setIsHovered(true)} // Hentikan animasi ketika hover
            onMouseLeave={() => setIsHovered(false)} // Lanjutkan animasi ketika hover dilepas
            animate={paginationMotion} // Gerakan ke atas dan ke bawah
        >
            <motion.button
                onClick={() => changePage(currentPage - 1)}
                className="w-8 h-8 text-sm bg-yellow-300 border-2 border-black text-black hover:bg-yellow-400 active:scale-95 transition-transform"
                whileTap={{ scale: 0.9 }}
                disabled={currentPage === 1}
            >
                &lt;
            </motion.button>

            <AnimatePresence>
                {generatePageNumbers().map((page, index) => (
                    <motion.button
                        key={index}
                        onClick={() => typeof page === 'number' && changePage(page)}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className={`w-8 h-8 text-sm text-center rounded-lg border-2 border-black ${page === currentPage
                            ? 'bg-blue-500 text-white'
                            : 'bg-green-200 text-black hover:bg-green-300'
                            } hover:scale-105 active:scale-95 transition-all`}
                    >
                        {page}
                    </motion.button>
                ))}
            </AnimatePresence>

            <motion.button
                onClick={() => changePage(currentPage + 1)}
                className="w-8 h-8 text-sm bg-yellow-300 border-2 border-black text-black hover:bg-yellow-400 active:scale-95 transition-transform"
                whileTap={{ scale: 0.9 }}
                disabled={currentPage === totalPages}
            >
                &gt;
            </motion.button>
        </motion.div>
    );
};

const ClassCategorySelector = () => {
    const [selectedCategory, setSelectedCategory] = useState('college');
    const [categories, setCategories] = useState([
        { id: 'middle-school', name: 'Middle School', icon: '/path-to-your-middle-school-icon.png' },
        { id: 'high-school', name: 'High School', icon: '/path-to-your-high-school-icon.png' },
        { id: 'college', name: 'College', icon: '/path-to-your-college-icon.png' }
    ]);
    const [draggingCategory, setDraggingCategory] = useState<string | null>(null);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    const handleDragStart = (category: string) => {
        setDraggingCategory(category);
    };

    const handleDrop = (droppedCategory: string) => {
        if (draggingCategory) {
            const draggedCategoryIndex = categories.findIndex((cat) => cat.id === draggingCategory);
            const droppedCategoryIndex = categories.findIndex((cat) => cat.id === droppedCategory);

            const updatedCategories = [...categories];
            const [draggedItem] = updatedCategories.splice(draggedCategoryIndex, 1);
            updatedCategories.splice(droppedCategoryIndex, 0, draggedItem);

            setCategories(updatedCategories);
            setDraggingCategory(null);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    // Motion variant for infinite up-and-down movement
    const infiniteMove = {
        animate: {
            y: [0, -10, 0], // Move up and down by 10px
            transition: {
                duration: 2, // Time for one complete cycle (up and down)
                repeat: Infinity, // Infinite loop
                ease: 'easeInOut', // Smooth easing
            },
        },
    };

    return (
        <motion.div
            className="absolute top-[22%] left-[-9%] w-80 bg-white p-4 rounded-lg shadow-neo border-black border-4"
            variants={infiniteMove}
            animate="animate"
        >
            {/* Header */}
            <div className="text-lg font-semibold mb-2 text-black">Class category</div>

            {categories.map((category) => (
                <motion.div
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    onDragStart={() => handleDragStart(category.id)}
                    onDragOver={handleDragOver}
                    onDrop={() => handleDrop(category.id)}
                    draggable // Enable drag
                    className={`flex justify-between items-center p-4 border-4 rounded-lg mb-2 cursor-pointer transition-all duration-300 ${selectedCategory === category.id ? 'border-black bg-yellow-300' : 'border-black bg-white'
                        }`}
                    whileHover={{ scale: 1.03 }} // Animasi hover
                    whileDrag={{ scale: 1.1, boxShadow: '0 15px 25px rgba(0, 0, 0, 0.2)', backgroundColor: '#f0fdf4' }} // Efek saat drag
                    dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }} // Transisi halus
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <div className="flex items-center space-x-2">
                        <img src={category.icon} alt={category.name} className="h-6 w-6" />
                        <span className="font-bold text-black">{category.name}</span>
                    </div>
                    <input
                        type="radio"
                        checked={selectedCategory === category.id}
                        readOnly
                        className="form-radio h-5 w-5 text-green-500"
                    />
                </motion.div>
            ))}
        </motion.div>
    );
};

const VideoPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [currentTime, setCurrentTime] = useState(75); // Asumsi waktu saat ini dalam detik
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
    const [progress, setProgress] = useState(75); // Progress dalam persen
    const duration = 100;

    const togglePlayPause = () => {
        setIsPlaying(prev => {
            if (prev) {
                // Jeda audio
                if (intervalId) {
                    clearInterval(intervalId);
                    setIntervalId(null);
                }
            } else {
                // Play audio
                const id = setInterval(() => {
                    setCurrentTime(prev => {
                        if (prev < duration) {
                            const newTime = prev + 1; // Menambah 1 detik setiap detik
                            setProgress((newTime / duration) * 100); // Update progress bar
                            return newTime;
                        } else {
                            // Hentikan audio jika sudah selesai
                            clearInterval(id);
                            return duration;
                        }
                    });
                }, 1000);
                setIntervalId(id);
            }
            return !prev;
        });
    };

    const handleRewind = () => {
        setCurrentTime(prev => Math.max(prev - 5, 0));
        setProgress(prev => Math.max(prev - (5 / duration) * 100, 0)); // Asumsi 100 detik total durasi
    };

    const handleFastForward = () => {
        setCurrentTime(prev => Math.min(prev + 5, duration)); // Asumsi durasi 100 detik
        setProgress(prev => Math.min(prev + (5 / duration) * 100, 100));
    };

    const handleRepeat = () => {
        // Mengatur ulang audio
        setCurrentTime(0);
        setProgress(0);
        setIsPlaying(true); // Mulai memutar audio ulang
    };

    const handleToggleDarkMode = () => {
        setIsDarkMode(prev => !prev);
    };

    // Warna ikon berdasarkan mode gelap atau terang
    const iconColor = isDarkMode ? 'white' : 'black';

    // Format waktu
    const formatTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <motion.div
            className={`absolute top-80 border-2 border-black right-[-8%] max-w-md p-4 mx-auto border rounded-lg shadow-lg w-80 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -10, 0] }} // Pergerakan naik turun
            transition={{
                y: { repeat: Infinity, repeatType: "mirror", duration: 2 }, // Infinite naik turun dengan durasi
                type: "spring", stiffness: 100, damping: 15
            }}
        >
            {/* Time and Waveform */}
            <div className="flex items-center justify-between mb-4">
                <span>{formatTime(currentTime)}</span>
                <div className="flex-grow mx-4">
                    <motion.div
                        className={`w-full h-2 rounded-lg overflow-hidden relative ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'}`}
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            className={`absolute top-0 left-0 h-full ${isDarkMode ? 'bg-green-400' : 'bg-green-500'}`}
                            style={{ width: "100%" }}
                        />
                    </motion.div>
                </div>
                <span>{formatTime(duration - currentTime)}</span> {/* Asumsi durasi 100 detik */}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-around">
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={handleRepeat}
                >
                    <Icon name="repeat" color={iconColor} size={20} />
                </motion.button>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={handleRewind}
                >
                    <Icon name="chevronsLeft" color={iconColor} />
                </motion.button>

                {/* Play/Pause Button */}
                <motion.button
                    className={`p-4 rounded-full shadow-lg focus:outline-none ${isDarkMode ? 'bg-gray-700' : 'bg-yellow-400'}`}
                    whileTap={{ scale: 0.9 }}
                    onClick={togglePlayPause}
                >
                    {isPlaying ? (
                        <motion.span
                            key="pause"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <Icon name="pause" color={iconColor} />
                        </motion.span>
                    ) : (
                        <motion.span
                            key="play"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <Icon name="play" color={iconColor} />
                        </motion.span>
                    )}
                </motion.button>

                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={handleFastForward}
                >
                    <Icon name="chevronsRight" color={iconColor} />
                </motion.button>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={handleToggleDarkMode}
                >
                    <Icon name="moon" color={iconColor} size={20} />
                </motion.button>
            </div>
        </motion.div>
    );
};

const TextToolbar = () => {
    const [showFontDropdown, setShowFontDropdown] = useState(false);
    const [showSizeDropdown, setShowSizeDropdown] = useState(false);
    const [showAlignDropdown, setShowAlignDropdown] = useState(false);

    // Tentukan tipe untuk dropdownTimer
    let dropdownTimer: NodeJS.Timeout;

    // Tentukan tipe untuk parameter setDropdown
    const handleMouseEnter = (setDropdown: React.Dispatch<React.SetStateAction<boolean>>) => {
        clearTimeout(dropdownTimer);
        setDropdown(true);
    };

    const handleMouseLeave = (setDropdown: React.Dispatch<React.SetStateAction<boolean>>) => {
        dropdownTimer = setTimeout(() => {
            setDropdown(false);
        }, 300); // Memberikan jeda waktu 300ms sebelum menutup dropdown
    };

    const fontItems = [
        { label: 'Graphik', href: '#' },
        { label: 'Arial', href: '#' },
        { label: 'Times New Roman', href: '#' },
    ];

    const sizeItems = [
        { label: '12px', href: '#' },
        { label: '16px', href: '#' },
        { label: '28px', href: '#' },
    ];

    const alignItems = [
        { label: 'Left', href: '#' },
        { label: 'Center', href: '#' },
        { label: 'Right', href: '#' },
    ];

    return (
        <motion.div
            className="absolute top-10 left-[-8%] bg-white p-3 rounded-full shadow-[6px_6px_0px_#000] flex items-center justify-around w-full max-w-md mx-auto border-4 border-black"
            animate={{ y: [0, -5, 0] }}  // Gerakan atas-bawah
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}  // Infinite dengan durasi 2 detik
        >
            {/* Font Selector */}
            <div className="relative flex items-center space-x-2">
                <div className="bg-black text-white rounded-full p-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zM6 7a1 1 0 011 1v6a1 1 0 01-2 0V8a1 1 0 011-1zM14 7a1 1 0 011 1v6a1 1 0 01-2 0V8a1 1 0 011-1z" />
                    </svg>
                </div>
                <span className="font-medium text-sm">Graphik</span>
                <motion.div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(setShowFontDropdown)}
                    onMouseLeave={() => handleMouseLeave(setShowFontDropdown)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 5a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 7.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 5z" clipRule="evenodd" />
                    </svg>
                    {showFontDropdown && (
                        <div onMouseEnter={() => clearTimeout(dropdownTimer)} onMouseLeave={() => handleMouseLeave(setShowFontDropdown)}>
                            <Dropdown items={fontItems} />
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Font Size Selector */}
            <div className="relative flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 4a1 1 0 011 1v10a1 1 0 11-2 0V5a1 1 0 011-1zm9 5a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-sm">28px</span>
                <motion.div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(setShowSizeDropdown)}
                    onMouseLeave={() => handleMouseLeave(setShowSizeDropdown)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 5a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 7.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 5z" clipRule="evenodd" />
                    </svg>
                    {showSizeDropdown && (
                        <div onMouseEnter={() => clearTimeout(dropdownTimer)} onMouseLeave={() => handleMouseLeave(setShowSizeDropdown)}>
                            <Dropdown items={sizeItems} />
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Text Align Selector */}
            <div className="relative flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0 6a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 5a1 1 0 100-2h8a1 1 0 100 2H6z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-sm">Align</span>
                <motion.div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(setShowAlignDropdown)}
                    onMouseLeave={() => handleMouseLeave(setShowAlignDropdown)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 5a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 7.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 5z" clipRule="evenodd" />
                    </svg>
                    {showAlignDropdown && (
                        <div onMouseEnter={() => clearTimeout(dropdownTimer)} onMouseLeave={() => handleMouseLeave(setShowAlignDropdown)}>
                            <Dropdown items={alignItems} />
                        </div>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
};


// Komponen Gabungan
const CombinedComponent: React.FC = () => {
    return (
        <>
            <UserProfileCard />

            <VideoCard />

            <Pagination />

            <ClassCategorySelector />

            <VideoPlayer />

            <TextToolbar />
        </>
    );
};




// Komponen HeroSection
const HeroSection: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-white max-w-7xl mx-auto relative">
            {/* Tambahkan komponen dekorasi yang akan hilang di ukuran tablet dan handphone */}
            <div className="hidden md:block">
                <CombinedComponent />
            </div>

            {/* Hero Text */}
            <motion.h1
                className="mb-6 text-4xl font-extrabold leading-snug tracking-tight text-black w-full md:max-w-2xl"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                Transform your UI Vision into Reality with Simplicity
            </motion.h1>

            <motion.p
                className="mb-8 text-lg font-light text-black lg:text-xl leading-relaxed w-full md:max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            >
                Seamlessly turn complex designs into stunning, intuitive, and highly functional user interfaces
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-row  sm:flex-row gap-4">
                <Button text="Solid Button" type="solid" href="#" />
                <Button text="Border Button" type="border" href="#" />
            </div>

            <div className='flex flex-row bg-white p-3 rounded-lg shadow-[6px_6px_0px_#000] flex items-center justify-around w-full max-w-xl mx-auto border-4 border-black mt-10 '>
                <Button iconName="github" href="#" iconSize={24} iconColor="white" />
                <Button iconName="github" href="#" iconSize={24} iconColor="white" />
                <Button iconName="github" href="#" iconSize={24} iconColor="white" />
                <Button iconName="github" href="#" iconSize={24} iconColor="white" />
                <Button iconName="github" href="#" iconSize={24} iconColor="white" />
                <Button iconName="github" href="#" iconSize={24} iconColor="white" />
            </div>
        </div>
    );
};



export default HeroSection;
