import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { StaticImageData } from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";

interface CollectionProductProps {
    img: string | StaticImageData; 
    text: string;
    badge:Array<string>
}

const CollectionProduct: React.FC<CollectionProductProps> = ({ img,badge, text }) => {
    return (
        <div className="w-full col-span-1 h-full lg:w-full md:w-full bg-white border border-gray-200 rounded-lg shadow">
            <Link className="" href="/product">
            <div className="w-full h-5/7 lg:h-4/5 rounded-t-xl relative overflow-hidden">
             <div className="absolute md:flex hidden w-full justify-between px-3 top-2 left-0 items-center gap-1 z-10"><div className="flex gap-2">{badge?.map((value:string,ind:number)=>(<Badge key={ind} variant={ind==0?'default':'outline'} className=" lg:text-[.7vw] py-1 h-[1.5vw] rounded-full  pointer-events-none ">{value}</Badge>))}</div> <Button variant="outline" className="bg-transparent rounded-full p-2  aspect-square"><Heart className="w-5 lg:w-[1vw] invert"/></Button></div>
                <Image className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105" objectFit="cover" src={img} alt="" width={600} height={700} />
            </div>
            </Link>
            <div className="flex flex-col p-5">
                <div className="flex lg:text-[1vw] items-center">
                    <FaStar /><FaStar /><FaStar /><FaStar />
                    <span className="pl-2">256</span>
                </div>
                <div>
                    <span className="text-sm lg:text-[.9vw]">{text}</span>
                </div>
                <div>
                    <p className="lg:text-[.9vw]">$10</p>
                </div>
                <div className="flex gap-2">
                    <div className="h-4 lg:h-[1vw] aspect-square bg-color1 rounded-full"></div>
                    <div className="h-4 lg:h-[1vw] aspect-square bg-color2 rounded-full"></div>
                    <div className="h-4 lg:h-[1vw] aspect-square bg-color3 rounded-full"></div>
                    <div className="h-4 lg:h-[1vw] aspect-square bg-color4 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default CollectionProduct;
