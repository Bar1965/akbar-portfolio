import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'Full-stack shopping platform with real-time inventory, payment processing, and admin dashboard',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'web',
    icon: ''
  },
  {
    title: 'AI Task Manager',
    desc: 'Smart productivity app with AI-powered task prioritization and natural language processing',
    tags: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL'],
    category: 'app',
    icon: '🤖'
  },
  {
    title: 'Crypto Dashboard',
    desc: 'Real-time cryptocurrency tracking with portfolio analytics and price alerts',
    tags: ['React', 'Web3', 'D3.js', 'Firebase'],
    category: 'web',
    icon: '📊'
  },
  {
    title: 'Social Media App',
    desc: 'Feature-rich social platform with real-time messaging, stories, and content sharing',
    tags: ['React Native', 'GraphQL', 'AWS', 'Redis'],
    category: 'app',
    icon: ''
  },
  {
    title: 'Design System',
    desc: 'Comprehensive component library with accessibility features and documentation',
    tags: ['Storybook', 'TypeScript', 'Rollup', 'Jest'],
    category: 'design',
    icon: '🎨'
  },
  {
    title: 'DevOps Pipeline',
    desc: 'Automated CI/CD infrastructure with monitoring, logging, and deployment automation',
    tags: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
    category: 'devops',
    icon: '🚀'
  }
]

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.15 })
  
  const categories = ['all', 'web', 'app', 'design', 'devops']
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="section" ref={sectionRef}>
      {/* Section Header */}
      <div className={`section-header ${isVisible ? 'visible' : ''}`}>
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-divider" />
      </div>
      
{/* Filter Buttons */}
<div className="projects-filter">
  {categories.map(cat => (
    <button
      key={cat}
      className={`filter-btn ${filter === cat ? 'active' : ''}`}
      onClick={() => setFilter(cat)}
      style={{
        padding: '0.6rem 1.5rem',
        background: filter === cat ? 'var(--accent)' : 'transparent',
        color: filter === cat ? 'var(--bg)' : 'var(--text-muted)',
        border: '1px solid var(--border)',
        borderRadius: '25px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontWeight: '500',
        fontSize: '0.9rem',
        minWidth: '80px'
      }}
    >
      {cat.charAt(0).toUpperCase() + cat.slice(1)}
    </button>
  ))}
</div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filtered.map((project, i) => (
          <div 
            key={i} 
            className={`project-card ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="project-image">
              <span style={{ fontSize: '3.5rem' }}>{project.icon}</span>
            </div>
            <div className="project-content">
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.6rem', color: 'var(--text)' }}>
                {project.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.2rem' }}>
                {project.desc}
              </p>
              <div className="project-tags" style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.2rem' }}>
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag" style={{
                    fontSize: '0.8rem',
                    color: 'var(--accent)',
                    fontFamily: 'monospace',
                    padding: '0.2rem 0.5rem',
                    background: 'rgba(100, 255, 218, 0.1)',
                    borderRadius: '4px'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links" style={{ display: 'flex', gap: '1rem' }}>
                <span className="project-link" title="View Code" style={{ cursor: 'pointer', fontSize: '1.2rem', transition: 'transform 0.3s' }}>⌘</span>
                <span className="project-link" title="Live Demo" style={{ cursor: 'pointer', fontSize: '1.2rem', transition: 'transform 0.3s' }}>🔗</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}