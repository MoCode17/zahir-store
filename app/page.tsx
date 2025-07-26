import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navigation/Nav";
import Hero from "@/components/UI/Hero";
import { CategoriesSection } from "@/components/Sections/Categories";
import { Button } from "@/components/UI/Button";
import { Featured } from "@/components/Sections/Featured";
import { ProductDetailPage } from "@/components/Product/ProductDetailPage";
import { CheckoutPage } from "@/components/Checkout/CheckoutPage";

const sampleProduct = {
  id: "cartier-santos-arabic-dial",
  name: "Cartier Santos Large Arabic Dial",
  price: 3799.99,
  originalPrice: 3999.99,
  images: [
    "/products/cartier-santos-arabic-1.jpg",
    "/products/cartier-santos-arabic-2.jpg",
  ],
  rating: 4.9,
  reviewCount: 156,
  category: "arabic-dial",
  description:
    "The Cartier Santos with elegant Arabic numerals combines French luxury with traditional Eastern aesthetics.",
  features: [
    "18-karat gold case",
    "Arabic numeral dial",
    "Swiss automatic movement",
  ],
  variants: [
    {
      id: "gold-white-arabic",
      name: "Gold Case - White Arabic Dial",
      value: "Gold with White Arabic Dial",
      price: 3799.99,
      inStock: true,
    },
  ],
  specifications: {
    "Case Diameter": "39.8mm",
    Movement: "Automatic",
    Dial: "Arabic Numerals",
  },
  inStock: true,
  isNew: true,
  isSale: false,
  metaTitle: "Cartier Santos Large Arabic Dial - Luxury Arabic Numeral Watch",
  metaDescription: "Exquisite Cartier Santos with Arabic dial numerals",
  keywords: [
    "cartier santos arabic dial",
    "arabic numeral watches",
    "luxury arabic watches",
  ],
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Categories Section */}
      <CategoriesSection />

      <ProductDetailPage product={sampleProduct} />

      <CheckoutPage />

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
