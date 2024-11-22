"use client"
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaChevronRight, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import img1 from "@/images/other/image2.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaceBookLogin, GoogleLogin } from "../Login/LoginPage";

export default function SignUpPage() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
    });
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(""); // Clear previous errors
        setSuccessMessage(""); // Clear previous success messages

        const dataToSend = { ...formData, role:2 }; // Add the fixed role

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL+"auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSend),
            });

            if (!response.ok) {
                throw new Error("Signup failed. Please try again.");
            }

            router.push("/login")
            const data = await response.json();
            console.log(data);
            setSuccessMessage("Account created successfully! Please log in.");
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message || "An error occurred. Please try again.");
            } else {
                setError("An unknown error occurred. Please try again.");
            }
        }

    };

    return (
        <div className="flex flex-col lg:flex-row w-full py-10 px-5 sm:px-10 md:px-20 lg:px-[100px] gap-5">
            <form className="flex flex-col gap-5 p-5 sm:p-10 w-full lg:w-1/2" onSubmit={handleSubmit}>
                <p className="flex justify-center items-center text-2xl font-semibold">Create Account</p>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
                <div onClick={GoogleLogin} className="flex cursor-pointer items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg">
                    <FcGoogle size={28} />
                    <p className="text-base sm:text-lg">Connect With Google</p>
                </div>
                <div onClick={FaceBookLogin} className="flex cursor-pointer items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg">
                    <FaFacebook size={28} color="blue" />
                    <p className="text-base sm:text-lg">Connect With Facebook</p>
                </div>
                <div className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg">
                    <input
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full outline-none"
                        required
                    />
                </div>
                <div className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg">
                    <input
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full outline-none"
                        required
                    />
                </div>
                <div className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg">
                    <input
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full outline-none"
                        required
                    />
                </div>
                <div className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg">
                    <input
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full outline-none"
                        required
                    />
                </div>
                <div className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg">
                    <input
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full outline-none"
                        required
                    />
                </div>
                <div className="flex sm:flex-row flex-col justify-between w-full gap-3 sm:gap-5">
                    <button type="submit" className="bg-color1 h-12 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg">
                        Create Account
                    </button>
                    <div className="text-color1 text-base sm:text-lg py-2 sm:py-3">
                        <p className="text-color1 text-sm sm:text-base">Already have an account?</p>
                        <Link href="/login">
                            <p className="inline-flex text-black items-center font-semibold text-sm sm:text-base border-b border-current">
                                SIGN IN
                                <FaChevronRight size={15} className="ml-1" />
                                <FaChevronRight size={15} />
                            </p>
                        </Link>
                    </div>
                </div>
            </form>
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
                    signing up, you’re becoming part of a community that values sustainability, innovation, and timeless
                    style.
                </p>
                <Link href="/women">
                    <p className="inline-flex items-center font-semibold text-sm sm:text-base border-b border-current">
                        Start Shopping Now
                        <FaChevronRight size={15} className="ml-1" />
                        <FaChevronRight size={15} />
                    </p>
                </Link>
            </div>
        </div>
    );
}
