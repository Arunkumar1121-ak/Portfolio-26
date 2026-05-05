# 🚀 Premium MERN Portfolio — React + Vite + TypeScript

A production-ready, agency-level personal portfolio for MERN Full Stack Developers.
Built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Three.js.

---

## 📁 Folder Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
│
└── src/
    ├── main.tsx               ← Entry point
    ├── App.tsx                ← Root component
    ├── index.css              ← Global styles + Tailwind
    │
    ├── data/
    │   └── portfolio.ts       ← ✏️  ALL your content lives here
    │
    ├── hooks/
    │   └── useReveal.ts       ← Intersection observer hook
    │
    ├── components/
    │   ├── Cursor.tsx         ← Custom magnetic cursor
    │   ├── Loader.tsx         ← Intro loading animation
    │   ├── Navbar.tsx         ← Sticky nav + mobile menu
    │   ├── ParticlesCanvas.tsx← Floating dots background
    │   ├── ScrollProgress.tsx ← Top progress bar
    │   ├── HeroCanvas.tsx     ← Three.js torus knot
    │   └── SectionHeader.tsx  ← Reusable section title
    │
    └── sections/
        ├── Hero.tsx
        ├── About.tsx
        ├── Skills.tsx
        ├── Projects.tsx
        ├── Experience.tsx
        ├── Services.tsx
        ├── Contact.tsx
        └── Footer.tsx
```

---

## ⚡ Installation & Setup

### 1. Create project folder and copy files
```bash
mkdir mern-portfolio && cd mern-portfolio
# Copy all project files into this directory
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open http://localhost:5173

### 4. Build for production
```bash
npm run build
```

### 5. Preview production build
```bash
npm run preview
```

---

## ✏️ How to Customize

### Step 1 — Your personal info
Open `src/data/portfolio.ts` and edit the `PERSONAL` object:

```ts
export const PERSONAL = {
  name: 'John Doe',              // ← Your real name
  initials: 'JD',               // ← Used in logo (e.g. "JD.")
  role: 'MERN Full Stack Developer',
  tagline: 'MERN Full Stack Developer · UI/UX Enthusiast',
  location: 'India',
  email: 'john@example.com',    // ← Your email
  github: 'https://github.com/johndoe',
  linkedin: 'https://linkedin.com/in/johndoe',
  whatsapp: 'https://wa.me/919999999999',
  bio1: 'Your first bio paragraph...',
  bio2: 'Your second bio paragraph...',
  cvLink: '/your-cv.pdf',        // ← Place CV in /public/
  available: true,               // ← Set false if not available
}
```

### Step 2 — Edit projects
Find the `PROJECTS` array in `src/data/portfolio.ts`:

```ts
export const PROJECTS = [
  {
    id: 1,
    title: 'My Cool Project',
    abbr: 'MC',                  // ← 2-letter abbreviation for card
    description: 'What the project does.',
    stack: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://myproject.com',
    githubUrl: 'https://github.com/me/myproject',
    gradient: 'linear-gradient(135deg, #3b6ff5, #7c55f0)', // ← Card color
  },
  // ... add more
]
```

### Step 3 — Edit skills
```ts
export const SKILLS = [
  { category: 'Frontend', items: ['HTML5', 'React', 'TypeScript'] },
  { category: 'Backend',  items: ['Node.js', 'Express', 'MongoDB'] },
  // ...
]

export const SKILL_BARS = [
  { label: 'React / Frontend', percent: 90 },
  // ...
]
```

### Step 4 — Edit timeline / experience
```ts
export const TIMELINE = [
  {
    date: '2024 — Present',
    title: 'Senior Developer at XYZ',
    place: 'XYZ Company · Remote',
    description: 'What you did there...',
  },
  // ...
]
```

### Step 5 — Set up EmailJS (contact form)
1. Go to https://www.emailjs.com and create a free account
2. Create a service (Gmail, Outlook, etc.)
3. Create an email template with variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{subject}}` — message subject
   - `{{message}}` — message body
4. Update `src/data/portfolio.ts`:

```ts
export const EMAILJS = {
  serviceId: 'service_xxxxxxx',   // ← From EmailJS dashboard
  templateId: 'template_xxxxxxx', // ← Your template ID
  publicKey: 'xxxxxxxxxxxxxxxx',  // ← Your public key
}
```

---

## 🎨 Customizing Colors / Theme

Open `src/index.css` and edit the CSS variables:

```css
:root {
  --bg: #f4f3f0;        /* Main background */
  --bg2: #eceae5;       /* Secondary bg */
  --blue: #3b6ff5;      /* Primary accent */
  --violet: #7c55f0;    /* Secondary accent */
  --cyan: #00b8d4;      /* Tertiary accent */
  --emerald: #10c484;   /* Success / available color */
}
```

The gradient used throughout is `linear-gradient(135deg, var(--blue), var(--violet))`.

---

## 🌐 Deploying

### Vercel (recommended — free)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the /dist folder to netlify.com/drop
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

---

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool |
| TypeScript | Type safety |
| Tailwind CSS | Utility styling |
| Framer Motion | Animations & transitions |
| Three.js | 3D hero object |
| EmailJS | Contact form |
| React Icons | Icon library |

---

## 🔧 Scripts

```bash
npm run dev      # Start dev server (localhost:5173)
npm run build    # TypeScript check + production build
npm run preview  # Preview production build locally
```

---

## 📝 License

MIT — feel free to use and customize for your own portfolio.
