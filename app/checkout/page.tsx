"use client"
import CheckOutPage from "@/components/CheckOutPage/Checkout";
import { useSearchParams } from "next/navigation";

export default function Check() {
    const searchParams = useSearchParams();
    const cart = searchParams.get("cartId");
    console.log(cart)
    return (
        <CheckOutPage
            cartId={cart}
        />
    )
}
