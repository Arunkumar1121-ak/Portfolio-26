import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { SERVICES } from '../data/portfolio'

export default function Services() {
  return (
    <section id="services" style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(5rem,12vw,8rem) clamp(1.5rem,6vw,5rem)' }}>
      <SectionHeader
        label="What I Offer"
        title="My Services"
        accent="Services"
        description="End-to-end development services tailored to your business needs."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }} className="services-grid">
        {SERVICES.map((svc, i) => (
          <motion.div
            key={svc.title}
            className="glass service-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ y: -4, boxShadow: 'var(--shadow-lg)' }}
            style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}
          >
            {/* Top accent bar on hover via CSS */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 3,
              background: 'linear-gradient(135deg, #3b6ff5, #7c55f0)',
              transform: 'scaleX(0)', transformOrigin: 'left',
              transition: 'transform 0.3s',
            }} className="svc-bar" />

            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: 'rgba(59,111,245,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.3rem', marginBottom: '1.2rem',
            }}>
              {svc.icon}
            </div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              {svc.title}
            </div>
            <div style={{ fontSize: '0.84rem', color: 'var(--text2)', lineHeight: 1.7 }}>
              {svc.description}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .service-card:hover .svc-bar { transform: scaleX(1) !important; }
        @media (max-width: 600px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
