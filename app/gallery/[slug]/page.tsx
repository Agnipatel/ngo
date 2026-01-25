import Image from "next/image";
import { galleries } from "@/lib/data/gallery";
import { notFound } from "next/navigation";

interface GalleryPageProps {
  params: { slug: string };
}

export default  async function GalleryDetailPage({ 
   params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  const gallery = galleries.find((g) => g.slug === slug
);


  if (!gallery) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{gallery.title}</h1>
      <Image
        src={gallery.image}
        alt={gallery.title}
        width={800}
        height={500}
        className="object-cover w-full rounded-lg mb-4"
      />
      <p className="text-gray-700">{gallery.description}</p>
    </div>
  );
}
