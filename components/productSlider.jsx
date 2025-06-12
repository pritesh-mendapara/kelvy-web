"use client";

import { PRODUCT_RANGE } from "@/constants/mockdata";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const ProductSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? PRODUCT_RANGE.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === PRODUCT_RANGE.length - 1 ? 0 : prev + 1));
    };

    const getSlides = () => {
        const prev = (currentIndex - 1 + PRODUCT_RANGE.length) % PRODUCT_RANGE.length;
        const next = (currentIndex + 1) % PRODUCT_RANGE.length;
        return [PRODUCT_RANGE[prev], PRODUCT_RANGE[currentIndex], PRODUCT_RANGE[next]];
    };
    return (
        <div className="relative flex items-center justify-center">
            <div className="flex w-full max-w-7xl items-center justify-center gap-4 overflow-hidden pb-10">
                {getSlides().map((item, i) => {
                    const isCenter = i === 1;
                    return (
                        <div key={i} className={`w-[90%] flex-shrink-0 transition-all duration-500 sm:w-[45%] lg:w-[30%] ${isCenter ? "z-10 scale-105" : "scale-95 opacity-70"}`}>
                            <div className={`flex h-full flex-col overflow-hidden bg-white ${isCenter ? "shadow-lg" : "shadow-lg"}`}>
                                <div className="h-60 w-full overflow-hidden">
                                    <Image src={`/${item.image}`} alt={item.title} width={400} height={400} className="h-full w-full object-cover" />
                                </div>
                                <div className="flex flex-grow flex-col p-5 text-center">
                                    <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                    <div className="text-center">
                                        <Link href={item.link} className="mt-5 inline-flex items-center gap-2 font-semibold text-black hover:underline">
                                            Show More <span className="text-xl">➝</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <button onClick={prevSlide} className="absolute left-2 z-20 cursor-pointer transition lg:left-10">
                <IoIosArrowDropleftCircle size={30} />
            </button>
            <button onClick={nextSlide} className="absolute right-2 z-20 cursor-pointer transition lg:right-10">
                <IoIosArrowDroprightCircle size={30} />
            </button>
        </div>
    );
};

export default ProductSlider;
