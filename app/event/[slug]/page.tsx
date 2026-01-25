import Image from "next/image";
import { events } from "@/lib/data/events";
import { notFound } from "next/navigation";

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ unwrap params
  const { slug } = await params;

  const event = events.find((e) => e.slug === slug);

  if (!event) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">
        {event.title}
      </h1>

      <p className="text-gray-500 mb-6">
        {event.date} • {event.location}
      </p>

      <Image
        src={event.image}
        alt={event.title}
        width={900}
        height={450}
        className="rounded-2xl shadow mb-8"
      />

      <p className="text-gray-600 mb-6">
        {event.desc}
      </p>

      <h3 className="text-2xl font-semibold mb-3">
        Event Highlights
      </h3>

      <ul className="list-disc list-inside text-gray-600 space-y-2">
        {event.highlights.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
