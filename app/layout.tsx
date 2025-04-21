import { Inter } from "next/font/google";
import "../styles/globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { SessionProviderWrapper } from "@/components/SessionProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Soflake - Unlock Your Business Potential",
  description: "Soflake - Your partner in digital transformation.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProviderWrapper session={session}>
          {children}
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
