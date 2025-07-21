"use client";

import { ProductCard, Product } from "../UI/ProductCard";

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Luxury Watch",
    price: 5000,
    originalPrice: 6000,
    image: "/products/luxury-watch.jpg",
    rating: 4.8,
    reviewCount: 120,
    category: "Luxury",
  },
  {
    id: "2",
    name: "Sport Watch",
    price: 2500,
    originalPrice: 3000,
    image: "/products/sport-watch.jpg",
    rating: 4.5,
    reviewCount: 95,
    category: "Sport",
  },
  {
    id: "3",
    name: "Classic Watch",
    price: 1500,
    originalPrice: 2000,
    image: "/products/classic-watch.jpg",
    rating: 4.2,
    reviewCount: 80,
    category: "Classic",
  },
  {
    id: "4",
    name: "Smart Watch",
    price: 800,
    originalPrice: 1000,
    image: "/products/smart-watch.jpg",
    rating: 4.0,
    reviewCount: 60,
    category: "Smart",
  },
];

export const Featured: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Best-Sellers
          </h2>
        </div>

        {/* Products grid would go here */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* This would be populated with ProductCard components */}
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={(id) => console.log(`Add to cart: ${id}`)}
              onToggleWishlist={(id) => console.log(`Toggle wishlist: ${id}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
