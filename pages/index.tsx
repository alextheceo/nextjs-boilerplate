import Header from "../components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-white">
        <div className="max-w-3xl w-full text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
            Power your business <br /> with <span className="text-blue-600">Soflake</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Soflake helps businesses build beautiful online storefronts, booking platforms, and much more.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-sales">
              <button className="w-full sm:w-auto bg-gray-900 text-white px-6 py-4 rounded-lg hover:bg-gray-700 transition">
                Contact Sales
              </button>
            </Link>

            <Link href="/signin">
              <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
