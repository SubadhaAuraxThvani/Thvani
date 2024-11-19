import axios from "axios";
import { adminCookie, origin } from "./config";
import Cookies from 'js-cookie'

export const postProductData = async (data:any) => {
    const reqData = JSON.stringify(data)
    const token = Cookies.get(adminCookie)
    try {
        const response = await axios({
            url:`${origin}/api/v1/admin/create-product`,
            method:'post',
            headers:{
                'Authorization': `Bearer ${token}`, 
                'Content-Type':'application/json'
            },
            data:reqData
        })

        const responseData = await response?.data

        return responseData;
    }
    catch (err:any) {
        console.log(err?.message);
        
    }

}
// Fetch all products (excluding deleted ones)
export const fetchProducts = async () => {
    try {
        const token = Cookies.get(adminCookie);
        const response = await axios({
            method: "get",
            url: `${origin}/api/v1/product/products`,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const responseData = await response.data;
        return responseData;
    } catch (error: any) {
        console.log("Error fetching products:", error?.message);
        throw error;
    }
};

export const fetchProductsPagination = async (page: any, limit: any, search: any) => {
    try {
        const token = Cookies.get(adminCookie);
        const response = await axios({
            method: "get",
            url: `${origin}/api/v1/product/products/pagination?page=${page}&limit=${limit}&search=${search}`,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const responseData = await response.data;
        return responseData;
    } catch (error: any) {
        console.log("Error fetching products:", error?.message);
        throw error;
    }
};

// Fetch a single product by product_id
export const fetchProductById = async (productId: string) => {
    try {
        const token = Cookies.get(adminCookie);
        const response = await axios({
            method: "get",
            url: `${origin}/api/v1/product/product/${productId}`,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const responseData = await response.data;
        return responseData;
    } catch (error: any) {
        console.log("Error fetching product:", error?.message);
        throw error;
    }
};

// Edit product data
export const editProductData = async (productId: string, data: any) => {
    const reqData = JSON.stringify(data);
    const token = Cookies.get(adminCookie);
    try {
        const response = await axios({
            url: `${origin}/api/v1/product/product/${productId}`,
            method: 'put',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data: reqData
        });
        return response?.data;
    } catch (err: any) {
        console.log("Error updating product:", err?.message);
        throw err;
    }
};

// Delete product data (soft delete, set is_deleted to true)
export const deleteProductData = async (productId: string) => {
    const token = Cookies.get(adminCookie);
    try {
        const response = await axios({
            url: `${origin}/api/v1/product/product/${productId}`,
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        });
        return response?.data;
    } catch (err: any) {
        console.log("Error deleting product:", err?.message);
        throw err;
    }
};

// Update product availability (e.g., stock status)
export const updateProductAvailability = async (productId: string, data: any) => {
    const token = Cookies.get(adminCookie);
    try {
        const response = await axios({
            url: `${origin}/api/v1/product/product/${productId}/availability`,
            method: 'put',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data
        });
        return response?.data;
    } catch (err: any) {
        console.log("Error updating availability:", err?.message);
        throw err;
    }
};
