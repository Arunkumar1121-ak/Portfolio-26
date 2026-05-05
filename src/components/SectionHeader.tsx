import { motion } from 'framer-motion'

interface Props {
  label: string
  title: string
  accent: string   // the word(s) to highlight with gradient
  description?: string
}

export default function SectionHeader({ label, title, accent, description }: Props) {
  const parts = title.split(accent)

  return (
    <div style={{ marginBottom: description ? 0 : '3rem' }}>
      <motion.div
        className="section-label"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {label}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: '1.2rem',
        }}
      >
        {parts[0]}
        <span className="grad-text">{accent}</span>
        {parts[1]}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            color: 'var(--text2)',
            fontSize: '1rem',
            lineHeight: 1.75,
            maxWidth: 560,
            marginBottom: '3rem',
          }}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
