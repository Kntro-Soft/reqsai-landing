const SIZES = {
  hero: '(min-width: 1280px) 1216px, calc(100vw - 32px)',
  row: '(min-width: 1280px) 800px, (min-width: 1024px) 65vw, calc(100vw - 32px)',
}

// Captura real de la aplicación: dos anchos en WebP, dimensiones fijas para evitar saltos de layout y
// carga diferida salvo la del pliegue (`priority`).
export default function Screenshot({ name, width, height, alt, priority = false, sizes = 'row', full = 1440, className = '' }) {
  return (
    <img
      src={`/img/${name}-${full}.webp`}
      srcSet={`/img/${name}-720.webp 720w, /img/${name}-${full}.webp ${full}w`}
      sizes={SIZES[sizes]}
      width={width}
      height={height}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      className={`block h-auto w-full rounded-xl border border-white/10 bg-white shadow-[0_32px_64px_-24px_rgba(0,0,0,0.75)] ${className}`}
    />
  )
}
