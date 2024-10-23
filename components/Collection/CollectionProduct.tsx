import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { StaticImageData } from "next/image";

interface CollectionProductProps {
    img: string | StaticImageData; 
    text: string;
}

const CollectionProduct: React.FC<CollectionProductProps> = ({ img, text }) => {
    return (
        <div className="sm:w-[200px] lg:w-full md:w-full bg-white border border-gray-200 rounded-lg shadow">
            <Link href="/product">
                <Image className="rounded-t-lg" objectFit="contain" src={img} alt="" width={300} height={300} />
            </Link>
            <div className="flex flex-col p-5">
                <div className="flex items-center">
                    <FaStar /><FaStar /><FaStar /><FaStar />
                    <span className="pl-2">256</span>
                </div>
                <div>
                    <span className="text-sm">{text}</span>
                </div>
                <div>
                    <p>$10</p>
                </div>
                <div className="flex gap-2">
                    <div className="w-4 h-4 bg-color1 rounded-full"></div>
                    <div className="w-4 h-4 bg-color2 rounded-full"></div>
                    <div className="w-4 h-4 bg-color3 rounded-full"></div>
                    <div className="w-4 h-4 bg-color4 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default CollectionProduct;
