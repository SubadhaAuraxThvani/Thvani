"use client";
import React, { useEffect, useState } from "react";
import img from "@/images/Home/img12.png";
import { Card } from "@/components/ui/card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

export function Home6() {
    const testimonials = Array.from({ length: 5 }); // Total number of testimonials
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 4000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [testimonials.length]);

    // Handle previous and next button click
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    return (
        <div className="w-full p-5">
            <div className="relative max-w-5xl lg:mb-8 mb-32 mx-auto">
                <div className="w-full h-full overflow-hidden relative">
                    <div
                        className="h-full sm:mx-12 mx-10 flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${(currentIndex % testimonials.length) * 100}%)`,
                        }}
                    >
                        {testimonials.map((_, index) => (
                            <div key={index} className="h-full flex-shrink-0 w-full">
                                <div className="flex flex-col md:flex-row w-full p-5">
                                    <div className="flex flex-1 items-center justify-center p-5 md:p-10">
                                        <div className="flex flex-col gap-5 font-bold text-center md:text-left">
                                            <p className="text-xl md:text-sm font-light">What Our Customers Say</p>
                                            <div className="flex justify-center md:justify-start">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
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
                                                className="object-cover w-full h-[50vh]"
                                            />
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Custom Previous Button */}
                    <button
                        onClick={handlePrevious}
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 text-black sm:text-5xl rounded-full  z-10 cursor-pointer"
                        style={{ left: '20px' }} // Add a bit more space from the edge
                    >
                        <IoIosArrowBack />
                    </button>

                    {/* Custom Next Button */}
                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 text-black sm:text-5xl rounded-full  z-10 cursor-pointer"
                        style={{ right: '20px' }} // Add a bit more space from the edge
                    >
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>
        </div>
    );
}
