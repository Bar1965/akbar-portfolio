import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.15 })

  return (
    <section id="about" className="section" ref={sectionRef}>
      {/* Section Header */}
      <div className={`section-header ${isVisible ? 'visible' : ''}`}>
        <h2 className="section-title">About Me</h2>
        <div className="section-divider" />
      </div>
      
      {/* Content Grid */}
      <div className="about">
        {/* Profile Picture */}
        <div className={`scroll-animate stagger-2 ${isVisible ? 'visible' : ''}`}>
          <div className="about-image-wrapper" style={{
            position: 'relative',
            maxWidth: '320px',
            margin: '0 auto',
            borderRadius: '12px',
            overflow: 'hidden',
            background: 'var(--gradient-1)',
            padding: '3px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.4)'
          }}>
            <div className="about-image-placeholder" style={{
              aspectRatio: '1',
              borderRadius: '10px',
              overflow: 'hidden',
              background: 'var(--bg-secondary)'
            }}>
              <img 
                src="/images/profile.jpg" 
                alt="Akbar - Profile Picture"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  transition: 'transform 0.4s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
            
            {/* Animated border glow on hover */}
            <div style={{
              position: 'absolute',
              inset: '-3px',
              background: 'var(--gradient-2)',
              borderRadius: '14px',
              zIndex: -1,
              opacity: 0,
              transition: 'opacity 0.4s ease',
              filter: 'blur(15px)',
            }}
            className="about-image-glow"
            />
          </div>
        </div>
        
        {/* Text Content */}
        <div className={`scroll-animate stagger-3 ${isVisible ? 'visible' : ''}`}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1.2rem', color: 'var(--text)' }}>
            Passionate Developer & Problem Solver
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.2rem' }}>
            I build modern, responsive, and user-friendly web applications. With a strong foundation in JavaScript and React, I turn ideas into clean, efficient code.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            When I'm not coding, I explore new tech trends, contribute to open source, and refine my UI/UX skills. I'm currently looking for opportunities to collaborate on impactful projects.
          </p>
          
          {/* Skills List */}
          <div className="skills-list">
            {['JavaScript (ES6+)', 'React & Next.js', 'Node.js & Express', 'TypeScript', 'Tailwind CSS', 'Git & GitHub'].map((skill, idx) => (
              <span 
                key={idx} 
                className={`scroll-animate stagger-${(idx % 4) + 1} ${isVisible ? 'visible' : ''}`}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  marginTop: '0.5rem',
                  color: 'var(--text-muted)',
                  fontSize: '0.95rem'
                }}
              >
                <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>▹</span>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}