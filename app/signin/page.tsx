"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
    if (result?.error === "UserNotFound") {
      router.push("/signup");
      return;
    }

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
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <header className="flex items-center h-16 px-6 border-b border-[var(--border)] bg-[var(--card)]">
        <Link href="/" className="text-3xl font-bold text-[var(--accent)]">
          Soflake
        </Link>
      </header>

      {/* Main Card */}
      <main className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md rounded-xl bg-[var(--card)] p-8 shadow-md border border-[var(--border)]">
          <h2 className="text-center text-2xl font-bold mb-6 text-[var(--foreground)]">
            Sign in to Soflake
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email address
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-md bg-[var(--input)] border border-[var(--border)] px-4 py-2 shadow-sm focus:border-[var(--accent)] focus:ring"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                name="password"
                type="password"
                required
                placeholder="••••••••"
                className="w-full rounded-md bg-[var(--input)] border border-[var(--border)] px-4 py-2 shadow-sm focus:border-[var(--accent)] focus:ring"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-[var(--accent)] py-2 px-4 text-white font-semibold hover:bg-[var(--accent-dark)] transition"
            >
              Sign In
            </button>

            {error && (
              <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
            )}
          </form>

          <div className="my-6 flex items-center justify-center">
            <div className="h-px w-full bg-[var(--border)]" />
            <span className="mx-3 text-sm text-[var(--foreground)] opacity-60">or</span>
            <div className="h-px w-full bg-[var(--border)]" />
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center gap-3 w-full border border-[var(--border)] rounded-md py-2 px-4 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--input)] transition"
          >
            <Image src="/google_icon.svg" alt="Google" width={20} height={20} />

            Sign in with Google
          </button>

          <p className="mt-6 text-center text-sm text-[var(--foreground)]">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[var(--accent)] hover:underline font-medium">
              Sign up here
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
