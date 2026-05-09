import { useState, useEffect } from 'react'

export default function Preloader({ isLoading }) {
  const [progress, setProgress] = useState(0)
  const text = 'AKBAR.DEV'

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 2
        })
      }, 20)
      return () => clearInterval(interval)
    }
  }, [isLoading])

  return (
    <div className={`preloader ${isLoading ? '' : 'hidden'}`}>
      <div className="preloader-text">
        {text.split('').map((char, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>
            {char}
          </span>
        ))}
      </div>
      <div className="preloader-bar">
        <div 
          className="preloader-progress" 
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}