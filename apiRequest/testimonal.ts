import axios from "axios";
import { adminCookie, origin } from "./config";
import Cookies from 'js-cookie';

export const postTestimonialData = async (data: any) => {
    const reqData = JSON.stringify(data);
    const token = Cookies.get(adminCookie);
    try {
        const response = await axios({
            url: `${origin}/api/v1/testimonial/create-testimonial`,
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json'
            },
            data: reqData
        });

        const responseData = await response?.data;

        return responseData;
    } catch (err: any) {
        console.log(err?.message);
    }
};

// Fetch paginated testimonial data
export const fetchTestimonialPaginationsData = async (page: any, limit: any, search: any) => {
    try {
        const token = Cookies.get(adminCookie);
        const response = await axios({
            method: "get",
            url: `${origin}/api/v1/testimonial/pagination?page=${page}&limit=${limit}&search=${search}`,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const responseData = await response.data;
        return responseData;
    } catch (error: any) {
        return error;
    }
};

// Fetch all testimonial data
export const fetchTestimonialData = async () => {
    try {
        const token = Cookies.get(adminCookie);
        const response = await axios({
            method: "get",
            url: `${origin}/api/v1/testimonial`,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const responseData = await response.data;
        return responseData;
    } catch (error: any) {
        return error;
    }
};

export const editTestimonialData = async (data: any, id: string) => {
    const reqData = JSON.stringify(data);
    const token = Cookies.get(adminCookie);
    try {
        const response = await axios({
            url: `${origin}/api/v1/testimonial/${id}`,
            method: 'put',
            headers: {
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json'
            },
            data: reqData
        });

        return response?.data;
    } catch (err: any) {
        console.log("API call error:", err);
        throw err;
    }
};

export const deleteTestimonialData = async (id: any) => {
    const token = Cookies.get(adminCookie);
    try {
        const response = await axios({
            url: `${origin}/api/v1/testimonial/${id}`,
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json'
            },
        });
        return response?.data;
    } catch (err: any) {
        console.log(err?.message);
        throw err;
    }
};
