import { Link2, Globe, Shield, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Link2,
    title: 'Booking links',
    desc: 'Share a smart link that finds a time that works for everyone without email ping-pong.'
  },
  {
    icon: Globe,
    title: 'Time zones',
    desc: 'Automatic detection and conversion so no one shows up an hour early or late.'
  },
  {
    icon: Shield,
    title: 'Calendar sync',
    desc: 'Two-way sync with Google and Outlook keeps your availability accurate.'
  },
  {
    icon: Sparkles,
    title: 'Round-robin',
    desc: 'Distribute meetings across your team for fair load and faster responses.'
  }
]

export default function Features() {
  return (
    <section id="how" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to schedule like a pro</h2>
          <p className="mt-3 text-gray-600">Built for speed, simplicity, and teams of any size.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
