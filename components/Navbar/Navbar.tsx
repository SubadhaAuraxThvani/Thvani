"use client";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
//import { CiHeart } from "react-icons/ci";
//import { CiSliderHorizontal } from "react-icons/ci";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../images/logo.png";
import { useAppSelector } from "@/store/hooks";
import {AlignJustify, Heart, X} from "lucide-react"
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen((prevState) => !prevState);
    };
    const items = useAppSelector((state) => state.cart.items);
    const [isBannerOpen, setIsBannerOpen]=useState(true);
    return (
        <div className="relative">
            {isBannerOpen&&<div className="relative bg-color1 text-white text-center py-2 text-sm md:text-base">
                <p>Shop Sale up to 25% Off - FREE SHIPPING on orders Over 500</p>
                <X onClick={()=>setIsBannerOpen(false)} className="cursor-pointer absolute top-2 right-3"/></div>}

            <div className="flex justify-between items-center px-4 py-3 md:px-10 lg:py-4 bg-white shadow-md">
                <div className="text-2xl font-bold">
                    <Link href="/">
                        <Image
                            src={logo}
                            width={140}
                            height={80}
                            className="object-cover h-8 w-20 lg:w-32 lg:h-12"
                            alt="logo"
                        />
                    </Link>
                </div>

                <ul className="hidden lg:flex lg:gap-8 text-lg">
                    <li><Link href="/women">WOMEN</Link></li>
                    <li><Link href="/men">MEN</Link></li>
                    <li><Link href="/kids">KIDS</Link></li>
                    <li><Link href="/women">ACCESSORIES</Link></li>
                    {/* <li><Link href="/climate">Climate+</Link></li> */}
                    <li><Link href="/calculator">IMPACT</Link></li>
                </ul>

                <div className="flex gap-6 relative">
                    <IoIosSearch size={25} />
                    <Link href="/cart" className="relative">
                        <IoBagOutline size={25} />
                        {items.length > 0 && (
                            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {items.length}
                            </span>
                        )}
                    </Link>
                    <Link href="/whislist" className="relative">
                        <Heart className=" font-extralight" size={25} />
                    </Link>
                    <div className="">
                        <button onClick={toggleMenu}>
                            <AlignJustify size={25} />
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="lg:hidden absolute left-0 w-full bg-color1 text-white py-4 flex flex-col items-center gap-2 z-50">
                    <ul className="list-none w-full flex flex-col items-center">
                        <li className="w-full text-center hover:bg-gray-700 rounded">
                            <Link href="/women">WOMEN</Link>
                        </li>
                        <li className="w-full text-center hover:bg-gray-700 rounded">
                            <Link href="/men">MEN</Link>
                        </li>
                        <li className="w-full text-center hover:bg-gray-700 rounded">
                            <Link href="/kids">KIDS</Link>
                        </li>
                        <li className="w-full text-center hover:bg-gray-700 rounded">
                            <Link href="/women">ACCESSORIES</Link>
                        </li>
                        {/* <li className="w-full text-center hover:bg-gray-700 rounded">
                            <Link href="/climate">Climate+</Link>
                        </li> */}
                        <li className="w-full text-center hover:bg-gray-700 rounded">
                            <Link href="/calculator">IMPACT</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
