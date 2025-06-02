"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, Facebook, Instagram, Linkedin, Menu, ChevronDown } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const [hideAppbar, setHideAppbar] = useState(false);
    const [showProductDropdown, setShowProductDropdown] = useState(false);
    const [showSubProducts, setShowSubProducts] = useState({});
    const [sheetOpen, setSheetOpen] = useState(false);
    const router = useRouter();

    const productCategories = [
        {
            id: "spices",
            name: "Spices",
            image: "/product/whole-chilli.webp",
            subProducts: [
                { id: "ground", name: "Ground", image: "/product/chili-powder.webp" },
                { id: "whole", name: "Whole", image: "/product/turmeric.webp" },
            ],
        },
        {
            id: "grains",
            name: "Grains",
            image: "/product/wheat.webp",
        },
        {
            id: "pulses",
            name: "Pulses",
            image: "/product/brown-chickpeas.webp",
        },
        {
            id: "oilseeds",
            name: "Oil Seeds",
            image: "/product/white-sesame.webp",
        },
        {
            id: "tableWare",
            name: "Tableware",
            image: "/1.jpg",
            subProducts: [
                { id: "roundPlates", name: "Round Plate", image: "/1.jpg" },
                { id: "squarePlates", name: "Square Plate", image: "/2.jpg" },
                { id: "bowls", name: "Bowl", image: "/3.jpg" },
                { id: "mealTrays", name: "Meal Tray", image: "/4.jpg" },
                { id: "clamShell", name: "Clam Shell", image: "/5.jpg" },
                { id: "foodContainer", name: "Food Container", image: "/6.jpg" },
            ],
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setHideAppbar(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleProductHover = (isHovering) => {
        setShowProductDropdown(isHovering);
    };

    const handleCategoryHover = (categoryId, isHovering) => {
        setShowSubProducts((prev) => ({
            ...prev,
            [categoryId]: isHovering,
        }));
    };

    const navigateToProducts = (categoryId, subCategoryId = null) => {
        let url = "/product?category=" + categoryId;
        if (subCategoryId) {
            url += "&subcategory=" + subCategoryId;
        }
        router.push(url);
        setShowProductDropdown(false);
    };

    return (
        <div className="relative w-full overflow-hidden">
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

            <div className={`${hideAppbar ? "top-0" : "top-[52px]"} fixed top-0 left-1/2 z-50 w-full -translate-x-1/2 rounded-b-2xl bg-white shadow-lg sm:w-[80%]`}>
                <nav className="flex items-center justify-between px-6 py-2">
                    <img src="/logo.png" alt="Logo" className="w-40" />

                    <ul className="text-text-100 hidden space-x-6 text-sm font-medium md:flex">
                        <li className="hover:text-primary-100 cursor-pointer">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="hover:text-primary-100 cursor-pointer">
                            <Link href="/about">Our Company</Link>
                        </li>
                        <li className="hover:text-primary-100 relative cursor-pointer" onMouseEnter={() => handleProductHover(true)} onMouseLeave={() => handleProductHover(false)}>
                            <div className="flex items-center gap-1">
                                <Link href="/product">Product</Link>
                                <ChevronDown size={14} />
                            </div>

                            {showProductDropdown && (
                                <div className="absolute top-full left-0 z-50 w-64 rounded-md bg-white p-2 shadow-lg">
                                    {productCategories.map((category, index) => (
                                        <div key={index} className="relative" onMouseEnter={() => handleCategoryHover(category.id, true)} onMouseLeave={() => handleCategoryHover(category.id, false)}>
                                            <div onClick={() => navigateToProducts(category.id)} className="flex cursor-pointer items-center gap-3 rounded-md p-2 hover:bg-gray-100">
                                                <Image height={100} width={100} src={category.image} alt={category.name} className="h-6 w-6 rounded-md object-cover" />
                                                <span className="text-sm">{category.name}</span>
                                                {category.subProducts?.length > 0 && <ChevronDown size={14} className="ml-auto" />}
                                            </div>

                                            {showSubProducts[category.id] && category.subProducts && category.subProducts.length > 0 && category.subProducts.map && (
                                                <div className="absolute top-0 right-full z-50 w-60 rounded-md bg-white p-2 shadow-lg">
                                                    {category.subProducts.map((subProduct, index) => (
                                                        <div
                                                            onClick={() => navigateToProducts(category.id, subProduct.id)}
                                                            className="flex cursor-pointer items-center gap-3 rounded-md p-2 hover:bg-gray-100"
                                                            key={index}
                                                        >
                                                            <Image height={100} width={100} src={subProduct.image} alt={subProduct.name} className="h-6 w-6 rounded-md object-cover" />
                                                            <span className="text-xs">{subProduct.name}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </li>
                        <li className="hover:text-primary-100 cursor-pointer">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>

                    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-10 w-10" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-white p-6 shadow-lg">
                            <SheetTitle className="sr-only">Menu</SheetTitle>
                            <ul className="text-text-100 mt-5 space-y-4 text-lg font-medium">
                                <li className="hover:text-primary-100 cursor-pointer">
                                    <Link href="/" onClick={() => setSheetOpen(false)}>
                                        Home
                                    </Link>
                                </li>
                                <li className="hover:text-primary-100 cursor-pointer">
                                    <Link href="/about" onClick={() => setSheetOpen(false)}>
                                        Our Company
                                    </Link>
                                </li>
                                <li className="hover:text-primary-100 cursor-pointer">
                                    <div className="flex items-center justify-between" onClick={() => setShowProductDropdown(!showProductDropdown)}>
                                        <div>Product</div>
                                        <Button variant="ghost" size="sm" className="p-0">
                                            <ChevronDown size={20} />
                                        </Button>
                                    </div>

                                    {showProductDropdown && (
                                        <div className="mt-2 ml-4 space-y-2">
                                            {productCategories.map((category, index) => (
                                                <div key={index} className="space-y-2">
                                                    <div className="flex items-center gap-2">
                                                        <img src={category.image} alt={category.name} className="h-8 w-8 rounded-md object-cover" />
                                                        <div
                                                            onClick={() => {
                                                                navigateToProducts(category.id);
                                                                setSheetOpen(false);
                                                            }}
                                                            className="text-base"
                                                        >
                                                            {category.name}
                                                        </div>
                                                        {category.subProducts && category.subProducts.length > 0 && category.subProducts.map && (
                                                            <Button variant="ghost" size="sm" className="ml-auto p-0" onClick={() => handleCategoryHover(category.id, !showSubProducts[category.id])}>
                                                                <ChevronDown size={16} />
                                                            </Button>
                                                        )}
                                                    </div>

                                                    {showSubProducts[category.id] && category.subProducts && category.subProducts.map && (
                                                        <div className="ml-6 space-y-2">
                                                            {category.subProducts.map((subProduct, index) => (
                                                                <div
                                                                    key={index}
                                                                    onClick={() => {
                                                                        navigateToProducts(category.id, subProduct.id);
                                                                        setSheetOpen(false);
                                                                    }}
                                                                    className="flex items-center gap-2"
                                                                >
                                                                    <img src={subProduct.image} alt={subProduct.name} className="h-6 w-6 rounded-md object-cover" />
                                                                    <span className="text-sm">{subProduct.name}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </li>
                                <li className="hover:text-primary-100 cursor-pointer">
                                    <Link href="/contact" onClick={() => setSheetOpen(false)}>
                                        Contact
                                    </Link>
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
