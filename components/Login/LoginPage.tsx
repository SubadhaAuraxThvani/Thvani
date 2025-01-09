"use client";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaChevronRight, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import img1 from "@/images/other/image2.png";
import Link from "next/link";
import { LoginUser } from "@/apiRequest/login";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { toast } from "@/hooks/use-toast";
import { signIn, useSession } from "next-auth/react"


export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(true);
  const router = useRouter();
  const { status } = useSession();

  // Redirect if already authenticated
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/profile");
      router.refresh(); // Force a router refresh
    }
  }, [status, router]);

  const handleGoogleLogin = async () => {
    try {
      await signIn("google", { callbackUrl: "/profile" });
    } catch (error) {
      console.log(error);
      toast({
        variant: "newVariant",
        title: "Failed to sign in with Google",
      });
    }
  };

  // const handleFacebookLogin = async () => {
  //   try {
  //     await signIn("facebook", { callbackUrl: "/profile" });
  //   } catch (error) {
  //     console.log(error);
  //     toast({
  //       variant: "newVariant",
  //       title: "Failed to sign in with Facebook",
  //     });
  //   }
  // };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Step 1: Your custom API login
      const apiResponse = await LoginUser({ email, password });
      console.log('API Login successful:', apiResponse);

      if (apiResponse.token) {
        // Step 2: Set the cookie
        Cookies.set("authToken", apiResponse.token, { expires: 7 });

        // Step 3: NextAuth signin
        const signInResult = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });

        console.log('NextAuth Sign In Result:', signInResult);

        if (signInResult?.ok) {
          // Step 4: Redirect using multiple methods to ensure it works
          toast({
            variant: "newVariant",
            title: "Login successful",
          });

          // Method 1: Direct window location change
          window.location.href = "/profile";

          // Method 2: Router push as backup
          router.push("/profile");
          router.refresh();
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        variant: "newVariant",
        title: "Login failed. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  // Show loading state while checking session
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // Don't render the login form if already authenticated
  if (status === "authenticated") {
    return null;
  }
  return (
    <div className="flex flex-col lg:flex-row w-full py-10 px-5 sm:px-10 md:px-20 lg:px-[100px] gap-5">
      <div className="flex flex-col gap-5 p-5 sm:p-10 w-full lg:w-1/2">
        <p className="flex justify-center items-center text-2xl font-semibold">Login to Your Account</p>
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
          // onClick={handleFacebookLogin}
        >
          <FaFacebook size={28} color="blue" />
          <p className="text-base sm:text-lg">Connect With Facebook</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg">
            <input
              placeholder="Email"
              className="w-full outline-none"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading} // Disable input fields while loading
            />
          </div>
          <div className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg relative">
            <input
              placeholder="Password"
              type={passwordVisible ? "password" : "text"}
              className="w-full outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading} // Disable input fields while loading
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setPasswordVisible(!passwordVisible)} // Toggle visibility
            >
              {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>

          <div className="flex sm:flex-row flex-col justify-between w-full gap-3 sm:gap-5 mt-4">
            <div className="bg-color1 h-12 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:opacity-90">
              <button type="submit" className="w-full h-full" disabled={loading}> {/* Disable button while loading */}
                {loading ? "Logging In..." : "Login"}
              </button>
            </div>
            <div className="text-color1 text-base sm:text-lg py-2 sm:py-3">
              <Link href="/restpassword"><p>Forgot Password?</p></Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-color1 text-sm sm:text-base">Don&apos;t have an account?</p>
            <Link href="/signup">
              <button className="underline text-sm sm:text-base text-left">
                <p className="inline-flex items-center font-semibold text-sm sm:text-base border-b border-current">
                  SIGN UP
                  <FaChevronRight size={15} className="ml-1" />
                  <FaChevronRight size={15} />
                </p>
              </button>
            </Link>
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
          logging in, you&apos;re part of a community that values sustainability, innovation, and timeless style.
        </p>
        <Link href="/women">
          <p className="inline-flex items-center font-semibold text-sm sm:text-base border-b border-current hover:opacity-80">
            Start Shopping Now
            <FaChevronRight size={15} className="ml-2" />
            <FaChevronRight size={15} className="ml-1" />
          </p>
        </Link>
      </div>
    </div>
  );
}
