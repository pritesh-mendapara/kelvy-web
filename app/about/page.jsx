import Marque from "@/components/marquee";
import Image from "next/image";

const Page = () => {
    return (
        <div className="container m-auto max-w-[1200px]">
            <div className="mt-40 mb-5 p-3">
                <h1 className="text-primary-200 text-center text-[clamp(2rem,5vw,4rem)] font-semibold">Contact US</h1>
                <div className="mb-10 flex flex-col items-start gap-6 lg:flex-row">
                    <div className="w-full lg:w-1/2">
                        <Image src="/pulses.png" height={400} width={400} className="aspect-[3/2] h-auto w-full object-cover" alt="image-1" />
                    </div>
                    <div className="w-full space-y-4 text-justify text-black/60 lg:w-1/2">
                        <h3 className="text-primary-100 text-left text-[clamp(1.5rem,3vw,2.5rem)] font-semibold">About Kelvy Overseas​</h3>
                        <p>
                            At Kelvy Overseas, we bring the best of India’s heritage to the world. Since 2016, we’ve specialized in exporting premium products that enhance every aspect of the dining
                            experience.
                        </p>
                        <p>
                            Our authentic Indian spices are the heart of flavorful cooking, offering rich aromas and vibrant tastes. Sourced with care, our spices are indispensable in kitchens
                            worldwide. In the final stage of dining, our biodegradable sugarcane bagasse tableware provides an eco-friendly solution for serving food, designed with sustainability in
                            mind. Additionally, we export nutritious pulses, fresh fruits, and vegetables, all reflecting our commitment to quality, authenticity, and sustainability.
                        </p>
                        <p>Whether it's spices or tableware, Kelvy Overseas is your trusted partner in delivering quality products that make every meal memorable.</p>
                    </div>
                </div>

                <h1 className="text-primary-200 text-center text-[clamp(2rem,5vw,4rem)] font-semibold">Our Clients</h1>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29749.225124038956!2d72.86179988849106!3d21.245598798524476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f4fb5c0b087%3A0xb7aabd8a90da0679!2sMota%20Varachha%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1743943794727!5m2!1sen!2sin"
                    allowFullScreen=""
                    className="h-96 w-full rounded-lg border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <h2 className="text-primary-100 mb-10 text-center text-4xl font-semibold mt-10">Membership & Registration</h2>
                <Marque />
            </div>
        </div>
    );
};

export default Page;
