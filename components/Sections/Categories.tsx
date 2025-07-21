// components/sections/Categories.tsx
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
    description: "Premium timepieces crafted with the finest materials",
    icon: <Crown size={32} />,
    href: "/collections/luxury",
    image: "/categories/luxury.jpg",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    id: "2",
    title: "Sport",
    description: "Built for performance and active lifestyles",
    icon: <Zap size={32} />,
    href: "/collections/sport",
    image: "/categories/sport.jpg",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "3",
    title: "Classic",
    description: "Timeless designs that never go out of style",
    icon: <Clock size={32} />,
    href: "/collections/classic",
    image: "/categories/classic.jpg",
    gradient: "from-gray-600 to-gray-800",
  },
  {
    id: "4",
    title: "Smart",
    description: "Technology meets tradition in perfect harmony",
    icon: <Smartphone size={32} />,
    href: "/collections/smart",
    image: "/categories/smart.jpg",
    gradient: "from-purple-500 to-pink-500",
  },
];

export const Categories: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Categories</h2>
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
    <div className="group relative">
      <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Background Image Placeholder */}
        <div
          className={`h-48 bg-gradient-to-br ${category.gradient} relative overflow-hidden`}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex justify-center items-center p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#fdc500] transition-colors text-center">
            {category.title}
          </h3>
        </div>
      </div>
      <div className="mt-4">
        <Link href={category.href}>
          <Button
            variant="outline"
            size="sm"
            className="w-full group-hover:bg-[#fdc500] group-hover:text-white group-hover:border-[#fdc500] transition-all duration-200"
          >
            {category.title} Watches
          </Button>
        </Link>
      </div>
    </div>
  );
};
