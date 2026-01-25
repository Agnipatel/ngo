import Link from "next/link";
import Image from "next/image";
import { galleries } from "@/lib/data/gallery";

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleries.map((gallery) => (
          <Link key={gallery.slug} href={`/gallery/${gallery.slug}`}>
            <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
              <Image
                src={gallery.image}
                alt={gallery.title}
                width={400}
                height={300}
                className="object-cover w-full h-60"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{gallery.title}</h2>
                <p className="text-gray-600">{gallery.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
