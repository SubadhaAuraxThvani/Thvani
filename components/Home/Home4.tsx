import img1 from "@/images/Home/img5.png";
import img2 from "@/images/Home/img6.png";
import img3 from "@/images/Home/img7.png";
import img4 from "@/images/Home/img8.png";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function Home4() {
    return (
        <div className="flex flex-wrap justify-center gap-2 items-center lg:h-[50vh] sm:mb-[120px]">
            <div className="flex relative gap-5 w-full sm:w-auto">
                <div className="w-full sm:w-auto">
                    <Image src={img1} alt="img" className="object-cover w-full sm:w-auto" />
                </div>
                <div className="absolute bottom-5 right-5 text-right flex flex-col gap-3">
                    <p className="text-white font-bold text-lg sm:text-xl">ARCHIVE SALE</p>
                    <button className="text-center w-[40vw] sm:w-[25vw] md:w-[10vw] bg-white rounded-lg text-black px-4 py-2 font-bold flex items-center gap-2">
                        SHOP <FaArrowRight />
                    </button>
                </div>
            </div>
            <div className="w-full sm:w-auto">
                <Image src={img2} alt="img" className="object-cover w-full sm:w-auto" />
            </div>
            <div className="w-full sm:w-auto">
                <Image src={img3} alt="img" className="object-cover w-full sm:w-auto" />
            </div>
            <div className="w-full sm:w-auto">
                <Image src={img4} alt="img" className="object-cover w-full sm:w-auto" />
            </div>
        </div>
    );
}
