import { useTranslation } from 'react-i18next'

const STATS = ['meetings', 'acceptance', 'cost']

export default function Stats() {
  const { t } = useTranslation()

  return (
    <section aria-label="Product metrics" className="relative border-y border-white/5">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-rose-600/5 to-red-600/5 pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
          {STATS.map((key) => (
            <div
              key={key}
              className="flex flex-col items-center text-center px-8 first:pt-0 sm:first:pl-0 last:pb-0 sm:last:pr-0 py-4 sm:py-0"
            >
              <dt className="order-2 mt-2 text-sm text-slate-500">
                {t(`stats.${key}_label`)}
              </dt>
              <dd className="order-1 text-4xl font-extrabold gradient-text tracking-tight">
                {t(`stats.${key}_value`)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
