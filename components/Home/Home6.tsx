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
        <div className="w-full p-5">
            <div className="relative max-w-5xl mx-auto">
                <Carousel className="w-full">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="flex flex-col md:flex-row w-full p-5">
                                    <div className="flex flex-1 items-center justify-center p-5">
                                        <div className="flex flex-col gap-5 font-bold text-center md:text-left">
                                            <p className="text-xl md:text-2xl">What Our Customers Say</p>
                                            <div className="flex justify-center md:justify-start">
                                                <FaStar /><FaStar /><FaStar /><FaStar />
                                            </div>
                                            <p className="text-sm md:text-base">
                                                I bought a top from Thvani, and I m so happy with it! The fabric is super soft, and I love that its eco-friendly. Plus, the print is so unique—its cool to know that no one else has the exact same one!
                                            </p>
                                            <p className="text-sm md:text-base">- Shameena Shaik, Bengaluru</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 items-center justify-center p-5">
                                        <Card>
                                            <Image
                                                src={img}
                                                alt={`Slide ${index + 1} Image`}
                                                className="object-cover w-full h-auto"
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
