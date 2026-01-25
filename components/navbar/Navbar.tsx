"use client";

import Link from "next/link";
import { HeartHandshake } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      
      {/* Top Accent Bar */}
      <div className="h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <HeartHandshake className="text-green-600 w-7 h-7" />
            <span className="text-xl font-bold text-gray-800">
              NGO Foundation
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About Us</Link>
            <Link href="/programs" className="nav-link">Programs</Link>
            <Link href="/event" className="nav-link">Events</Link>
            <Link href="/gallery" className="nav-link">Gallery</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </nav>

          {/* Donate Button */}
          <Link
            href="/donate"
            className="hidden md:inline-flex bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-semibold transition"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </header>
  );
}
