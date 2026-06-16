import { useTranslation } from 'react-i18next'
import { Mic, FileCode2, BrainCircuit, ShieldCheck, ArrowUpRight, Users } from 'lucide-react'

const FEATURES = [
  { key: 'live',    Icon: Mic,          accent: 'blue'   },
  { key: 'gherkin', Icon: FileCode2,    accent: 'violet' },
  { key: 'rag',     Icon: BrainCircuit, accent: 'indigo' },
  { key: 'privacy', Icon: ShieldCheck,  accent: 'emerald'},
  { key: 'jira',    Icon: ArrowUpRight, accent: 'blue'   },
  { key: 'collab',  Icon: Users,        accent: 'violet' },
]

const ACCENT_STYLES = {
  blue:    { icon: 'bg-blue-500/10 text-blue-400 border-blue-500/20',   glow: 'group-hover:shadow-blue-500/10'    },
  violet:  { icon: 'bg-violet-500/10 text-violet-400 border-violet-500/20', glow: 'group-hover:shadow-violet-500/10' },
  indigo:  { icon: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20', glow: 'group-hover:shadow-indigo-500/10' },
  emerald: { icon: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', glow: 'group-hover:shadow-emerald-500/10' },
}

function FeatureCard({ feature: { key, Icon, accent } }) {
  const { t } = useTranslation()
  const styles = ACCENT_STYLES[accent]

  return (
    <article className={`group glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${styles.glow}`}>
      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl border ${styles.icon} mb-4`}>
        <Icon size={18} aria-hidden="true" />
      </div>
      <h3 className="text-base font-semibold text-white mb-2">
        {t(`features.${key}_title`)}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed">
        {t(`features.${key}_desc`)}
      </p>
    </article>
  )
}

export default function Features() {
  const { t } = useTranslation()

  return (
    <section
      id="product"
      className="relative py-24 lg:py-32"
      aria-labelledby="features-heading"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase">
            {t('features.section_label')}
          </span>
          <h2
            id="features-heading"
            className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
          >
            {t('features.title')}
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.key} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
