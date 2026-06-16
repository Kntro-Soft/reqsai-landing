import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Plus, Minus } from 'lucide-react'

function FAQItem({ item, index, open, onToggle }) {
  const id = `faq-${index}`
  const panelId = `faq-panel-${index}`

  return (
    <div className="border-b border-white/5 last:border-0">
      <h3>
        <button
          id={id}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="group w-full flex items-start justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-lg"
        >
          <span className={`text-sm sm:text-base font-medium leading-snug transition-colors ${open ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
            {item.q}
          </span>
          <span
            className={`mt-0.5 shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 ${
              open
                ? 'bg-blue-600/20 border-blue-500/40 text-blue-400'
                : 'border-white/10 text-slate-500 group-hover:border-white/20 group-hover:text-slate-300'
            }`}
            aria-hidden="true"
          >
            {open ? <Minus size={12} /> : <Plus size={12} />}
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={id}
        aria-hidden={!open}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-sm text-slate-400 leading-relaxed pr-10">
          {item.a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const { t } = useTranslation()
  const items = t('faq.items', { returnObjects: true })
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i))

  const half = Math.ceil(items.length / 2)
  const left  = items.slice(0, half)
  const right = items.slice(half)

  return (
    <section
      id="faq"
      className="relative py-24 lg:py-32 border-t border-white/5"
      aria-labelledby="faq-heading"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-64 bg-indigo-600/6 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase">
            {t('faq.section_label')}
          </span>
          <h2
            id="faq-heading"
            className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
          >
            {t('faq.title')}
          </h2>
          <p className="mt-4 text-slate-500 text-sm">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* Two-column accordion on desktop */}
        <div className="grid lg:grid-cols-2 gap-x-16">
          <div className="glass rounded-2xl px-6 divide-y-0">
            {left.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                index={i}
                open={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
          <div className="glass rounded-2xl px-6 mt-4 lg:mt-0 divide-y-0">
            {right.map((item, i) => (
              <FAQItem
                key={i + half}
                item={item}
                index={i + half}
                open={openIndex === i + half}
                onToggle={() => toggle(i + half)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
