import { Inter } from "next/font/google";
import "../styles/globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { SessionProviderWrapper } from "@/components/SessionProviderWrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Soflake - Unlock Your Business Potential",
  description: "Soflake - Your partner in digital transformation.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={`${inter.variable} bg-[var(--background)] text-[var(--foreground)]`}>
        <SessionProviderWrapper session={session}>
          <div className="min-h-screen font-sans">{children}</div>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
