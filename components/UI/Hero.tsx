import React from "react";
import heroImg1 from "@/public/hero2.png"; // Adjust the path as necessary
import Image from "next/image";
import { Button } from "../UI/Button";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-cover bg-center">
        <Image src={heroImg1} layout="fill" objectFit="cover" alt="Zahir" />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Hero Content */}
        <div className="relative z-5 flex items-end justify-start h-full text-white px-4 mx-12 py-8">
          <div className="">
            <h1 className="text-2xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              Premium Men's Watches
            </h1>
            <Button variant="outline" size="lg" className="border-2 w-4xs">
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
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
