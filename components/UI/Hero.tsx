import React from "react";
import heroImg1 from "@/public/hero2.png"; // Adjust the path as necessary
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[90vh] bg-cover bg-center">
      <Image src={heroImg1} layout="fill" objectFit="cover" alt="Zahir" />
      {/* Optional: Add a dark overlay for better text contrast 
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>*/}

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
        <div>
          <h1 className="text-5xl font-bold mb-4">Premium Men's Watches</h1>
          <p className="text-xl mb-8">Discover timeless elegance</p>
          <button className="bg-[#54318c] hover:bg-[#432269] px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
