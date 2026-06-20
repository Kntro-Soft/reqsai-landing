import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import { useScrolled } from '../../hooks/useScrolled'

const NAV_LINKS = ['product', 'solutions', 'pricing', 'faq', 'contact']

function LangToggle() {
  const { i18n } = useTranslation()
  const current = i18n.language

  const toggle = (lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('reqsai_lang', lang)
  }

  return (
    <div className="flex items-center gap-0.5 rounded-md border border-white/10 p-0.5" role="group" aria-label="Language selector">
      {['es', 'en'].map((lang) => (
        <button
          key={lang}
          onClick={() => toggle(lang)}
          aria-pressed={current === lang}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
            current === lang
              ? 'bg-red-600 text-white'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default function Navbar() {
  const { t } = useTranslation()
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav' : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 shrink-0" aria-label="ReqsAI — home">
          <img
            src="/reqsai-combination-mark-white.webp"
            alt="ReqsAI"
            className="h-8 w-auto sm:h-9"
            width="36"
            height="36"
          />
          <span className="text-base sm:text-lg font-semibold tracking-tight text-white">
            Reqs AI
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6" role="list">
          {NAV_LINKS.map((key) => (
            <li key={key}>
              <a
                href={`#${key}`}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {t(`nav.${key}`)}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-3">
          <LangToggle />
          <a
            href="#login"
            className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-1.5"
          >
            {t('nav.login')}
          </a>
          <a
            href="#signup"
            className="text-sm font-medium bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition-colors"
          >
            {t('nav.cta')}
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <LangToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t('nav.menu_close') : t('nav.menu_open')}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`lg:hidden glass-nav border-t border-white/5 overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => setOpen(false)}
              className="text-sm text-slate-300 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
          <div className="mt-3 pt-3 border-t border-white/5 flex flex-col gap-2">
            <a
              href="#login"
              onClick={() => setOpen(false)}
              className="text-sm text-center text-slate-300 py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors"
            >
              {t('nav.login')}
            </a>
            <a
              href="#signup"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-center bg-red-600 hover:bg-red-500 text-white py-2.5 px-3 rounded-lg transition-colors"
            >
              {t('nav.cta')}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
