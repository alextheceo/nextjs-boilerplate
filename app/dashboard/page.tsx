import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const prisma = new PrismaClient();

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return <p className="p-6 text-center">Unauthorized</p>;
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { store: true },
  });

  if (!user || !user.store) {
    return <p className="p-6 text-center">No store found</p>;
  }

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <header className="flex justify-between items-center px-6 h-16 border-b border-[var(--border)] bg-[var(--card)]">
        <Link href="/" className="text-2xl font-bold text-[var(--accent)]">
          Soflake
        </Link>
        <form action="/api/auth/signout" method="POST">
          <button
            type="submit"
            className="bg-[var(--accent)] text-white px-4 py-2 rounded hover:bg-[var(--accent-dark)]"
          >
            Sign Out
          </button>
        </form>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Welcome, {user.name?.split(" ")[0]}</h1>

        <section className="bg-[var(--card)] rounded-xl p-6 border border-[var(--border)] shadow-md">
          <h2 className="text-xl font-semibold mb-4">My Store</h2>

          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/dummy-logo-bag.png"
              alt="Store Logo"
              width={64}
              height={64}
              className="rounded-full border border-[var(--border)]"
            />
            <div>
              <h3 className="text-lg font-bold">{user.store.storeName}</h3>
              <Link
                href={`/${user.store.slug}`}
                target="_blank"
                className="text-sm text-blue-600 hover:underline"
              >
                soflake.com/{user.store.slug}
              </Link>
            </div>
          </div>

          <Image
            src="/dummy-banner.png"
            alt="Store Banner"
            width={1200}
            height={300}
            className="w-full h-36 object-cover rounded-lg mb-4"
          />

          <blockquote className="text-[var(--foreground)] bg-[var(--input)] px-4 py-3 italic rounded-md border border-[var(--border)]">
            {user.store.bannerText}
          </blockquote>

          <div className="text-right mt-6">
            <Link href="/dashboard/settings">
              <button className="bg-[var(--accent)] text-white px-4 py-2 rounded hover:bg-[var(--accent-dark)]">
                Edit Store
              </button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
