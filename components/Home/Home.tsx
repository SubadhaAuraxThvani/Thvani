"use client";
import Image from "next/image";
import bg1 from "@/images/Home/bg1.png";
import bg5 from "@/images/Home/bg5.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function Home() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      const containerWidth = textElement.offsetWidth;

      gsap.fromTo(
        textElement,
        { x: `-${containerWidth}px` },
        {
          x: "100vw",
          duration: 15,
          ease: "linear",
          repeat: -1,
        }
      );
    }
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex">
        <div
          className="flex flex-col md:flex-row w-full"
          style={{ height: "calc(100vh - 154px)" }}
        >
          <div className="hidden md:block w-1/2 h-full relative">
            <Image src={bg1} alt="Background Image" fill />
          </div>

          <div className="w-full md:w-1/2 h-full relative">
            <Image src={bg5} alt="Background Image" fill />

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
                <button className="mt-4 sm:mt-6 px-4 sm:px-4 py-2 border border-white text-white bg-transparent hover:bg-white hover:text-black transition duration-300 rounded text-xs sm:text-sm md:text-base">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[50px] bg-color1 text-white items-center overflow-hidden">
        <div ref={textRef} className="whitespace-nowrap">
          <p className="text-xl sm:text-2xl inline-block pl-2 mr-[500px]">
            ZERO WASTE
          </p>
          <p className="text-xl sm:text-2xl inline-block">
            ORGANIC FUTURISM AESTHETICS
          </p>
        </div>
      </div>
    </div>
  );
}
