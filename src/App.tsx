import Cursor from './components/Cursor'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import ParticlesCanvas from './components/ParticlesCanvas'
import ScrollProgress from './components/ScrollProgress'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      {/* Overlays */}
      <Cursor />
      <ScrollProgress />
      <ParticlesCanvas />
      <Loader />

      {/* Navigation */}
      <Navbar />

      {/* Page Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
