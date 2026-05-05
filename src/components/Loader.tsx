import { useEffect, useRef } from 'react'
import { PERSONAL } from '../data/portfolio'

export default function Loader() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      const el = ref.current
      if (!el) return
      el.style.transition = 'opacity 0.6s, transform 0.6s'
      el.style.opacity = '0'
      el.style.transform = 'translateY(-20px)'
      setTimeout(() => {
        el.style.display = 'none'
      }, 600)
    }, 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed', inset: 0, zIndex: 10000,
        background: 'var(--bg)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: 24,
      }}
    >
      <style>{`
        @keyframes loaderNameIn { to { opacity: 1; transform: none; } }
        @keyframes loaderFadeIn { to { opacity: 1; } }
        @keyframes loaderProgress { to { width: 100%; } }
        .ldr-name {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: 800;
          background: linear-gradient(135deg, #3b6ff5, #7c55f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0;
          transform: translateY(20px);
          animation: loaderNameIn 0.8s 0.3s cubic-bezier(0.23,1,0.32,1) forwards;
        }
        .ldr-bar-wrap {
          width: 200px; height: 2px;
          background: rgba(59,111,245,0.15);
          border-radius: 2px; overflow: hidden;
          opacity: 0;
          animation: loaderFadeIn 0.4s 0.6s forwards;
        }
        .ldr-bar {
          height: 100%;
          background: linear-gradient(135deg, #3b6ff5, #7c55f0);
          border-radius: 2px;
          width: 0%;
          animation: loaderProgress 1.4s 0.7s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        .ldr-sub {
          font-size: 0.8rem; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--text3);
          opacity: 0;
          animation: loaderFadeIn 0.4s 0.8s forwards;
        }
      `}</style>
      <div className="ldr-name">{PERSONAL.name}</div>
      <div className="ldr-bar-wrap"><div className="ldr-bar" /></div>
      <div className="ldr-sub">Loading Portfolio</div>
    </div>
  )
}
