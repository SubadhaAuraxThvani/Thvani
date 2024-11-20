"use client"
import img1 from "@/images/Home/img1.png";
import img2 from "@/images/other/image3.png";
import img3 from "@/images/Home/img3.png";
import img4 from "@/images/Home/img4.png";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

export default function Home2({ props }: { props: string }) {
    const [activeCarousel, setActiveCarousel] = useState<"best seller" | "New Arrival">("best seller");

    const handleTextClick = (carouselType: "best seller" | "New Arrival") => {
        setActiveCarousel(carouselType);
    };

    const bestSellerItems = (
        <>
            {[img1, img2, img3, img4].map((img, index) => (
                <div
                    key={index}
                    className="w-full max-w-xs lg:max-w-sm xl:max-w-md bg-white border border-gray-200"
                >
                    <Link href="/product">
                        <div className="relative pb-[100%] w-full">
                            <Image
                                className="object-cover absolute top-0 left-0 w-full h-full"
                                src={img}  // Use imported image
                                alt={`Best Seller Item ${index + 1}`}
                            />
                        </div>
                    </Link>
                    <div className="flex flex-col p-5">
                        <div className="flex items-center">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <span className="pl-2">256</span>
                        </div>
                        <span className="text-sm xl:text-[1vw] overflow-ellipsis overflow-hidden whitespace-nowrap">
                            Organic Fience Oversized Sweatshirt
                        </span>
                        <p>$10</p>
                    </div>
                </div>
            ))}
        </>
    );

    const newArrivalItems = (
        <>
            {[img4, img3, img2, img1].map((img, index) => (
                <div
                    key={index}
                    className="w-full max-w-xs lg:max-w-sm xl:max-w-md bg-white border border-gray-200"
                >
                    <Link href="/product">
                        <div className="relative pb-[100%] w-full">
                            <Image
                                className="object-cover absolute top-0 left-0 w-full h-full"
                                src={img}  // Use imported image
                                alt={`New Arrival Item ${index + 1}`}
                            />
                        </div>
                    </Link>
                    <div className="flex flex-col p-5">
                        <div className="flex items-center">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <span className="pl-2">256</span>
                        </div>
                        <span className="text-sm xl:text-[1vw] overflow-ellipsis overflow-hidden whitespace-nowrap">
                            Organic Fience Oversized Sweatshirt
                        </span>
                        <p>$10</p>
                    </div>
                </div>
            ))}
        </>
    );

    return (
        <div className="flex flex-col ">
            <div className="flex pt-[50px] pb-[20px] text-center justify-center w-full text-4xl font-bold">
                <p>{props}</p>
            </div>
            <div className="flex pb-[20px] font-bold text-color1 w-full justify-center text-lg">
                <div
                    className={`cursor-pointer ${activeCarousel === "best seller" ? "underline" : ""}`}
                    onClick={() => handleTextClick("best seller")}
                >
                    <p>Best Seller</p>
                </div>
                <div
                    className={`ml-10 cursor-pointer ${activeCarousel === "New Arrival" ? "underline" : ""}`}
                    onClick={() => handleTextClick("New Arrival")}
                >
                    <p>New Arrival</p>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 px-5 lg:px-20 xl:px-48">
                {activeCarousel === "best seller" ? bestSellerItems : newArrivalItems}
            </div>
        </div>
    );
}
