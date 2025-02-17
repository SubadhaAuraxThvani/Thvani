"use client";
import { useState, useEffect } from "react";
import { useSession} from "next-auth/react"
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { addItem } from "@/store/features/cart/cartSlice";
import { useAppDispatch } from "@/store/hooks";
import { addToWishlist } from "@/store/features/whislist/whislistSlice";
import img5 from "@/images/other/image4.png"
import img6 from "@/images/other/image5.png"
import img7 from "@/images/other/image6.png"
import { Button } from "../ui/button";
import { toast } from "@/hooks/use-toast";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ['latin'], weight: '400' });
import { Product } from "@/types";
import { fetchProductById } from "@/apiRequest/product";
import { addToCart } from "@/apiRequest/cart";
// const [productData1, setProductData1] = useState<any | null>(null);

// useEffect(() => {
//     async function fetchProduct() {
//         try {
//             const response = await fetch(`https://api.thvaniearthcraft.com/api/v1/product/products/${id}`);
//             if (!response.ok) {
//                 throw new Error("Product not found");
//             }
//             const data = await response.json();
//             setProductData1(data);
//         } catch (error) {
//             console.error("Error fetching product:", error);
//         }
//     }
//     fetchProduct();
// }, [id]);
interface CollectionProductProps {
    id: string;
}
const API_BASE_URL = "https://api.thvaniearthcraft.com";
const Product1: React.FC<CollectionProductProps> = ({ id }) => {
    const { data: session } = useSession()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProductById(id);
                console.log(data, "vanthucha varalaya");
                setProductData1(data)
                setSelectedImage(productData1?.images[0].image_url)
            } catch (err) {
                console.error(err);
            }
        };
        console.log("called");
        fetchData();
    }, [id]);
    const [productData1, setProductData1] = useState<Product>();
    useEffect(() => {
        if (productData1 && productData1.images.length > 0) {
            setSelectedImage(productData1.images[0].image_url);
        }
    }, [productData1]);
    const colors = ['blue-700', 'red-500', 'green-200', 'black'];
    const [selectedImage, setSelectedImage] = useState<string | null>();
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const sizes = ['xs', 's', 'm', 'l', 'xl']
    const dispatch = useAppDispatch();

    const handleAddtoCart = async (productId: string) => {
        if (selectedColor && selectedSize) {
            const response = await fetch(
                `${API_BASE_URL}/api/v1/auth/user/${session?.user.email}`
            )
            if (!response.ok) throw new Error("Failed to fetch user data")

            const userData = await response.json()
            console.log(userData.user, 'the data')
            const data = {
                customer_id: userData.user.id, product_id: productId, variant: {
                    size: selectedSize,
                    color: selectedColor
                }, quantity: 1, price: productData1?.price
            }
            await addToCart(data)
            dispatch(addItem({ id: productId, color: selectedColor, size: selectedSize }));
        }
    };

    const handleAddToWishlist = (product: typeof productData1) => {
        dispatch(
            addToWishlist({
                id: product?._id || '',
                name: product?.name || '',
                price: product?.price || '',
                image: product?.images[0].image_url || '',
            })
        );
    };



    return (
        <>
            <div className="flex flex-col lg:flex-row h-auto lg:h-full py-5 w-full px-5 md:px-8 lg:px-10 gap-5">
                <div className="flex lg:flex-col gap-2 lg:gap-6 justify-center lg:justify-start">
                    {productData1?.images.map((img, index) => (
                        <div
                            key={index}
                            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 cursor-pointer"
                            onClick={() => setSelectedImage(img.image_url)}
                        >
                            <Image src={img.image_url} alt={`Thumbnail ${index + 1}`} className="object-cover w-full h-full" width={300} height={300} />
                        </div>
                    ))}
                </div>
                <div className="flex flex-col md:flex-row w-full gap-5">
                    <div className="w-full md:w-3/5 lg:w-2/4 h-[40vh] md:h-[60vh] lg:h-[75vh]">
                        <Image width={600} height={700} src={selectedImage || ''} alt="Main Product Image" className="object-cover w-full h-full" />
                    </div>
                    <div className="flex flex-col gap-5 w-full md:w-2/5 lg:w-2/4">
                        <div className="flex flex-col gap-5">
                            <p className="text-sm lg:text-base">Home/BestSeller&apos;s/Women&apos;s Selection</p>
                            <p className="text-lg md:text-2xl lg:text-3xl font-bold">{productData1?.name}</p>
                            <p className="text-md md:text-xl lg:text-2xl"> ₹{productData1?.price}</p>
                            <div className="flex items-center gap-1">
                                {Array(4)
                                    .fill(0)
                                    .map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                <div className="flex gap-2">
                                    <p className="font-lato text-sm md:text-base">{productData1?.rating}</p>
                                    <p>|</p>
                                    <p className="text-sm md:text-base">{productData1?.reviewsCount} Reviews</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p>Colors</p>
                                <div className="flex space-x-2">
                                    {colors.map((color, i) => (
                                        <div
                                            key={i}
                                            className={`rounded-full w-8 h-8 cursor-pointer ${selectedColor === color ? 'border-4 border-color1' : ''} bg-${color}`}
                                            onClick={() => setSelectedColor(color)}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p>Select Size:</p>
                                <div className="flex space-x-2 font-bold">
                                    {sizes.map((size) => (
                                        <div
                                            key={size}
                                            className={`w-12 h-12 border rounded-md flex items-center justify-center cursor-pointer ${selectedSize === size ? 'bg-gray-300' : ''}`}
                                            onClick={() => setSelectedSize(size)}
                                        >
                                            <span className="text-sm">{size}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm">Model 1 is 6 feet and wears size S</p>
                            </div>
                            <hr className="w-full border" />
                            <div className="flex justify-center items-center gap-4">
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        if (!selectedColor || !selectedSize) return; // Prevent action if color or size is not selected
                                        toast({
                                            variant: "newVariant",
                                            title: "Item added to Cart",
                                        });
                                        handleAddtoCart(id);
                                    }}
                                    className={`bg-color1 text-white py-6 px-12 rounded-3xl w-full text-center hover:bg-opacity-90 transition ${!selectedColor || !selectedSize ? 'opacity-50 cursor-not-allowed' : ''
                                        }`}
                                    disabled={!selectedColor || !selectedSize}
                                >
                                    Add to Cart
                                </Button>


                                <div
                                    onClick={() => {
                                        handleAddToWishlist(productData1);
                                        toast({
                                            variant: "newVariant",
                                            title: "Item added to Wishlist",
                                        });
                                    }}
                                    className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition cursor-pointer"
                                >
                                    <FaRegHeart className="text-lg text-gray-600" />
                                </div>


                            </div>
                            <div className={`${lato.className} flex bg-[#F5F5F5] p-3 text-center justify-center items-center gap-10 text-sm md:text-base`}>
                                <p>Free Shipping on Orders $150+</p>
                                <p>Easy 30-Day Return & Exchanges</p>
                            </div>
                            <div className="flex flex-wrap w-full justify-evenly gap-4 md:gap-6 lg:gap-8">
                                <div className="flex flex-col items-center text-center">
                                    <Image src={img5} alt="Less Water" className=" w-16 md:w-20 lg:w-24" />
                                    <p className="text-sm md:text-base lg:text-lg font-semibold">88.6% Less Water</p>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <Image src={img6} alt="Less Carbon" className="w-16 md:w-20 lg:w-24" />
                                    <p className="text-sm md:text-base lg:text-lg font-semibold">29.4% Less Carbon</p>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <Image src={img7} alt="No Pesticides No Plastic" className="w-16 md:w-20 lg:w-24" />
                                    <p className="text-sm md:text-base lg:text-lg font-semibold">No Pesticides No Plastic</p>
                                </div>
                            </div>
                            <Accordion type="single" collapsible className="w-full">
                                {["Details", "Fabric Care", "Fit", "Cost", "Shipping"].map((section, i) => (
                                    <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-300">
                                        <AccordionTrigger
                                            onClick={() => setActiveItem(activeItem === `item-${i}` ? null : `item-${i}`)}
                                            className={`py-3 px-4 text-lg md:text-xl lg:text-xl font-semibold focus:outline-none ${activeItem === `item-${i}` ? "text-color4" : "text-black"}`}
                                        >
                                            {section}
                                        </AccordionTrigger>
                                        <AccordionContent className={`${lato.className}  px-4 pb-4 text-base md:text-lg lg:text-lg text-gray-600`}>
                                            {`Details for ${section}`}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex px-20">
                <p className="flex text-3xl text-color1 font-bold">You May Also Like This</p>
            </div>
        </>
    );
}
export default Product1;
