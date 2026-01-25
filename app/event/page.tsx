import Image from "next/image";
import Link from "next/link";
import { events } from "@/lib/data/events";

export default function EventsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Page Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Events</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Explore our NGO events focused on education, women empowerment,
          health, and community welfare.
        </p>
      </section>

      {/* Events Cards */}
      <div className="grid md:grid-cols-2 gap-10">
        {events.map((event) => (
          <div
            key={event.slug}
            className="rounded-2xl shadow hover:shadow-lg transition"
          >
            <Image
              src={event.image}
              alt={event.title}
              width={600}
              height={350}
              className="rounded-t-2xl"
            />

            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">
                {event.title}
              </h2>

              <p className="text-sm text-gray-500 mb-2">
                {event.date} • {event.location}
              </p>

              <p className="text-gray-600 mb-4">
                {event.desc}
              </p>

              <Link
                href={`/event/${event.slug}`}
                className="text-blue-600 font-semibold"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
