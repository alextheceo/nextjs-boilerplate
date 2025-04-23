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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center h-16 px-6 border-b border-gray-200">
        <a href="/" className="text-xl font-bold text-gray-800">
          Soflake
        </a>
      </header>

      {/* Content */}
      <main className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">
            Sign in to Soflake
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                name="password"
                type="password"
                required
                placeholder="••••••••"
                className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 py-2 px-4 text-white font-semibold hover:bg-blue-700 transition"
            >
              Sign In
            </button>

            {error && <p className="text-red-600 text-sm mt-2 text-center">{error}</p>}
          </form>

          <div className="my-6 flex items-center justify-center">
            <div className="h-px w-full bg-gray-300" />
            <span className="mx-3 text-sm text-gray-500">or</span>
            <div className="h-px w-full bg-gray-300" />
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center gap-3 w-full border border-gray-300 rounded-md py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            <img src="/google_icon.svg" alt="Google" className="w-5 h-5" />
            Sign in with Google
          </button>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline font-medium">
              Sign up here
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
