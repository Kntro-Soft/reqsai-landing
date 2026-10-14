import { useTranslation } from 'react-i18next'
import { ArrowRight, Play } from 'lucide-react'
import { SIGN_UP_URL } from '../../config/appLinks'
import Screenshot from '../ui/Screenshot'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36" aria-labelledby="hero-heading">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(ellipse_70%_60%_at_20%_0%,rgba(239,68,68,0.16),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1
            id="hero-heading"
            className="text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {t('hero.headline_1')} <span className="text-red-300">{t('hero.headline_2')}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {t('hero.subheadline')}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={SIGN_UP_URL}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-red-950/50 transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-500 sm:w-auto"
            >
              {t('hero.cta_primary')}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="#demo"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:text-white sm:w-auto"
            >
              <Play size={14} className="fill-current" aria-hidden="true" />
              {t('hero.cta_secondary')}
            </a>
          </div>

          <p className="mt-5 text-sm text-slate-400">{t('hero.note')}</p>
        </div>

        <div className="relative mt-14 sm:mt-16 [mask-image:linear-gradient(to_bottom,black_82%,transparent)]">
          <Screenshot
            name="captura-en-vivo"
            width={1440}
            height={900}
            alt={t('hero.image_alt')}
            priority
            sizes="hero"
          />
        </div>
      </div>
    </section>
  )
}
