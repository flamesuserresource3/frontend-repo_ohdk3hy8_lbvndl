import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600 text-white">S</span>
            Schedula
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#how" className="hover:text-gray-900">Features</a>
            <a href="#get-started" className="hover:text-gray-900">Pricing</a>
            <a href="#get-started" className="rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-black">Sign in</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>

      <footer className="border-t border-gray-100 py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col items-center justify-between gap-4 sm:flex-row text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Schedula, Inc.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
