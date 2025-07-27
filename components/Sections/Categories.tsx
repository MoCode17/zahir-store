// components/sections/CategoriesSection.tsx
import React from "react";
import Link from "next/link";
import { Button } from "../UI/Button";
import { Crown, Zap, Clock, Smartphone } from "lucide-react";
import Image from "next/image";

interface Category {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  image: string;
  gradient: string;
}

const categories: Category[] = [
  {
    id: "1",
    title: "Luxury",
    description:
      "Premium timepieces crafted with the finest materials and precious metals",
    icon: <Crown size={32} />,
    href: "/collections/luxury",
    image:
      "https://images.pexels.com/photos/364822/rolex-watch-time-luxury-364822.jpeg",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    id: "2",
    title: "Sport",
    description:
      "High-performance watches built for active lifestyles and adventure",
    icon: <Zap size={32} />,
    href: "/collections/sport",
    image: "/categories/sport.jpg",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "3",
    title: "Classic",
    description:
      "Timeless designs that never go out of style, perfect for any occasion",
    icon: <Clock size={32} />,
    href: "/collections/classic",
    image: "/categories/classic.jpg",
    gradient: "from-gray-600 to-gray-800",
  },
  {
    id: "4",
    title: "Arabic Dial",
    description:
      "Elegant watches featuring beautiful Arabic numerals and traditional craftsmanship",
    icon: <Smartphone size={32} />,
    href: "/collections/arabic-dial",
    image: "/categories/arabic-dial.jpg",
    gradient: "from-purple-500 to-pink-500",
  },
];

export const CategoriesSection: React.FC = () => {
  return (
    <section className="py-12 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Categories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the perfect watch for every occasion. From luxury
            timepieces to Arabic dial classics, find your style in our carefully
            curated collections.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 gap-y-16">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
      {/* Background Image Placeholder */}
      <div
        className={`h-48 bg-gradient-to-br ${category.gradient} rounded-xl relative overflow-hidden`}
      >
        <Image
          src={category.image}
          fill
          alt={category.title}
          className="object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col items-center justify-center">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-400 transition-colors">
          {category.title}
        </h3>
      </div>
      <div className="absolute -bottom-12">
        <Link href={category.href}>
          <Button
            variant="primary"
            size="sm"
            className="w-max group-hover:bg-[#fdc500] group-hover:text-gray-900 group-hover:border-[#fdc500] rounded-2xl transition-all duration-200"
          >
            Shop Now
          </Button>
        </Link>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-[#fdc500] opacity-0 group-hover:opacity-5 transition-all duration-300 pointer-events-none"></div>
    </div>
  );
};
