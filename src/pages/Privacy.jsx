import { useEffect, Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const CONTACT_EMAIL = 'legal@kntro.dev'

// Convierte las apariciones de CONTACT_EMAIL en el texto en enlaces mailto.
function renderBody(body) {
  return body.split(CONTACT_EMAIL).map((part, i, arr) => (
    <Fragment key={i}>
      {part}
      {i < arr.length - 1 && (
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-red-400 hover:text-red-300 transition-colors"
        >
          {CONTACT_EMAIL}
        </a>
      )}
    </Fragment>
  ))
}

export default function Privacy() {
  const { t } = useTranslation()
  const sections = t('privacy.sections', { returnObjects: true })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <main className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-red-600/10 via-transparent to-transparent" aria-hidden="true" />

        <article className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <header className="mb-12 border-b border-white/10 pb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">{t('privacy.eyebrow')}</p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              {t('privacy.title')}
            </h1>
            <p className="mt-3 text-sm text-slate-500">
              {t('privacy.updated_label')} {t('privacy.updated_date')}
            </p>
          </header>

          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-lg font-semibold text-white">{section.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{renderBody(section.body)}</p>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
