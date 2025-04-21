import { Inter } from "next/font/google";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Soflake - Unlock your Business Potential</title>
        <meta name="description" content="Soflake - Your partner in digital transformation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={inter.className}>
      <Header />
        <Component {...pageProps} />
      </main>
    </>
  );
}
