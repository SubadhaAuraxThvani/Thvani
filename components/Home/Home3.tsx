export default function Home3() {
    return (
        <div className="flex flex-col justify-between mb-[100px]">
            <div className="flex flex-col w-full text-center bg-color5 pb-10">
                <div className="flex flex-col py-12 w-full text-center gap-5">
                    <p className="text-2xl md:text-4xl ">What we do</p>
                    <p className="mx-5 md:mx-40 lg:mx-[200px] xl:mx-[500px] text-sm md:text-base">
                        We believe that fashion should be a harmonious blend of individuality, creativity, and a deep respect for our planet.
                    </p>
                </div>
                <div className="flex flex-wrap justify-around gap-5 md:gap-20 px-5">
                    <div className="flex flex-col text-left w-full md:w-[300px] gap-3">
                        <h1 className="text-lg md:text-xl font-bold">Our Mission :</h1>
                        <p className="text-sm md:text-base">
                            Thvani was founded with the commitment to create clothing that not only reflects your unique essence but also nurtures the earth.
                        </p>
                        <span className="underline">Learn More</span>
                    </div>
                    <div className="flex flex-col text-left w-full md:w-[300px] gap-3">
                        <h1 className="text-lg md:text-xl font-bold">About Us :</h1>
                        <p className="text-sm md:text-base">
                            Craft Unique Essence, we believe that fashion should be a harmonious blend of individuality, creativity, and a deep respect for our planet.
                        </p>
                        <span className="underline">Learn More</span>
                    </div>
                    <div className="flex flex-col text-left w-full md:w-[300px] gap-3">
                        <h1 className="text-lg md:text-xl font-bold">Innovation Meets Tradition :</h1>
                        <p className="text-sm md:text-base">
                            We challenge conventional fashion with our fusion of time-honored craftsmanship and modern techniques.
                        </p>
                        <span className="underline">Learn More</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center lg:px-[100px] sm:text-center  sm:px-[20px] lg:items-start lg:text-left">
                <p className="text-color1 font-bold text-4xl lg:pr-[200px] lg:text-[50px] lg:w-3/4 lg:text-left lg:pt-10 tracking-wide leading-relaxed">
                    REDEFINING FASHION WITH SUSTAINABLE INNOVATION AND TIMELESS CRAFTSMANSHIP.
                </p>
                <div className="flex justify-center lg:justify-start lg:w-1/4 mt-5">
                    <div className="border-2 border-color1 rounded-2xl p-2">
                        <span className="text-lg">LEARN MORE</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
