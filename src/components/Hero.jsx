import { useState, useEffect } from 'react'

export default function Hero() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const phrases = ['Frontend Developer', 'React Expert', 'UI/UX Designer', 'Creative Coder']
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    const current = phrases[phraseIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1))
        if (text === current) setTimeout(() => setIsDeleting(true), 2000)
      } else {
        setText(current.substring(0, text.length - 1))
        if (text === '') {
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % phrases.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, phraseIndex])

  return (
    <section id="home" className="hero">
      {/* Banner Background Image */}
      <div 
        className="hero-banner"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.7,
          zIndex: -2
        }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="hero-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(10,10,15,0.9) 0%, rgba(10,10,15,0.7) 100%)',
          zIndex: -1
        }}
      />

      <div className="hero-content">
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-name">
          <span className="text-line line-1">
            {'AKBAR'.split('').map((char, i) => (
              <span key={i} style={{ transitionDelay: `${i * 0.1}s` }}>{char}</span>
            ))}
          </span>
          <span className="text-line line-2 gradient-text">
            {'I BUILD THINGS'.split('').map((char, i) => (
              <span key={i} style={{ transitionDelay: `${i * 0.1}s` }}>{char}</span>
            ))}
          </span>
        </h1>
        <p className="hero-description">
          {text}
          <span className="cursor" style={{ animation: 'blink 1s infinite' }}>|</span>
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">Check my work</a>
          <a href="#contact" className="btn btn-secondary">Contact me</a>
        </div>
      </div>
    </section>
  )
}