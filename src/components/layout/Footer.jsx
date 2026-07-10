import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// href por posición del array `footer.legal`: [Privacidad, Términos, Cookies]
const LEGAL_HREFS = ['/privacidad', '/terminos', '#']

const COL_KEYS = ['product', 'resources', 'company']

function XIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.254 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  )
}

function LinkedInIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

const SOCIAL = [
  { label: 'X (Twitter)', href: '#', Icon: XIcon },
  { label: 'LinkedIn',    href: '#', Icon: LinkedInIcon },
  { label: 'GitHub',      href: '#', Icon: GitHubIcon },
]

export default function Footer() {
  const { t } = useTranslation()
  const cols   = t('footer.cols',  { returnObjects: true })
  const legal  = t('footer.legal', { returnObjects: true })

  return (
    <footer>
      {/* CTA strip */}
      <div className="relative border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-rose-600/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-48 bg-red-600/10 blur-3xl rounded-full" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            {t('footer.cta_title')}
          </h2>
          <p className="text-slate-400 text-base mb-8">{t('footer.cta_subtitle')}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://d29o19vcsmcdsd.cloudfront.net/auth/sign-up"
              className="group inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-red-600/25 hover:-translate-y-0.5"
            >
              {t('footer.cta_button')}
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </a>
            <a
              href="https://d29o19vcsmcdsd.cloudfront.net/auth/sign-in"
              className="text-sm text-slate-500 hover:text-slate-300 transition-colors px-4 py-3"
            >
              {t('footer.cta_login')}
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="border-t border-white/5 bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand column */}
            <div className="col-span-2 lg:col-span-1">
              <a href="/" className="inline-flex items-center gap-2.5 mb-4" aria-label="ReqsAI — home">
                <img
                  src="/reqsai-combination-mark-original.webp"
                  alt="ReqsAI"
                  className="h-8 w-auto"
                  width="36"
                  height="36"
                />
                <span className="text-base font-semibold tracking-tight text-white">
                  Reqs AI
                </span>
              </a>
              <p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
                {t('footer.tagline')}
              </p>

              {/* Social links */}
              <div className="flex gap-2 mt-6">
                {SOCIAL.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-8 h-8 rounded-lg border border-white/10 text-slate-500 hover:text-white hover:border-white/25 flex items-center justify-center transition-colors"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Nav columns */}
            {COL_KEYS.map((key) => (
              <div key={key}>
                <p className="text-xs font-semibold text-white tracking-wider uppercase mb-4">
                  {cols[key].title}
                </p>
                <ul className="space-y-2.5" role="list">
                  {cols[key].links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-slate-500 hover:text-slate-200 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <span>{t('footer.copyright')}</span>
            <span aria-hidden="true">·</span>
            <span>{t('footer.made_in')}</span>
          </div>
          <nav aria-label="Legal links">
            <ul className="flex items-center gap-4" role="list">
              {legal.map((item, i) => {
                const href = LEGAL_HREFS[i] ?? '#'
                const className = 'text-xs text-slate-600 hover:text-slate-400 transition-colors'
                return (
                  <li key={item}>
                    {href.startsWith('/') ? (
                      <Link to={href} className={className}>{item}</Link>
                    ) : (
                      <a href={href} className={className}>{item}</a>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
