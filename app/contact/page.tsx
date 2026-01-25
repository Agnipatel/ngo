export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">NGO Information</h2>
          <p className="mb-2"><strong>Address:</strong> India</p>
          <p className="mb-2"><strong>Email:</strong> ngo@gmail.com</p>
          <p className="mb-2"><strong>Phone:</strong> +91 90000 00000</p>
          <p className="mt-4 text-gray-600">
            Feel free to reach out to us for donations, volunteering, or any queries.
          </p>
        </div>

        {/* Contact Form */}
        <form className="bg-gray-100 p-6 rounded-lg shadow">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 border rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mb-4 border rounded h-32"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
