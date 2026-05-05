import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100
      if (ref.current) ref.current.style.width = pct + '%'
    }
    window.addEventListener('scroll', update)
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed', top: 0, left: 0,
        height: 2, zIndex: 1001,
        background: 'linear-gradient(135deg, #3b6ff5, #7c55f0)',
        width: '0%',
        transition: 'width 0.1s',
        pointerEvents: 'none',
      }}
    />
  )
}
