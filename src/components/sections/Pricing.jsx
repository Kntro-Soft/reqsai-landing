import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Check, Minus } from 'lucide-react'

function BillingToggle({ annual, onChange }) {
  const { t } = useTranslation()
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm">
      <span className={`text-sm font-medium transition-colors ${!annual ? 'text-white' : 'text-slate-500'}`}>
        {t('pricing.toggle_monthly')}
      </span>
      <button
        role="switch"
        aria-checked={annual}
        onClick={() => onChange(!annual)}
        className={`relative h-7 w-12 rounded-full border transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500 ${
          annual
            ? 'border-red-500/50 bg-red-600 shadow-lg shadow-red-600/20'
            : 'border-white/10 bg-slate-800'
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 h-5.5 w-5.5 rounded-full bg-white shadow transition-transform duration-200 ${
            annual ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
      <span className={`text-sm font-medium flex items-center gap-2 transition-colors ${annual ? 'text-white' : 'text-slate-500'}`}>
        {t('pricing.toggle_annual')}
        <span className="text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 px-2 py-0.5 rounded-full">
          {t('pricing.save_badge')}
        </span>
      </span>
    </div>
  )
}

function FeatureRow({ feature }) {
  return (
    <li className="flex items-start gap-3 py-1.5">
      {feature.included ? (
        <Check
          size={15}
          className="text-emerald-400 shrink-0 mt-0.5"
          aria-hidden="true"
        />
      ) : (
        <Minus
          size={15}
          className="text-slate-700 shrink-0 mt-0.5"
          aria-hidden="true"
        />
      )}
      <span className={`text-sm leading-snug ${feature.included ? 'text-slate-300' : 'text-slate-600'}`}>
        {feature.text}
      </span>
    </li>
  )
}

function PlanCard({ plan, annual }) {
  const { t } = useTranslation()

  const price = annual ? plan.annual : plan.monthly
  const isFree = price === 0
  const isEnterprise = plan.id === 'enterprise'
  const hasDiscount = !isFree && annual && plan.monthly > plan.annual
  const savings = hasDiscount ? plan.monthly - plan.annual : 0

  const billingLabel = annual ? t('pricing.billed_annually') : t('pricing.billed_monthly')

  const cta = plan.id === 'starter'
    ? t('pricing.cta_start')
    : plan.id === 'startup'
      ? t('pricing.cta_pro')
      : t('pricing.cta_team')

  return (
    <article
      className={`relative flex h-full flex-col rounded-[28px] px-6 pb-6 pt-9 transition-all duration-300 hover:-translate-y-1 ${
        plan.highlight
          ? 'border border-red-400/40 bg-gradient-to-b from-red-600/14 via-navy-800/95 to-rose-600/10 shadow-2xl shadow-red-950/50'
          : 'border border-white/10 bg-white/[0.035] shadow-[0_24px_80px_rgba(3,8,15,0.42)] backdrop-blur-sm'
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-28 ${
          plan.highlight
            ? 'bg-gradient-to-b from-red-500/18 via-rose-500/10 to-transparent'
            : 'bg-gradient-to-b from-white/7 to-transparent'
        }`}
        aria-hidden="true"
      />

      {/* Popular badge */}
      {plan.highlight && (
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
          <span className="inline-block rounded-full border border-white/10 bg-gradient-to-r from-red-500 to-rose-500 px-3 py-1 text-[11px] font-semibold text-white shadow-lg shadow-red-500/30">
            {t('pricing.popular_badge')}
          </span>
        </div>
      )}

      {/* Plan header */}
      <div className="relative mb-6">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">{plan.desc}</p>
          </div>
          <span
            className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
              plan.highlight
                ? 'border-red-400/25 bg-red-500/10 text-red-300'
                : isEnterprise
                  ? 'border-rose-400/20 bg-rose-500/10 text-rose-300'
                  : 'border-white/10 bg-white/5 text-slate-300'
            }`}
          >
            {plan.name}
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="relative mb-6 rounded-2xl border border-white/8 bg-navy-950/55 p-5 shadow-inner shadow-black/20">
        <div>
          <div className="flex items-end gap-2">
            {!isFree && (
              <span className="mb-2 text-lg font-medium text-slate-400">$</span>
            )}
            <span className="text-5xl font-extrabold text-white tracking-tight leading-none">
              {isFree ? t('pricing.cta_start').split(' ')[0] === 'Get' ? 'Free' : 'Gratis' : price}
            </span>
            {!isFree && (
              <span className="mb-1 text-sm text-slate-500">{t('pricing.per_month')}</span>
            )}
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {!isFree && (
              <p className="text-xs text-slate-500">{billingLabel}</p>
            )}
            {hasDiscount && (
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[11px] font-medium text-emerald-300">
                -${savings}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Features */}
      <ul className="mb-8 flex-1 space-y-1.5" aria-label={`Features included in ${plan.name}`}>
        {plan.features.map((f, i) => (
          <FeatureRow key={i} feature={f} />
        ))}
      </ul>

      {/* CTA */}
      <a
        href="https://d29o19vcsmcdsd.cloudfront.net/auth/sign-up"
        className={`mt-auto block text-center text-sm font-semibold py-3.5 px-4 rounded-xl transition-all duration-200 ${
          plan.highlight
            ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/25 hover:shadow-red-500/30 hover:-translate-y-0.5'
            : isEnterprise
              ? 'border border-rose-400/20 bg-rose-500/8 text-rose-200 hover:text-white hover:border-rose-300/30 hover:bg-rose-500/12'
              : 'border border-white/10 bg-white/4 text-slate-200 hover:text-white hover:border-white/25 hover:bg-white/6'
        }`}
      >
        {cta}
      </a>
    </article>
  )
}

export default function Pricing() {
  const { t } = useTranslation()
  const [annual, setAnnual] = useState(false)
  const plans = t('pricing.plans', { returnObjects: true })
  const enterprise = t('pricing.enterprise_block', { returnObjects: true })

  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-24 lg:py-32 border-t border-white/5"
      aria-labelledby="pricing-heading"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-24 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full bg-red-600/8 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-72 w-72 rounded-full bg-rose-600/8 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold text-red-400 tracking-widest uppercase">
            {t('pricing.section_label')}
          </span>
          <h2
            id="pricing-heading"
            className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
          >
            {t('pricing.title')}
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-14">
          <BillingToggle annual={annual} onChange={setAnnual} />
        </div>

        {/* Plans grid */}
        <div className="grid gap-6 xl:gap-7 md:grid-cols-2 xl:grid-cols-3 items-stretch">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} annual={annual} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center">
          <p className="max-w-2xl text-sm text-slate-400 sm:text-base">
            <span className="font-medium text-slate-200">{enterprise.title}</span>{' '}
            {enterprise.subtitle}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-rose-300/20 bg-rose-500/10 px-5 py-3 text-sm font-semibold text-rose-100 transition-all duration-200 hover:border-rose-200/30 hover:bg-rose-500/16 hover:text-white"
          >
            {t('pricing.cta_enterprise')}
          </a>
        </div>
      </div>
    </section>
  )
}
