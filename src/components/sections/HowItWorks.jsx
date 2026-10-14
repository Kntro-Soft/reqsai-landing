import { useTranslation } from 'react-i18next'

export default function HowItWorks() {
  const { t } = useTranslation()
  const steps = t('steps.items', { returnObjects: true })

  return (
    <section className="relative border-y border-white/5 bg-navy-950/60" aria-labelledby="steps-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2 id="steps-heading" className="max-w-xl text-balance text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          {t('steps.title')}
        </h2>

        <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/10">
          {steps.map((step, i) => (
            <li key={step.title} className="md:px-8 md:first:pl-0 md:last:pr-0">
              <span className="text-sm font-semibold tabular-nums text-red-300">{i + 1}</span>
              <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-300">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
