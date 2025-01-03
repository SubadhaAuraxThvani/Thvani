"use client";

import { FcGoogle } from "react-icons/fc";
import { FaChevronRight, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import img1 from '@/images/other/image2.png';
import Link from "next/link";
import { useEffect, useState } from "react";
import { signupUser } from '@/apiRequest/signup';
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie";

// Define an interface for the API error response
interface ApiError {
    response?: {
        status: number;
    };
}

export default function SignUpPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get('authToken');
        if (token) {
            router.push('/');
        }
    }, []);

    const handleGoogleLogin = () => {
        window.location.href = "/auth/google";
    };

    const handleFacebookLogin = () => {
        window.location.href = "/auth/facebook";
    };

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();

        const full_name = `${firstName} ${lastName}`;
        const data = { full_name, email, password, phone_number: phoneNumber };

        try {
            const response = await signupUser(data);

            if (response.status === 201) {
                window.location.href = "/login";
            }
        } catch (err) {
            // Type guard to check if err is an ApiError
            if (isApiError(err) && err.response?.status === 409) {
                setError("Email already registered. Please login.");
                setTimeout(() => {
                    window.location.href = "/login";
                }, 3000);
            } else {
                setError("Something went wrong. Please try again.");
            }
        }
    };

    // Type guard function
    function isApiError(error: unknown): error is ApiError {
        return (
            typeof error === 'object' &&
            error !== null &&
            'response' in error &&
            typeof (error as ApiError).response === 'object'
        );
    }

    return (
        <div className="flex flex-col lg:flex-row w-full py-10 px-5 sm:px-10 md:px-20 lg:px-[100px] gap-5">
            <div className="flex flex-col gap-5 p-5 sm:p-10 w-full lg:w-1/2">
                <p className="flex justify-center items-center text-2xl font-semibold">Create Account</p>
                {error && <p className="text-red-500">{error}</p>}

                <div
                    className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg cursor-pointer hover:bg-gray-50"
                    onClick={handleGoogleLogin}
                >
                    <FcGoogle size={28} />
                    <p className="text-base sm:text-lg">Connect With Google</p>
                </div>

                <div
                    className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg cursor-pointer hover:bg-gray-50"
                    onClick={handleFacebookLogin}
                >
                    <FaFacebook size={28} color="blue" />
                    <p className="text-base sm:text-lg">Connect With Facebook</p>
                </div>

                <form onSubmit={handleSignUp} className="flex flex-col gap-4">
                    <div className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg">
                        <input
                            placeholder="First Name"
                            className="w-full outline-none"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg">
                        <input
                            placeholder="Last Name"
                            className="w-full outline-none"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg">
                        <input
                            placeholder="Phone Number"
                            className="w-full outline-none"
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg">
                        <input
                            placeholder="Email"
                            className="w-full outline-none"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg">
                        <input
                            placeholder="Password"
                            type="password"
                            className="w-full outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex sm:flex-row flex-col justify-between w-full gap-3 sm:gap-5 mt-4">
                        <div className="bg-color1 h-12 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:opacity-90">
                            <button type="submit" className="w-full h-full">Create Account</button>
                        </div>
                        <div className="text-color1 text-base sm:text-lg py-2 sm:py-3">
                            <p className="text-color1 text-sm sm:text-base">Already have an account?</p>
                            <Link href="/login">
                                <button className="underline text-sm sm:text-base text-left hover:opacity-80">SIGN IN</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex flex-col p-5 sm:p-10 gap-5 w-full lg:w-1/2 bg-color5">
                <div className="flex justify-center items-center">
                    <Image
                        src={img1}
                        alt="Fashion Image"
                        className="w-full max-w-[90vw] sm:max-w-[60vw] md:max-w-[40vw] h-[30vh] object-contain"
                    />
                </div>
                <p className="font-normal text-lg sm:text-xl">Experience Fashion with Purpose.</p>
                <p className="text-sm sm:text-base">
                    At THVANI, we believe that fashion should do more than just look good—it should feel good, too. By
                    signing up, you`&apos`re becoming part of a community that values sustainability, innovation, and timeless
                    style.
                </p>
                <Link href="/women">
                    <p className="inline-flex items-center font-semibold text-sm sm:text-base border-b border-current hover:opacity-80">
                        Start Shopping Now
                        <FaChevronRight size={15} className="ml-1" />
                        <FaChevronRight size={15} />
                    </p>
                </Link>
            </div>
        </div>
    );
}