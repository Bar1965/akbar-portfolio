import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'

export default function Navbar({ toggleTheme, theme }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <ScrollLink 
          to="home" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500}
          className="logo"
        >
          Akbar.dev
        </ScrollLink>
        
        <div className="nav-right">
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            {navItems.map(item => (
              <li key={item.id}>
                <ScrollLink
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                  activeClass="active"
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
          
          <button 
            className="theme-toggle" 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
          >
            <span className="theme-icon">
              {theme === 'dark' ? '☀️' : '🌙'}
            </span>
          </button>
          
          <button 
            className="menu-toggle" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle menu"
          >
            <span className={isOpen ? 'open' : ''}></span>
            <span className={isOpen ? 'open' : ''}></span>
            <span className={isOpen ? 'open' : ''}></span>
          </button>
        </div>
      </div>
    </nav>
  )
}