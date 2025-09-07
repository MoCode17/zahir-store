// components/product/ProductDetailPage.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "../../context/CartContext";
import { Button } from "../UI/Button";
import {
  Star,
  Heart,
  Truck,
  Shield,
  RotateCcw,
  Award,
  Plus,
  Minus,
} from "lucide-react";
import Head from "next/head";

interface ProductVariant {
  id: string;
  name: string;
  value: string;
  price?: number;
  image?: string;
  inStock: boolean;
}

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  rating: number;
  reviewCount: number;
  category: string;
  description: string;
  features: string[];
  variants: ProductVariant[];
  specifications: { [key: string]: string };
  inStock: boolean;
  isNew?: boolean;
  isSale?: boolean;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

interface ProductDetailPageProps {
  product: Product;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product.variants.length > 0 ? product.variants[0] : null
  );
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  const { addItem, openCart } = useCart();

  const currentPrice = selectedVariant?.price || product.price;
  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - currentPrice) / product.originalPrice) * 100
      )
    : 0;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: currentPrice,
      originalPrice: product.originalPrice,
      image: product.images[selectedImageIndex],
      variant: selectedVariant?.value,
      variantId: selectedVariant?.id,
      quantity,
    });
    openCart();
  };

  const handleBuyNow = () => {
    handleAddToCart();
    // Navigate to checkout - in real app this would use router
    window.location.href = "/checkout";
  };

  return (
    <>
      <Head>
        <title>{product.metaTitle}</title>
        <meta name="description" content={product.metaDescription} />
        <meta name="keywords" content={product.keywords.join(", ")} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.images[0]} />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href={`https://zahirstore.com/products/${product.id}`}
        />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              name: product.name,
              image: product.images,
              description: product.description,
              brand: {
                "@type": "Brand",
                name: "Zahir Store",
              },
              offers: {
                "@type": "Offer",
                price: currentPrice,
                priceCurrency: "USD",
                availability: product.inStock
                  ? "https://schema.org/InStock"
                  : "https://schema.org/OutOfStock",
                seller: {
                  "@type": "Organization",
                  name: "Zahir Store",
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: product.rating,
                reviewCount: product.reviewCount,
              },
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="max-w-7xl mx-auto px-8 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <div className="flex items-center space-x-2 text-gray-600">
              <a href="/" className="hover:text-[#3d0066] transition-colors">
                Home
              </a>
              <span>/</span>
              <a
                href="/collections"
                className="hover:text-[#3d0066] transition-colors"
              >
                Collections
              </a>
              <span>/</span>
              <a
                href={`/collections/${product.category}`}
                className="hover:text-[#3d0066] transition-colors capitalize"
              >
                {product.category.replace("-", " ")}
              </a>
              <span>/</span>
              <span className="text-[#3d0066] font-medium">{product.name}</span>
            </div>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg group">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">
                    Product Image {selectedImageIndex + 1}
                  </span>
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                  {product.isNew && (
                    <span className="bg-[#fdc500] text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                      NEW
                    </span>
                  )}
                  {product.isSale && discountPercentage > 0 && (
                    <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                      -{discountPercentage}% OFF
                    </span>
                  )}
                </div>

                {/* Wishlist */}
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`absolute top-4 right-4 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
                    isWishlisted
                      ? "bg-red-500 text-white"
                      : "bg-white text-gray-600 hover:bg-red-50 hover:text-red-500"
                  }`}
                >
                  <Heart
                    size={20}
                    fill={isWishlisted ? "currentColor" : "none"}
                  />
                </button>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square bg-white rounded-lg overflow-hidden transition-all duration-200 ${
                      selectedImageIndex === index
                        ? "ring-2 ring-[#fdc500] shadow-lg"
                        : "hover:shadow-md"
                    }`}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 text-xs">{index + 1}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Title and Rating */}
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {product.name}
                </h1>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={`${
                            i < Math.floor(product.rating)
                              ? "text-[#fdc500] fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviewCount} reviews)
                    </span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      product.inStock
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-3xl font-bold text-[#3d0066]">
                    ${currentPrice.toFixed(2)}
                  </span>
                  {product.originalPrice &&
                    product.originalPrice > currentPrice && (
                      <>
                        <span className="text-xl text-gray-500 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-medium">
                          Save $
                          {(product.originalPrice - currentPrice).toFixed(2)}
                        </span>
                      </>
                    )}
                </div>
              </div>

              {/* Variants */}
              {product.variants.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Available Options:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.id}
                        onClick={() => setSelectedVariant(variant)}
                        disabled={!variant.inStock}
                        className={`p-4 border-2 rounded-xl transition-all duration-200 text-left ${
                          selectedVariant?.id === variant.id
                            ? "border-[#fdc500] bg-[#fdc500]/10"
                            : variant.inStock
                            ? "border-gray-200 hover:border-[#fdc500]/50"
                            : "border-gray-100 bg-gray-50 cursor-not-allowed"
                        }`}
                      >
                        <div className="font-medium text-gray-900">
                          {variant.value}
                        </div>
                        {variant.price && (
                          <div className="text-sm text-[#3d0066] font-semibold">
                            ${variant.price.toFixed(2)}
                          </div>
                        )}
                        {!variant.inStock && (
                          <div className="text-xs text-red-600 mt-1">
                            Out of Stock
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-lg font-medium text-gray-900">
                    Quantity:
                  </span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center font-medium">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="flex-1 bg-[#fdc500] hover:bg-[#fdc500]/90 text-gray-900 font-bold py-4 text-lg"
                    size="lg"
                  >
                    Add to Cart
                  </Button>
                  <Button
                    onClick={handleBuyNow}
                    disabled={!product.inStock}
                    variant="outline"
                    className="border-[#3d0066] text-[#3d0066] hover:bg-[#3d0066] hover:text-white py-4 px-8 font-bold"
                    size="lg"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Truck className="text-[#fdc500]" size={20} />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="text-[#fdc500]" size={20} />
                  <span>2 Year Warranty</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <RotateCcw className="text-[#fdc500]" size={20} />
                  <span>Free Returns</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Award className="text-[#fdc500]" size={20} />
                  <span>100% Authentic</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Description and Features */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Description */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Product Description
              </h2>
              <div className="prose prose-gray max-w-none space-y-4">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              {/* Features Toggle */}
              <button
                onClick={() => setShowFeatures(!showFeatures)}
                className="mt-6 flex items-center gap-2 text-[#3d0066] font-medium hover:text-[#3d0066]/80 transition-colors"
              >
                <span>View Key Features</span>
                <Plus
                  size={16}
                  className={`transform transition-transform ${
                    showFeatures ? "rotate-45" : ""
                  }`}
                />
              </button>

              {/* Features List */}
              {showFeatures && (
                <div className="mt-6 space-y-4 animate-in slide-in-from-top duration-300">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Key Features:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#fdc500] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Specifications
              </h3>
              <div className="space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="text-gray-600">{key}:</span>
                    <span className="font-medium text-gray-900 text-right">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
