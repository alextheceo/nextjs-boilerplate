"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    async function checkSessionManually() {
      const res = await fetch("/api/auth/session");
      const sessionData = await res.json();
      console.log("Manual fetch session:", sessionData);
    }


    if (status === "unauthenticated") {
      alert("Not authenticated"); // 🔥 show popup immediately
      router.push("/signin");
    }

    if (status === "authenticated" && session) {
      alert(JSON.stringify(session, null, 2)); // 🔥 show session popup immediately
    }


    checkSessionManually();
  }, [status, session, router]);

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

        <p className="text-lg text-gray-600">
          This is your Soflake Dashboard.
        </p>
      </main>
    );
  }

  return null;
}
