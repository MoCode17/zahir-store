// components/sections/CategoriesSection.tsx
import React from "react";
import Link from "next/link";
import { Button } from "../UI/Button";
import { Crown, Zap, Clock, Smartphone } from "lucide-react";

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
    image: "/categories/luxury.jpg",
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
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the perfect watch for every occasion. From luxury
            timepieces to Arabic dial classics, find your style in our carefully
            curated collections.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
    <div className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Background Image Placeholder */}
      <div
        className={`h-48 bg-gradient-to-br ${category.gradient} relative overflow-hidden`}
      >
        {/* Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-white opacity-20">
          {category.icon}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#3d0066] transition-colors">
          {category.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {category.description}
        </p>

        <Link href={category.href}>
          <Button
            variant="outline"
            size="sm"
            className="w-full group-hover:bg-[#fdc500] group-hover:text-gray-900 group-hover:border-[#fdc500] transition-all duration-200"
          >
            Shop Now
          </Button>
        </Link>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-[#fdc500] bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300 pointer-events-none"></div>
    </div>
  );
};
