import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2 })

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', msg: 'Sending...' })
    
    try {
      // ✅ OPSI A: Pakai EmailJS (gratis, real email)
      // 1. Daftar di https://www.emailjs.com/ (gratis)
      // 2. Ganti 'YOUR_SERVICE_ID', dll dengan config kamu
      /*
      import emailjs from '@emailjs/browser'
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID', 
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        'YOUR_PUBLIC_KEY'
      )
      */

      // ✅ OPSI B: Pakai Formspree (lebih simpel, no config JS)
      // 1. Daftar di https://formspree.io/ (gratis)
      // 2. Ganti URL di form action dengan endpoint kamu
      /*
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!response.ok) throw new Error('Failed to send')
      */

      // 🔸 Untuk sekarang: tetap simulasi (ganti dengan salah satu opsi di atas kalau mau real)
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setStatus({ type: 'success', msg: '✨ Message sent! I\'ll get back to you soon.' })
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(null), 4000)
    } catch (error) {
      setStatus({ type: 'error', msg: '❌ Failed to send. Please try again.' })
      setTimeout(() => setStatus(null), 4000)
    }
  }

  return (
    <section id="contact" className="section" ref={sectionRef}>
      {/* Header */}
      <div className={`section-header ${isVisible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span className="contact-subtitle"> What's Next?</span>
        <h2 className="contact-title gradient-text">Get In Touch</h2>
        <p className="contact-description">
          I'm currently looking for new opportunities. Whether you have a question, 
          a project idea, or just want to say hi, my inbox is always open!
        </p>
      </div>

      {/* Form - Pakai CLASS bukan inline style biar CSS floating label jalan */}
      <div className={`contact-form-wrapper ${isVisible ? 'visible' : ''}`}>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input type="text" name="name" placeholder=" " value={form.name} onChange={handleChange} required />
            <label>Your Name</label>
          </div>
          
          <div className="form-group">
            <input type="email" name="email" placeholder=" " value={form.email} onChange={handleChange} required />
            <label>Your Email</label>
          </div>
          
          <div className="form-group">
            <textarea name="message" placeholder=" " rows="4" value={form.message} onChange={handleChange} required />
            <label>Your Message</label>
          </div>

          <button type="submit" className="submit-btn" disabled={status?.type === 'loading'}>
            <span>{status?.type === 'loading' ? 'Sending...' : 'Send Message'}</span>
          </button>

          {status && (
            <div className={`status-msg ${status.type}`}>{status.msg}</div>
          )}
        </form>
      </div>

{/* Social Links */}
<div className={`social-links-row ${isVisible ? 'visible' : ''}`}>
  {[
    { 
      name: 'GitHub', 
      href: 'https://github.com/Bar1965', 
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.92 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/your-profile', 
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      name: 'Twitter/X', 
      href: 'https://twitter.com/your-handle', 
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    { 
      name: 'Email', 
      href: 'mailto:akbar@yourdomain.com', 
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67z"/>
          <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908z"/>
        </svg>
      )
    }
  ].map((social, idx) => (
    <a 
      key={idx} 
      href={social.href} 
      className="social-link" 
      title={social.name}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: 'var(--bg-light)',
        border: '1px solid var(--border)',
        color: 'var(--text-muted)',
        transition: 'all 0.3s ease',
        textDecoration: 'none',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--accent)'
        e.currentTarget.style.color = 'var(--bg)'
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(100, 255, 218, 0.3)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'var(--bg-light)'
        e.currentTarget.style.color = 'var(--text-muted)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {social.icon}
    </a>
  ))}
</div>
    </section>
  )
}