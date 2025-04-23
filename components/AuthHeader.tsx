// components/AuthHeader.tsx
import Link from "next/link";

export default function AuthHeader() {
  return (
    <header className="flex items-center h-16 px-6 border-b border-[var(--border)] bg-[var(--card)]">
      <Link href="/" className="text-3xl font-bold text-[var(--accent)]">
        Soflake
      </Link>
    </header>
  );
}
