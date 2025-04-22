"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </main>
    );
  }

  if (status === "authenticated" && session) {
    const firstName = session.user?.name?.split(" ")[0] || "there";

    return (
      <main className="flex flex-col items-center justify-center min-h-screen px-6 bg-white">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          Welcome, {firstName}!
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Manage your storefront and grow your business 🚀
        </p>

        <button
          onClick={() => signOut({ callbackUrl: "/signin" })}
          className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg text-lg"
        >
          Sign Out
        </button>
      </main>
    );
  }

  return null;
}
