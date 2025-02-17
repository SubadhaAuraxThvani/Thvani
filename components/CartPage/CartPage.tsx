"use client";
import { useAppDispatch } from "@/store/hooks";
import Image from "next/image";
import Link from "next/link";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { updateQuantity, removeItem } from "@/store/features/cart/cartSlice";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react"
import { origin } from "@/apiRequest/config";
import { Cart } from "@/types";

const API_BASE_URL = "https://api.thvaniearthcraft.com";

// Define interfaces for our data structures
// interface ProductImage {
//     image_url: string;
// }


// interface Product {
//     _id: string;
//     name: string;
//     price: string;
//     images: ProductImage[];
// }

// interface Variant {
//     color: string;
//     size: string;
// }

// interface CartItem {
//     _id: string;
//     product_id: Product;
//     quantity: number;
//     variant: Variant;
// }

export default function CartPage() {
    const { data: session } = useSession()
    const [cart, setCart] = useState<Cart[]>([]);
    useEffect(() => {
        const fetchUserData = async () => {
            if (!session?.user?.email) return

            try {
                // const { email, name } = session.user;

                const response = await fetch(
                    `${origin}/api/v1/auth/user/${session.user.email}`
                )
                if (!response.ok) throw new Error("Failed to fetch user data")

                const data = await response.json()

                const cartresponse = await fetch(`${API_BASE_URL}/api/v1/cart/cart/${data.user.id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!cartresponse.ok) {
                    throw new Error("Failed to fetch cart items");
                }

                const cartItems = await cartresponse.json();
                setCart(cartItems)

            } catch (error) {
                console.log(error);
            }
        }
        fetchUserData()
    }, [session])

    // const items = useAppSelector((state: { cart: { items: { id: string; quantity: number; color: string; size: string }[] } }) => state.cart.items);
    const dispatch = useAppDispatch();

    const handleIncrease = (itemId: string, color: string, size: string) => {
        dispatch(updateQuantity({ id: itemId, quantity: 1, color, size }));
    };

    // const handleDecrease = (itemId: string, color: string, size: string) => {
    //     dispatch(updateQuantity({ id: itemId, quantity: -1, color, size }));
    // };

    const handleDelete = (itemId: string) => {
        dispatch(removeItem(itemId));
    };

    const totalPrice = cart.reduce((acc, item) => {
        const product = item.product_id;
        if (product) {
            return acc + parseFloat(product.price) * item.quantity;
        }
        return acc;
    }, 0);

    return (
        <div className="flex flex-col px-5 sm:px-[50px] lg:px-[150px] py-[50px] gap-10">
            <div className="flex">
                <p className="text-xl sm:text-2xl lg:text-3xl">Cart ({cart.length})</p>
            </div>
            <hr className="border-2" />
            <div className="flex flex-col lg:flex-row w-full gap-10">
                <div className="flex flex-col w-full lg:w-3/4 gap-10">
                    {cart.length === 0 ? (
                        <p className="text-xl text-center w-full">Your cart is empty!</p>
                    ) : (
                        cart.map((item) => {
                            const product = item.product_id;
                            if (product) {
                                return (
                                    <div key={item._id} className="flex flex-col lg:flex-row w-full gap-10">
                                        <div className="flex w-full lg:w-1/4">
                                            <Image
                                                src={product.images[0].image_url}
                                                alt={product.name}
                                                className="h-[30vh] w-full sm:h-[40vh] lg:h-[50vh] object-cover"
                                                width={600}
                                                height={400}
                                                layout="responsive"
                                            />
                                        </div>
                                        <div className="font-lato flex w-full lg:w-3/4 flex-col gap-5 sm:gap-10">
                                            <p className="text-lg sm:text-xl lg:text-xl font-bold">{product.name}</p>
                                            <div className="flex w-full">
                                                <div className="flex flex-col gap-5 sm:gap-10 w-1/2">
                                                    <div className="flex flex-col">
                                                        <p className="font-bold">Colour:</p>
                                                        <p>{item.variant.color}</p>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <p className="font-bold">Size:</p>
                                                        <p>{item.variant.size}</p>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <p className="font-bold">Item Price:</p>
                                                        <p>{product.price}</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-3 sm:gap-5 justify-center items-center w-1/2">
                                                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold">QTY</p>
                                                    <div className="flex justify-center items-center gap-4 sm:gap-6">
                                                        <CiCirclePlus
                                                            size={28}
                                                            onClick={() => handleIncrease(item._id, item.variant.color, item.variant.size)}
                                                        />
                                                        <p className="text-lg sm:text-xl">{item.quantity}</p>
                                                        <CiCircleMinus
                                                            size={28}
                                                            onClick={() => handleDelete(item._id)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <button
                                                className="border-2 h-[6vh] w-[6vh] flex items-center justify-center rounded-md"
                                                onClick={() => handleDelete(item._id)}
                                            >
                                                <MdDeleteOutline size={24} className="text-black" />
                                            </button>
                                        </div>
                                    </div>
                                );
                            }
                            return null;
                        })
                    )}
                </div>
                {cart.length > 0 && (
                    <div className="flex flex-col h-[20vh] w-full lg:w-1/4 gap-3 sm:gap-5 rounded-lg bg-color3 p-3 ml-auto mt-6 lg:mt-0">
                        <div className="flex justify-between">
                            <p className="font-bold text-xl">Subtotal</p>
                            <p className="text-xl font-bold">{`$${totalPrice.toFixed(2)}`}</p>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button className="bg-color1 text-white font-bold p-2 rounded-md w-full">
                                <Link href={{
                                    pathname: '/checkout',
                                    query: {
                                        cartId: cart[0]._id,
                                    },
                                }}>Checkout</Link>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}