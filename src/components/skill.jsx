import { useState, useEffect } from 'react'

const skills = [
  { name: 'React & Next.js', level: 95, icon: '⚛️', desc: 'Building scalable SPAs and SSR applications with modern hooks and patterns' },
  { name: 'JavaScript/TypeScript', level: 90, icon: '📜', desc: 'ES6+, async programming, type-safe development' },
  { name: 'UI/UX Design', level: 85, icon: '🎨', desc: 'Figma, responsive design, accessibility, design systems' },
  { name: 'Node.js & Backend', level: 80, icon: '️', desc: 'REST APIs, GraphQL, databases, authentication' },
  { name: 'DevOps & Cloud', level: 75, icon: '☁️', desc: 'AWS, Docker, CI/CD, Vercel, GitHub Actions' },
  { name: 'Performance', level: 88, icon: '⚡', desc: 'Optimization, lazy loading, code splitting, caching' }
]

export default function Skills() {
  const [visibleCards, setVisibleCards] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleCards(prev => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.2 }
    )

    document.querySelectorAll('.skill-card').forEach((card) => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section">
      <div className="section-header reveal">
        <span className="section-number">02.</span>
        <h2 className="section-title">My Skills</h2>
        <div className="section-divider" />
      </div>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div 
            key={i} 
            className="skill-card"
            data-index={i}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <span className="skill-icon">{skill.icon}</span>
            <h3>{skill.name}</h3>
            <p>{skill.desc}</p>
            <div className="skill-level">
              <div 
                className="skill-progress"
                style={{ 
                  width: visibleCards.has(i) ? `${skill.level}%` : '0%',
                  transitionDelay: `${i * 0.1 + 0.3}s`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}