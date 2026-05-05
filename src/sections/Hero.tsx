import { motion } from 'framer-motion'
import { PERSONAL, TECH_BADGES } from '../data/portfolio'
import HeroCanvas from '../components/HeroCanvas'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] },
})

const floatDelays = [0, 0.5, 1, 0.3, 0.8]

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        paddingTop: 72,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 clamp(1.5rem, 6vw, 5rem)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          width: '100%',
        }}
        className="hero-grid"
      >
        {/* Text side */}
        <div>
          {/* Available badge */}
          <motion.div {...fadeUp(2.5)} style={{ marginBottom: '1.5rem' }}>
            <span
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'rgba(59,111,245,0.08)',
                border: '1px solid rgba(59,111,245,0.18)',
                color: 'var(--blue)',
                fontSize: '0.8rem', fontWeight: 600,
                letterSpacing: '0.06em', textTransform: 'uppercase',
                padding: '0.4rem 1rem', borderRadius: 50,
              }}
            >
              <span
                style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: 'var(--blue)', display: 'block',
                }}
                className="animate-pulse-dot"
              />
              Available for Work
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fadeUp(2.65)}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
              fontWeight: 800, lineHeight: 1.05,
              marginBottom: '1rem',
            }}
          >
            Hi, I'm<br />
            <span className="grad-text">{PERSONAL.name}</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            {...fadeUp(2.75)}
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: 'var(--text2)', marginBottom: '1.5rem', lineHeight: 1.6,
            }}
          >
            {PERSONAL.tagline}
          </motion.p>

          {/* Desc */}
          <motion.p
            {...fadeUp(2.85)}
            style={{
              color: 'var(--text2)', fontSize: '0.95rem', lineHeight: 1.8,
              marginBottom: '2.5rem', maxWidth: 480,
            }}
          >
            {PERSONAL.bio1}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            {...fadeUp(2.95)}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}
          >
            <a href="#projects" className="btn-primary">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              View Projects
            </a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </motion.div>

          {/* Tech badges */}
          <motion.div
            {...fadeUp(3.05)}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem' }}
          >
            {TECH_BADGES.map((badge, i) => (
              <span
                key={badge.label}
                className="animate-float"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 50, padding: '0.35rem 0.85rem',
                  fontSize: '0.78rem', fontWeight: 500, color: 'var(--text2)',
                  boxShadow: 'var(--shadow)',
                  animationDuration: `${4 + i * 0.3}s`,
                  animationDelay: `${floatDelays[i]}s`,
                }}
              >
                {badge.emoji} {badge.label}
              </span>
            ))}
          </motion.div>
        </div>

        {/* 3D canvas side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.6, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          className="hero-canvas-wrap"
        >
          {/* Decorative rings */}
          {[340, 440, 540].map((size, i) => (
            <div
              key={size}
              className="animate-ring"
              style={{
                position: 'absolute', borderRadius: '50%',
                border: '1px solid rgba(59,111,245,0.12)',
                width: size, height: size,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
          <HeroCanvas />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .hero-canvas-wrap { order: -1; }
          .hero-canvas-wrap canvas { height: 280px !important; }
        }
      `}</style>
    </section>
  )
}
