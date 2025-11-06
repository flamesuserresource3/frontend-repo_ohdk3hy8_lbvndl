import { Calendar, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
              <Clock className="h-4 w-4" />
              Schedule smarter, save hours
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              The fastest way to book meetings
            </h1>
            <p className="mt-5 max-w-xl text-lg text-gray-600">
              Replace back-and-forth emails with a beautiful link. Share availability, auto-adjust for time zones, and let invites land on everyone’s calendar instantly.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-white shadow-lg transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Get started free
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-800 shadow-sm transition hover:border-gray-400"
              >
                See how it works
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-indigo-600" /> Google & Outlook</div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-indigo-600" /> Time zone aware</div>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-10 -z-0 bg-gradient-to-tr from-indigo-200/50 via-cyan-200/40 to-transparent blur-2xl" />
            <div className="mx-auto w-full max-w-md rounded-2xl border border-gray-200 bg-white p-4 shadow-xl sm:max-w-lg">
              <div className="rounded-lg border border-dashed border-gray-300 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-sm font-semibold text-gray-700">Week of Mar 10</div>
                  <div className="text-xs text-gray-500">GMT-5</div>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-xs font-medium text-gray-500">
                  {['M','T','W','T','F','S','S'].map((d) => (
                    <div key={d}>{d}</div>
                  ))}
                </div>
                <div className="mt-2 grid grid-cols-7 gap-2">
                  {[...Array(28)].map((_, i) => (
                    <div key={i} className={`aspect-square rounded-md border ${[2,3,9,10,16,17].includes(i) ? 'bg-indigo-50 border-indigo-200' : 'border-gray-200'}`}></div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-700">Available slots</div>
                  <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm text-white hover:bg-indigo-700">Share link</button>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                  {['9:00 AM','9:30 AM','10:00 AM','1:00 PM','1:30 PM','2:00 PM'].map((t) => (
                    <button key={t} className="rounded-md border border-gray-200 px-3 py-2 text-left hover:border-indigo-300 hover:bg-indigo-50">
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
