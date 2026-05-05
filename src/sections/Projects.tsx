import { useRef } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { PROJECTS } from '../data/portfolio'

function ProjectCard({
  project,
  delay,
}: {
  project: (typeof PROJECTS)[0]
  delay: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateY(-4px)`
  }
  const onMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = ''
  }

  return (
    <motion.div
      ref={cardRef}
      className="glass tilt-card"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        overflow: 'hidden',
        transition: 'box-shadow 0.3s, transform 0.15s',
        willChange: 'transform',
        cursor: 'default',
      }}
    >
      {/* Image placeholder */}
      <div
        style={{
          width: '100%', height: 180,
          background: project.gradient,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', overflow: 'hidden',
        }}
      >
        <span style={{
          fontFamily: "'Syne', sans-serif", fontSize: '2.5rem', fontWeight: 800,
          color: 'rgba(255,255,255,0.3)', letterSpacing: '-0.02em',
        }}>
          {project.abbr}
        </span>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.15))' }} />
      </div>

      <div style={{ padding: '1.5rem' }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          {project.title}
        </div>
        <div style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.65, marginBottom: '1rem' }}>
          {project.description}
        </div>

        {/* Stack tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
          {project.stack.map(t => (
            <span key={t} className="stack-tag">{t}</span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '0.7rem' }}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem',
              padding: '0.5rem 0.8rem', borderRadius: 10,
              fontSize: '0.78rem', fontWeight: 600, textDecoration: 'none',
              background: 'linear-gradient(135deg, #3b6ff5, #7c55f0)', color: '#fff',
              transition: 'opacity 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.82'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = '' }}
          >
            Live Demo ↗
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem',
              padding: '0.5rem 0.8rem', borderRadius: 10,
              fontSize: '0.78rem', fontWeight: 600, textDecoration: 'none',
              background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text2)',
              transition: 'opacity 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.82'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = '' }}
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(5rem,12vw,8rem) clamp(1.5rem,6vw,5rem)' }}>
      <SectionHeader
        label="Selected Work"
        title="Featured Projects"
        accent="Projects"
        description="Production-ready projects showcasing full-stack capabilities and design precision."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.8rem' }} className="projects-grid">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={i * 0.1} />
        ))}
      </div>
      <style>{`
        @media (max-width: 600px) { .projects-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
