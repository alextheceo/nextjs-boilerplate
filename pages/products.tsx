import Link from "next/link";
import { ShoppingBagIcon, CalendarDaysIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function Products() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[var(--background)] text-[var(--foreground)] px-6">
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-[var(--foreground)] mb-8">Our Products</h1>
      <p className="text-lg text-[var(--foreground)] opacity-70 mb-16 text-center max-w-2xl">
        Soflake offers the tools you need to bring your business online — from stunning storefronts to powerful booking systems.
      </p>

      {/* Product Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {/* Storefronts */}
        <div className="flex flex-col items-center p-6 rounded-lg bg-[var(--card)] border border-[var(--border)] hover:shadow-md transition">
          <ShoppingBagIcon className="w-16 h-16 text-[var(--accent)] mb-4" />
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">Custom Storefronts</h2>
          <p className="text-[var(--foreground)] opacity-70 text-center">
            Build beautiful, customizable storefronts to showcase and sell your products or services online.
          </p>
        </div>

        {/* Bookings */}
        <div className="flex flex-col items-center p-6 rounded-lg bg-[var(--card)] border border-[var(--border)] hover:shadow-md transition">
          <CalendarDaysIcon className="w-16 h-16 text-[var(--accent)] mb-4" />
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">Seamless Bookings</h2>
          <p className="text-[var(--foreground)] opacity-70 text-center">
            Allow customers to book appointments, services, or reservations with a fully integrated system.
          </p>
        </div>

        {/* Business Management */}
        <div className="flex flex-col items-center p-6 rounded-lg bg-[var(--card)] border border-[var(--border)] hover:shadow-md transition">
          <Cog6ToothIcon className="w-16 h-16 text-[var(--accent)] mb-4" />
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">Business Management</h2>
          <p className="text-[var(--foreground)] opacity-70 text-center">
            Manage inventory, schedules, and customer data easily from a single intuitive dashboard.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex flex-col items-center justify-center mt-16 md:mt-24">
        <Link href="/contact-sales">
          <button className="bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white px-8 py-4 rounded-lg text-lg transition">
            Contact Sales
          </button>
        </Link>
      </div>
    </main>
  );
}
