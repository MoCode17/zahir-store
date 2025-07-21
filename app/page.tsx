import React, { useState, useEffect } from "react";
import { Nav } from "@/components/Navigation/Nav";
import Hero from "@/components/UI/Hero";
import { CategoriesSection } from "@/components/Sections/Categories";
import { Button } from "@/components/UI/Button";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Featured Products Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Watches
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked timepieces that represent the pinnacle of watchmaking
              excellence and style.
            </p>
          </div>

          {/* Products grid would go here */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* This would be populated with ProductCard components */}
            <div className="bg-gray-100 aspect-square rounded-xl flex items-center justify-center">
              <span className="text-gray-500">Product Card 1</span>
            </div>
            <div className="bg-gray-100 aspect-square rounded-xl flex items-center justify-center">
              <span className="text-gray-500">Product Card 2</span>
            </div>
            <div className="bg-gray-100 aspect-square rounded-xl flex items-center justify-center">
              <span className="text-gray-500">Product Card 3</span>
            </div>
            <div className="bg-gray-100 aspect-square rounded-xl flex items-center justify-center">
              <span className="text-gray-500">Product Card 4</span>
            </div>
          </div>
        </div>
      </section>

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
