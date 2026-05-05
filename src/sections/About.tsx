import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { PERSONAL, STATS } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(5rem,12vw,8rem) clamp(1.5rem,6vw,5rem)' }}>
      <SectionHeader
        label="About Me"
        title="Crafting Digital Experiences"
        accent="Experiences"
      />

      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}
        className="about-grid"
      >
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p style={{ color: 'var(--text2)', lineHeight: 1.85, marginBottom: '1.2rem', fontSize: '0.95rem' }}>
            {PERSONAL.bio1}
          </p>
          <p style={{ color: 'var(--text2)', lineHeight: 1.85, marginBottom: '1.8rem', fontSize: '0.95rem' }}>
            {PERSONAL.bio2}
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary" style={{ fontSize: '0.85rem', padding: '0.65rem 1.4rem' }}>
              View Work
            </a>
            <a href={PERSONAL.cvLink} className="btn-outline" style={{ fontSize: '0.85rem', padding: '0.65rem 1.4rem' }}>
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Info card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="glass" style={{ padding: '2.5rem' }}>
            {[
              { label: 'Full Name', value: PERSONAL.name },
              { label: 'Location', value: `${PERSONAL.location} 🇮🇳` },
              { label: 'Role', value: PERSONAL.role },
              { label: 'Availability', value: PERSONAL.available ? '✓ Open to opportunities' : 'Not available', accent: PERSONAL.available },
            ].map(row => (
              <div key={row.label} style={{ marginBottom: '0.8rem' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '0.25rem' }}>
                  {row.label}
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 500, color: row.accent !== undefined ? (row.accent ? '#10c484' : 'var(--text)') : 'var(--text)' }}>
                  {row.value}
                </div>
              </div>
            ))}

            {/* Stats grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
              {STATS.map(stat => (
                <div
                  key={stat.label}
                  style={{
                    background: 'rgba(59,111,245,0.05)',
                    border: '1px solid rgba(59,111,245,0.1)',
                    borderRadius: 14, padding: '1rem', textAlign: 'center',
                  }}
                >
                  <div
                    className="grad-text"
                    style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.8rem', fontWeight: 800 }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text3)', marginTop: '0.2rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
