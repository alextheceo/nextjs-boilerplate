"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignIn() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError("Invalid login credentials.");
    } else {
      router.push("/dashboard");
    }
  }

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 bg-white">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Sign In</h1>

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

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 px-4 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
        >
          <img
            src="/google_icon.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>

        {error && <p className="text-red-600">{error}</p>}
      </form>
    </main>
  );
}
