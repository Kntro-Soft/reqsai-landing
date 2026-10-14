import { useTranslation } from 'react-i18next'
import { Check } from 'lucide-react'
import Screenshot from '../ui/Screenshot'

// Imagen de cada capacidad, por el `id` de `features.items`. Las dimensiones son las de los WebP de /public/img.
const SHOTS = {
  code: { name: 'asistente-conflicto', width: 1440, height: 900 },
  share: { name: 'sesion-compartida', width: 1440, height: 900 },
  wizard: { name: 'asistente-fuentes', width: 840, height: 850, full: 840, narrow: true },
  integrations: { name: 'integraciones', width: 1440, height: 860 },
  overview: { name: 'resumen-proyecto', width: 1440, height: 900 },
  usage: { name: 'uso-ia', width: 1440, height: 690 },
  start: { name: 'bienvenida', width: 1440, height: 800 },
}

function Row({ item, flip, tinted }) {
  const { narrow, ...shot } = SHOTS[item.id]

  return (
    <div className={tinted ? 'border-y border-white/5 bg-navy-950/60' : ''}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className={`lg:col-span-4 ${flip ? 'lg:order-2' : ''} ${item.alt_extra ? 'lg:sticky lg:top-24 lg:self-start' : ''}`}>
            <h3 className="text-balance text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
              {item.title}
            </h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-300">{item.desc}</p>
            <ul className="mt-6 space-y-3">
              {item.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                  <Check size={16} className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`lg:col-span-8 ${flip ? 'lg:order-1' : ''}`}>
            <div className={narrow ? 'mx-auto max-w-xl' : 'space-y-6'}>
              <Screenshot {...shot} alt={item.alt} />
              {item.alt_extra && (
                <Screenshot name="copiloto-codigo" width={1440} height={900} alt={item.alt_extra} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  const { t } = useTranslation()
  const items = t('features.items', { returnObjects: true })
  const more = t('features.more', { returnObjects: true })

  return (
    <section id="product" className="relative scroll-mt-16" aria-labelledby="features-heading">
      <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8 lg:pt-28">
        <h2 id="features-heading" className="max-w-2xl text-balance text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
          {t('features.title')}
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">{t('features.subtitle')}</p>
      </div>

      {items.map((item, i) => (
        <Row key={item.id} item={item} flip={i % 2 === 1} tinted={item.id === 'code'} />
      ))}

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <h3 className="text-xl font-bold tracking-tight text-white">{t('features.more_title')}</h3>
        <dl className="mt-8 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((m) => (
            <div key={m.title} className="border-t border-white/10 pt-4">
              <dt className="text-sm font-semibold text-white">{m.title}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-slate-300">{m.desc}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
