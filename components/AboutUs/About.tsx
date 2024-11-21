import img1 from "@/images/About/about1.png";
import img3 from "@/images/About/about3.png";
import img4 from "@/images/About/about4.png";
import img5 from "@/images/About/about5.png";
import img6 from "@/images/About/about6.png";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export default function About() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col md:flex-row w-full h-auto md:h-[85vh]">
                <div className="flex w-full md:w-1/2 flex-col px-6 md:px-[50px] gap-5 py-10 md:py-[50px]">
                    <p className="text-lg md:text-xl">WE ARE THVANI</p>
                    <h1 className="text-3xl sm:pr-[20vw] pr-0 md:text-5xl font-bold text-color1">
                        Art Through Sustainable Fashion.
                    </h1>
                    <p className="text-sm md:text-xl">
                        Where innovation meets nature, creating a fusion of style, sustainability, and modern craftsmanship. we are reimagining fashion through a lens of responsibility and creativity. Our journey is fueled by a passion for turning nature’s most unexpected resources into garments that transcend trends and redefine style.
                    </p>
                    <div className="self-start">
                        <Link href="/women">
                            <button className="inline-block border-2 p-3 border-color1 text-sm">
                                SEE OUR COLLECTIONS
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex w-full md:w-1/2">
                    <Image src={img1} alt="About Image" className=" w-full object-cover" />
                </div>
            </div>

            {/* Carousel Section */}
            <div className="flex justify-center items-center py-10 md:py-[50px] relative">
                <Carousel className="w-full max-w-lg md:max-w-4xl border-none">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-2">
                                    <Card className="h-full">
                                        <CardContent className="flex flex-col gap-3 items-center justify-center px-4 mx-10 py-4">
                                            <span className="text-lg py-5  md:text-xl font-bold text-center">
                                                BELIEVE IN POSSIBLE
                                            </span>
                                            <span className="text-base py-5  md:text-lg lg:text-2xl font-medium text-center">
                                                At THVANI, we don t just create clothing; we Art a movement. Every stitch, every fabric, every design is a testament to our unwavering commitment to sustainability and innovation. By believing in us, you re not just choosing a brand; you re embracing a vision for a better, greener world.
                                            </span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full z-10 m-2">
                        <span>&lt;</span> {/* Or use an icon */}
                    </CarouselPrevious>
                    <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full z-10 m-2">
                        <span>&gt;</span> {/* Or use an icon */}
                    </CarouselNext>
                </Carousel>
            </div>


            {/* Mission & Vision Section */}
            <div className="flex flex-col bg-color5 my-10 md:my-[50px]">
                {/* First Section: Mission & Vision */}
                <div className="flex flex-col-reverse md:flex-row h-auto md:h-[70vh] border-b border-gray-200 pb-6 md:pb-0">
                    <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 md:px-10 text-center gap-4">
                        <p className="text-2xl md:text-4xl font-bold text-gray-800">Our Mission & Vision</p>
                        <p className="text-md md:text-lg text-gray-600 leading-relaxed">
                            At THVANI, we dont just create clothing; we craft a movement. Every stitch, every fabric, every design is a testament to our unwavering commitment to sustainability and innovation. By believing in us, you’re not just choosing a brand; you’re embracing a vision for a better, greener world.
                        </p>
                    </div>
                    <div className="flex w-full md:w-1/2">
                        <Image src={img5} alt="Mission Image" className="h-full w-full object-cover rounded-lg shadow-lg" />
                    </div>
                </div>

                {/* Second Section: Crafting the Future of Fashion */}
                <div className="flex flex-col md:flex-row h-auto md:h-[70vh] border-b border-gray-200 pb-6 md:pb-0">
                    <div className="flex w-full md:w-1/2">
                        <Image src={img3} alt="Crafting Image" className="h-full w-full object-cover rounded-lg shadow-lg" />
                    </div>
                    <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 md:px-10 text-center gap-4">
                        <p className="text-2xl md:text-4xl font-bold text-gray-800">Future of Fashion</p>
                        <p className="text-md md:text-lg text-gray-600 leading-relaxed">
                            Our process begins with selecting organic and regenerative materials like bamboo, banana, and orange fibers—fabrics that not only feel luxurious but also tread lightly on the planet. From fabric to finish, each step is driven by innovation. Each design is illustrated by hand, and zero-waste patterns ensure that every garment embodies our commitment to sustainability and style.
                        </p>
                    </div>
                </div>

                {/* Third Section: The Principles That Guide Us */}
                <div className="flex flex-col-reverse md:flex-row h-auto md:h-[70vh]">
                    <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 md:px-10 text-center gap-4">
                        <p className="text-2xl md:text-4xl font-bold text-gray-800">The Principles That Guide Us</p>
                        <p className="text-md md:text-lg text-gray-600 leading-relaxed">
                            Every piece we create begins with deep respect for the environment, from our dyeing methods using natural extracts to our zero-waste designs. While we appreciate the value of cutting-edge technology, we choose to honor traditional craftsmanship, ensuring that each garment is crafted with organic materials from start to finish—including our design process, where we use only organic papers and hand-drawn sketches. We are more than a brand; we are a movement dedicated to genuine sustainability.
                        </p>
                    </div>
                    <div className="flex w-full md:w-1/2">
                        <Image src={img4} alt="Principles Image" className="h-full w-full object-cover rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>


            {/* CTA Section */}
            <div className="flex flex-col p-6 md:p-[100px] gap-5 justify-center text-center items-center">
                <p className="text-lg md:text-3xl">
                    Join us in making a difference. Trust in our journey, believe in our purpose, and together, lets inspire change. With Thvani, youre not just investing in fashion; youre investing in a legacy of sustainable beauty.
                </p>
                <Link href="/login">
                    <button className="inline-block border-2 p-3 border-color1 text-md px-[100px]">
                        JOIN US NOW
                    </button>
                </Link>
            </div>

            {/* Process Section */}
            <div className="flex relative w-full h-[60vh]">
                <Image alt="Process Image" src={img6} className="w-full object-cover" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white gap-5 px-4">
                    <p className="font-bold text-xl md:text-2xl">OUR PROCESS IS,</p>
                    <p className="font-bold text-3xl md:text-4xl">100% TRACEABLE.</p>
                    <p className="font-bold text-3xl md:text-4xl">KNOW YOUR SOURCE.</p>
                    <Link href="/product/where">
                        <button className="bg-white text-black inline-block border-2 p-3 border-color1 text-md md:px-10 px-6">
                            TRACE MY PRODUCT
                        </button>
                    </Link>
                    
                </div>
            </div>

        </div>
    );
}
