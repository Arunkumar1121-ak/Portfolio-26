import { PERSONAL } from '../data/portfolio'

const QUICK_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(18px) saturate(1.4)',
        WebkitBackdropFilter: 'blur(18px) saturate(1.4)',
        borderTop: '1px solid rgba(0,0,0,0.07)',
        padding: '2.5rem clamp(1.5rem, 6vw, 5rem)',
      }}
    >
      <div
        style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '1rem',
        }}
        className="footer-inner"
      >
        <span
          className="grad-text"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.1rem' }}
        >
          {PERSONAL.initials}.
        </span>

        <div style={{ display: 'flex', gap: '1.5rem' }} className="footer-links">
          {QUICK_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontSize: '0.82rem', color: 'var(--text3)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div style={{ fontSize: '0.78rem', color: 'var(--text3)' }}>
          © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .footer-inner { flex-direction: column !important; text-align: center; }
          .footer-links { justify-content: center; }
        }
      `}</style>
    </footer>
  )
}
