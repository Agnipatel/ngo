"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AboutPage from "@/app/about/page";
import EventsPage from "@/app/event/page";
import ProgramsPage from "@/app/programs/page";

const slides = [
  {
    id: 1,
    title: "Together We Can Change Lives",
    description: "Supporting education, healthcare, and community development.",
    image: "/slider/slide1.jpg",
  },
  {
    id: 2,
    title: "Empowering Rural Communities",
    description: "Creating sustainable solutions for a better tomorrow.",
    image: "/slider/slide2.jpg",
  },
  {
    id: 3,
    title: "Your Support Matters",
    description: "Join hands with us to make a lasting impact.",
    image: "/slider/slide3.jpg",
  },
];

export default function HomeSlider() {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="relative w-full h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg mb-6">
                  {slide.description}
                </p>

                <div className="flex gap-4">
                  <Link
                    href="/donate"
                    className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold transition"
                  >
                    Donate Now
                  </Link>
                  <Link
                    href="/about"
                    className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-green-500" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
    <AboutPage/>
    <EventsPage/>
    <ProgramsPage/>
    </>
  );
}
