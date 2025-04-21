export default function ContactSales() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-8">Contact Sales</h1>
        <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl">
          Let's talk! Reach out to our team to find the right solution for your business.
        </p>
  
        {/* Contact Form */}
        <form className="w-full max-w-xl bg-gray-50 p-8 rounded-lg shadow-md space-y-6">
          
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-semibold text-gray-700">Name</label>
            <input id="name" type="text" required className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
  
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-semibold text-gray-700">Email</label>
            <input id="email" type="email" required className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
  
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 font-semibold text-gray-700">Message</label>
            <textarea id="message" rows={5} required className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
  
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg text-lg transition">
            Send Message
          </button>
        </form>
  
      </main>
    );
  }
  