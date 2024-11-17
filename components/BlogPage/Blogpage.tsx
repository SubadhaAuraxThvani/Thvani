"use client";
import Image from "next/image";
import img1 from "@/images/Blog/img1.png";
import img2 from "@/images/Blog/img2.png";
import img3 from "@/images/Blog/img3.png";
import img4 from "@/images/Blog/img4.png";
import img5 from "@/images/Home/img1.png";
import img6 from "@/images/Home/img2.png";
import img7 from "@/images/Home/img5.png";
import img8 from "@/images/Home/img6.png";
import img17 from "@/images/Blog/image5.png";
import img18 from "@/images/Blog/image6.png";
import img9 from "@/images/Blog/image7.png";
import img10 from "@/images/Blog/image8.png";
import img11 from "@/images/Blog/image9.png";
import img12 from "@/images/Blog/image10.png";
import img13 from "@/images/Blog/image11.png";
import img14 from "@/images/Blog/image12.png";
import img15 from "@/images/Blog/image13.png";
import img16 from "@/images/Blog/image14.png";
import { motion } from 'framer-motion';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function Blogpage() {
    const textRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const textElement = textRef.current;
        if (textElement) {
            const containerWidth = textElement.offsetWidth;

            gsap.fromTo(
                textElement,
                { x: `-${containerWidth}px` },
                {
                    x: "100vw",
                    duration: 15,
                    ease: "linear",
                    repeat: -1,
                }
            );
        }
    }, []);



    return (
        <div className="flex flex-col w-full">
            <div className="flex px-[20px] md:px-[100px] lg:px-[200px] flex-col md:flex-row py-[20px] md:py-[50px] w-full gap-10 justify-evenly">
                {/* Left Side */}
                <div className="flex flex-col gap-5 md:gap-10 w-full md:w-1/2">
                    <div className="">
                        <Image src={img1} alt="" />
                    </div>
                    <div className="px-5 text-center md:text-left">
                        <p className="text-2xl md:text-4xl font-bold">Sustainable Fashion: Beyond the Buzzword</p>
                        <p className="text-sm md:text-base font-medium">
                            DIVE INTO WHAT TRULY DEFINES SUSTAINABLE FASHION. EXPLORE THE MATERIALS, PROCESSES, AND PRACTICES THAT SET GENUINELY SUSTAINABLE BRANDS APART FROM THOSE JUST FOLLOWING THE TREND. LEARN HOW TO MAKE INFORMED CHOICES AS A CONSCIOUS CONSUMER.
                        </p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex flex-col w-full md:w-1/2 gap-6 md:gap-10">
                    <p className="text-xl md:text-3xl font-bold text-center">NEW AND NOW</p>

                    <div className="flex flex-col gap-5">
                        <div className="flex border-2 border-black">
                            <div className="w-1/3 h-[100px] md:w-[150px] md:h-[150px]">
                                <Image src={img2} alt="" className="object-cover w-full h-full" />
                            </div>
                            <div className="flex flex-col p-3 md:p-5 gap-3 md:gap-5 w-2/3">
                                <p className="text-xs font-bold">Eco-Friendly Fabrics</p>
                                <p className="text-sm md:text-base">The Journey of Eco-Friendly Fabrics</p>
                            </div>
                        </div>

                        <div className="flex border-2 border-black">
                            <div className="w-1/3 h-[100px] md:w-[150px] md:h-[150px]">
                                <Image src={img3} alt="" className="object-cover w-full h-full" />
                            </div>
                            <div className="flex flex-col p-3 md:p-5 gap-3 md:gap-5 w-2/3">
                                <p className="text-xs font-bold">Cutting-edge techniques</p>
                                <p className="text-sm md:text-base">Innovative Techniques: Reducing Waste in Fashion</p>
                            </div>
                        </div>

                        <div className="flex border-2 border-black">
                            <div className="w-1/3 h-[100px] md:w-[150px] md:h-[150px]">
                                <Image src={img4} alt="" className="object-cover w-full h-full" />
                            </div>
                            <div className="flex flex-col p-3 md:p-5 gap-3 md:gap-5 w-2/3">
                                <p className="text-xs font-bold">Practical guide</p>
                                <p className="text-sm md:text-base">How to Build a Sustainable Wardrobe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scrolling Text Section */}
            <div className="flex w-full px-0 my-[50px] h-[50px] bg-color5 text-black items-center overflow-hidden">
                <div ref={textRef} className="whitespace-nowrap">
                    <p className="text-xs sm:text-sm inline-block mr-[500px]">
                        Every stitch tells a story of sustainability.
                    </p>
                    <p className="text-xs sm:text-sm inline-block mr-[500px]">
                        Where style meets responsibility.
                    </p>
                    <p className="text-xs sm:text-sm inline-block mr-[500px]">
                        Transforming the future of fashion, one garment at a time.
                    </p>
                </div>
            </div>

            <div className="overflow-hidden">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: ['0%', '-100%'] }}
                    transition={{
                        duration: 20, // Adjust this value for speed
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                >
                    {/* Original items */}
                    <div className="flex gap-5 flex-col  px-5">
                        <div className="relative h-64 w-64"> {/* Adjust height and width here */}
                            <Image
                                src={img5}
                                alt=""
                                layout="fill" // Fill the parent container
                                objectFit="cover" // Cover the area
                            />
                        </div>
                        <p className="font-bold">Fall</p>
                        <p>Fashion with a conscience, crafted for you.</p>
                    </div>
                    <div className="flex gap-5 flex-col  px-5">
                        <div className="relative h-64 w-64"> {/* Adjust height and width here */}
                            <Image
                                src={img6}
                                alt=""
                                layout="fill" // Fill the parent container
                                objectFit="cover" // Cover the area
                            />
                        </div>
                        <p className="font-bold">Newly Launched</p>
                        <p>Eco-friendly fabrics, extraordinary fashion.</p>
                    </div>
                    <div className="flex gap-5 flex-col px-5">
                        <div className="relative h-64 w-64"> {/* Adjust height and width here */}
                            <Image
                                src={img7}
                                alt=""
                                layout="fill" // Fill the parent container
                                objectFit="cover" // Cover the area
                            />
                        </div>
                        <p className="font-bold">Dating</p>
                        <p>Where style meets responsibility.</p>
                    </div>
                    <div className="flex gap-5 flex-col  px-5">
                        <div className="relative h-64 w-64"> {/* Adjust height and width here */}
                            <Image
                                src={img8}
                                alt=""
                                layout="fill" // Fill the parent container
                                objectFit="cover" // Cover the area
                            />
                        </div>
                        <p className="font-bold">Shopping</p>
                        <p>Sustainable style, timeless impact.</p>
                    </div>

                    <div className="flex gap-5 flex-col px-5">
                        <div className="relative h-64 w-64"> {/* Adjust height and width here */}
                            <Image
                                src={img5}
                                alt=""
                                layout="fill" // Fill the parent container
                                objectFit="cover" // Cover the area
                            />
                        </div>
                        <p className="font-bold">Fall</p>
                        <p>Fashion with a conscience, crafted for you.</p>
                    </div>
                    <div className="flex gap-5 flex-col px-5">
                        <div className="relative h-64 w-64"> {/* Adjust height and width here */}
                            <Image
                                src={img6}
                                alt=""
                                layout="fill" // Fill the parent container
                                objectFit="cover" // Cover the area
                            />
                        </div>
                        <p className="font-bold">Newly Launched</p>
                        <p>Eco-friendly fabrics, extraordinary fashion.</p>
                    </div>
                    <div className="flex gap-5 flex-col  px-5">
                        <div className="relative h-64 w-64"> {/* Adjust height and width here */}
                            <Image
                                src={img7}
                                alt=""
                                layout="fill" // Fill the parent container
                                objectFit="cover" // Cover the area
                            />
                        </div>
                        <p className="font-bold">Dating</p>
                        <p>Where style meets responsibility.</p>
                    </div>
                    <div className="flex gap-5 flex-col px-5">
                        <div className="relative h-64 w-64"> {/* Adjust height and width here */}
                            <Image
                                src={img8}
                                alt=""
                                layout="fill" // Fill the parent container
                                objectFit="cover" // Cover the area
                            />
                        </div>
                        <p className="font-bold">Shopping</p>
                        <p>Sustainable style, timeless impact.</p>
                    </div>
                    <div className="flex gap-5 flex-col  px-5">
                        <div className="relative h-64 w-64"> {/* Adjust height and width here */}
                            <Image
                                src={img5}
                                alt=""
                                layout="fill" // Fill the parent container
                                objectFit="cover" // Cover the area
                            />
                        </div>
                        <p className="font-bold">Fall</p>
                        <p>Fashion with a conscience, crafted for you.</p>
                    </div>
                    <div className="flex gap-5 flex-col  px-5">
                        <div className="relative h-64 w-64"> {/* Adjust height and width here */}
                            <Image
                                src={img6}
                                alt=""
                                layout="fill" // Fill the parent container
                                objectFit="cover" // Cover the area
                            />
                        </div>
                        <p className="font-bold">Newly Launched</p>
                        <p>Eco-friendly fabrics, extraordinary fashion.</p>
                    </div>
                    <div className="flex gap-5 flex-col  px-5">
                        <div className="relative h-64 w-64"> {/* Adjust height and width here */}
                            <Image
                                src={img7}
                                alt=""
                                layout="fill" // Fill the parent container
                                objectFit="cover" // Cover the area
                            />
                        </div>
                        <p className="font-bold">Dating</p>
                        <p>Where style meets responsibility.</p>
                    </div>
                    <div className="flex gap-5 flex-col  px-5">
                        <div className="relative h-64 w-64"> {/* Adjust height and width here */}
                            <Image
                                src={img8}
                                alt=""
                                layout="fill" // Fill the parent container
                                objectFit="cover" // Cover the area
                            />
                        </div>
                        <p className="font-bold">Shopping</p>
                        <p>Sustainable style, timeless impact.</p>
                    </div>
                </motion.div>
            </div>
            <div className="flex flex-col py-10 lg:py-[50px] justify-center items-center">
                <div className="flex text-2xl lg:text-4xl font-bold py-10 lg:py-[50px]">
                    <p>Where style meets responsibility</p>
                </div>
                <div className="flex flex-col lg:flex-row w-full gap-5 lg:gap-10 py-10 lg:py-[50px] px-5 lg:px-[100px] font-bold">
                    <div className="flex flex-col gap-5 lg:gap-10 w-full lg:w-1/3 border-2 border-black">
                        <p className="px-5 py-2">Trending</p>
                        <p className="p-5 text-lg lg:text-xl">Explore the intersection of technology & sustainability</p>
                        <Image src={img17} alt="" className="h-[30vh] lg:h-[50vh]" />
                    </div>
                    <div className="flex flex-col gap-5 lg:gap-10 w-full lg:w-1/2 border-2 border-black">
                        <Image src={img18} alt="" className="h-[30vh] lg:h-[50vh]" />
                        <p className="px-5 py-2">Fashion</p>
                        <p className="p-5 text-lg lg:text-xl">The Role of Certifications in Sustainable Fashion</p>
                    </div>
                    <div className="flex flex-col gap-5 lg:gap-10 w-full lg:w-1/3 border-2 border-black">
                        <p className="px-5 py-2">Latest</p>
                        <p className="p-5 text-lg lg:text-xl">Certifications like Fair Trade, GOTS, and B Corp</p>
                        <Image src={img9} alt="" className="h-[30vh] lg:h-[50vh]" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row w-full gap-5 lg:gap-10 px-5 lg:px-[100px] font-bold">
                    <div className="flex flex-col gap-5 lg:gap-10 w-full lg:w-1/2 border-2 border-black">
                        <Image src={img10} alt="" className="h-[30vh] lg:h-[50vh]" />
                        <p className="px-5 py-2">Trending</p>
                        <p className="p-5 text-lg lg:text-xl">Sustainable Living: Tips for an Eco-Friendly Lifestyle</p>
                    </div>
                    <div className="flex flex-col gap-5 lg:gap-10 w-full lg:w-1/2 border-2 border-black">
                        <p className="px-5 py-2">Latest</p>
                        <p className="p-5 text-lg lg:text-xl">Transparency is key at THVANI. Learn about our ethical sourcing practices</p>
                        <Image src={img11} alt="" className="h-[30vh] lg:h-[50vh]" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row px-5 lg:px-[100px] py-[30px] lg:py-[50px] mx-5 lg:mx-[100px] bg-color5">
                <div className="flex flex-col gap-5 w-full lg:w-1/2">
                    <p>Fashion</p>
                    <p className="text-2xl lg:text-4xl">The Role of Certifications in Sustainable Fashion</p>
                    <p className="text-lg lg:text-xl font-medium">Certifications like Fair Trade, GOTS, and B Corp are more than just labels. Learn what these certifications mean, how they’re earned, and why they’re important markers of true sustainability in fashion.</p>
                    <Link href="/sustainable">
                        <button className="bg-black justify-center items-center text-white w-[40vw] lg:w-[10vw] h-10">READ MORE</button>
                    </Link>
                </div>
                <div className="flex justify-center mt-5 lg:mt-0">
                    <Image src={img12} alt="" className="w-full lg:w-auto" />
                </div>
            </div>

            <div className="text-5xl text-center font-bold">
                <p>From Our expert</p>
            </div>
            <div className="overflow-hidden py-[50px]">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: ['0%', '-100%'] }}
                    transition={{
                        duration: 20, // Adjust this value for speed
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                >
                    {/* Original items */}
                    <div className="flex gap-5 flex-col  px-5">
                        <div className="relative h-64 w-64"> {/* Adjust height and width here */}
                            <Image
                                src={img5}
                                alt=""
                                layout="fill" // Fill the parent container
                                objectFit="cover" // Cover the area
                            />
                        </div>
                        <p className="font-bold">Fall</p>
                        <p>Fashion with a conscience, crafted for you.</p>
                    </div>
                    <div className="flex gap-5 flex-col  px-5">
                        <div className="relative h-64 w-64"> {/* Adjust height and width here */}
                            <Image
                                src={img6}
                                alt=""
                                layout="fill" // Fill the parent container
                                objectFit="cover" // Cover the area
                            />
                        </div>
                        <p className="font-bold">Newly Launched</p>
                        <p>Eco-friendly fabrics, extraordinary fashion.</p>
                    </div>
                    <div className="flex gap-5 flex-col px-5">
                        <div className="relative h-64 w-64"> {/* Adjust height and width here */}
                            <Image
                                src={img7}
                                alt=""
                                layout="fill" // Fill the parent container
                                objectFit="cover" // Cover the area
                            />
                        </div>
                        <p className="font-bold">Dating</p>
                        <p>Where style meets responsibility.</p>
                    </div>
                    <div className="flex gap-5 flex-col  px-5">
                        <div className="relative h-64 w-64"> {/* Adjust height and width here */}
                            <Image
                                src={img8}
                                alt=""
                                layout="fill" // Fill the parent container
                                objectFit="cover" // Cover the area
                            />
                        </div>
                        <p className="font-bold">Shopping</p>
                        <p>Sustainable style, timeless impact.</p>
                    </div>

                    <div className="flex gap-5 flex-col px-5">
                        <div className="relative h-64 w-64"> {/* Adjust height and width here */}
                            <Image
                                src={img5}
                                alt=""
                                layout="fill" // Fill the parent container
                                objectFit="cover" // Cover the area
                            />
                        </div>
                        <p className="font-bold">Fall</p>
                        <p>Fashion with a conscience, crafted for you.</p>
                    </div>
                    <div className="flex gap-5 flex-col px-5">
                        <div className="relative h-64 w-64"> {/* Adjust height and width here */}
                            <Image
                                src={img6}
                                alt=""
                                layout="fill" // Fill the parent container
                                objectFit="cover" // Cover the area
                            />
                        </div>
                        <p className="font-bold">Newly Launched</p>
                        <p>Eco-friendly fabrics, extraordinary fashion.</p>
                    </div>
                    <div className="flex gap-5 flex-col  px-5">
                        <div className="relative h-64 w-64"> {/* Adjust height and width here */}
                            <Image
                                src={img7}
                                alt=""
                                layout="fill" // Fill the parent container
                                objectFit="cover" // Cover the area
                            />
                        </div>
                        <p className="font-bold">Dating</p>
                        <p>Where style meets responsibility.</p>
                    </div>
                    <div className="flex gap-5 flex-col px-5">
                        <div className="relative h-64 w-64"> {/* Adjust height and width here */}
                            <Image
                                src={img8}
                                alt=""
                                layout="fill" // Fill the parent container
                                objectFit="cover" // Cover the area
                            />
                        </div>
                        <p className="font-bold">Shopping</p>
                        <p>Sustainable style, timeless impact.</p>
                    </div>
                    <div className="flex gap-5 flex-col  px-5">
                        <div className="relative h-64 w-64"> {/* Adjust height and width here */}
                            <Image
                                src={img5}
                                alt=""
                                layout="fill" // Fill the parent container
                                objectFit="cover" // Cover the area
                            />
                        </div>
                        <p className="font-bold">Fall</p>
                        <p>Fashion with a conscience, crafted for you.</p>
                    </div>
                    <div className="flex gap-5 flex-col  px-5">
                        <div className="relative h-64 w-64"> {/* Adjust height and width here */}
                            <Image
                                src={img6}
                                alt=""
                                layout="fill" // Fill the parent container
                                objectFit="cover" // Cover the area
                            />
                        </div>
                        <p className="font-bold">Newly Launched</p>
                        <p>Eco-friendly fabrics, extraordinary fashion.</p>
                    </div>
                    <div className="flex gap-5 flex-col  px-5">
                        <div className="relative h-64 w-64"> {/* Adjust height and width here */}
                            <Image
                                src={img7}
                                alt=""
                                layout="fill" // Fill the parent container
                                objectFit="cover" // Cover the area
                            />
                        </div>
                        <p className="font-bold">Dating</p>
                        <p>Where style meets responsibility.</p>
                    </div>
                    <div className="flex gap-5 flex-col  px-5">
                        <div className="relative h-64 w-64"> {/* Adjust height and width here */}
                            <Image
                                src={img8}
                                alt=""
                                layout="fill" // Fill the parent container
                                objectFit="cover" // Cover the area
                            />
                        </div>
                        <p className="font-bold">Shopping</p>
                        <p>Sustainable style, timeless impact.</p>
                    </div>
                </motion.div>
            </div>
            <div className="flex flex-col lg:flex-row bg-color5 h-auto lg:h-[90vh] my-[50px] gap-5 lg:gap-10">
                <div className="flex w-full lg:w-1/2 justify-center">
                    <Image src={img13} alt="" className="w-full lg:w-auto h-auto" />
                </div>
                <div className="flex flex-col w-full lg:w-[40vw] py-5 lg:py-[50px] gap-5 lg:gap-10 px-5 lg:px-0">
                    <p className="text-xl lg:text-2xl font-bold">Why We Choose Organic Fabrics</p>
                    <p className="text-lg lg:text-xl">Organic fabrics are at the heart of what we do at THVANI. Discover the benefits of choosing organic, not just for your wardrobe, but for the planet.</p>
                    <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
                        <div className="flex flex-col gap-3 lg:gap-5 w-full lg:w-auto">
                            <Image src={img14} alt="" className="h-[30vh] lg:h-[40vh]" />
                            <p>THVANI s Circular Fashion InitiativeForm</p>
                        </div>
                        <div className="flex flex-col gap-3 lg:gap-5 w-full lg:w-auto">
                            <Image src={img15} alt="" className="h-[30vh] lg:h-[40vh]" />
                            <p>The Future of Fashion: Tech Meets Sustainability</p>
                        </div>
                        <div className="flex flex-col gap-3 lg:gap-5 w-full lg:w-auto">
                            <Image src={img16} alt="" className="h-[30vh] lg:h-[40vh]" />
                            <p>Our Commitment to Ethical Sourcing Session</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
