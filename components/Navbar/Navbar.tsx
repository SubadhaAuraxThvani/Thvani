"use client";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiSliderHorizontal } from "react-icons/ci";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <div className="relative">
            {/* Top bar */}
            <div className="bg-color1 text-white text-center py-2 text-sm md:text-base">
                <p>Shop Sale up to 25% Off - FREE SHIPPING on orders Over 500</p>
            </div>

            {/* Main Navbar */}
            <div className="flex justify-between items-center px-4 py-3 md:px-10 lg:py-4 bg-white shadow-md">
                {/* Logo */}
                <div className="text-2xl font-bold"><Link href="/">Logo</Link></div>

                {/* Menu Items - hidden on mobile */}
                <ul className="hidden lg:flex lg:gap-8 text-lg">
                    <li><Link href="/women">Women</Link></li>
                    <li><Link href="/men">Men</Link></li>
                    <li><Link href="/kids">Kids</Link></li>
                    <li><Link href="/accessories">Accessories</Link></li>
                    <li><Link href="/climate">Climate+</Link></li>
                    <li><Link href="/calculator">Impact</Link></li>
                </ul>

                {/* Icons */}
                <div className="flex gap-6">
                    <IoIosSearch size={25} />
                    <Link href="/cart"><IoBagOutline size={25} /></Link>
                    <CiHeart size={25} />

                    {/* Hamburger menu (mobile only) */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu}>
                            <CiSliderHorizontal size={30} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="lg:hidden absolute left-0 w-full bg-color1 text-white py-4 flex flex-col items-center gap-2 z-50">
                    <ul className="list-none w-full flex flex-col items-center">
                        <li className="w-full text-center hover:bg-gray-700 rounded">
                            <Link href="/product">Women</Link>
                        </li>
                        <li className="w-full text-center hover:bg-gray-700 rounded">
                            <Link href="/men">Men</Link>
                        </li>
                        <li className="w-full text-center hover:bg-gray-700 rounded">
                            <Link href="/kids">Kids</Link>
                        </li>
                        <li className="w-full text-center hover:bg-gray-700 rounded">
                            <Link href="/accessories">Accessories</Link>
                        </li>
                        <li className="w-full text-center hover:bg-gray-700 rounded">
                            <Link href="/climate">Climate+</Link>
                        </li>
                        <li className="w-full text-center hover:bg-gray-700 rounded">
                            <Link href="/impact">Impact</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
