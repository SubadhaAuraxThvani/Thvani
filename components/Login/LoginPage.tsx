"use client";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import img1 from "@/images/other/image2.png";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export const FaceBookLogin = async () => {
  try {
    const data = await fetch(
      process.env.NEXT_PUBLIC_API_URL+"/auth/auth/facebook"
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  
};

export  const GoogleLogin = async () => {
  try {
    const data = await fetch(
      process.env.NEXT_PUBLIC_API_URL+"auth/auth/google"
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role:2,
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

    try {
      const response = await fetch(
        "https://api.thvaniearthcraft.com/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Login failed. Please check your credentials and try again."
        );
      }

      const data = await response.json();
      // setSuccessMessage("Logged in successfully! Redirecting...");
      console.log(data.token); // Example token
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
      <form
        className="flex flex-col gap-5 p-5 sm:p-10 w-full lg:w-1/2"
        onSubmit={handleSubmit}
      >
        <p className="flex justify-center items-center text-2xl font-semibold">
          Log In
        </p>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {successMessage && (
          <p className="text-green-500 text-sm">{successMessage}</p>
        )}
        <div onClick={GoogleLogin} className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg">
          <FcGoogle size={28} />
          <p className="text-base sm:text-lg">Connect With Google</p>
        </div>
        <div
          onClick={FaceBookLogin}
          className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg"
        >
          <FaFacebook size={28} color="blue" />
          <p className="text-base sm:text-lg">Connect With Facebook</p>
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
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full outline-none"
            required
          />
        </div>
        <div className="flex justify-between w-full gap-3 sm:gap-5">
          <button
            type="submit"
            className="bg-color1 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg"
          >
            Log In
          </button>
          <div className="text-color1 text-base sm:text-lg py-2 sm:py-3">
            <Link href="/resetpassword">
              <p>Forgot Password?</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-color1 text-sm sm:text-base">
            Don’t have an account?
          </p>
          <Link href="/signup">
            <button className="underline text-sm sm:text-base text-left">
              SIGN UP
            </button>
          </Link>
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
