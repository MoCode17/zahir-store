// components/navigation/Navbar.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { MenuSidebar } from "./MenuSidebar";
import { CartSidebar } from "./CartSidebar";
import logo from "@/public/logo.png"; // Adjust the path as necessary

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden md:flex px-8 w-full h-22 bg-transparent gap-4 text-white justify-between items-center md:relative z-20">
        {/* Logo */}
        <div className="">
          <Link
            href="/"
            className="flex items-center gap-4 text-2xl font-bold hover:cursor-pointer hover:text-gray-200 transition-colors duration-200"
          >
            <Image
              src={logo}
              width={45}
              height={45}
              alt="Zahir"
              className="drop-shadow-md md:scale-100 lg:scale-115"
            />
            <p className="arab-font text-3xl lg:text-4xl">Zahir</p>
          </Link>
        </div>
        {/* Right Links */}
        <div className="flex items-center gap-8">
          <div>
            <Link
              href="/collections"
              className="hover:cursor-pointer hover:text-[#fdc500] transition-colors duration-200 font-medium text-md lg:text-lg relative group"
            >
              Our Collections
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#fdc500] transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </div>
          <div>
            <button
              onClick={toggleMenu}
              className="hover:cursor-pointer hover:text-[#fdc500] transition-all duration-200 p-2 hover:scale-110 transform"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
            <button
              onClick={toggleCart}
              className="hover:cursor-pointer hover:text-[#fdc500] transition-all duration-200 p-2 relative hover:scale-110 transform"
              aria-label="Open cart"
            >
              <ShoppingCart size={24} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#fdc500] text-gray-900 text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className="md:hidden flex justify-between items-center w-full px-8 h-16 bg-transparent text-white relative z-20">
        <Link
          href="/"
          className="absolute left-[calc(50vw-20px)] text-xl font-bold"
        >
          <Image src={logo} width={40} height={40} alt="Zahir" />
        </Link>
        <div className="">
          <button
            onClick={toggleMenu}
            className="hover:text-[#fdc500] transition-colors duration-200 p-2"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
        <div className="">
          <button
            onClick={toggleCart}
            className="hover:text-[#fdc500] transition-colors duration-200 p-2 relative"
            aria-label="Open cart"
          >
            <ShoppingCart size={24} />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#fdc500] text-gray-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Sidebar Modals */}
      <MenuSidebar isOpen={isMenuOpen} onClose={closeMenu} />
      <CartSidebar />
    </>
  );
};
