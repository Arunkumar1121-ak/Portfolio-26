import { useEffect, useRef } from 'react'

interface Particle {
  x: number; y: number
  r: number; vx: number; vy: number; o: number
}

/**
 * Subtle floating dots + connecting lines background canvas.
 * Fixed behind all content, pointer-events none.
 */
export default function ParticlesCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const N = 60
    let W = 0, H = 0
    let particles: Particle[] = []
    let animId: number

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const mkP = (): Particle => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      o: Math.random() * 0.4 + 0.1,
    })
    particles = Array.from({ length: N }, mkP)

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      // Lines
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(59,111,245,${(1 - d / 120) * 0.08})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
      // Dots
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59,111,245,${p.o})`
        ctx.fill()
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      style={{
        position: 'fixed', inset: 0,
        pointerEvents: 'none', zIndex: 1,
        opacity: 0.6,
      }}
    />
  )
}
