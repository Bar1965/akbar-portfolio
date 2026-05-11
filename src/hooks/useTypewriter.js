import { useState, useEffect, useRef } from 'react'

export function useTypewriter(words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const currentWord = words[wordIndex]
    
    const tick = () => {
      if (!isDeleting) {
        // Mengetik
        setText(currentWord.substring(0, text.length + 1))
        if (text === currentWord) {
          // Selesai mengetik, tunggu sebelum menghapus
          setTimeout(() => setIsDeleting(true), pauseTime)
          return
        }
        timeoutRef.current = setTimeout(tick, typingSpeed)
      } else {
        // Menghapus
        setText(currentWord.substring(0, text.length - 1))
        if (text === '') {
          // Selesai menghapus, ganti ke kata berikutnya
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
          return
        }
        timeoutRef.current = setTimeout(tick, deletingSpeed)
      }
    }

    // Mulai animasi
    timeoutRef.current = setTimeout(tick, typingSpeed)
    return () => clearTimeout(timeoutRef.current)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return text
}