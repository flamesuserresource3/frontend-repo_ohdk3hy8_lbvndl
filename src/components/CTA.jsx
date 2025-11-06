export default function CTA() {
  return (
    <section id="get-started" className="py-20">
      <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-indigo-600 to-cyan-600 p-8 sm:p-12 text-center text-white shadow-xl">
        <h2 className="text-3xl font-bold sm:text-4xl">Start scheduling in minutes</h2>
        <p className="mt-3 text-white/90">No credit card required. Free for individuals. Team plans available.</p>
        <form className="mx-auto mt-6 flex max-w-md gap-2">
          <input
            type="email"
            placeholder="you@company.com"
            className="w-full rounded-md border-0 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-white"
            required
          />
          <button
            type="submit"
            className="shrink-0 rounded-md bg-white px-5 py-3 font-semibold text-indigo-700 hover:bg-indigo-50"
          >
            Get started
          </button>
        </form>
        <p className="mt-3 text-sm text-white/80">By continuing you agree to our Terms and Privacy Policy.</p>
      </div>
    </section>
  )
}
