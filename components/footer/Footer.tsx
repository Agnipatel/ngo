"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, HeartHandshake } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      
      {/* Top Accent */}
      <div className="h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500" />

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* NGO Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <HeartHandshake className="text-green-500 w-7 h-7" />
              <h2 className="text-xl font-bold text-white">NGO Foundation</h2>
            </div>
            <p className="text-sm leading-relaxed">
              We are a non-profit organization dedicated to empowering communities,
              supporting education, healthcare, and sustainable development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-green-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-green-400">About Us</Link></li>
              <li><Link href="/programs" className="hover:text-green-400">Programs</Link></li>
              <li><Link href="/events" className="hover:text-green-400">Events</Link></li>
              <li><Link href="/gallery" className="hover:text-green-400">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-green-400">Contact</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/volunteer" className="hover:text-green-400">Volunteer</Link></li>
              <li><Link href="/donate" className="hover:text-green-400">Donate</Link></li>
              <li><Link href="/careers" className="hover:text-green-400">Careers</Link></li>
              <li><Link href="/partner" className="hover:text-green-400">Partner With Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 text-green-400 mt-1" />
                <span>Chennai, Tamil Nadu, India</span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="w-4 h-4 text-green-400" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-4 h-4 text-green-400" />
                <span>info@ngofoundation.org</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5">
              <Link href="#" className="hover:text-green-400"><Facebook /></Link>
              <Link href="#" className="hover:text-green-400"><Twitter /></Link>
              <Link href="#" className="hover:text-green-400"><Instagram /></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} NGO Foundation. All Rights Reserved.
      </div>
    </footer>
  );
}
