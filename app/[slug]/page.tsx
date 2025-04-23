import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const prisma = new PrismaClient();

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const store = await prisma.store.findUnique({
    where: { slug },
  });

  if (!store) return notFound();

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Banner */}
      <div className="relative w-full">
        <Image
          src="/dummy-banner.png"
          alt="Store Banner"
          width={1600}
          height={400}
          className="w-full h-52 md:h-72 object-cover rounded-b-xl shadow-md"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/80 w-full mx-6 md:mx-20 rounded-xl px-6 py-5 text-center shadow-md">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-[var(--foreground)] tracking-tight">
              {store.storeName}
            </h1>
            <p className="mt-2 text-base sm:text-lg md:text-xl font-normal text-[var(--foreground)]/80">
              {store.bannerText}
            </p>
          </div>
        </div>

        {/* Store Logo */}
        <div className="absolute bottom-[-36px] left-10 w-24 h-24 md:w-28 md:h-28 rounded-lg overflow-hidden border-4 border-white shadow-lg bg-white">
          <Image
            src="/dummy-logo-bag.png"
            alt="Store Logo"
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Store Content */}
      <div className="max-w-5xl mx-auto px-4 pt-24 pb-12">
        <div className="bg-gradient-to-b from-[var(--card)] to-[var(--background)] border border-[var(--border)] rounded-xl shadow-xl p-6 md:p-10">
          {/* CTA Button */}
          <div className="text-center mb-12">
            <Link href="/signin">
              <button className="bg-[var(--accent)] text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:scale-105 transition-transform">
                Order Now
              </button>
            </Link>
          </div>

          {/* Products Section */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src="/chocolate-cake.png"
                  alt="Chocolate Cake"
                  width={400}
                  height={300}
                  className="w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-1">Chocolate Cake</h3>
                  <p className="text-sm text-gray-600">Rich and moist, serves 12</p>
                  <p className="text-lg font-bold mt-2">$35</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src="/blueberry-muffin.png"
                  alt="Blueberry Muffin"
                  width={400}
                  height={300}
                  className="w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-1">Blueberry Muffin</h3>
                  <p className="text-sm text-gray-600">With fresh, juicy blueberries</p>
                  <p className="text-lg font-bold mt-2">$3</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="h-24 bg-[var(--input)] w-full rounded-t-xl mt-12" />
    </main>
  );
}
