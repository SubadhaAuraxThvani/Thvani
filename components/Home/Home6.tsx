import * as React from "react";
import img from "@/images/Home/img12.png";
import { Card } from "@/components/ui/card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function Home6() {
    return (
        <div className="w-full p-5 lg:px-[10vw]">
            <div className="relative lg:mb-8 mb-32  mx-auto">
                <Carousel className="w-full ">
                    <CarouselContent className="h-full p-10">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="h-full">
                                <div className="flex flex-col md:flex-row w-full p-5">
                                    <div className="flex flex-1 items-center justify-center p-5">
                                        <div className="flex flex-col gap-5 font-bold text-center md:text-left">
                                            <p className="text-xl md:text-2xl lg:text-[1.8vw]">What Our Customers Say</p>
                                            <div className="flex text-xl lg:text-[1.2vw] justify-center md:justify-start">
                                                <FaStar /><FaStar /><FaStar /><FaStar />
                                            </div>
                                            <p className="text-sm md:text-base underline font-medium lg:text-[1.1vw]">
                                                I bought a top from Thvani, and I m so happy with it! The fabric is super soft, and I love that its eco-friendly. Plus, the print is so unique—its cool to know that no one else has the exact same one!
                                            </p>
                                            <p className="text-sm md:text-base lg:text-[.8vw]">- Shameena Shaik, Bengaluru</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 items-center justify-end p-5">
                                        <Card>
                                            <Image
                                                src={img}
                                                alt={`Slide ${index + 1} Image`}
                                                className="object-cover w-full h-[60vh]"
                                            />
                                        </Card>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-white bg-black bg-opacity-50 rounded-full">
                        <IoIosArrowBack />
                    </CarouselPrevious>
                    <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-white bg-black bg-opacity-50 rounded-full">
                        <IoIosArrowForward />
                    </CarouselNext>
                </Carousel>
            </div>
        </div>
    );
}
