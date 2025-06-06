import Marque from "@/components/marquee";
import ProductSlider from "@/components/productSlider";
import Slider from "@/components/slider";
import { PRODUCT_RANGE, WHY_CHOOSE_US } from "@/constants/mockdata";
import Image from "next/image";

const Page = () => {
    return (
        <div>
            <Slider />
            <div className="container m-auto">
                <div className="my-10 p-3">
                    <h2 className="text-primary-100 mb-16 text-center text-4xl font-semibold">Why Choose Us</h2>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {WHY_CHOOSE_US.map((item, index) => (
                            <div key={index} className="p-4">
                                <div className="border-primary-300 aspect-3/2 overflow-hidden border-b-8 pb-4">
                                    <Image src={`/${item.image}`} height={600} width={600} className="h-full w-full object-contain" alt={`image-${index + 1}`} />
                                </div>
                                <h3 className="text-primary-100 mt-3 text-center font-semibold">{item.title}</h3>
                                <p className="mt-2 text-center text-base font-medium text-gray-500">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="my-10 p-3">
                    <h2 className="text-primary-100 mb-10 text-center text-4xl font-semibold">Product Range</h2>

                    <ProductSlider />
                </div>
            </div>

            <div className="container m-auto">
                <div className="my-10 p-3">
                    <h2 className="text-primary-100 mb-10 text-center text-4xl font-semibold">Membership & Registration</h2>
                    <Marque />
                </div>
            </div>
        </div>
    );
};

export default Page;
