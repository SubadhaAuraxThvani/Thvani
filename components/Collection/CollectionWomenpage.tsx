"use client"
import img1 from "@/images/Home/img1.png";
import img2 from "@/images/Home/img5.png";
import img3 from "@/images/Home/img3.png";
import img4 from "@/images/Home/img4.png";
import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Product } from "@/types";
import CollectionProduct from "./CollectionProduct";
import Product2 from "../Product/Product2";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { useState, useEffect } from "react";
import Link from "next/link";
import { fetchProducts } from "@/apiRequest/product";
export default function WomenCollectionPage() {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProducts();
                console.log(data);
                setLiveProducts(data)
            } catch (err) {
                console.error(err);
            }
        };
        console.log("called");
        fetchData();
    }, []);
    const [liveProducts, setLiveProducts] = useState<Product[]>([]);


    const products = [
        { img: img1, text: "Women's Sale", href: "/product" },
        { img: img2, text: "Women's New Arrival", href: "/product" },
        { img: img3, text: "Women's Dress", href: "/product" },
        { img: img4, text: "Women's Ethnic Wear", href: "/product" },
    ];

    // const collectionProducts = [
    //     { img: img1, badge: ["Trending", "New arrived"], text: "Organic Fleece Oversized Sweatshirt" },
    //     { img: img2, badge: ["Trending"], text: "Organic Fleece Relaxed Pocket" },
    //     { img: img3, badge: ["Best seller"], text: "Organic Cotton Classic Tee" },
    // ];

    const accordionItems = [
        { value: "item-1", trigger: "Category", content: "Category content here." },
        { value: "item-2", trigger: "Size", content: "Size content here." },
        { value: "item-3", trigger: "Fit", content: "Fit content here." },
        { value: "item-4", trigger: "Color", content: "Color content here." },
        { value: "item-5", trigger: "New Arrivals", content: "New Arrivals content here." },
        { value: "item-6", trigger: "Materials", content: "Materials content here." },
    ];

    return (
        <div className="flex flex-col py-8 md:py-[50px]">
            <div className="flex flex-col gap-4 w-full">
                {/* Header Section */}
                <div className="px-4 md:px-[50px]">
                    <p>Home / Women&apos;s</p>
                    <p className="text-2xl md:text-3xl lg:text-[1.5vw] font-bold">
                        Women&apos;s Clothing
                    </p>
                    <p className="text-base mt-4 md:text-lg font-lato">
                        Thoughtfully Art and sustainably made Women&apos;s dress. Welcome to everyday essentials.
                    </p>
                </div>

                {/* Products Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-[50px]">
                    {products.map((product, index) => (
                        <div key={index} className="flex flex-col gap-2 p-2 rounded-lg">
                            <div className="w-full rounded-xl  overflow-hidden h-[40vh] sm:h-[35vh] lg:h-[45vh]">
                                <Image
                                    alt={product.text}
                                    src={product.img}
                                    className="rounded-xl w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <p className="font-bold text-lg lg:text-left lg:text-[1.3vw] text-center">{product.text}</p>
                            <div className="flex justify-center lg:justify-start">
                                <Link href={product.href}>
                                    <button className="p-3 mt-3 px-6 bg-black text-white rounded-full text-sm lg:text-[1.1vw] hover:bg-gray-800 transition-colors duration-200">
                                        Shop
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Accordion and Product Grid */}
                <div className="flex flex-col md:flex-row py-8 px-4 md:px-[50px] gap-8">
                    {/* Accordion */}
                    <div className="w-full md:w-1/3 lg:w-1/4">
                        <Accordion type="single" collapsible className="w-full">
                            {accordionItems.map((item) => (
                                <AccordionItem key={item.value} value={item.value}>
                                    <AccordionTrigger>{item.trigger}</AccordionTrigger>
                                    <AccordionContent>{item.content}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* Product Grid */}
                    <div className="flex flex-col w-full gap-10">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 lg:px-20 justify-items-center">
                            {liveProducts.filter(product => product.category_id.name === "women").map((product, index) => (
                                <CollectionProduct key={index} img={product.images[0].image_url} text={product.description}
                                    price={product.price}
                                    id={product._id}
                                />
                            ))}
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
                            {[1, 2, 3].map((page) => (
                                <PaginationItem key={page}>
                                    <PaginationLink href="#" isActive={page === 2}>
                                        {page}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
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
    );
}