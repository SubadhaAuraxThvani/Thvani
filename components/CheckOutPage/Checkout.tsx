"use client"
import { TbCircleNumber1Filled } from "react-icons/tb";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import { PiNumberCircleThreeFill } from "react-icons/pi";
import { FaCartShopping } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/images/other/image1.png";
import { Cart } from "@/types";
import { useState,useEffect } from "react";
interface CartProps {
    cartId:string;
}
const API_BASE_URL = "http://localhost:5000";

const CheckoutPage:React.FC<CartProps>=({cartId}) =>{

const [cart,setCart]=useState<Cart>();


useEffect(() => {
    const fetchCartItems = async () => {


      try {
        console.log("calling cart", cartId)
        const response = await fetch(`${API_BASE_URL}/api/v1/cart/cartById/${cartId}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data,'this is me')
        setCart(data);
      } catch (err: any) {
      } 
    };

    if (cartId) {
      fetchCartItems();
    }
  }, [cartId]);

    return (
        <div className="flex flex-col lg:flex-row w-full p-5 lg:px-20 lg:py-10 gap-5 min-h-[60vh]">
            {/* Left Section */}
            <div className="flex flex-col w-full lg:w-2/3 gap-5 h-full">
                <div className="flex flex-col lg:flex-row items-start bg-color6 lg:p-10 p-5 rounded-lg gap-5">
                    <div className="flex-shrink-0">
                        <TbCircleNumber1Filled size={32} />
                    </div>
                    <div className="font-lato flex flex-col gap-3 w-full">
                        <label className="text-lg font-semibold">Enter Your Email</label>
                        <p className="text-sm">
                            Already have an account? <span className="underline">Log In</span>
                        </p>
                        <input
                            type="email"
                            placeholder="Email*"
                            className="p-4 border border-gray-300 rounded-md w-full"
                        />
                        <p className="text-sm">
                            By providing your email, you agree to our{" "}
                            <span className="underline"><Link href="/privacy">Privacy Policy</Link></span> and{" "}
                            <span className="underline"><Link href="/term">Terms of Service.</Link></span>
                        </p>
                        <button className="w-full bg-color7 text-black p-3 rounded-lg">
                            CONTINUE TO SHIPPING
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-3 bg-color6 lg:p-10 p-5 rounded-lg">
                    <PiNumberCircleTwoFill size={32} />
                    <p className="text-lg font-semibold">Shipping</p>
                </div>

                <div className="flex items-center gap-3 bg-color6 lg:p-10 p-5 rounded-lg">
                    <PiNumberCircleThreeFill size={32} />
                    <p className="text-lg font-semibold">Payment Method</p>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col w-full lg:w-1/3 bg-gray-100 p-0 rounded-lg h-full">
                <div className="flex justify-center items-center bg-green-200 m-0 p-3">
                    <p className="font-semibold">Free Shipping</p>
                </div>

                <div className="flex p-5">
                    <div className="flex w-full justify-between">
                        <div className="flex gap-3">
                            <FaCartShopping size={32} />
                            <p className="font-bold text-xl">Cart</p>
                        </div>
                        <div className="flex">
                            <p className="font-bold text-xl">${cart?.price}</p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 p-3 px-5">
                    <div className="w-1/3 lg:w-1/2">
                        <Image src={cart?.product_id.images[0].image_url||img1} alt="Product Image" className="w-full lg:h-[26vh] h-full object-fill rounded-md" width={200} height={300} layout="responsive" />
                    </div>
                    <div className="flex flex-col gap-2 w-2/3">
                        <p className="font-bold">{cart?.product_id.name}</p>
                        <p>SIZE {cart?.variant.size}</p>
                        <p>${cart?.price}</p>
                        <p>QYT. {cart?.quantity}</p>
                    </div>
                </div>

                <div className="flex flex-col py-5 px-5">
                    <div className="flex py-2 justify-between w-full">
                        <p className="font-bold text-gray-600">Subtotal</p>
                        <p className="font-bold text-gray-600">${cart?.price}</p>
                    </div>
                    <div className="flex py-2 justify-between w-full">
                        <p className="font-bold text-gray-600">Tax</p>
                        <p className="font-bold text-gray-600">$0.00</p>
                    </div>
                    <div className="flex py-2 justify-between w-full">
                        <p className="font-bold text-gray-600">Shipping</p>
                        <p className="font-bold text-gray-600">$0.00</p>
                    </div>
                    <div className="flex py-2 justify-between w-full">
                        <p className="font-bold">Total</p>
                        <p className="font-bold text-gray-600">${cart?.price}</p>
                    </div>
                    <button className="bg-color1 text-white font-bold p-2 rounded-lg">
                        <Link href="/checkout"> CHECKOUT</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;
