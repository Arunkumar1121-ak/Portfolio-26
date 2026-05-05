import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { TIMELINE } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(5rem,12vw,8rem) clamp(1.5rem,6vw,5rem)' }}>
      <SectionHeader
        label="My Journey"
        title="Experience & Timeline"
        accent="Timeline"
        description="From curious beginner to full-stack developer — here's how it happened."
      />

      {/* Timeline wrapper */}
      <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
        {/* Vertical line */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 2,
          background: 'linear-gradient(to bottom, #3b6ff5, #7c55f0, transparent)',
          borderRadius: 2,
        }} />

        {TIMELINE.map((item, i) => (
          <motion.div
            key={item.title}
            className="glass"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            style={{
              position: 'relative', marginBottom: '2.5rem',
              padding: '1.5rem 1.8rem',
            }}
          >
            {/* Dot on the line */}
            <div style={{
              position: 'absolute', left: '-2.6rem', top: '1.7rem',
              width: 12, height: 12, borderRadius: '50%',
              background: 'linear-gradient(135deg, #3b6ff5, #7c55f0)',
              boxShadow: '0 0 0 4px rgba(59,111,245,0.15)',
            }} />

            <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '0.5rem' }}>
              {item.date}
            </div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1rem', fontWeight: 700, marginBottom: '0.3rem' }}>
              {item.title}
            </div>
            <div style={{ fontSize: '0.82rem', fontWeight: 500, color: 'var(--text3)', marginBottom: '0.7rem' }}>
              {item.place}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.7 }}>
              {item.description}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
