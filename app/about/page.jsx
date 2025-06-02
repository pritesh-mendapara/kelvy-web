import Marque from "@/components/marquee";
import Image from "next/image";

const Page = () => {
    return (
        <div className="container m-auto max-w-[1200px]">
            <div className="mt-40 mb-5 p-3">
                <h1 className="text-primary-200 text-center text-[clamp(2rem,3vw,4rem)] font-semibold">About Kelvy Overseas​</h1>
                <div className="mt-5 mb-10 flex flex-col items-start gap-6 lg:flex-row">
                    <div className="w-full lg:w-1/2">
                        <Image src="/our-company.jpg" height={400} width={400} className="aspect-[3/2] h-auto w-full object-cover" alt="image-1" />
                    </div>
                    <div className="w-full space-y-1 text-justify text-black/60 lg:w-1/2">
                        <h3 className="text-primary-100 text-left text-[clamp(1.5rem,2vw,2.5rem)] font-semibold">What We Are:</h3>
                        <p>
                            Kelvy Overseas is a trusted global-export partner specializing in premium agricultural and eco‑friendly products. Through direct collaborations with dedicated farmers and
                            reputable manufacturers, we ensure authentic sourcing, ethical trade practices, and unwavering quality. Our expertise in seamless import‑export logistics and customized
                            solutions underpins our commitment to sustainability and customer success.
                        </p>
                        <h3 className="text-primary-100 text-left text-[clamp(1.5rem,2vw,2.5rem)] font-semibold">What We Serve:</h3>
                        <p>
                            We deliver a curated range of high-value products to markets worldwide—spices (both whole and ground) celebrated for their rich aroma and taste; pulses & lentils prized for
                            their nutritional excellence and farm‑fresh quality; and 100% compostable sugarcane bagasse tableware designed for eco‑conscious dining.
                        </p>
                    </div>
                </div>

                <h1 className="text-primary-200 mt-20 text-center text-[clamp(2rem,3vw,4rem)] font-semibold">Our Clients</h1>
                <p className="text-primary/50 mb-5 text-center text-xl">Global footprints in 40 countries</p>
                <Image src="/map.gif" height={400} width={400} className="aspect-[5/2] h-auto w-full object-cover" alt="image-1" />

                <h2 className="text-primary-100 mt-10 mb-10 text-center text-4xl font-semibold">Membership & Registration</h2>
                <Marque />
            </div>
        </div>
    );
};

export default Page;
