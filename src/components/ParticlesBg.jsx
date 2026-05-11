import { useEffect, useRef } from 'react'

export default function ParticlesBg({ count = 20, enableMeteors = true }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Bersihkan container sebelum generate ulang
    container.innerHTML = ''
    
    // 1. Generate Stars (Bintang Diam/Berkedip)
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div')
      star.className = 'particle' // Gunakan class particle yang sudah ada di CSS lama kamu
      
      const x = Math.random() * 100
      const y = Math.random() * 100
      const size = Math.random() * 3 + 1
      const delay = Math.random() * 5
      
      star.style.left = `${x}%`
      star.style.top = `${y}%`
      star.style.width = `${size}px`
      star.style.height = `${size}px`
      star.style.animationDelay = `${delay}s`
      
      container.appendChild(star)
    }

    // 2. Generate Meteors (Bintang Jatuh)
    if (enableMeteors) {
      const meteorCount = 6 // Jumlah meteor sekaligus
      
      for (let i = 0; i < meteorCount; i++) {
        const meteor = document.createElement('div')
        meteor.className = 'meteor'
        
        // Random posisi awal
        const top = Math.random() * 50 // Muncul di area atas 0-50%
        const left = Math.random() * 100 // Muncul di mana saja secara horizontal
        
        // Random delay dan durasi agar tidak serentak
        const delay = Math.random() * 5 + 2 // Mulai 2-7 detik
        const duration = Math.random() * 2 + 2 // Durasi 2-4 detik
        
        meteor.style.top = `${top}%`
        meteor.style.left = `${left}%`
        meteor.style.animationDelay = `${delay}s`
        meteor.style.animationDuration = `${duration}s`
        
        container.appendChild(meteor)
      }
    }
  }, [count, enableMeteors])

  return <div ref={containerRef} className="particles-container" aria-hidden="true" />
}