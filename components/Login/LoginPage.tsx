import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import img1 from '@/images/other/image2.png';
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="flex flex-col lg:flex-row w-full py-10 px-5 sm:px-10 md:px-20 lg:px-[100px] gap-5">
            <div className="flex flex-col gap-5 p-5 sm:p-10 w-full lg:w-1/2">
                <p className="flex justify-center items-center text-2xl font-semibold">Log In</p>
                <div className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg">
                    <FcGoogle size={28} />
                    <p className="text-base sm:text-lg">Connect With Google</p>
                </div>
                <div className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg">
                    <FaFacebook size={28} color="blue" />
                    <p className="text-base sm:text-lg">Connect With Facebook</p>
                </div>
                <div className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg">
                    <input placeholder="Email" className="w-full outline-none" />
                </div>
                <div className="flex items-center border-2 w-full p-2 gap-3 sm:gap-5 rounded-lg">
                    <input placeholder="Password" type="password" className="w-full outline-none" />
                </div>
                <div className="flex justify-between w-full gap-3 sm:gap-5">
                    <div className="bg-color1 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg">
                        <button>Create Account</button>
                    </div>
                    <div className="text-color1 text-base sm:text-lg py-2 sm:py-3">
                        <Link href="/restpassword" ><p>Forget Password?</p></Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-color1 text-sm sm:text-base">Don t have an account?</p>
                    <Link href="/signup"><button className="underline text-sm sm:text-base text-left">SIGN UP</button></Link>
                </div>
            </div>
            <div className="flex flex-col p-5 sm:p-10 gap-5 w-full lg:w-1/2 bg-color5">
                <div className="flex justify-center items-center">
                    <Image src={img1} alt="Fashion Image" className="w-full max-w-[90vw] sm:max-w-[60vw] md:max-w-[40vw] h-[30vh] object-contain" />
                </div>
                <p className="font-normal text-lg sm:text-xl">Experience Fashion with Purpose.</p>
                <p className="text-sm sm:text-base">
                    At THVANI, we believe that fashion should do more than just look good—it should feel good, too. By signing up, you’re becoming part of a community that values sustainability, innovation, and timeless style.
                </p>
                <Link href="/women"><p className="underline text-sm sm:text-base">Start Shopping Now</p></Link>

            </div>
        </div>
    );
}
