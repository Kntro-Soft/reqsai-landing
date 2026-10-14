import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Zap, ShieldCheck, ArrowRight } from 'lucide-react'

const TAB_ICONS = [Zap, ShieldCheck]

const TAB_STYLES = {
  0: { active: 'bg-red-600/15 border-red-500/40 text-red-300', dot: 'bg-red-400' },
  1: { active: 'bg-rose-600/15 border-rose-500/40 text-rose-300', dot: 'bg-rose-400' },
}

const CONTENT_KEYS = ['consulting', 'startup']

const BENEFIT_ACCENTS = [
  'text-red-400 bg-red-500/10 border-red-500/20',
  'text-rose-400 bg-rose-500/10 border-rose-500/20',
  'text-amber-400 bg-amber-500/10 border-amber-500/20',
  'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
]

function BenefitCard({ benefit, index }) {
  return (
    <div className="flex gap-4">
      <div className={`shrink-0 w-8 h-8 rounded-lg border flex items-center justify-center text-xs font-bold mt-0.5 ${BENEFIT_ACCENTS[index]}`}>
        {index + 1}
      </div>
      <div>
        <p className="text-sm font-semibold text-white mb-1">{benefit.title}</p>
        <p className="text-sm text-slate-400 leading-relaxed">{benefit.desc}</p>
      </div>
    </div>
  )
}

export default function Solutions() {
  const { t } = useTranslation()
  const [active, setActive] = useState(0)
  const tabs    = t('solutions.tabs', { returnObjects: true })
  const content = t(`solutions.${CONTENT_KEYS[active]}`, { returnObjects: true })

  return (
    <section
      id="solutions"
      className="relative py-20 lg:py-28 border-t border-white/5"
      aria-labelledby="solutions-heading"
    >
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h2
            id="solutions-heading"
            className="text-balance text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
          >
            {t('solutions.title')}
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            {t('solutions.subtitle')}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="mb-12" role="tablist" aria-label={t('solutions.section_label')}>
          <div className="flex flex-col sm:flex-row gap-2 p-1 rounded-xl border border-white/10 bg-white/[0.03] w-full sm:w-auto">
            {tabs.map((label, i) => {
              const Icon = TAB_ICONS[i]
              const isActive = active === i
              return (
                <button
                  key={i}
                  role="tab"
                  id={`solutions-tab-${i}`}
                  aria-selected={isActive}
                  aria-controls={`solutions-panel-${i}`}
                  onClick={() => setActive(i)}
                  className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200 w-full sm:w-auto ${
                    isActive
                      ? TAB_STYLES[i].active
                      : 'border-transparent text-slate-400 hover:text-slate-300'
                  }`}
                >
                  <Icon size={15} aria-hidden="true" />
                  {label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Content panel */}
        <div
          key={active}
          id={`solutions-panel-${active}`}
          role="tabpanel"
          aria-labelledby={`solutions-tab-${active}`}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start animate-fade-in"
          style={{ animation: 'fadeIn 0.25s ease-out' }}
        >
          {/* Left — headline + pain + stat */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-5">
              {content.headline}
            </h3>

            <p className="text-slate-400 leading-relaxed mb-6 max-w-md text-base">
              {content.pain}
            </p>

            {/* Stat */}
            <div className={`inline-flex flex-col rounded-2xl border px-6 py-5 ${active === 0 ? 'bg-red-500/5 border-red-500/15' : 'bg-rose-500/5 border-rose-500/15'}`}>
              <span className={`text-4xl font-extrabold tracking-tight ${active === 0 ? 'text-red-400' : 'text-rose-400'}`}>
                {content.stat_value}
              </span>
              <span className="text-sm text-slate-400 mt-1 max-w-[200px] leading-snug">
                {content.stat_label}
              </span>
            </div>

            <div className="mt-2">
              <a
                href={active === 0 ? '#contact' : '#pricing'}
                className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${active === 0 ? 'text-red-400 hover:text-red-300' : 'text-rose-400 hover:text-rose-300'}`}
              >
                {content.cta}
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right — benefit cards */}
          <div className="space-y-6">
            {content.benefits.map((b, i) => (
              <BenefitCard key={i} benefit={b} index={i} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) { #solutions [role=tabpanel] { animation: none !important; } }
      `}</style>
    </section>
  )
}
