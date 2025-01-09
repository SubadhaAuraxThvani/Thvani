"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

export default function ResetPasswordForm() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState<boolean>(true);
    const [passwordVisible1, setPasswordVisible1] = useState<boolean>(true);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage("");

        if (password !== confirmPassword) {
            setMessage("Passwords do not match.");
            setIsLoading(false);
            return;
        }

        try {
            const token = new URLSearchParams(window.location.search).get("token");

            const response = await fetch(`${API_BASE_URL}/auth/reset-password`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token, newPassword: password }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("Password successfully reset. Redirecting to login...");
                setTimeout(() => {
                    router.push("/login");
                }, 3000);
            } else {
                setMessage(data.message || "An error occurred. Please try again.");
            }
        } catch (error) {
            setMessage("An error occurred. Please try again.");
            console.log(error);
            
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center py-10 px-5 sm:py-[100px] sm:px-[100px]">
            <p className="text-2xl sm:text-3xl font-semibold">RESET PASSWORD</p>
            <p className="text-sm sm:text-base mt-2 text-center">
                Enter your new password below.
            </p>

            {message && (
                <div className={`mt-4 p-3 rounded-lg w-full sm:w-[50vw] ${message.includes("successfully")
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                    }`}>
                    {message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="w-full sm:w-[50vw]">
                <div className="flex flex-col gap-3 mt-5">
                    {/* Password Input */}
                    <div className="flex items-center border-2 w-full p-2 sm:p-3 gap-2 sm:gap-5 rounded-lg">
                        <input
                            type={passwordVisible ? "password" : "text"}
                            placeholder="New Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full outline-none text-sm sm:text-base"
                        />
                        <button
                            type="button"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                            className="text-gray-500 focus:outline-none"
                        >
                            {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                        </button>
                    </div>

                    {/* Confirm Password Input */}
                    <div className="flex items-center border-2 w-full p-2 sm:p-3 gap-2 sm:gap-5 rounded-lg">
                        <input
                            type={passwordVisible1 ? "password" : "text"}
                            placeholder="Confirm New Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full outline-none text-sm sm:text-base"
                        />
                        <button
                            type="button"
                            onClick={() => setPasswordVisible1(!passwordVisible1)}
                            className="text-gray-500 focus:outline-none"
                        >
                            {passwordVisible1 ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                        </button>
                    </div>
                </div>

                <div className="flex w-full mt-5 gap-3">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`bg-color1 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg ${isLoading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        {isLoading ? "RESETTING..." : "RESET PASSWORD"}
                    </button>
                </div>
            </form>
        </div>
    );
}
