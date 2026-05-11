import { useTypewriter } from '../hooks/useTypewriter'

export default function Hero() {
  const phrases = ['Frontend Developer', 'React Expert', 'UI/UX Designer', 'Creative Coder']
  const typedText = useTypewriter(phrases, 100, 50, 2000)

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-name">
          <span className="text-line line-1">{'AKBAR'.split('').map((char, i) => (
            <span key={i} style={{ transitionDelay: `${i * 0.1}s` }}>{char}</span>
          ))}</span>
          <span className="text-line line-2 gradient-text">{'I BUILD THINGS'.split('').map((char, i) => (
            <span key={i} style={{ transitionDelay: `${i * 0.1}s` }}>{char}</span>
          ))}</span>
        </h1>
        
        {/* Container typing text + cursor */}
        <p className="hero-description">
          {typedText}
          <span className="typing-cursor">|</span>
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">Check my work</a>
          <a href="#contact" className="btn btn-secondary">Contact me</a>
        </div>
      </div>
    </section>
  )
}