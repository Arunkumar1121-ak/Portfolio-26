import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { SKILLS, SKILL_BARS } from '../data/portfolio'

function SkillBar({ label, percent, inView }: { label: string; percent: number; inView: boolean }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
      <div style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text2)', display: 'flex', justifyContent: 'space-between' }}>
        <span>{label}</span><span>{percent}%</span>
      </div>
      <div style={{ height: 5, background: 'var(--bg2)', borderRadius: 5, overflow: 'hidden' }}>
        <div
          style={{
            height: '100%', borderRadius: 5,
            background: 'linear-gradient(135deg, #3b6ff5, #7c55f0)',
            width: inView ? percent + '%' : '0%',
            transition: 'width 1.2s cubic-bezier(0.23,1,0.32,1)',
          }}
        />
      </div>
    </div>
  )
}

function SkillGroup({ category, items, delay }: { category: string; items: string[]; delay: number }) {
  return (
    <motion.div
      className="glass"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4, boxShadow: 'var(--shadow-lg)' }}
      style={{ padding: '1.8rem' }}
    >
      <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '1rem' }}>
        {category}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {items.map(item => (
          <span key={item} className="chip">{item}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const barsRef = useRef<HTMLDivElement>(null)
  const [barsVisible, setBarsVisible] = useState(false)

  useEffect(() => {
    const el = barsRef.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setBarsVisible(true); obs.disconnect() } }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(5rem,12vw,8rem) clamp(1.5rem,6vw,5rem)' }}>
      <SectionHeader
        label="Technical Skills"
        title="What I Work With"
        accent="Work With"
        description="A curated toolkit of modern technologies I use to build exceptional web experiences."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {SKILLS.map((group, i) => (
          <SkillGroup key={group.category} {...group} delay={i * 0.1} />
        ))}

        {/* Skill bars card */}
        <motion.div
          ref={barsRef}
          className="glass"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          whileHover={{ y: -4, boxShadow: 'var(--shadow-lg)' }}
          style={{ padding: '1.8rem' }}
        >
          <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '1rem' }}>
            Proficiency
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {SKILL_BARS.map(bar => (
              <SkillBar key={bar.label} {...bar} inView={barsVisible} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
