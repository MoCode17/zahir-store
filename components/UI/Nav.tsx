import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { Menu } from "lucide-react";
import { ShoppingCart } from "lucide-react";

export default function Nav() {
  return (
    <>
      {/* Desktop Nav*/}
      <nav className="display-none md:grid grid-cols-3 gap-40 p-4 bg-[#54318c] text-white justify-items-center items-center">
        <Link href="/">
          <Menu />
        </Link>
        <Link href="/">
          <Image src={logo} width={65} height={65} alt="Zahir" />
        </Link>
        <Link href="/checkout">
          <ShoppingCart />
        </Link>
      </nav>
    </>
  );
}
