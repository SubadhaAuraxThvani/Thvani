import axios from "axios";
import Cookies from "js-cookie";
import { adminCookie, origin } from "./config";



export const signupUser = async (userData: {
    name: string;
    email: string;
    password: string;
    phone?: string;
    role: number;
    address?: string;
}) => {
    try {
        const response = await axios({
            method: "post",
            url: `${origin}/auth/signup`,
            headers: {
                "Content-Type": "application/json",
            },
            data: userData,
        });
        const responseData = await response.data;
        return responseData;
    } catch (error: any) {
        return error.response ? error.response.data : error;
    }
};

export const loginUser = async (credentials: { email: string; password: string }) => {
    try {
        const response = await axios({
            method: "post",
            url: `${origin}/auth/login`,
            headers: {
                "Content-Type": "application/json",
            },
            data: credentials,
        });
        const responseData = await response.data;

        if (responseData.token) {
            Cookies.set(adminCookie, responseData.token); // Store JWT token in cookies
        }

        return responseData;
    } catch (error: any) {
        return error.response ? error.response.data : error;
    }
};

export const googleLogin = async () => {
    try {
        const response = await axios({
            method: "get",
            url: `${origin}/auth/google`,
            headers: {
                "Content-Type": "application/json",
            },
        });
        const responseData = await response.data;
        return responseData;
    } catch (error: any) {
        return error.response ? error.response.data : error;
    }
};

export const googleCallback = async (code: string) => {
    try {
        const response = await axios({
            method: "get",
            url: `${origin}/auth/google/callback?code=${code}`,
            headers: {
                "Content-Type": "application/json",
            },
        });
        const responseData = await response.data;
        Cookies.set(adminCookie, responseData.token);
        return responseData;
    } catch (error: any) {
        return error.response ? error.response.data : error;
    }
};

export const facebookLogin = async () => {
    try {
        const response = await axios({
            method: "get",
            url: `${origin}/auth/facebook`,
            headers: {
                "Content-Type": "application/json",
            },
        });
        const responseData = await response.data;
        return responseData;
    } catch (error: any) {
        return error.response ? error.response.data : error;
    }
};

export const facebookCallback = async (code: string) => {
    try {
        const response = await axios({
            method: "get",
            url: `${origin}/auth/facebook/callback?code=${code}`,
            headers: {
                "Content-Type": "application/json",
            },
        });
        const responseData = await response.data;
        Cookies.set(adminCookie, responseData.token); 
        return responseData;
    } catch (error: any) {
        return error.response ? error.response.data : error;
    }
};
