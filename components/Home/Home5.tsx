import Image from "next/image";
import img9 from "@/images/Home/img9.png";
import img10 from "@/images/Home/img10.png";
import img11 from "@/images/Home/img11.png";

export default function Home5() {
    return (
        <div className="flex flex-col h-auto py-[50px] bg-color5">
            <div className="flex text-color4 font-bold text-4xl justify-center text-center w-full pb-10">
                <span>WHERE WE LEAD</span>
            </div>
            <div className="flex flex-col md:flex-row justify-around px-5 md:px-10 lg:px-20 items-center font-bold">
                <div className="flex flex-col gap-2 text-center md:text-left">
                    <Image
                        src={img9}
                        alt="Material Innovation"
                        width={300}
                        height={300}
                        className="mx-auto md:mx-0 w-[80%] max-w-[300px] aspect-[1/1] object-cover"
                    />
                    <h1 className="text-lg md:text-xl lg:text-2xl">MATERIAL INNOVATION</h1>
                    <p className="px-5 md:px-0">
                        Pioneering the use of unique organic materials like banana, bamboo, and aloe vera to craft high-quality, eco-friendly garments that redefine sustainable fashion.
                    </p>
                </div>
                <div className="flex flex-col gap-2 text-center md:text-left">
                    <Image
                        src={img10}
                        alt="Circularity"
                        width={300}
                        height={300}
                        className="mx-auto md:mx-0 w-[80%] max-w-[300px] aspect-[1/1] object-cover"
                    />
                    <h1 className="text-lg md:text-xl lg:text-2xl">CIRCULARITY</h1>
                    <p className="px-5 md:px-0">
                        Blending traditional techniques with modern zero-waste practices, ensuring every piece is ethically produced with minimal impact on the planet.
                    </p>
                </div>
                <div className="flex flex-col gap-2 text-center md:text-left">
                    <Image
                        src={img11}
                        alt="Collective Activism"
                        width={300}
                        height={300}
                        className="mx-auto md:mx-0 w-[80%] max-w-[300px] aspect-[1/1] object-cover"
                    />
                    <h1 className="text-lg md:text-xl lg:text-2xl">COLLECTIVE ACTIVISM</h1>
                    <p className="px-5 md:px-0">
                        Merging cutting-edge design with sustainability, offering fashion that’s not just timeless but also forward-thinking and eco-conscious.
                    </p>
                </div>
            </div>
        </div>
    );
}
