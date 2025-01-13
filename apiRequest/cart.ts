import axios from "axios";
import { adminCookie, origin } from "./config";
import Cookies from 'js-cookie'

// Create a new product
export const addToCart = async (data: any) => {
    const token = Cookies.get(adminCookie);
    try {
        console.log('calling add to cart')
        const response = await axios.post(`${origin}/api/v1/cart/cart`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (err: any) {
        console.error(`Error creating product: ${err.message}`);
        throw err;
    }
};