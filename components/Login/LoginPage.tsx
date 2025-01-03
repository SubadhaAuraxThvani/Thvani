"use client";

import { FcGoogle } from "react-icons/fc";
import { FaChevronRight, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import img1 from "@/images/other/image2.png";
import Link from "next/link";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { LoginUser } from '@/apiRequest/login';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  // Redirect function to navigate to different pages
  const navigateTo = (url: string) => {
    window.location.href = url;
  };

  const handleGoogleLogin = () => {
    window.location.href = "/auth/google";
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = { email, password };

    try {
      const response = await LoginUser(data);

      if (response?.data?.token) {
        Cookies.set("jwt_token", response.data.token, { expires: 1 });

        if (response.data.role === "admin") {
          navigateTo("/admin");
        } else {
          navigateTo("/");
        }
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (err: unknown) {  // Change from any to unknown
      // Type guard to check if err is an Error object
      if (err instanceof Error) {
        setError("Invalid credentials. Please try again.");
        console.error("Login API call error:", err.message);
      } else {
        setError("An unexpected error occurred.");
        console.error("Unknown error:", err);
      }
    }
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex flex-col lg:flex-row w-full py-10 px-5 sm:px-10 md:px-20 lg:px-[100px] gap-5">
      <div className="flex flex-col gap-5 p-5 sm:p-10 w-full lg:w-1/2">
        <p className="flex justify-center items-center text-2xl font-semibold">Log In</p>
        {error && <p className="text-red-500">{error}</p>}

        {/* Google Login Button */}
        <div
          className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg"
          onClick={handleGoogleLogin}
        >
          <FcGoogle size={28} />
          <p className="text-base sm:text-lg">Connect With Google</p>
        </div>

        {/* Facebook Login Button */}
        <div className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg">
          <FaFacebook size={28} color="blue" />
          <p className="text-base sm:text-lg">Connect With Facebook</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <div className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg">
            <input
              placeholder="Email"
              className="w-full outline-none"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg">
            <input
              placeholder="Password"
              type="password"
              className="w-full outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button and Forgot Password */}
          <div className="flex justify-between w-full gap-3 sm:gap-5">
            <div className="bg-color1 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg">
              <button type="submit">Login</button>
            </div>
            <div className="text-color1 text-base sm:text-lg py-2 sm:py-3">
              <Link href="/restpassword"><p>Forgot Password?</p></Link>
            </div>
          </div>

          {/* Signup Link */}
          <div className="flex flex-col gap-2">
            <p className="text-color1 text-sm sm:text-base">Don`&apos;`t have an account?</p>
            <Link href="/signup"><button className="underline text-sm sm:text-base text-left">SIGN UP</button></Link>
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
        <p className="font-semibold text-lg sm:text-xl">
          Experience Fashion with Purpose.
        </p>
        <p className="text-sm sm:text-base">
          At THVANI, we believe that fashion should do more than just look
          good—it should feel good, too. By signing up, you’re becoming part of
          a community that values sustainability, innovation, and timeless
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
