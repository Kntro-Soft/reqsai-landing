import { useTranslation } from 'react-i18next'
import { ArrowRight, Play } from 'lucide-react'

function ProductMockup() {
  const { t } = useTranslation()
  const m = (key) => t(`hero.mockup.${key}`)

  return (
    <div className="relative w-full max-w-lg mx-auto lg:mx-0 animate-float" aria-hidden="true">
      {/* Glow effects */}
      <div className="absolute -inset-4 bg-red-600/12 blur-3xl rounded-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute -inset-4 bg-rose-600/6 blur-2xl rounded-3xl pointer-events-none" />

      {/* Card */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(127,29,29,0.22),rgba(10,22,40,0.88)_24%,rgba(10,22,40,0.96)_100%)] backdrop-blur-xl">
        {/* Top bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
          <span className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </span>
          <div className="flex-1 flex items-center justify-center gap-2">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                {m('live_badge')} • 00:42:17
              </span>
            </span>
          </div>
          <span className="text-[10px] bg-red-500/12 text-red-200 px-2 py-0.5 rounded-full border border-red-400/18 font-medium">
            AI
          </span>
        </div>

        <div className="p-4 space-y-3">
          {/* AI Suggestion pill */}
          <div className="bg-red-500/8 border border-red-400/18 rounded-xl p-3">
            <div className="flex items-start gap-2">
              <span className="text-amber-300 text-base mt-0.5 shrink-0">💡</span>
              <div>
                <p className="text-[10px] text-red-300 font-semibold mb-1 tracking-wider uppercase">
                  {m('ai_suggestion')}
                </p>
                <p className="text-xs text-slate-200 leading-relaxed">{m('ai_text')}</p>
              </div>
            </div>
          </div>

          {/* Generated User Story */}
          <div>
            <p className="text-[9px] text-slate-600 mb-2 font-mono tracking-widest uppercase">
              {m('story_label')}
            </p>
            <div className="font-mono text-xs space-y-0.5">
              <p>
                <span className="text-rose-400">Feature: </span>
                <span className="text-slate-300">{m('feature')}</span>
              </p>
              <p className="mt-1.5">
                <span className="text-yellow-400">Scenario: </span>
                <span className="text-slate-300">{m('scenario')}</span>
              </p>
              <p className="pl-4">
                <span className="text-emerald-400">Given </span>
                <span className="text-slate-400">{m('given')}</span>
              </p>
              <p className="pl-4">
                <span className="text-red-400">When </span>
                <span className="text-slate-400">{m('when')}</span>
              </p>
              <p className="pl-4">
                <span className="text-orange-400">Then </span>
                <span className="text-slate-400">{m('then')}</span>
              </p>
              <p className="pl-4">
                <span className="text-orange-400">And </span>
                <span className="text-slate-400">{m('and')}</span>
              </p>
            </div>
          </div>

          {/* Actions row */}
          <div className="flex items-center gap-2 pt-2 border-t border-white/5">
            <button className="text-[10px] font-medium bg-emerald-500/15 text-emerald-400 px-3 py-1.5 rounded-md border border-emerald-500/25 hover:bg-emerald-500/25 transition-colors">
              ✓ {m('approve')}
            </button>
            <button className="text-[10px] font-medium bg-white/5 text-slate-400 px-3 py-1.5 rounded-md border border-white/10 hover:bg-white/10 transition-colors">
              {m('export')}
            </button>
            <span className="ml-auto text-[9px] text-slate-600 font-mono">{m('counter')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" aria-hidden="true" />
              <span className="text-xs font-medium text-red-300">{t('hero.badge')}</span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
            >
              {t('hero.headline_1')}{' '}
              <span className="gradient-text">{t('hero.headline_2')}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              {t('hero.subheadline')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 justify-center lg:justify-start mb-6">
              <a
                href="#signup"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-red-600/25 hover:shadow-red-500/30 hover:-translate-y-0.5"
              >
                {t('hero.cta_primary')}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#demo"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 text-slate-300 hover:text-white border border-white/10 hover:border-white/25 px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <Play
                  size={14}
                  className="fill-current"
                  aria-hidden="true"
                />
                {t('hero.cta_secondary')}
              </a>
            </div>

            <p className="text-xs text-slate-600">{t('hero.note')}</p>
          </div>

          {/* Right — product mockup */}
          <div className="flex justify-center lg:justify-end">
            <ProductMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
