import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24">
        <h1 className="text-5xl font-bold mb-4">Your Digital Storefront, Simplified.</h1>
        <p className="text-xl mb-8 max-w-2xl">
          Custom solutions to grow your business online.
        </p>
        <Link href="#contact">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-lg">
            Get Started
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 w-full py-16 px-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Custom Websites</h3>
            <p>Professional websites tailored to your brand.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Online Ordering & Appointments</h3>
            <p>Flexible solutions for businesses of all types.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
            <p>We help you grow and adapt as your business evolves.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-16 px-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6">Why Soflake?</h2>
        <p className="max-w-3xl text-center text-lg">
          Soflake empowers small businesses to establish and grow their digital presence effortlessly. Whether you're looking to launch an online store, streamline appointments, or simply build your brand online, we customize solutions for your needs.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-16 px-6 flex flex-col items-center bg-blue-50">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <Link href="/contact">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-lg">
            Contact Us
          </button>
        </Link>
      </section>
    </main>
  );
}
