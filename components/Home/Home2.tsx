import img1 from "@/images/Home/img1.png";
import img2 from "@/images/Home/img2.png";
import img3 from "@/images/Home/img3.png";
import img4 from "@/images/Home/img4.png";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function Home2({props}:{props:string}) {
    return (
        <div className="flex flex-col h-auto min-h-[100vh]">
            <div className="flex pt-[50px] pb-[50px] text-center justify-center w-full text-4xl font-bold">
                <p>{props}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 lg:px-20 justify-items-center">
                <div className="sm:w-[300px] bg-white border border-gray-200 rounded-lg shadow">
                    <Link href="/product">
                        <Image className="rounded-t-lg" objectFit="contain" src={img1} alt="" />
                    </Link>
                    <div className="flex flex-col p-5 ">
                        <div className="flex items-center">
                            <FaStar /><FaStar /><FaStar /><FaStar />
                            <span className="pl-2">256</span>
                        </div>
                        <div>
                        <span className="text-sm overflow-ellipsis overflow-hidden whitespace-nowrap">Organic Fience Oversized Sweatshirt</span>
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
                <div className=" sm:w-[300px] bg-white border border-gray-200 rounded-lg shadow">
                    <Link href="/product">
                        <Image className="rounded-t-lg" objectFit="cover" src={img2} alt="" />
                    </Link>
                    <div className="flex flex-col p-5">
                        <div className="flex items-center">
                            <FaStar /><FaStar /><FaStar /><FaStar />
                            <span className="pl-2">256</span>
                        </div>
                        <div>
                        <span className="text-sm overflow-ellipsis overflow-hidden whitespace-nowrap">Organic Fleece Relaxed Pocket</span>
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
                <div className=" sm:w-[300px] bg-white border border-gray-200 rounded-lg shadow">
                    <Link href="/product">
                        <Image className="rounded-t-lg" objectFit="cover" src={img3} alt="" />
                    </Link>
                    <div className="flex flex-col p-5">
                        <div className="flex items-center">
                            <FaStar /><FaStar /><FaStar /><FaStar />
                            <span className="pl-2">256</span>
                        </div>
                        <div>
                        <span className="text-sm overflow-ellipsis overflow-hidden whitespace-nowrap">Organic Cotton Classic Tee</span>
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
                <div className=" sm:w-[300px] bg-white border border-gray-200 rounded-lg shadow">
                    <Link href="/product">
                        <Image className="rounded-t-lg" objectFit="cover" src={img4} alt="" />
                    </Link>
                    <div className="flex flex-col p-5">
                        <div className="flex items-center">
                            <FaStar /><FaStar /><FaStar /><FaStar />
                            <span className="pl-2">256</span>
                        </div>
                        <div>
                        <span className="text-sm overflow-ellipsis overflow-hidden whitespace-nowrap">Organic Fience Oversized Sweatshirt</span>
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
            </div>
        </div>
    );
}
