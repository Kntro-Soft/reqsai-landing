import { useTranslation } from 'react-i18next'

const DEMO_VIDEO_ID = 'RPf5v-jJYlc'

// Video de demostración del producto (YouTube): sin autoplay, con controles (rel=0), dominio nocookie.
export default function Video() {
  const { t } = useTranslation()
  const src = `https://www.youtube-nocookie.com/embed/${DEMO_VIDEO_ID}?rel=0&controls=1`

  return (
    <section id="demo" className="relative scroll-mt-16 border-t border-white/5 py-20 lg:py-28" aria-labelledby="demo-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 id="demo-heading" className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            {t('demo.title')}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">{t('demo.subtitle')}</p>
        </div>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-navy-950 shadow-[0_32px_64px_-24px_rgba(0,0,0,0.75)]">
          <div className="aspect-video">
            <iframe
              src={src}
              title={t('demo.title')}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerated-download; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
