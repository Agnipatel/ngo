import Image from "next/image";
import Link from "next/link";
import { programs } from "@/lib/data/programs";

export default function ProgramsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Programs</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our NGO runs programs focused on education, women empowerment,
          food security, and healthcare.
        </p>
      </section>

      <div className="space-y-20">
        {programs.map((program, index) => (
          <section
            key={program.slug}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                {program.title}
              </h2>
              <p className="text-gray-600 mb-4">{program.desc}</p>

              <Link
                href={`/programs/${program.slug}`}
                className="inline-block mt-4 text-blue-600 font-semibold"
              >
                Read More →
              </Link>
            </div>

            <Image
              src={program.image}
              alt={program.title}
              width={500}
              height={350}
              className="rounded-2xl shadow"
            />
          </section>
        ))}
      </div>
    </div>
  );
}
