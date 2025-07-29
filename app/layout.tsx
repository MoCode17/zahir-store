"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Tangerine } from "next/font/google";
import React from "react";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tangerine = Tangerine({
  variable: "--font-tangerine",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zahir Store" />
        <meta
          property="og:site_name"
          content="Zahir Store - Luxury Men's Watches"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Main site SEO */}
        <meta name="language" content="English" />
        <meta httpEquiv="content-language" content="en" />
        <link rel="alternate" hrefLang="en" href="https://zahirstore.com" />

        {/* Arabic Dial Collection SEO */}
        <meta
          name="arabic-dial-watches"
          content="luxury arabic numeral timepieces"
        />
        <meta
          name="specialty-collection"
          content="arabic dial watches, traditional numerals, eastern aesthetics"
        />

        {/* Favicon */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* Apple Touch Icon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme Color */}
        <meta name="theme-color" content="#3d0066" />
        <meta name="msapplication-TileColor" content="#3d0066" />
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          as="style"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          as="style"
        />

        {/* <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Tangerine:wght@400;700&display=swap"
          rel="stylesheet"
        /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tangerine.variable} antialiased`}
      >
        <CartProvider>
          <div className="min-h-screen bg-white">{children}</div>
        </CartProvider>
      </body>
    </html>
  );
}
