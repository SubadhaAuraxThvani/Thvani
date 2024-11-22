import Link from "next/link";

export default function Home3() {
    return (
        <div className="flex mt-4 flex-col justify-between mb-[60px]">
            <div className="flex leading-loose flex-col w-full text-center bg-color5 pb-10">
                <div className="flex flex-col py-12 w-full text-center gap-5">
                    <p className="text-2xl md:text-4xl lg:text-[2.6vw] font-bold text-color1">What we do</p>
                    <p className="mx-5 text-color1 md:mx-40 lg:mx-[200px] xl:mx-[300px] text-sm ">
                        We believe that fashion should be a harmonious blend of individuality, creativity, and a deep respect for our planet.
                    </p>
                </div>
                <div className="flex flex-wrap justify-around gap-5 md:gap-20 px-5">
                    <div className="flex flex-col text-left w-full lg:w-[390px] md:w-[300px] gap-3">
                        <h1 className="text-lg md:text-2xl lg:text-[1.3vw] font-bold">Our Mission :</h1>
                        <p className="text-sm md:text-base xl:text-[.9vw]">
                            Thvani was founded with the commitment to create clothing that not only reflects your unique essence but also nurtures the earth.
                        </p>
                        <Link href="/sustainable">
                            <span className="underline">Learn More</span>
                        </Link>

                    </div>
                    <div className="flex flex-col text-left w-full lg:w-[390px] md:w-[300px] gap-3">
                        <h1 className="text-lg md:text-2xl lg:text-[1.3vw]  font-bold">About Us :</h1>
                        <p className=" text-sm md:text-base xl:text-[.9vw]">
                            Thvani, we believe that fashion should be a harmonious blend of individuality, creativity, and a deep respect for our planet.
                        </p>
                        <Link href="/about">
                            <span className="underline">Learn More</span>
                        </Link>
                    </div>
                    <div className="flex flex-col text-left lg:w-[390px] w-full md:w-[300px] gap-3">
                        <h1 className="text-lg md:text-2xl lg:text-[1.3vw]  font-bold">Innovation Meets Tradition:</h1>
                        <p className="text-sm md:text-base xl:text-[.9vw]">
                            We challenge conventional fashion with our fusion of time-honored craftsmanship and modern techniques.
                        </p>
                        <Link href="/product/how">
                            <span className="underline">Learn More</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center lg:px-[100px] sm:text-center  sm:px-[20px] lg:items-start lg:text-left">
                <p className="text-color1 mt-10 font-bold text-3xl lg:pr-[200px] lg:text-[3.2vw] lg:w-3/4 lg:text-left lg:pt-10 tracking-wide leading-relaxed">
                    REDEFINING FASHION WITH SUSTAINABLE INNOVATION AND TIMELESS CRAFTSMANSHIP.
                </p>
                <div className="flex justify-center lg:justify-start lg:w-1/4 mt-5">
                    <div className="border-2 border-color1 rounded-3xl p-2 py-1">
                        <Link href="/calculator">
                            <span className="text-lg lg:text-[1vw]">LEARN MORE</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
