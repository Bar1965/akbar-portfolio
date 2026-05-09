import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Create particles
    const particlesContainer = document.querySelector('.particles')
    if (particlesContainer) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.left = `${Math.random() * 100}%`
        particle.style.animationDelay = `${Math.random() * 20}s`
        particle.style.animationDuration = `${15 + Math.random() * 10}s`
        particlesContainer.appendChild(particle)
      }
    }

    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="particles" />
      <CustomCursor />
      <Preloader isLoading={loading} />
      <Navbar />
      <main style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s' }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p>Designed & Built by Akbar © {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}

export default App