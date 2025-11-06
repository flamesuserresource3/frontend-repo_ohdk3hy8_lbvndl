import { CheckCircle2 } from 'lucide-react'

const steps = [
  {
    title: 'Connect your calendar',
    desc: 'Securely integrate Google or Outlook in seconds so we can read busy times only.'
  },
  {
    title: 'Create a booking page',
    desc: 'Pick duration, buffers, and working hours. We handle time zones and conflicts.'
  },
  {
    title: 'Share your link',
    desc: 'Drop it in emails, DMs, or your website. Guests pick a time and we handle the rest.'
  }
]

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How it works</h2>
          <p className="mt-3 text-gray-600">Three steps and you’re booking like a pro.</p>
        </div>
        <ol className="space-y-6">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-indigo-600">Step {i + 1}</div>
                  <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-1 text-gray-600">{s.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
