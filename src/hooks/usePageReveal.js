import { useEffect } from 'react'

const SELECTOR = 'main > section, footer'

export function usePageReveal() {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      return undefined
    }

    const nodes = Array.from(document.querySelectorAll(SELECTOR))

    if (!nodes.length) return undefined

    nodes.forEach((node, index) => {
      node.classList.add('reveal')
      node.classList.add(index === 0 || node.tagName === 'FOOTER' ? 'reveal-soft' : 'reveal-up')
      node.style.transitionDelay = `${Math.min(index * 35, 140)}ms`
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -5% 0px',
      },
    )

    nodes.forEach((node) => observer.observe(node))

    return () => {
      observer.disconnect()
      nodes.forEach((node) => {
        node.classList.remove('reveal', 'reveal-soft', 'reveal-up', 'is-revealed')
        node.style.removeProperty('transition-delay')
      })
    }
  }, [])
}
