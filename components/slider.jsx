"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        id: 1,
        title: "Aromatic & Authentic – The True Taste of Tradition",
        description: "Sourced directly from farmers, our premium-quality spices bring rich aroma and taste to your Dishes.",
        image: "/s-1.jpg",
    },
    {
        id: 2,
        title: "Farm-Fresh Goodness – Packed with Nutrition!",
        description: "High-quality pulses and lentils, sourced from trusted farms, delivering health and taste to your meals.",
        image: "/s-2.jpg",
    },
    {
        id: 3,
        title: "Go Green with Eco-Friendly Tableware",
        description: "100% compostable and eco-friendly tableware made from natural sugarcane Bagasse fibers - perfect for a greener planet.",
        image: "/s-3.jpg",
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
                        className={`absolute inset-0 -z-0 h-full w-full bg-cover bg-fixed bg-center ${index === 0 && "rotate-180"} bg-top`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                        initial={{ opacity: index === currentIndex ? 1 : 0 }}
                        animate={{ opacity: index === currentIndex ? 1 : 0 }}
                        transition={{ duration: 1 }}
                    />
                ))}
            </AnimatePresence>

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-4 text-center text-white">
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
                    className="text-lg max-w-2xl"
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
