import { useTranslation } from 'react-i18next'
import { Star } from 'lucide-react'

const RING_STYLES = {
  blue:    'ring-blue-500/40',
  violet:  'ring-violet-500/40',
  indigo:  'ring-indigo-500/40',
  emerald: 'ring-emerald-500/40',
}

const FALLBACK_STYLES = {
  blue:    'bg-blue-500/20 text-blue-300',
  violet:  'bg-violet-500/20 text-violet-300',
  indigo:  'bg-indigo-500/20 text-indigo-300',
  emerald: 'bg-emerald-500/20 text-emerald-300',
}

function Avatar({ initials, photo, color, name }) {
  return (
    <div
      className={`relative w-12 h-12 rounded-full ring-2 shrink-0 overflow-hidden ${RING_STYLES[color]}`}
    >
      {photo ? (
        <img
          src={photo}
          alt={name}
          width={48}
          height={48}
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
      ) : (
        <div className={`w-full h-full flex items-center justify-center font-semibold text-sm select-none ${FALLBACK_STYLES[color]}`}>
          {initials}
        </div>
      )}
    </div>
  )
}

function Stars({ count, label }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={label}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? 'fill-amber-400 text-amber-400' : 'text-slate-700'}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

function TestimonialCard({ item }) {
  const { t } = useTranslation()

  return (
    <figure className="glass rounded-2xl p-6 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/5">
      <Stars count={item.stars} label={t('testimonials.stars_label', { count: item.stars, defaultValue: `${item.stars} out of 5 stars` })} />

      <blockquote>
        <p className="text-sm text-slate-300 leading-relaxed">
          &ldquo;{item.quote}&rdquo;
        </p>
      </blockquote>

      <figcaption className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
        <Avatar initials={item.initials} photo={item.photo} color={item.color} name={item.name} />
        <div>
          <p className="text-sm font-semibold text-white leading-tight">{item.name}</p>
          <p className="text-xs text-slate-500 mt-0.5">{item.role} · {item.company}</p>
        </div>
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  const { t } = useTranslation()
  const items = t('testimonials.items', { returnObjects: true })

  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-32 border-t border-white/5"
      aria-labelledby="testimonials-heading"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-blue-600/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-violet-600/8 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase">
            {t('testimonials.section_label')}
          </span>
          <h2
            id="testimonials-heading"
            className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
          >
            {t('testimonials.title')}
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Grid — 2 cols on md, 4 on lg with first 2 slightly larger */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
