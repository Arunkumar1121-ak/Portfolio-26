import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PERSONAL } from '../data/portfolio'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#experience' },
  { label: 'Services', href: '#services' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2.2, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 clamp(1.5rem, 5vw, 4rem)',
          height: 72,
          background: scrolled ? 'rgba(244,243,240,0.92)' : 'rgba(244,243,240,0.82)',
          backdropFilter: 'blur(18px) saturate(1.4)',
          WebkitBackdropFilter: 'blur(18px) saturate(1.4)',
          borderBottom: '1px solid rgba(0,0,0,0.07)',
          transition: 'background 0.3s',
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          className="grad-text"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.35rem', textDecoration: 'none' }}
        >
          {PERSONAL.initials}.
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }} className="hidden-mobile">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontSize: '0.85rem', fontWeight: 500,
                  letterSpacing: '0.03em', textTransform: 'uppercase',
                  color: 'var(--text2)', textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn-primary" style={{ fontSize: '0.82rem', padding: '0.5rem 1.25rem' }}>
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(v => !v)}
          className="show-mobile"
          aria-label="Menu"
          style={{
            display: 'none',
            flexDirection: 'column', gap: 5, cursor: 'none', padding: 4,
            background: 'none', border: 'none',
          }}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'block', width: 24, height: 2,
                background: 'var(--text)', borderRadius: 2,
                transition: 'transform 0.3s, opacity 0.3s',
                transform: open
                  ? i === 0 ? 'translateY(7px) rotate(45deg)'
                  : i === 2 ? 'translateY(-7px) rotate(-45deg)'
                  : 'none'
                  : 'none',
                opacity: open && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', top: 72, left: 0, right: 0, zIndex: 999,
              background: 'rgba(244,243,240,0.96)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              borderBottom: '1px solid rgba(0,0,0,0.07)',
              padding: '1.5rem 2rem',
              display: 'flex', flexDirection: 'column', gap: '1rem',
            }}
          >
            {[...NAV_LINKS, { label: 'Contact', href: '#contact' }].map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                style={{
                  fontSize: '1rem', fontWeight: 500,
                  color: 'var(--text2)', textDecoration: 'none',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid rgba(0,0,0,0.07)',
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive style injected for nav */}
      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}
