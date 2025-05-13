import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
    return (
        <footer className="from-primary-300 to-primary-100 bg-gradient-to-br pt-10 pb-5">
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
                    <div>
                        <Image src="/logo.png" className="h-20 w-fit" width={150} height={50} alt="Logo" />
                        <p className="mt-3 text-sm text-white/80">Bridging Global Markets with Quality & Trust.</p>
                    </div>
                    <div>
                        <h3 className="mb-3 text-lg font-semibold text-white">Contact</h3>
                        <a href="tel:+918141925344" className="mb-2 flex w-fit items-center gap-2 text-sm text-white/80 hover:text-white">
                            <Phone size={14} /> +91 81419 25344
                        </a>
                        <a href="mailto:info@yourcompany.com" className="flex w-fit items-center gap-2 text-sm text-white/80 hover:text-white">
                            <Mail size={18} /> info@yourcompany.com
                        </a>
                    </div>
                    <div>
                        <h3 className="mb-3 text-lg font-semibold text-white">Address</h3>
                        <p className="text-sm text-white/80">313, Dhara Trade Center, Mahadev chowk, Mota Varachha, Surat. 394101</p>
                        <p className="text-sm text-white/80">City, Country</p>
                    </div>
                    <div>
                        <h3 className="mb-3 text-lg font-semibold text-white">Catalog</h3>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Spices
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Grain & Pulses
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Tableware
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 border-t pt-5 text-center text-sm text-white">© {new Date().getFullYear()} Kelvy Overseas. All rights reserved.</div>
            </div>
        </footer>
    );
};

export default Footer;
