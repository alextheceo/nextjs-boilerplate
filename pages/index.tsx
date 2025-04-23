import Link from "next/link";
import { ShoppingBagIcon, CalendarIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col items-center justify-center px-6">
        {/* Hero Section */}
        <section className="text-center mt-20">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-[var(--foreground)] mb-6">
            Unlock your Business Potential
            <br />
            with <span className="text-[var(--accent)]">Soflake</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--foreground)] opacity-70 mb-10">
            Launch your online storefront, accept bookings, and manage your business — all in one simple platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link href="/contact-sales">
              <button className="w-full sm:w-auto bg-[var(--foreground)] text-white px-6 py-4 rounded-lg hover:opacity-90 transition">
                Contact Sales
              </button>
            </Link>
            <Link href="/signin">
              <button className="w-full sm:w-auto bg-[var(--accent)] text-white px-6 py-4 rounded-lg hover:opacity-90 transition">
                Sign In
              </button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-32">
          <div className="flex flex-col items-center">
            <ShoppingBagIcon className="w-16 h-16 text-[var(--accent)] mb-4" />
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">Create Stunning Stores</h2>
            <p className="text-[var(--foreground)] opacity-70">
              Easily launch customizable storefronts that drive more sales and capture more leads.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <CalendarIcon className="w-16 h-16 text-[var(--accent)] mb-4" />
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">Enable Seamless Bookings</h2>
            <p className="text-[var(--foreground)] opacity-70">
              Let your customers schedule appointments and services with ease.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Cog6ToothIcon className="w-16 h-16 text-[var(--accent)] mb-4" />
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">Manage Everything Online</h2>
            <p className="text-[var(--foreground)] opacity-70">
              Control your business, products, and services from a simple dashboard.
            </p>
          </div>
        </section>
      </main>

      {/* Trusted by Section */}
      <section className="w-full bg-[var(--card)] py-16 mt-20 border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] mb-8">
            Trusted by businesses across Canada
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {["MapleTech", "North Solutions", "ArcticApps", "BeaverSoft", "CanCloud"].map((name) => (
              <div key={name} className="text-[var(--foreground)] opacity-60 text-lg font-semibold">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
