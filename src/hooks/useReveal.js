import { useEffect, useRef, useState } from 'react'

export function useReveal(options = {}) {
  const {
    once = true,
    threshold = 0.08,
    root = null,
    rootMargin = '0px 0px -5% 0px',
  } = options

  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node) return

    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      setRevealed(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)

          if (once) {
            observer.unobserve(entry.target)
          }
        } else if (!once) {
          setRevealed(false)
        }
      },
      { threshold, root, rootMargin },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [once, root, rootMargin, threshold])

  return { ref, revealed }
}
