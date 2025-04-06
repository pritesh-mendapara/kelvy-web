import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata = {
    title: "Kelvy Overseas",
    description:
        "growing for a better tomorrow view products read more Our Services Kelvy Overseas – Your Trusted Partner for Quality GoodsWelcome to Kelvy Overseas! We’re your go-to partner for sourcing top-quality goods from around the world. We offer a diverse selection of products, including pulses, fresh fruits and vegetables, premium paper items, agricultural products, and 100%",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} antialiased`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
