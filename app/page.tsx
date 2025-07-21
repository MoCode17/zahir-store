import React, { useState, useEffect } from "react";
import { Nav } from "@/components/Navigation/Nav";
import Hero from "@/components/UI/Hero";
import { Categories } from "@/components/Sections/Categories";
import { Button } from "@/components/UI/Button";
import { Featured } from "@/components/Sections/Featured";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />

      {/* Categories Section */}
      <Categories />

      {/* Featured Products Section */}
      <Featured />

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-[#54318c] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8 opacity-90">
            Get the latest updates on new collections, exclusive offers, and
            watchmaking insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-[#54318c] hover:bg-gray-100"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
