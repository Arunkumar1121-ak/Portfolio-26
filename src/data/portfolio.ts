// ─────────────────────────────────────────────
//  PORTFOLIO DATA — Edit everything here!
//  All content is sourced from this single file.
// ─────────────────────────────────────────────

export const PERSONAL = {
  name: 'Arunkumar',
  initials: 'YN',
  role: 'MERN Full Stack Developer',
  tagline: 'MERN Full Stack Developer · UI/UX Enthusiast',
  location: 'India',
  email: 'sarunkumar1121@gmail.com',
  github: 'https://github.com/Arunkumar1121-ak/',
  linkedin: 'https://www.linkedin.com/in/arunkumar1121',
  whatsapp: 'https://wa.me/916381373326',
  bio1:
    "I'm a passionate MERN Full Stack Developer from India with a deep interest in building performant, accessible, and beautiful web applications. I specialize in creating end-to-end solutions — from designing intuitive user interfaces to architecting scalable backend systems.",
  bio2:
    'My journey started with curiosity for how things work on the web. Today, I work with modern stacks like React, Node.js, MongoDB, and Firebase to deliver production-grade applications. I care deeply about code quality, performance, and user experience.',
  cvLink: '/public/resume.pdf', // Replace with your CV/resume link
  available: true,
}

export const STATS = [
  { value: '10+', label: 'Projects Built' },
  { value: '2+', label: 'Years Learning' },
  { value: '5+', label: 'Happy Clients' },
  { value: '∞', label: 'Cups of Coffee' },
]

export const SKILLS = [
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'REST API'],
  },
  {
    category: 'Tools & DevOps',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vite'],
  },
  {
    category: 'Creative Stack',
    items: ['Framer Motion', 'Three.js', 'GSAP', 'Figma', 'Tailwind UI'],
  },
]

export const SKILL_BARS = [
  { label: 'React / Frontend', percent: 90 },
  { label: 'Node.js / Express', percent: 82 },
  { label: 'MongoDB / Firebase', percent: 78 },
  { label: 'TypeScript', percent: 75 },
]

export const PROJECTS = [
  {
    id: 1,
    title: 'Gaming Tournament Web App',
    abbr: 'GT',
    description:
      'A real-time tournament bracket management platform with live score updates, team registration, and admin dashboard.',
    stack: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'linear-gradient(135deg, #3b6ff5, #7c55f0)',
  },
  {
    id: 2,
    title: 'Student Report Management',
    abbr: 'SR',
    description:
      'A comprehensive school management system for generating, managing, and distributing student academic reports with analytics.',
    stack: ['React', 'Express', 'MongoDB', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'linear-gradient(135deg, #00b8d4, #10c484)',
  },
  {
    id: 3,
    title: 'E-Commerce Web Application',
    abbr: 'EC',
    description:
      'Full-featured e-commerce platform with cart management, payment integration, inventory tracking, and seller dashboard.',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'linear-gradient(135deg, #f0558e, #f09055)',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    abbr: 'PF',
    description:
      'This very portfolio — a premium 3D animated website showcasing modern frontend development with Three.js and Framer Motion.',
    stack: ['React', 'Three.js', 'Framer Motion', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'linear-gradient(135deg, #7c55f0, #00b8d4)',
  },
]

export const TIMELINE = [
  {
    date: '2024 — Present',
    title: 'Freelance Full Stack Developer',
    place: 'Self-Employed · Remote',
    description:
      'Building production-ready web applications for clients across India. Delivered multiple e-commerce, portfolio, and management system projects using the MERN stack.',
  },
  {
    date: '2023 — 2024',
    title: 'Web Development Intern',
    place: 'Tech Startup · India',
    description:
      'Contributed to frontend development using React and Tailwind CSS. Built reusable UI components, integrated REST APIs, and improved page load performance by 40%.',
  },
  {
    date: '2022 — 2023',
    title: 'Backend Development Learning',
    place: 'Self-Learning · Online Courses',
    description:
      'Deep-dived into Node.js, Express.js, MongoDB, and Firebase. Built multiple personal projects including REST APIs, authentication systems, and real-time applications.',
  },
  {
    date: '2021 — 2022',
    title: 'Started Web Development Journey',
    place: 'Self-Learning',
    description:
      'Began learning HTML, CSS, JavaScript, and React. Completed several online bootcamps and built first 10 projects, discovering a passion for frontend development and UI design.',
  },
]

export const SERVICES = [
  {
    icon: '🌐',
    title: 'Full Stack Web Development',
    description:
      'End-to-end MERN stack applications with clean architecture, scalable databases, and polished UIs.',
  },
  {
    icon: '🎨',
    title: 'Frontend Development',
    description:
      'Pixel-perfect, responsive UIs with React, Tailwind, and smooth animations using Framer Motion.',
  },
  {
    icon: '⚙️',
    title: 'Backend API Development',
    description:
      'RESTful APIs with Node.js and Express — secure, documented, and production-ready with MongoDB.',
  },
  {
    icon: '🔥',
    title: 'Firebase Integration',
    description:
      'Real-time databases, authentication, cloud functions, and hosting using the Firebase ecosystem.',
  },
  {
    icon: '💼',
    title: 'Portfolio & Business Sites',
    description:
      'Premium portfolio and business websites with 3D animations, CMS integration, and SEO best practices.',
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description:
      'Mobile-first, fully responsive designs that look exceptional across all screen sizes and devices.',
  },
]

export const TECH_BADGES = [
  { label: 'React', emoji: '⚛️' },
  { label: 'Node.js', emoji: '🟢' },
  { label: 'MongoDB', emoji: '🍃' },
  { label: 'Express', emoji: '🚀' },
  { label: 'Firebase', emoji: '🔥' },
]

// EmailJS config — replace with your actual values from emailjs.com
export const EMAILJS = {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey: 'YOUR_PUBLIC_KEY',
}
