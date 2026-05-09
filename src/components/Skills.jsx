import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const skills = [
  { name: 'React & Next.js', level: 95, icon: '️', desc: 'Building scalable SPAs and SSR applications with modern hooks and patterns' },
  { name: 'JavaScript/TypeScript', level: 90, icon: '📜', desc: 'ES6+, async programming, type-safe development' },
  { name: 'UI/UX Design', level: 85, icon: '🎨', desc: 'Figma, responsive design, accessibility, design systems' },
  { name: 'Node.js & Backend', level: 80, icon: '️', desc: 'REST APIs, GraphQL, databases, authentication' },
  { name: 'DevOps & Cloud', level: 75, icon: '☁️', desc: 'AWS, Docker, CI/CD, Vercel, GitHub Actions' },
  { name: 'Performance', level: 88, icon: '⚡', desc: 'Optimization, lazy loading, code splitting, caching' }
]

export default function Skills() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="skills" className="section" ref={sectionRef}>
      {/* Section Header */}
      <div className={`section-header ${isVisible ? 'visible' : ''}`}>
        <span className="section-number">02.</span>
        <h2 className="section-title">My Skills</h2>
        <div className="section-divider" />
      </div>
      
      {/* Skills Grid */}
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div 
            key={i} 
            className={`scroll-animate skill-card stagger-${(i % 4) + 1} ${isVisible ? 'visible' : ''}`}
          >
            <span className="skill-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}>
              {skill.icon}
            </span>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.6rem', color: 'var(--text)' }}>
              {skill.name}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              {skill.desc}
            </p>
            
            {/* Animated Progress Bar */}
            <div className="skill-level" style={{ marginTop: '1.2rem' }}>
              <div 
                className="skill-progress" 
                style={{ width: isVisible ? `${skill.level}%` : '0%' }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}