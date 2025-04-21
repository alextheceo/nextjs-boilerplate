"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignIn() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError("Invalid login credentials.");
    } else if (result?.ok) {
      // Instead of router.push, do a full page reload
      window.location.replace("/dashboard"); ;
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 bg-white">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
        Sign In
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-sm"
      >
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="border p-3 rounded-lg"
        />
        <input
          name="password"
          type="password"
          required
          placeholder="Password"
          className="border p-3 rounded-lg"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg"
        >
          Sign In
        </button>
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </main>
  );
}
