import Link from "next/link";

export default function Pricing() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-gray-900 mb-8">Pricing</h1>
      <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl">
        Simple, transparent pricing. Get your business online — without hidden fees or complexity.
      </p>

      {/* Pricing Overview */}
      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-10 justify-center">

        {/* Setup Fee */}
        <div className="flex flex-col items-center bg-gray-50 p-8 rounded-lg hover:shadow-md transition w-full">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">One-Time Setup</h2>
          <p className="text-4xl font-extrabold text-blue-600 mb-6">$500</p>
          <p className="text-gray-600 mb-8 text-center">
            Full storefront and booking setup, branding customization, and initial launch support.
          </p>
        </div>

        {/* Monthly Subscription */}
        <div className="flex flex-col items-center bg-gray-50 p-8 rounded-lg hover:shadow-md transition w-full">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Monthly Subscription</h2>
          <p className="text-4xl font-extrabold text-blue-600 mb-6">$29<span className="text-2xl text-gray-500">/mo</span></p>
          <p className="text-gray-600 mb-8 text-center">
            Ongoing platform access, hosting, management, updates, and customer support.
          </p>
        </div>

      </div>

      {/* Custom Quote Line */}
      <p className="text-md text-gray-600 mt-12 text-center max-w-2xl">
        Need something custom? Contact us for a personalized quote tailored to your business needs.
      </p>

      {/* CTA */}
      <div className="mt-8">
        <Link href="/contact-sales">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg transition">
            Contact Sales
          </button>
        </Link>
      </div>
    </main>
  );
}
