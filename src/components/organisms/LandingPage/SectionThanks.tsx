import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../atoms/Button/Button';
const SectionThanks: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-white max-w-7xl mx-auto">


            <motion.h1
                className="mb-6 text-3xl font-extrabold leading-snug tracking-tight text-black md:text-4xl lg:text-5xl lg:leading-tight w-2/3 "
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                Transform your UI Vision into Reality with Simplicity
            </motion.h1>

            <motion.p
                className="mb-8 text-lg font-light text-black lg:text-xl leading-relaxed w-full md:max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            >
                Seamlessly turn complex designs into stunning, intuitive, and highly functional user interfaces with effortless simplicity and unmatched creativity.
            </motion.p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button text="Solid Button" type="solid" href="#" />
                <Button text="Border Button" type="border" href="#" />
            </div>

        </div>
    );
}
export default SectionThanks
