import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-color1 relative">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="relative flex flex-col-reverse md:flex-row md:justify-between md:space-x-8 px-4 py-8 text-white">
          {/* Logo  */}
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="self-center text-4xl font-semibold whitespace-nowrap text-white">
                Logo
              </span>
            </Link>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 text-center md:text-left">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Learn
              </h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link href="/about" className="hover:underline">
                    About Thvani
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/sustainable" className="hover:underline">
                    Detox Your Closet
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/blog" className="hover:underline">
                    Journals
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Materials
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Contact</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link href="/contactus" className="hover:underline">
                    Get in Touch
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Return and Exchange
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Affiliates
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/help" className="hover:underline">
                    Help
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Account</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link href="/login" className="hover:underline">
                    Login
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Wishlist
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Gift Card Balance
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/trackOrder" className="hover:underline">
                    Track Order
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/orderexchange" className="hover:underline">
                    Order Exchange
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" relative flex flex-col items-center justify-center h-[20vh] lg:h-auto w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] text-center mx-auto">
            <div className=" absolute bottom-[10%] rounded-full bg-color2 p-10  max-w-[250px] h-auto aspect-square sm:max-w-[300px] md:max-w-[350px] ">
              {" "}
              <p className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                Get 15% Off
              </p>
              <p className="text-white text-xs sm:text-sm md:text-base mt-2">
                Join our mailing list to receive exclusive offers <br /> plus
                15% OFF your next order.
              </p>
              <input
                className="mt-3 text-black p-2 w-[80%] max-w-[180px] md:max-w-[220px] rounded-md text-center text-sm outline-none"
                placeholder="Your Email"
                type="text"
              />
              <button className="mt-3 w-[70%] max-w-[180px] md:max-w-[220px] rounded-lg bg-color4 text-white p-2 text-sm md:text-base">
                Become a VIP
              </button>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex mt-4 sm:justify-center sm:mt-0 text-white">
            <Link href="/">
              <FaInstagram />
            </Link>
            <Link href="/" className="ms-5">
              <FaFacebookF />
            </Link>
            <Link href="/" className="ms-5 mr-4">
              <FaPinterestP />
            </Link>
            <div className="flex gap-3 flex-wrap mt-3 sm:mt-0">
              <span>
                <Link href="/privacy">Privacy Policy</Link>
              </span>
              <span>Data Request</span>
              <span>Accessibility</span>
              <span>Cookie Preferences</span>
            </div>
          </div>
          <span className="text-sm text-white sm:text-center mt-4 sm:mt-0">
            © 2024 Craft Unique Essence
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
