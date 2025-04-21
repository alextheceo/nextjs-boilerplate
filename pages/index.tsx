import Header from "../components/Header";
import Link from "next/link";
import { ShoppingBagIcon, CalendarIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-center px-6">
        {/* Hero Section */}
        <section className="text-center mt-20">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 mb-6">
            Power your business <br /> with <span className="text-blue-600">Soflake</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
          Launch, manage, and grow your business online — without the technical hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link href="/contact-sales">
              <button className="w-full sm:w-auto bg-gray-900 text-white px-6 py-4 rounded-lg hover:bg-gray-700 transition">
                Contact Sales
              </button>
            </Link>
            <Link href="/signin">
              <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition">
                Sign In
              </button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-32">
          <div className="flex flex-col items-center">
            <ShoppingBagIcon className="w-16 h-16 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Stunning Stores</h2>
            <p className="text-gray-600">
              Easily launch customizable storefronts that drive more sales and capture more leads.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <CalendarIcon className="w-16 h-16 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Enable Seamless Bookings</h2>
            <p className="text-gray-600">
              Let your customers schedule appointments and services with ease.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Cog6ToothIcon className="w-16 h-16 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Manage Everything Online</h2>
            <p className="text-gray-600">
              Control your business, products, and services from a simple dashboard.
            </p>
          </div>
        </section>

      </main>
      {/* Trusted by Section */}
      <section className="w-full bg-gray-50 py-16 mt-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">
            Trusted by businesses across Canada
          </h2>

          {/* Placeholder logos or brand names */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-gray-500 text-lg font-semibold">MapleTech</div>
            <div className="text-gray-500 text-lg font-semibold">North Solutions</div>
            <div className="text-gray-500 text-lg font-semibold">ArcticApps</div>
            <div className="text-gray-500 text-lg font-semibold">BeaverSoft</div>
            <div className="text-gray-500 text-lg font-semibold">CanCloud</div>
          </div>
        </div>
      </section>

    </>
  );
}
