export default function ContactSales() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-[var(--background)] text-[var(--foreground)] px-6 py-10">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[var(--foreground)] mb-4 text-center">
        Contact Sales
      </h1>
      <p className="text-base text-[var(--foreground)] opacity-70 mb-12 text-center max-w-xl">
        Let&apos;s talk — we&apos;ll help you find the right solution for your business.
      </p>

      {/* Contact Form */}
      <form className="w-full max-w-md bg-[var(--card)] border border-[var(--border)] p-6 rounded-xl shadow-md space-y-5">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 text-sm font-medium">Name</label>
          <input
            id="name"
            type="text"
            required
            className="px-4 py-2 rounded-md border border-[var(--border)] bg-[var(--input)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-sm font-medium">Email</label>
          <input
            id="email"
            type="email"
            required
            className="px-4 py-2 rounded-md border border-[var(--border)] bg-[var(--input)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 text-sm font-medium">Message</label>
          <textarea
            id="message"
            rows={4}
            required
            className="px-4 py-2 rounded-md border border-[var(--border)] bg-[var(--input)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white px-6 py-3 rounded-md text-sm font-semibold transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
