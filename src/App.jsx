import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ScrollProgress from './components/scrollProgress'
import ParticlesBg from './components/ParticlesBg'
import GitHubStats from './components/GitHubStats'
import CustomCursor from './components/CustomCursor'
import Preloader from './components/Preloader'
import BackToTop from './components/BackToTop'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })
  const [isLoading, setIsLoading] = useState(true)

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  // Preloader timer
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <Preloader isLoading={isLoading} />
      <CustomCursor />
      <ParticlesBg count={40} />
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubStats username="Bar1965" />
        <Contact />
      </main>

      <footer className="footer">
        <p>Designed & Built by Akbar © {new Date().getFullYear()}</p>
      </footer>
      
      <BackToTop />
    </>
  )
}

export default App