import Image from "next/image"
import img1 from "@/images/Sustainable/sus1.png"
import img2 from "@/images/Sustainable/sus2.png"
import img3 from "@/images/Sustainable/sus3.png"
import img4 from "@/images/Sustainable/sus4.png"
import img5 from "@/images/Sustainable/sus5.png"
import img6 from "@/images/Sustainable/sus6.png"
import img7 from "@/images/Sustainable/sus7.png"
import img8 from "@/images/Sustainable/sus8.png"
import img9 from "@/images/Sustainable/sus9.png"
import img10 from "@/images/Sustainable/sus10.png"
import img11 from "@/images/Sustainable/sus11.png"
import img12 from "@/images/Sustainable/sus12.png"
import img13 from "@/images/Sustainable/sus13.png"
import img14 from "@/images/Sustainable/sus14.png"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const items = [
    { image: img11, text: "Rose" },
    { image: img12, text: "Sugar Cane" },
    { image: img13, text: "Lotus" },
    { image: img11, text: "Rose" },
    { image: img12, text: "Sugar Cane" },
    { image: img13, text: "Lotus" },
];

const MakingADifference = () => {
    return (
        <div className="flex flex-col bg-color5 p-[20px] md:p-[50px] lg:p-[100px]">
            <div className="flex flex-col md:flex-row w-full pb-[50px] md:pb-[100px]">
                <p className="text-3xl md:text-5xl w-full md:w-1/2 mb-4 md:mb-0">Making a Difference</p>
                <p className="w-full md:w-1/2 text-sm md:text-base">
                    At Thvani, Making a Difference isnt just a mantra—its our mission. Every decision we make, from sourcing sustainable materials to pioneering eco-friendly manufacturing techniques, is driven by our commitment to positively impact the planet. We believe that fashion should be a force for good, which is why we strive to create garments that not only look beautiful but also honor and preserve the natural world.
                </p>
            </div>
            <div className="flex flex-col md:flex-row w-full justify-evenly gap-5">
                <div className="flex flex-col w-full md:w-1/2 gap-5">
                    <Image src={img9} alt="" className="object-cover w-full h-auto" />
                    <p className="text-2xl md:text-3xl font-bold">A Greener Path Forward</p>
                    <p className="text-sm md:text-base pr-[5vw] md:pr-[10vw]">
                        Each garment we create is a testament to our dedication to sustainability. From the choice of eco-friendly fabrics to the innovative processes that reduce waste, these images capture the essence of our mission.
                    </p>
                </div>
                <div className="flex flex-col w-full md:w-1/2 gap-5">
                    <Image src={img10} alt="" className="object-cover w-full h-auto" />
                    <p className="text-2xl md:text-3xl font-bold">Sustainability in Every Stitch</p>
                    <p className="text-sm md:text-base pr-[5vw] md:pr-[10vw]">
                        These images illustrate our journey towards creating fashion that respects and honors the Earth. Each thread, each fabric choice is made with care, ensuring that our designs are not only beautiful but also sustainable.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function SustainablePage() {
    return (
        <div className="flex flex-col">
            <div className="relative flex flex-col h-full">
                <div className="w-full h-[60vh] md:h-[80vh] lg:h-full">
                    <Image src={img1} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-4 bg-white/10 gap-6 lg:gap-10 lg:p-16">
                    <Image src={img2} alt="" className="w-20 sm:w-28 md:w-36 lg:w-44 xl:w-auto mb-4" />
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center mb-2 lg:mb-4">
                        Fashioning A Better Future
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-white text-center px-4 sm:px-16 lg:px-[200px] xl:px-[250px]">
                        Redefining Fashion with a Commitment to Sustainability—Every Stitch, Every Fabric, Every Step Towards a Greener Future.
                    </p>
                </div>
            </div>
            <div className="flex p-[20px] md:p-[50px] lg:p-[100px] flex-col gap-10">
                <div className="flex flex-col gap-10 justify-center items-center text-center px-[5vw] md:px-[10vw] lg:px-[20vw]">
                    <p className="text-xl md:text-2xl lg:text-4xl text-color1">CONFRONTING CLIMATE CHANGE</p>
                    <p className="text-sm md:text-base lg:text-lg">
                        Theres no denying that the fashion industry plays a part in todays climate crisis. Its essential that we adopt new industry practices that stress the planet less, from reducing energy use, emissions, and waste, to taking a smarter, more responsible approach to water use and conservation. Not only do we tackle these issues head-on, we share our innovations with the entire industry. Lets take a look at how were changing the game for good.
                    </p>
                </div>

                <div className="flex sm:flex-col w-full py-[30px] md:py-[50px] lg:py-[100px]">
                    <div className="relative flex flex-col">
                        <div className="w-full h-[40vh] md:h-[60vh] lg:h-[80vh]">
                            <Image src={img3} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute gap-6 md:gap-10 inset-0 z-10 flex flex-col justify-center p-4 md:p-8 lg:p-16 bg-black/40">
                            <h1 className="text-xl md:text-2xl lg:text-4xl md:pr-[50vw] font-bold text-white mb-4">Sustainability Starts With Trust</h1>
                            <p className="text-sm md:text-lg lg:text-2xl md:pr-[50vw] text-white">
                                Sustainability is at the core of everything we do — but we believe just saying that isnt enough. Whether were restoring a forest in Indonesia or sourcing sustainable cotton in Turkey, we want our community to know about it. Thats because we believe open conversation about how were protecting our planet is the only way to make sure that we do.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center md:justify-between w-full gap-10">
                    <div className="flex flex-col text-center gap-6 md:gap-10 w-[40%] md:w-auto">
                        <Image src={img4} alt="" className="w-full h-auto md:w-auto md:h-auto object-cover" />
                        <p className="text-xl md:text-2xl font-bold">Embracing</p>
                    </div>
                    <div className="flex flex-col text-center gap-6 md:gap-10 w-[40%] md:w-auto">
                        <p className="text-xl md:text-2xl font-bold">Earth,</p>
                        <Image src={img5} alt="" className="w-full h-auto md:w-auto md:h-auto object-cover" />
                    </div>
                    <div className="flex flex-col text-center gap-6 md:gap-10 w-[40%] md:w-auto">
                        <Image src={img6} alt="" className="w-full h-auto md:w-auto md:h-auto object-cover" />
                        <p className="text-xl md:text-2xl font-bold">Fashioning</p>
                    </div>
                    <div className="flex flex-col text-center gap-6 md:gap-10 w-[40%] md:w-auto">
                        <p className="text-xl md:text-2xl font-bold">The</p>
                        <Image src={img7} alt="" className="w-full h-auto md:w-auto md:h-auto object-cover" />
                    </div>
                    <div className="flex flex-col text-center gap-6 md:gap-10 w-[40%] md:w-auto">
                        <Image src={img8} alt="" className="w-full h-auto md:w-auto md:h-auto object-cover" />
                        <p className="text-xl md:text-2xl font-bold">Future.</p>
                    </div>
                </div>
            </div>
            <MakingADifference/>
            <div className="flex flex-col p-[20px] md:p-[50px] lg:p-[100px] gap-10">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    <p>Our materials</p>
                </div>
                <div className="w-full relative">
                    <Carousel opts={{ align: "start" }} className="w-full">
                        <CarouselContent className="flex">
                            {items.map((item, index) => (
                                <CarouselItem
                                    key={index}
                                    className="w-full sm:basis-3/4 md:basis-1/2 lg:basis-1/4"
                                >
                                    <div className="p-1">
                                        <Card className="shadow-lg w-full">
                                            <CardContent className="flex flex-col items-center justify-center p-0 w-full">
                                                <div className="w-full">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.text}
                                                        className="object-cover w-full h-auto"
                                                    />
                                                </div>
                                                <p className="p-2 text-left text-xl sm:text-2xl md:text-3xl font-bold">
                                                    {item.text}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-white text-3xl bg-black/50 p-2 rounded-full hover:bg-black/70 md:text-4xl"
                        />
                        <CarouselNext
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-white text-3xl bg-black/50 p-2 rounded-full hover:bg-black/70 md:text-4xl"
                        />
                    </Carousel>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center py-[30px] md:py-[50px] gap-6 md:gap-10">
                <Image src={img14} alt="" className="max-w-[80%] md:max-w-[60%] lg:max-w-[40%] h-auto" />
                <p className="text-2xl md:text-3xl lg:text-4xl text-center font-bold">Made with Mother Nature in mind.</p>
            </div>

        </div>
    )
}
