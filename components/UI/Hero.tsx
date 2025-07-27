import React from "react";
import heroImg1 from "@/public/hero2.png"; // Adjust the path as necessary
import Image from "next/image";
import { Button } from "../UI/Button";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-64px)] md:h-[calc(100vh-88px)] w-full bg-center z-0">
        <div className="absolute -top-16 md:-top-22 left-0 w-full h-[100vh]">
          <Image src={heroImg1} fill alt="Zahir" className="object-cover" />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-5 flex items-end justify-start h-[90vh] text-white px-8 py-16">
          <div className="">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 drop-shadow-lg lexend-font">
              Premium Men's Watches
            </h1>
            <Button
              variant="outline"
              size="xs"
              className="border-2 rounded-2xl"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2L6 8l1.4 1.4L11 5.8V16h2V5.8l3.6 3.6L18 8z"
              transform="rotate(180 12 12)"
            />
          </svg>
        </div>
      </section>
    </>
  );
}
