"use client";

import { useState } from "react";
import Link from "next/link";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

export default function ResetPasswordPage() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage("");

        try {
            const response = await fetch(`${API_BASE_URL}/auth/forgot-password`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("Check your email for password reset instructions.");
                setEmail("");
            } else {
                setMessage(data.message || "An error occurred. Please try again.");
            }
        } catch (error) {
            console.log(error);
            setMessage("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center py-10 px-5 sm:py-[100px] sm:px-[100px]">
            <p className="text-2xl sm:text-3xl font-semibold">RESET PASSWORD</p>
            <p className="text-sm sm:text-base mt-2 text-center">
                We will send you an email to reset your password
            </p>

            {message && (
                <div className={`mt-4 p-3 rounded-lg w-full sm:w-[50vw] ${message.includes("Check your email")
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}>
                    {message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="w-full sm:w-[50vw]">
                <div className="flex items-center border-2 w-full mt-5 p-2 sm:p-3 gap-2 sm:gap-5 rounded-lg">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full outline-none text-sm sm:text-base"
                    />
                </div>

                <div className="flex w-full mt-5 gap-3">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`bg-color1 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg ${isLoading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        {isLoading ? "SENDING..." : "RESTORE"}
                    </button>
                    <div className="text-color1 text-sm sm:text-base py-2 sm:py-3 rounded-lg">
                        <Link href="/">
                            <p className="inline-flex items-center font-semibold text-sm sm:text-base border-b border-current">
                                Cancel
                            </p>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}