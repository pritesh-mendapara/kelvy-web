"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const WhatsappButton = () => {
    return (
        <div className="fixed right-5 bottom-5 z-50">
            <Link href="https://wa.me/918141925344" target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="relative flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-lg">
                    {/* Pulse ring effect */}
                    <motion.span
                        className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "easeInOut",
                        }}
                    />

                    {/* WhatsApp Icon */}
                    <div className="relative z-10 h-8 w-8">
                        <Image src="/whatsapp.png" alt="WhatsApp" fill className="object-contain" />
                    </div>
                </motion.div>
            </Link>
        </div>
    );
};

export default WhatsappButton;
