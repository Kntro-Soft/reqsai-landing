import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Mail, Clock, CalendarDays, CheckCircle2, Send } from 'lucide-react'

const INFO_ITEMS = [
  { icon: Mail,         labelKey: 'info_email_label',    valueKey: 'info_email'    },
  { icon: Clock,        labelKey: 'info_response_label', valueKey: 'info_response' },
  { icon: CalendarDays, labelKey: 'info_calendar_label', valueKey: 'info_calendar' },
]

const INPUT_BASE =
  'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/60 focus:bg-white/8 transition-colors'

function Field({ id, label, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-medium text-slate-400">
        {label}{required && <span className="text-blue-400 ml-0.5" aria-hidden="true">*</span>}
      </label>
      {children}
    </div>
  )
}

function SuccessState() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
      <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
        <CheckCircle2 size={28} className="text-emerald-400" />
      </div>
      <div>
        <p className="text-lg font-semibold text-white">{t('contact.form_success_title')}</p>
        <p className="text-sm text-slate-400 mt-1">{t('contact.form_success_body')}</p>
      </div>
    </div>
  )
}

function ContactForm() {
  const { t } = useTranslation()
  const roles = t('contact.roles', { returnObjects: true })
  const plans = t('contact.plans', { returnObjects: true })

  const [fields, setFields] = useState({ name: '', email: '', company: '', role: '', plan: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const set = (key) => (e) => setFields((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) return <SuccessState />

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="contact-name" label={t('contact.form_name')} required>
          <input
            id="contact-name"
            type="text"
            required
            autoComplete="name"
            value={fields.name}
            onChange={set('name')}
            placeholder={t('contact.form_name_placeholder')}
            className={INPUT_BASE}
          />
        </Field>

        <Field id="contact-email" label={t('contact.form_email')} required>
          <input
            id="contact-email"
            type="email"
            required
            autoComplete="email"
            value={fields.email}
            onChange={set('email')}
            placeholder={t('contact.form_email_placeholder')}
            className={INPUT_BASE}
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="contact-company" label={t('contact.form_company')}>
          <input
            id="contact-company"
            type="text"
            autoComplete="organization"
            value={fields.company}
            onChange={set('company')}
            placeholder={t('contact.form_company_placeholder')}
            className={INPUT_BASE}
          />
        </Field>

        <Field id="contact-role" label={t('contact.form_role')}>
          <select
            id="contact-role"
            value={fields.role}
            onChange={set('role')}
            className={`${INPUT_BASE} appearance-none cursor-pointer`}
          >
            <option value="" disabled>{t('contact.form_role_placeholder')}</option>
            {roles.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </Field>
      </div>

      <Field id="contact-plan" label={t('contact.form_plan')}>
        <div className="grid grid-cols-3 gap-2" role="group" aria-labelledby="contact-plan">
          {plans.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setFields((f) => ({ ...f, plan: p }))}
              aria-pressed={fields.plan === p}
              className={`text-xs py-2.5 px-2 rounded-xl border text-center transition-colors ${
                fields.plan === p
                  ? 'bg-blue-600/20 border-blue-500/50 text-blue-300'
                  : 'bg-white/5 border-white/10 text-slate-500 hover:text-slate-300 hover:border-white/20'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </Field>

      <Field id="contact-message" label={t('contact.form_message')} required>
        <textarea
          id="contact-message"
          required
          rows={4}
          value={fields.message}
          onChange={set('message')}
          placeholder={t('contact.form_message_placeholder')}
          className={`${INPUT_BASE} resize-none`}
        />
      </Field>

      <button
        type="submit"
        disabled={submitting}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/25 hover:-translate-y-0.5 disabled:translate-y-0"
      >
        {submitting ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
            {t('contact.form_submitting')}
          </>
        ) : (
          <>
            <Send size={15} aria-hidden="true" />
            {t('contact.form_submit')}
          </>
        )}
      </button>
    </form>
  )
}

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 border-t border-white/5"
      aria-labelledby="contact-heading"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-violet-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left — copy & info */}
          <div className="lg:col-span-2">
            <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase">
              {t('contact.section_label')}
            </span>
            <h2
              id="contact-heading"
              className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
            >
              {t('contact.title')}
            </h2>
            <p className="mt-4 text-slate-400 text-base leading-relaxed">
              {t('contact.subtitle')}
            </p>

            <ul className="mt-10 space-y-5" role="list">
              {INFO_ITEMS.map(({ icon: Icon, labelKey, valueKey }) => (
                <li key={labelKey} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-blue-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 font-medium uppercase tracking-wider">{t(`contact.${labelKey}`)}</p>
                    <p className="text-sm text-slate-300 mt-0.5">{t(`contact.${valueKey}`)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3 glass rounded-2xl p-6 sm:p-8">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  )
}
