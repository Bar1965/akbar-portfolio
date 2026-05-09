import { useState, useEffect } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .project-card, .skill-card')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updatePosition)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <>
      <div 
        className={`cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: position.x - 10,
          top: position.y - 10,
        }}
      />
      <div 
        className="cursor-follower"
        style={{
          left: position.x - 20,
          top: position.y - 20,
        }}
      />
    </>
  )
}