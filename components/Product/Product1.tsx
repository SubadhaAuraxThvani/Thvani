"use client"
import { useState } from "react";
import Image from "next/image";
import img1 from "@/images/Product/Product1.png";
import img2 from "@/images/Product/Product2.png";
import img3 from "@/images/Product/product3.png";
import img4 from "@/images/Product/product4.png";
import img5 from "@/images/Product/Frame.png"
import img6 from "@/images/Product/Frame2.png"
import img7 from "@/images/Product/Frame3.png"
import { FaStar } from "react-icons/fa";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
export default function Product1() {
    const [selectedImage, setSelectedImage] = useState(img1);
    const [activeItem, setActiveItem] = useState<string | null>(null);
    return (
        <div className="flex flex-col lg:flex-row h-auto lg:h-full py-5 w-full px-5 md:px-8 lg:px-10 gap-5">
            {/* Thumbnail Images */}
            <div className="flex lg:flex-col gap-2 lg:gap-6 justify-center lg:justify-start">
                {[img1, img2, img3, img4].map((img, index) => (
                    <div
                        key={index}
                        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 cursor-pointer"
                        onClick={() => setSelectedImage(img)}
                    >
                        <Image src={img} alt={`Thumbnail ${index + 1}`} className="object-cover w-full h-full" />
                    </div>
                ))}
            </div>

            {/* Main Product Section */}
            <div className="flex flex-col md:flex-row w-full gap-5">
                {/* Main Image */}
                <div className="w-full md:w-3/5 lg:w-2/4 h-[40vh] md:h-[60vh] lg:h-[75vh]">
                    <Image src={selectedImage} alt="Main Product Image" className="object-cover w-full h-full" />
                </div>

                {/* Product Details */}
                <div className="flex flex-col gap-5 w-full md:w-2/5 lg:w-2/4">
                    <div className="flex flex-col gap-5">
                        <p className="text-sm lg:text-base">Home/Best Seller/Women Selection</p>
                        <p className="text-lg md:text-2xl lg:text-3xl font-bold">Organic Cotton Classic Dress</p>
                        <p className="text-md md:text-xl lg:text-2xl">$321</p>
                        <div className="flex items-center gap-1">
                            <FaStar /><FaStar /><FaStar /><FaStar />
                            <div className="flex gap-2">
                                <p className="text-sm md:text-base">4.8</p>
                                <p>|</p>
                                <p className="text-sm md:text-base">574 Reviews</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p>Essentials</p>
                            <div className="flex space-x-2">
                                {[...Array(10)].map((_, i) => (
                                    <div key={i} className={`rounded-full w-4 h-4 bg-color${(i % 5) + 1}`}></div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p>Limited</p>
                            <div className="rounded-full w-4 h-4 bg-color1"></div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p>Select Size:</p>
                            <div className="flex space-x-2 font-bold">
                                {["xs", "s", "m", "l", "xl", "2x", "3x"].map((size) => (
                                    <div key={size} className="w-12 h-12 border rounded-md flex items-center justify-center">
                                        <span className="text-lg">{size}</span>
                                    </div>
                                ))}
                            </div>
                            <p>Model 1 is 6 feet and wears size S</p>
                        </div>
                        <hr className="w-full border"></hr>
                        <div className="flex justify-center md:px-[100px] lg:px-[150px]">
                            <button className="bg-color1 text-white p-3 rounded-3xl w-full md:w-auto">Add to Cart</button>
                        </div>
                        <div className="flex bg-color5 p-3 text-center justify-center items-center gap-10 text-sm md:text-base">
                            <p>Free Shipping on Orders $150+</p>
                            <p>Easy 30-Day Return & Exchanges</p>
                        </div>
                        <div className="flex flex-wrap w-full justify-evenly gap-4 md:gap-6 lg:gap-8">
                            <div className="flex flex-col items-center text-center">
                                <Image src={img5} alt="Less Water" className="w-16 md:w-20 lg:w-24" />
                                <p className="text-sm md:text-base lg:text-lg font-semibold">88.6% Less Water</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Image src={img6} alt="Less Carbon" className="w-16 md:w-20 lg:w-24" />
                                <p className="text-sm md:text-base lg:text-lg font-semibold">29.4% Less Carbon</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Image src={img7} alt="No Pesticides No Plastic" className="w-16 md:w-20 lg:w-24" />
                                <p className="text-sm md:text-base lg:text-lg font-semibold">No Pesticides No Plastic</p>
                            </div>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1" className="border-b border-gray-300">
                                <AccordionTrigger
                                    onClick={() => setActiveItem(activeItem === "item-1" ? null : "item-1")}
                                    className={`py-3 px-4 text-lg md:text-xl lg:text-xl font-semibold focus:outline-none ${activeItem === "item-1" ? "text-color4" : "text-black"
                                        }`}
                                >
                                    Details
                                </AccordionTrigger>
                                <AccordionContent className="px-4 pb-4 text-base md:text-lg lg:text-lg text-gray-600">
                                    Every woman needs her crew and ours is one you can definitely count on. Its got the perfect relaxed fit and is made with 100% Organic Cotton Jersey that is so super soft. The search for the perfect crew neck tee is over.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="border-b border-gray-300">
                                <AccordionTrigger
                                    onClick={() => setActiveItem(activeItem === "item-2" ? null : "item-2")}
                                    className={`py-3 px-4 text-lg md:text-xl lg:text-xl font-semibold focus:outline-none ${activeItem === "item-2" ? "text-color4" : "text-black"
                                        }`}
                                >
                                    Fabric Care
                                </AccordionTrigger>
                                <AccordionContent className="px-4 pb-4 text-base md:text-lg lg:text-lg text-gray-600">
                                    Yes. It comes with default styles that match the other components aesthetic.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="border-b border-gray-300">
                                <AccordionTrigger
                                    onClick={() => setActiveItem(activeItem === "item-3" ? null : "item-3")}
                                    className={`py-3 px-4 text-lg md:text-xl lg:text-xl font-semibold focus:outline-none ${activeItem === "item-3" ? "text-color4" : "text-black"
                                        }`}
                                >
                                    Fit
                                </AccordionTrigger>
                                <AccordionContent className="px-4 pb-4 text-base md:text-lg lg:text-lg text-gray-600">
                                    Yes. Its animated by default, but you can disable it if you prefer.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="border-b border-gray-300">
                                <AccordionTrigger
                                    onClick={() => setActiveItem(activeItem === "item-4" ? null : "item-4")}
                                    className={`py-3 px-4 text-lg md:text-xl lg:text-xl font-semibold focus:outline-none ${activeItem === "item-4" ? "text-color4" : "text-black"
                                        }`}
                                >
                                    Cost
                                </AccordionTrigger>
                                <AccordionContent className="px-4 pb-4 text-base md:text-lg lg:text-lg text-gray-600">
                                    Yes. Its animated by default, but you can disable it if you prefer.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5" className="border-b border-gray-300">
                                <AccordionTrigger
                                    onClick={() => setActiveItem(activeItem === "item-5" ? null : "item-5")}
                                    className={`py-3 px-4 text-lg md:text-xl lg:text-xl font-semibold focus:outline-none ${activeItem === "item-5" ? "text-color4" : "text-black"
                                        }`}
                                >
                                    Shipping
                                </AccordionTrigger>
                                <AccordionContent className="px-4 pb-4 text-base md:text-lg lg:text-lg text-gray-600">
                                    Yes. Its animated by default, but you can disable it if you prefer.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}
