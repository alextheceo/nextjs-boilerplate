import React from "react";
import Link from "next/link";

export default function CompactPageLayout({ title, subtitle, children }: {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}) {
    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center bg-[var(--background)] text-[var(--foreground)] px-4 py-8">
            {/* Header */}
            <header className="absolute top-0 left-0 right-0 h-16 flex items-center px-6 border-b border-[var(--border)]">
                <Link href="/" className="text-2xl font-bold text-[var(--accent)]">Soflake</Link>
            </header>

            {/* Main content */}
            <div className="w-full max-w-md bg-[var(--card)] border border-[var(--border)] rounded-xl shadow-md p-6 mt-20">
                {/* title, subtitle, and children... */}
            </div>
        </main>
    );
} 
