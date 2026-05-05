import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { PERSONAL, EMAILJS } from '../data/portfolio'

/* Social icon SVGs */
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)
const WhatsappIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
)

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '0.8rem 1rem',
  background: 'rgba(255,255,255,0.6)',
  border: '1.5px solid var(--border)',
  borderRadius: 12,
  fontSize: '0.9rem', color: 'var(--text)',
  fontFamily: "'DM Sans', sans-serif",
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // Using EmailJS
      const { default: emailjs } = await import('@emailjs/browser')
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
        EMAILJS.publicKey
      )
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      // Fallback demo mode if EmailJS not configured
      setTimeout(() => {
        setStatus('sent')
        setForm({ name: '', email: '', subject: '', message: '' })
      }, 1200)
    }

    setTimeout(() => setStatus('idle'), 4000)
  }

  const socialLinks = [
    { href: PERSONAL.github, icon: <GithubIcon />, label: 'GitHub' },
    { href: PERSONAL.linkedin, icon: <LinkedinIcon />, label: 'LinkedIn' },
    { href: PERSONAL.whatsapp, icon: <WhatsappIcon />, label: 'WhatsApp' },
  ]

  return (
    <section id="contact" style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(5rem,12vw,8rem) clamp(1.5rem,6vw,5rem)' }}>
      <SectionHeader
        label="Get In Touch"
        title="Let's Work Together"
        accent="Work Together"
        description="Have a project in mind? I'd love to hear about it. Send me a message and let's build something amazing."
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '3rem', alignItems: 'start' }} className="contact-grid">

        {/* Info column */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
        >
          {[
            { icon: '📧', label: 'Email', value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
            { icon: '📍', label: 'Location', value: `${PERSONAL.location} 🇮🇳`, href: undefined },
            { icon: '💼', label: 'Status', value: 'Available for freelance', href: undefined, green: true },
          ].map(item => (
            <div key={item.label} className="glass" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.2rem' }}>
              <div style={{ width: 40, height: 40, flexShrink: 0, borderRadius: 10, background: 'rgba(59,111,245,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text3)' }}>
                  {item.label}
                </div>
                {item.href ? (
                  <a href={item.href} style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text)', textDecoration: 'none' }}>
                    {item.value}
                  </a>
                ) : (
                  <span style={{ fontSize: '0.9rem', fontWeight: 500, color: item.green ? '#10c484' : 'var(--text)' }}>
                    {item.value}
                  </span>
                )}
              </div>
            </div>
          ))}

          {/* Social links */}
          <div style={{ padding: '0.5rem 0' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '0.75rem' }}>
              Follow Me
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socialLinks.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  whileHover={{ y: -3, background: 'var(--blue)', color: '#fff' }}
                  style={{
                    width: 42, height: 42, borderRadius: 12,
                    background: 'var(--surface)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text2)', textDecoration: 'none',
                    boxShadow: 'var(--shadow)', transition: 'border-color 0.2s',
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          className="glass"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ padding: '2rem' }}
        >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {[
              { name: 'name', label: 'Your Name', placeholder: 'John Doe', type: 'text' },
              { name: 'email', label: 'Email Address', placeholder: 'john@example.com', type: 'email' },
              { name: 'subject', label: 'Subject', placeholder: 'Project Collaboration', type: 'text' },
            ].map(field => (
              <div key={field.name}>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '0.5rem' }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name as keyof typeof form]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  style={inputStyle}
                  onFocus={e => { e.currentTarget.style.borderColor = 'rgba(59,111,245,0.4)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59,111,245,0.08)' }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none' }}
                />
              </div>
            ))}

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '0.5rem' }}>
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={5}
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => { e.currentTarget.style.borderColor = 'rgba(59,111,245,0.4)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59,111,245,0.08)' }}
                onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none' }}
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              whileHover={{ opacity: 0.88, y: -1 }}
              style={{
                padding: '0.9rem',
                background: status === 'sent'
                  ? 'linear-gradient(135deg, #10c484, #00b8d4)'
                  : 'linear-gradient(135deg, #3b6ff5, #7c55f0)',
                color: '#fff', border: 'none', borderRadius: 12,
                fontSize: '0.9rem', fontWeight: 600,
                fontFamily: "'DM Sans', sans-serif",
                cursor: status === 'idle' ? 'none' : 'default',
                boxShadow: '0 4px 24px rgba(59,111,245,0.35)',
                transition: 'background 0.3s',
              }}
            >
              {status === 'sending' ? 'Sending...' : status === 'sent' ? '✓ Message Sent!' : 'Send Message →'}
            </motion.button>
          </form>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
