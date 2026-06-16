import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Check, Minus } from 'lucide-react'

function BillingToggle({ annual, onChange }) {
  const { t } = useTranslation()
  return (
    <div className="inline-flex items-center gap-3">
      <span className={`text-sm ${!annual ? 'text-white' : 'text-slate-500'}`}>
        {t('pricing.toggle_monthly')}
      </span>
      <button
        role="switch"
        aria-checked={annual}
        onClick={() => onChange(!annual)}
        className={`relative w-11 h-6 rounded-full transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 ${
          annual ? 'bg-blue-600' : 'bg-slate-700'
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
            annual ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
      <span className={`text-sm flex items-center gap-2 ${annual ? 'text-white' : 'text-slate-500'}`}>
        {t('pricing.toggle_annual')}
        <span className="text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 px-1.5 py-0.5 rounded-full">
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
  const isEnterprise = plan.monthly === null
  const isFree = price === 0

  const billingLabel = annual ? t('pricing.billed_annually') : t('pricing.billed_monthly')

  const cta = plan.id === 'starter'
    ? t('pricing.cta_start')
    : plan.id === 'startup'
      ? t('pricing.cta_pro')
      : t('pricing.cta_enterprise')

  return (
    <article
      className={`relative flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
        plan.highlight
          ? 'bg-gradient-to-b from-blue-600/10 to-violet-600/5 border border-blue-500/40 shadow-xl shadow-blue-500/10'
          : 'glass'
      }`}
    >
      {/* Popular badge */}
      {plan.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/30">
            {t('pricing.popular_badge')}
          </span>
        </div>
      )}

      {/* Plan header */}
      <div className="mb-6">
        <h3 className="text-base font-semibold text-white mb-1">{plan.name}</h3>
        <p className="text-xs text-slate-500 leading-relaxed">{plan.desc}</p>
      </div>

      {/* Price */}
      <div className="mb-6 pb-6 border-b border-white/5">
        {isEnterprise ? (
          <div>
            <p className="text-3xl font-extrabold text-white tracking-tight">
              {t('pricing.custom_price')}
            </p>
            <p className="text-xs text-slate-600 mt-1">{t('pricing.contact_us')}</p>
          </div>
        ) : (
          <div>
            <div className="flex items-end gap-1">
              {!isFree && (
                <span className="text-lg text-slate-400 mb-1.5 font-medium">$</span>
              )}
              <span className="text-4xl font-extrabold text-white tracking-tight leading-none">
                {isFree ? t('pricing.cta_start').split(' ')[0] === 'Get' ? 'Free' : 'Gratis' : price}
              </span>
              {!isFree && (
                <span className="text-slate-500 text-sm mb-1">{t('pricing.per_month')}</span>
              )}
            </div>
            {!isFree && (
              <p className="text-xs text-slate-600 mt-1">{billingLabel}</p>
            )}
          </div>
        )}
      </div>

      {/* Features */}
      <ul className="flex-1 space-y-0.5 mb-8" aria-label={`Features included in ${plan.name}`}>
        {plan.features.map((f, i) => (
          <FeatureRow key={i} feature={f} />
        ))}
      </ul>

      {/* CTA */}
      <a
        href={plan.id === 'enterprise' ? '#contact' : '#signup'}
        className={`block text-center text-sm font-semibold py-3 px-4 rounded-xl transition-all duration-200 ${
          plan.highlight
            ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-500/30 hover:-translate-y-0.5'
            : plan.id === 'enterprise'
              ? 'border border-white/15 text-slate-300 hover:text-white hover:border-white/30'
              : 'border border-white/10 text-slate-300 hover:text-white hover:border-white/25'
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

  return (
    <section
      id="pricing"
      className="relative py-24 lg:py-32 border-t border-white/5"
      aria-labelledby="pricing-heading"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-blue-600/8 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase">
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
        <div className="flex justify-center mb-12">
          <BillingToggle annual={annual} onChange={setAnnual} />
        </div>

        {/* Plans grid */}
        <div className="grid sm:grid-cols-3 gap-5 items-start">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} annual={annual} />
          ))}
        </div>
      </div>
    </section>
  )
}
