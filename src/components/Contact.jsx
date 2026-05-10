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

      {/* Social Links - Ganti dengan link asli kamu */}
      <div className={`social-links-row ${isVisible ? 'visible' : ''}`}>
        {[
          { name: 'GitHub', href: 'https://github.com/Bar1965', icon: 'GH' },
          { name: 'LinkedIn', href: 'https://linkedin.com/in/your-profile', icon: 'LI' },
          { name: 'Twitter/X', href: 'https://twitter.com/your-handle', icon: 'TW' },
          { name: 'Email', href: 'mailto:akbar@yourdomain.com', icon: '@' }
        ].map((social, idx) => (
          <a 
            key={idx} 
            href={social.href} 
            className="social-link" 
            title={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  )
}