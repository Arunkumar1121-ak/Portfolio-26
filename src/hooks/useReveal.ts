import { useEffect, useRef, useState } from 'react'

/**
 * useReveal — returns a ref and a boolean `inView`.
 * Attach the ref to any element; once it enters the viewport,
 * `inView` becomes true (and stays true).
 */
export function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, inView }
}
