import Link from "next/link";
import { BuildingStorefrontIcon, CalendarDaysIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export default function Solutions() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 text-center md:text-left px-4">Solutions for Every Business</h1>
      <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl">
        Whether you&apos;re launching an online store, offering services, or managing bookings — Soflake helps you build your online presence effortlessly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {/* Online Store */}
        <div className="flex flex-col items-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition">
          <BuildingStorefrontIcon className="w-16 h-16 text-blue-600 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Launch Your Online Store</h2>
          <p className="text-gray-600 text-center">
            Quickly set up an e-commerce storefront and start selling products online without coding.
          </p>
        </div>

        {/* Service Bookings */}
        <div className="flex flex-col items-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition">
          <CalendarDaysIcon className="w-16 h-16 text-blue-600 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Accept Service Bookings</h2>
          <p className="text-gray-600 text-center">
            Let customers easily book appointments and services with your business, 24/7.
          </p>
        </div>

        {/* Manage Clients */}
        <div className="flex flex-col items-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition">
          <UserGroupIcon className="w-16 h-16 text-blue-600 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Manage Clients</h2>
          <p className="text-gray-600 text-center">
            Keep track of customers, appointments, and orders with our simple business dashboard.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-16 md:mt-24">
        <Link href="/contact-sales">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg transition">
            Contact Sales
          </button>
        </Link>
      </div>
    </main>
  );
}
