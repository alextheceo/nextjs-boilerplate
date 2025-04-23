'use client';

import { useSession } from "next-auth/react";
import { useState } from "react";

export default function OnboardingPage() {

    const { data: session } = useSession();
    

    const [storeName, setStoreName] = useState("");
    const [bannerText, setBannerText] = useState("");
    const [slug, setSlug] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");


        const res = await fetch("/api/store", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                storeName,
                bannerText,
                slug,
                userId: session?.user?.id,
            }),
        });

        if (res.ok) {

            window.location.href = "/dashboard";
        } else {

            const data = await res.json();
            setError(data.error || "Something went wrong.");
        }
    }

    return (
        <main className="flex items-center justify-center min-h-screen bg-[var(--background)] text-[var(--foreground)] px-6">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-[var(--card)] p-6 rounded-xl shadow border border-[var(--border)] space-y-5"
            >
                <h1 className="text-2xl font-bold text-center">Create Your Soflake Store</h1>

                <div>
                    <label className="block mb-1 text-sm font-medium">Store Name</label>
                    <input
                        type="text"
                        value={storeName}
                        onChange={(e) => setStoreName(e.target.value)}
                        required
                        className="w-full px-4 py-2 rounded border border-[var(--border)] bg-[var(--input)]"
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">Banner Text</label>
                    <input
                        type="text"
                        value={bannerText}
                        onChange={(e) => setBannerText(e.target.value)}
                        className="w-full px-4 py-2 rounded border border-[var(--border)] bg-[var(--input)]"
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">Slug</label>
                    <input
                        type="text"
                        value={slug}
                        onChange={(e) => {
                            const value = e.target.value
                                .toLowerCase()
                                .replace(/\s+/g, "-")         // Replace spaces with dashes
                                .replace(/[^a-z0-9\-]/g, "")  // Remove invalid characters
                                .replace(/-+/g, "-")          // Collapse multiple dashes
                                .replace(/^-+|-+$/g, "");     // Trim leading/trailing dashes

                            setSlug(value);
                        }}
                        required
                        className="w-full px-4 py-2 rounded border border-[var(--border)] bg-[var(--input)]"
                    />
                    <p className="text-xs text-gray-500 mt-1">Your store will be available at <code>soflake.com/{slug || "your-slug"}</code></p>
                </div>

                <button
                    type="submit"
                    className="w-full bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white font-semibold py-2 rounded transition"
                >
                    Create Store
                </button>

                {error && <p className="text-red-600 text-center text-sm">{error}</p>}
            </form>
        </main>
    );
}
