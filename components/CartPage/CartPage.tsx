import img1 from "@/images/other/image1.png";
import Image from "next/image";
import Link from "next/link";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

export default function CartPage() {
    return (
        <div className="flex flex-col px-5 sm:px-[50px] lg:px-[150px] py-[50px] gap-10">
            <div className="flex">
                <p className="text-xl sm:text-2xl lg:text-3xl">Cart(1)</p>
            </div>
            <hr className="border-2 " />
            <div className="flex flex-col lg:flex-row w-full gap-10">
                <div className="flex w-full lg:w-1/4">
                    <Image
                        src={img1}
                        alt=""
                        className="h-[30vh] w-full sm:h-[40vh] lg:h-[50vh] "
                    />
                </div>
                <div className="flex w-full lg:w-1/4 flex-col gap-5 sm:gap-10">
                    <p className="text-lg sm:text-xl lg:text-xl font-bold">
                        Women Ethnic wear - golden white / L
                    </p>
                    <div className="flex w-full">
                        <div className="flex flex-col gap-5 sm:gap-10 w-1/2">
                            <div className="flex flex-col">
                                <p className="font-bold">Colour:</p>
                                <p>Golden white</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-bold">Size:</p>
                                <p>L</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-bold">Item Price:</p>
                                <p>$10.00</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 sm:gap-5 justify-center items-center w-1/2">
                            <p className="text-xl sm:text-2xl lg:text-3xl font-bold">QYT</p>
                            <div className="flex justify-center items-center gap-4 sm:gap-6">
                                <CiCirclePlus size={28} />
                                <p className="text-lg sm:text-xl">1</p>
                                <CiCircleMinus size={28} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="border-2 h-[6vh] w-[6vh] flex items-center justify-center rounded-md">
                        <MdDeleteOutline size={24} className="text-black" />
                    </div>
                </div>
                <div className="flex flex-col w-full lg:w-1/4 gap-3 sm:gap-5 rounded-lg bg-color3 p-3 h-full">
                    <div className="flex justify-between">
                        <p className="font-bold">Subtotal</p>
                        <p>$10.00</p>
                    </div>
                    <button className="bg-color1 text-white font-bold p-2">
                        <Link href="/checkout"> CHECKOUT</Link>
                    </button>
                    
                </div>
            </div>
        </div>
    );
}
