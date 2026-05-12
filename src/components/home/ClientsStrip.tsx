import { clients } from '@/data/clients'

export default function ClientsStrip() {
  // Double the list so the seamless loop has content to cycle through
  const doubled = [...clients, ...clients]

  return (
    <section className="py-16 bg-white overflow-hidden" aria-label="Our clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-brand-muted font-medium text-sm uppercase tracking-widest font-mono">
          Trusted by businesses across East Africa
        </p>
      </div>

      {/* Gradient fade masks */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div className="flex gap-3 animate-marquee w-max" aria-hidden="true">
          {doubled.map((client, i) => (
            <a
              key={`${client.id}-${i}`}
              href={`https://${client.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2.5 bg-white border border-slate-200 rounded-full px-4 py-2.5 text-sm font-medium text-brand-navy hover:border-brand-amber hover:bg-amber-50 hover:text-brand-navy transition-all duration-200 shadow-sm"
              tabIndex={-1}
            >
              <span className="w-6 h-6 rounded-full bg-brand-navy text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                {client.name.slice(0, 1)}
              </span>
              {client.name}
            </a>
          ))}
        </div>
      </div>

      {/* Accessible list for screen readers */}
      <ul className="sr-only">
        {clients.map((client) => (
          <li key={client.id}>
            <a href={`https://${client.website}`} target="_blank" rel="noopener noreferrer">
              {client.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
