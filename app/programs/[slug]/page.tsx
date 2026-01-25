import Image from "next/image";
import { programs } from "@/lib/data/programs";
import { notFound } from "next/navigation";

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ unwrap params

  const program = programs.find((p) => p.slug === slug);

  if (!program) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">{program.title}</h1>

      <Image
        src={program.image}
        alt={program.title}
        width={800}
        height={450}
        className="rounded-2xl shadow mb-8"
      />

      <p className="text-gray-600 mb-6">{program.desc}</p>

      <ul className="list-disc list-inside text-gray-600 space-y-2">
        {program.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
