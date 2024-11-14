import img1 from "@/images/Home/img1.png"
import img2 from "@/images/Home/img5.png"
import img3 from "@/images/Home/img3.png"
import img4 from "@/images/Home/img4.png"
import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import CollectionProduct from "./CollectionProduct"
import Product2 from "../Product/Product2"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

export default function WomenCollectionpage() {
    return (
        <div className="flex flex-col py-8 md:py-[50px]">
            <div className="flex flex-col gap-4 w-full">
                <div className="px-4 md:px-[50px]">
                    <p>Home / Womens</p>
                    <p className="text-2xl md:text-3xl font-bold">Womens Clothing</p>
                    <p className="text-base md:text-lg">
                        Thoughtfully crafted and sustainably made Womens dress. Welcome to everyday essentials.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-[50px]">
                    {/* Product 1 */}
                    <div className="flex flex-col gap-2 p-2 rounded-lg">
                        <Image
                            alt="Women's Sale"
                            src={img1}
                            className="rounded-lg w-full h-[40vh] sm:h-[35vh] lg:h-[45vh] object-cover"
                        />
                        <p className="font-bold text-lg lg:text-left text-center">Womens Sale</p>
                        <div className="flex justify-center lg:justify-start">
                            <button className="p-2 px-6 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition-colors duration-200">
                                Shop
                            </button>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="flex flex-col gap-2 p-2 rounded-lg">
                        <Image
                            alt="Women's New Arrival"
                            src={img2}
                            className="rounded-lg w-full h-[40vh] sm:h-[35vh] lg:h-[45vh] object-cover"
                        />
                        <p className="font-bold text-lg lg:text-left text-center">Womens New Arrival</p>
                        <div className="flex justify-center lg:justify-start">
                            <button className="p-2 px-6 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition-colors duration-200">
                                Shop
                            </button>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className="flex flex-col gap-2 p-2 rounded-lg">
                        <Image
                            alt="Women's Dress"
                            src={img3}
                            className="rounded-lg w-full h-[40vh] sm:h-[35vh] lg:h-[45vh] object-cover"
                        />
                        <p className="font-bold text-lg lg:text-left text-center">Womens Dress</p>
                        <div className="flex justify-center lg:justify-start">
                            <button className="p-2 px-6 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition-colors duration-200">
                                Shop
                            </button>
                        </div>
                    </div>

                    {/* Product 4 */}
                    <div className="flex flex-col gap-2 p-2 rounded-lg">
                        <Image
                            alt="Women's Ethnic Wear"
                            src={img4}
                            className="rounded-lg w-full h-[40vh] sm:h-[35vh] lg:h-[45vh] object-cover"
                        />
                        <p className="font-bold text-lg lg:text-left text-center">Womens Ethnic Wear</p>
                        <div className="flex justify-center lg:justify-start">
                            <button className="p-2 px-6 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition-colors duration-200">
                                Shop
                            </button>
                        </div>
                    </div>
                </div>



                {/* Accordion and Product Grid */}
                <div className="flex flex-col md:flex-row py-8 px-4 md:px-[50px] gap-8">
                    <div className="w-full md:w-1/3 lg:w-1/4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Category</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Size</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It comes with default styles that match the other components&apos; aesthetic.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Fit</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It&apos;s animated by default, but you can disable it if you prefer.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Color</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It&apos;s animated by default, but you can disable it if you prefer.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger>New Arrivals</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It&apos;s animated by default, but you can disable it if you prefer.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6">
                                <AccordionTrigger>Materials</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It&apos;s animated by default, but you can disable it if you prefer.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    {/* Product Grid */}
                    <div className="flex flex-col w-full gap-10">

                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 lg:px-20 justify-items-center">
                            <CollectionProduct img={img1} text="Organic Fleece Oversized Sweatshirt" />
                            <CollectionProduct img={img2} text="Organic Fleece Relaxed Pocket" />
                            <CollectionProduct img={img3} text="Organic Cotton Classic Tee" />
                            <CollectionProduct img={img1} text="Organic Fleece Oversized Sweatshirt" />
                            <CollectionProduct img={img2} text="Organic Fleece Relaxed Pocket" />
                            <CollectionProduct img={img3} text="Organic Cotton Classic Tee" />
                            <CollectionProduct img={img1} text="Organic Fleece Oversized Sweatshirt" />
                            <CollectionProduct img={img2} text="Organic Fleece Relaxed Pocket" />
                            <CollectionProduct img={img3} text="Organic Cotton Classic Tee" />
                            <CollectionProduct img={img1} text="Organic Fleece Oversized Sweatshirt" />
                            <CollectionProduct img={img2} text="Organic Fleece Relaxed Pocket" />
                            <CollectionProduct img={img3} text="Organic Cotton Classic Tee" />
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <div className="px-4 md:px-[50px] py-8">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" isActive>
                                    2
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>

                {/* Additional Product Section */}
                <div className="flex w-full px-4 md:px-0">
                    <Product2 />
                </div>
            </div>
        </div>
    )
}
