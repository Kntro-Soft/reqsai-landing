import { useTranslation } from 'react-i18next'

// youtu.be/6ZnpSvMzwR4 → embed sin autoplay, con controles (por defecto), rel=0
const EMBED_URL = 'https://www.youtube-nocookie.com/embed/6ZnpSvMzwR4?rel=0&controls=1'

export default function Video() {
  const { t } = useTranslation()

  return (
    <section
      id="team"
      className="relative py-24 lg:py-32 border-t border-white/5"
      aria-labelledby="team-heading"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-64 bg-red-600/8 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-red-400 tracking-widest uppercase">
            {t('video.section_label')}
          </span>
          <h2
            id="team-heading"
            className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
          >
            {t('video.title')}
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            {t('video.subtitle')}
          </p>
        </div>

        {/* Player */}
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-navy-950/55 shadow-2xl shadow-black/40">
            <div className="aspect-video">
              <iframe
                src={EMBED_URL}
                title={t('video.title')}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerated-download; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
