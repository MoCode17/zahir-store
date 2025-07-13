import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo1.png";
import { Menu } from "lucide-react";
import { ShoppingCart } from "lucide-react";

export default function Nav() {
  return (
    <>
      {/* Desktop Nav*/}
      <nav className="hidden md:flex p-4 mx-12 bg-transparent text-white text-shadow-lg justify-center items-center absolute top-0 left-0 right-0 z-10">
        <div className="flex-1 flex items-center gap-2">
          <Link href="/" className="flex items-center gap-4 text-2xl font-bold">
            <Image src={logo} width={65} height={65} alt="Zahir" />
            <p className="hidden md:block">Zahir Store</p>
          </Link>
        </div>
        <div className="flex-1 flex justify-end items-center gap-4">
          <Link href="/collections">Our Collections</Link>
          <Link href="/">
            <Menu />
          </Link>
          <Link href="/checkout">
            <ShoppingCart />
          </Link>
        </div>
      </nav>
    </>
  );
}
