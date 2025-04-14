import Image from "next/image";
import Marquee from "react-fast-marquee";

const Marque = () => {
    return (
        <Marquee speed={100} autoFill gradient={true}>
            {[1, 2, 3, 4, 5, 6].map((num) => (
                <Image
                    src={`/m-${num}.png`}
                    key={num}
                    width={300}
                    height={300}
                    alt={`Marquee Image ${num}`}
                    // hover:grayscale-0 grayscale
                    className="mx-10 h-24 w-full object-contain transition-all duration-300 sm:h-40"
                />
            ))}
        </Marquee>
    );
};

export default Marque;
