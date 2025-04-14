"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, Facebook, Instagram, Linkedin, Menu } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
    const [hideAppbar, setHideAppbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHideAppbar(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative w-full overflow-hidden">
            {/* Appbar */}
            <div className={`${hideAppbar ? "top-[-100%]" : "top-0"} bg-primary-200 fixed top-0 z-40 w-full p-4 text-white`}>
                <div className="container m-auto flex max-w-[1200px] flex-wrap justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-4">
                        <a href="tel:+918141925344" className="flex items-center gap-2 text-sm text-white/80 hover:text-white">
                            <Phone size={16} /> +91 81419 25344
                        </a>
                        <a href="mailto:info@yourcompany.com" className="flex items-center gap-2 text-sm text-white/80 hover:text-white">
                            <Mail size={16} /> info@kelvyoverseas.com
                        </a>
                    </div>

                    <div className="flex items-center gap-5">
                        <a
                            href="https://www.linkedin.com/in/kelvy-overseas-44b8b6331?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bc9200B%2F3RKmM%2FzPlNNuEPA%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin size={20} className="transition-all hover:text-gray-300" />
                        </a>
                        <a href="https://www.instagram.com/kelvyoverseas?igsh=ZGhub3JrcHY0MnRr&utm_source=qr" target="_blank" rel="noopener noreferrer">
                            <Instagram size={20} className="transition-all hover:text-gray-300" />
                        </a>
                        <a
                            href="https://www.facebook.com/people/Kelvy-Overseas/61566481662169/?mibextid=LQQJ4d&rdid=4NQq7LaMrx7juc9R&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FFezGYAYLYKDJZTLR%2F%3Fmibextid%3DLQQJ4d"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Facebook size={20} className="transition-all hover:text-gray-300" />
                        </a>
                        <a href="https://x.com/kelvyoverseas" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter size={20} className="transition-all hover:text-gray-300" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <div className={`${hideAppbar ? "top-0" : "top-[52px]"} fixed top-0 left-1/2 z-50 w-full -translate-x-1/2 rounded-b-2xl bg-white shadow-lg sm:w-[80%]`}>
                <nav className="flex items-center justify-between px-6 py-4">
                    <img src="/logo.png" alt="Logo" className="w-40" />

                    <ul className="text-text-100 hidden space-x-6 text-sm font-medium md:flex">
                        <li className="hover:text-primary-100 cursor-pointer">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="hover:text-primary-100 cursor-pointer">
                            <Link href="/about">Our Company</Link>
                        </li>
                        <li className="hover:text-primary-100 cursor-pointer">
                            <Link href="/product">Product</Link>
                        </li>
                        <li className="hover:text-primary-100 cursor-pointer">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-10 w-10" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="bottom" className="bg-white p-6 shadow-lg">
                            <SheetTitle className="sr-only">Menu</SheetTitle>
                            <ul className="text-text-100 mt-5 space-y-4 text-lg font-medium">
                                <li className="hover:text-primary-100 cursor-pointer">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="hover:text-primary-100 cursor-pointer">
                                    <Link href="/about">Our Company</Link>
                                </li>
                                <li className="hover:text-primary-100 cursor-pointer">
                                    <Link href="/product">Product</Link>
                                </li>
                                <li className="hover:text-primary-100 cursor-pointer">
                                    <Link href="/contact">Contact</Link>
                                </li>
                            </ul>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
