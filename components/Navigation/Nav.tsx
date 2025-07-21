"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { Menu } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { MenuSidebar } from "./MenuSidebar";
import { CartSidebar } from "./CartSidebar";

export const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  // Function to toggle the menu state
  // This can be used to open/close a mobile menu or dropdown
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const closeCart = () => setIsCartOpen(false);
  return (
    <>
      {/* Desktop Nav*/}
      <nav className="hidden md:flex p-4 mx-12 bg-transparent text-white text-shadow-lg justify-center items-center absolute top-0 left-0 right-0 z-10">
        <div className="flex-1 w-full flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-4 text-2xl font-bold hover:cursor-pointer hover:text-gray-200 transition-colors duration-200"
          >
            <Image src={logo} width={65} height={65} alt="Zahir" />
            <p className="hidden md:block">Zahir Store</p>
          </Link>
        </div>
        <div className="flex-1 flex justify-end items-center gap-4">
          <Link href="/collections">Our Collections</Link>
          <button
            onClick={toggleMenu}
            className="hover:cursor-pointer hover:text-gray-300 transition-colors duration-200 p-2"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
          <button
            onClick={toggleCart}
            className="hover:cursor-pointer hover:text-gray-300 transition-colors duration-200 p-2 relative"
            aria-label="Open cart"
          >
            <ShoppingCart size={24} />
            {/* Cart item count badge */}
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </nav>
      {/* Mobile Nav */}
      <nav className="md:hidden flex p-4 bg-[#54318c] text-white justify-between items-center relative z-10">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Image src={logo} width={40} height={40} alt="Zahir" />
          <span>Zahir</span>
        </Link>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleMenu}
            className="hover:text-gray-300 transition-colors duration-200 p-2"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
          <button
            onClick={toggleCart}
            className="hover:text-gray-300 transition-colors duration-200 p-2 relative"
            aria-label="Open cart"
          >
            <ShoppingCart size={24} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </nav>

      {/* Sidebar Modals */}
      <MenuSidebar isOpen={isMenuOpen} onClose={closeMenu} />
      <CartSidebar isOpen={isCartOpen} onClose={closeCart} />
    </>
  );
};
