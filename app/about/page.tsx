import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Our NGO</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We are a non-profit organization working towards Education, Women
          Empowerment, Health Awareness, and Food Security through our Roti Bank
          initiative.
        </p>
      </section>

      {/* Education Project */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-20">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Education Project</h2>
          <p className="text-gray-600 mb-4">
            Our education project focuses on providing quality education to
            underprivileged children. We organize free classes, distribute study
            materials, and support digital learning initiatives.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Free basic education</li>
            <li>Scholarship support</li>
            <li>Digital literacy programs</li>
          </ul>
        </div>
        <Image
          src="/images/education.jpg"
          alt="Education Project"
          width={500}
          height={350}
          className="rounded-2xl shadow"
        />
      </section>

      {/* Women Development */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-20">
        <Image
          src="/images/women.jpg"
          alt="Women Development"
          width={500}
          height={350}
          className="rounded-2xl shadow"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Women Development</h2>
          <p className="text-gray-600 mb-4">
            We empower women through skill development, self-employment
            opportunities, and awareness programs for financial independence.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Skill training workshops</li>
            <li>Self-help groups</li>
            <li>Entrepreneurship support</li>
          </ul>
        </div>
      </section>

      {/* Roti Bank */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-20">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Roti Bank</h2>
          <p className="text-gray-600 mb-4">
            Through our Roti Bank initiative, we collect and distribute food to
            the hungry and homeless, ensuring no one sleeps hungry.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Daily food distribution</li>
            <li>Community kitchens</li>
            <li>Volunteer-driven service</li>
          </ul>
        </div>
        <Image
          src="/images/roti-bank.jpg"
          alt="Roti Bank"
          width={500}
          height={350}
          className="rounded-2xl shadow"
        />
      </section>

      {/* Health Project */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-10">
        <Image
          src="/images/health.jpg"
          alt="Health Project"
          width={500}
          height={350}
          className="rounded-2xl shadow"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Health Project</h2>
          <p className="text-gray-600 mb-4">
            Our health initiatives include free medical camps, health awareness
            sessions, and support for basic healthcare needs.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Free health checkups</li>
            <li>Medicine distribution</li>
            <li>Health awareness programs</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
