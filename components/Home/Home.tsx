"use client";
import Image from "next/image";
import bg1 from "@/images/Home/bg1.png";
import bg5 from "@/images/Home/bg5.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Home() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      const contentWidth = textElement.scrollWidth;

      // Create a smooth, infinite scrolling effect
      gsap.fromTo(
        textElement,
        { x: `100%` }, // Start from the right
        {
          x: `-${contentWidth / 2}px`, // Move to the left, half of the content width
          duration: 15, // Speed of scroll
          ease: "linear",
          repeat: -1, // Infinite repeat
        }
      );
    }
  }, []);

  return (
    <div className="flex flex-col">
      <Swiper
        spaceBetween={3}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full"
      >
        <SwiperSlide>
          <div className="flex">
            <div
              className="flex flex-col md:flex-row w-full"
              style={{ height: "calc(100vh - 154px)" }}
            >
              <div className="hidden md:block w-1/2 h-full relative">
                <Image
                  src={bg1}
                  alt="Background Image"
                  className="brightness-50"
                  fill
                />
              </div>

              <div className="w-full md:w-1/2 h-full relative">
                <Image
                  src={bg5}
                  alt="Background Image"
                  className="brightness-50"
                  fill
                />

                {/* Text Content Overlay */}
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-10 text-white text-center p-4">
                  <h1
                    className="text-2xl sm:text-3xl md:text-4xl font-bold"
                    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                  >
                    New Linen For Life
                  </h1>
                  <p
                    className="text-xs sm:text-sm md:text-lg mt-2 md:mt-4"
                    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                  >
                    Beautiful, healthy, and durable
                  </p>
                  <p
                    className="text-xs sm:text-sm md:text-lg mt-1 md:mt-2"
                    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                  >
                    Upgrade to Organic Futurism Aesthetics
                  </p>

                  <Link href="/women">
                    <button className="mt-4 md:w-[15vw] sm:mt-6 px-4 sm:px-4 py-3 border border-white text-white bg-transparent hover:bg-white hover:text-black transition duration-300 rounded text-xs sm:text-sm md:text-base">
                      SHOP NOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex">
            <div
              className="flex flex-col md:flex-row w-full"
              style={{ height: "calc(100vh - 154px)" }}
            >
              <div className="hidden md:block w-1/2 h-full relative">
                <Image
                  src={bg1}
                  alt="Background Image"
                  className="brightness-50"
                  fill
                />
              </div>

              <div className="w-full md:w-1/2 h-full relative">
                <Image
                  src={bg5}
                  alt="Background Image"
                  className="brightness-50"
                  fill
                />

                {/* Text Content Overlay */}
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-10 text-white text-center p-4">
                  <h1
                    className="text-2xl sm:text-3xl md:text-4xl font-bold"
                    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                  >
                    New Linen For Life
                  </h1>
                  <p
                    className="text-xs sm:text-sm md:text-lg mt-2 md:mt-4"
                    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                  >
                    Beautiful, healthy, and durable
                  </p>
                  <p
                    className="text-xs sm:text-sm md:text-lg mt-1 md:mt-2"
                    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                  >
                    Upgrade to Organic Futurism Aesthetics
                  </p>

                  <Link href="/women">
                    <button className="mt-4 md:w-[15vw] sm:mt-6 px-4 sm:px-4 py-3 border border-white text-white bg-transparent hover:bg-white hover:text-black transition duration-300 rounded text-xs sm:text-sm md:text-base">
                      SHOP NOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex">
            <div
              className="flex flex-col md:flex-row w-full"
              style={{ height: "calc(100vh - 154px)" }}
            >
              <div className="hidden md:block w-1/2 h-full relative">
                <Image
                  src={bg1}
                  alt="Background Image"
                  className="brightness-50"
                  fill
                />
              </div>

              <div className="w-full md:w-1/2 h-full relative">
                <Image
                  src={bg5}
                  alt="Background Image"
                  className="brightness-50"
                  fill
                />

                {/* Text Content Overlay */}
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-10 text-white text-center p-4">
                  <h1
                    className="text-2xl sm:text-3xl md:text-4xl font-bold"
                    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                  >
                    New Linen For Life
                  </h1>
                  <p
                    className="text-xs sm:text-sm md:text-lg mt-2 md:mt-4"
                    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                  >
                    Beautiful, healthy, and durable
                  </p>
                  <p
                    className="text-xs sm:text-sm md:text-lg mt-1 md:mt-2"
                    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                  >
                    Upgrade to Organic Futurism Aesthetics
                  </p>

                  <Link href="/women">
                    <button className="mt-4 md:w-[15vw] sm:mt-6 px-4 sm:px-4 py-3 border border-white text-white bg-transparent hover:bg-white hover:text-black transition duration-300 rounded text-xs sm:text-sm md:text-base">
                      SHOP NOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex">
            <div
              className="flex flex-col md:flex-row w-full"
              style={{ height: "calc(100vh - 154px)" }}
            >
              <div className="hidden md:block w-1/2 h-full relative">
                <Image
                  src={bg1}
                  alt="Background Image"
                  className="brightness-50"
                  fill
                />
              </div>

              <div className="w-full md:w-1/2 h-full relative">
                <Image
                  src={bg5}
                  alt="Background Image"
                  className="brightness-50"
                  fill
                />

                {/* Text Content Overlay */}
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-10 text-white text-center p-4">
                  <h1
                    className="text-2xl sm:text-3xl md:text-4xl font-bold"
                    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                  >
                    New Linen For Life
                  </h1>
                  <p
                    className="text-xs sm:text-sm md:text-lg mt-2 md:mt-4"
                    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                  >
                    Beautiful, healthy, and durable
                  </p>
                  <p
                    className="text-xs sm:text-sm md:text-lg mt-1 md:mt-2"
                    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                  >
                    Upgrade to Organic Futurism Aesthetics
                  </p>

                  <Link href="/women">
                    <button className="mt-4 md:w-[15vw] sm:mt-6 px-4 sm:px-4 py-3 border border-white text-white bg-transparent hover:bg-white hover:text-black transition duration-300 rounded text-xs sm:text-sm md:text-base">
                      SHOP NOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Marquee
        speed={100}
        className="flex h-[50px] w-full bg-color1 text-white items-center"
      >
        <p className="text-xl sm:text-sm inline-block px-[100px]">ZERO WASTE</p>
        <p className="text-xl sm:text-2xl inline-block px-[100px]">
          ORGANIC FUTURISM AESTHETICS
        </p>
        <p className="text-xl sm:text-sm inline-block px-[100px]">ZERO WASTE</p>
        <p className="text-xl sm:text-2xl inline-block px-[100px]">
          ORGANIC FUTURISM AESTHETICS
        </p>
      </Marquee>
    </div>
  );
}
