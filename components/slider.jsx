"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        id: 1,
        title: "Eco-Friendly Solutions",
        description: "Innovative products for a sustainable lifestyle.",
        image: "https://www.ship-technology.com/wp-content/uploads/sites/8/2024/03/biggest-cruise-ships-in-the-world.jpg",
    },
    {
        id: 2,
        title: "Think Green, Act Green",
        description: "Eco-friendly alternatives for daily use.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/QE2-South_Queensferry.jpg/800px-QE2-South_Queensferry.jpg",
    },
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden">
            <AnimatePresence mode="popLayout">
                {slides.map((slide, index) => (
                    <motion.div
                        key={slide.id}
                        className="absolute inset-0 -z-0 h-full w-full bg-cover bg-fixed bg-center"
                        style={{ backgroundImage: `url(${slide.image})` }}
                        initial={{ opacity: index === currentIndex ? 1 : 0 }}
                        animate={{ opacity: index === currentIndex ? 1 : 0 }}
                        transition={{ duration: 1 }}
                    />
                ))}
            </AnimatePresence>

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-4 text-center text-white">
                <motion.h2
                    key={slides[currentIndex].title}
                    className="mb-2 text-4xl font-bold"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    {slides[currentIndex].title}
                </motion.h2>
                <motion.p
                    key={slides[currentIndex].description}
                    className="text-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    {slides[currentIndex].description}
                </motion.p>
            </div>
        </div>
    );
};

export default Slider;
