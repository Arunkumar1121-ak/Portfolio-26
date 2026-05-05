import { useEffect, useRef } from 'react'

/**
 * Custom cursor: a small dot + a larger ring + a soft radial glow
 * that follows the mouse. The ring scales up on interactive elements.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    const glow = glowRef.current
    if (!dot || !ring || !glow) return

    const move = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      dot.style.left = x + 'px'
      dot.style.top = y + 'px'
      ring.style.left = x + 'px'
      ring.style.top = y + 'px'
      glow.style.left = x + 'px'
      glow.style.top = y + 'px'
    }

    const enter = () => {
      ring.style.width = '56px'
      ring.style.height = '56px'
      ring.style.borderColor = 'rgba(59,111,245,0.6)'
      dot.style.transform = 'translate(-50%,-50%) scale(1.5)'
    }
    const leave = () => {
      ring.style.width = '36px'
      ring.style.height = '36px'
      ring.style.borderColor = 'rgba(59,111,245,0.4)'
      dot.style.transform = 'translate(-50%,-50%) scale(1)'
    }

    const interactives = document.querySelectorAll(
      'a, button, [role="button"], .chip, .project-card, .service-card, .tilt-card'
    )
    interactives.forEach(el => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })

    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', enter)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [])

  const dotStyle: React.CSSProperties = {
    width: 8, height: 8,
    background: 'var(--blue)',
    borderRadius: '50%',
    position: 'fixed', top: 0, left: 0,
    pointerEvents: 'none', zIndex: 9999,
    transform: 'translate(-50%,-50%)',
    transition: 'transform 0.08s',
  }
  const ringStyle: React.CSSProperties = {
    width: 36, height: 36,
    border: '1.5px solid rgba(59,111,245,0.4)',
    borderRadius: '50%',
    position: 'fixed', top: 0, left: 0,
    pointerEvents: 'none', zIndex: 9998,
    transform: 'translate(-50%,-50%)',
    transition: 'transform 0.18s cubic-bezier(0.23,1,0.32,1), width 0.2s, height 0.2s',
  }
  const glowStyle: React.CSSProperties = {
    width: 320, height: 320,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(59,111,245,0.1) 0%, transparent 70%)',
    position: 'fixed', top: 0, left: 0,
    pointerEvents: 'none', zIndex: 0,
    transform: 'translate(-50%,-50%)',
    transition: 'transform 0.4s cubic-bezier(0.23,1,0.32,1)',
  }

  return (
    <>
      <div ref={dotRef} style={dotStyle} />
      <div ref={ringRef} style={ringStyle} />
      <div ref={glowRef} style={glowStyle} />
    </>
  )
}
