import { useState, useEffect, useRef, useMemo } from 'react'

/**
 * Custom hook to trigger animations when elements enter/leave the viewport.
 * Returns a ref to attach to the target element and a boolean indicating visibility.
 * 
 * @param {Object} options - IntersectionObserver options
 * @returns {[React.RefObject, boolean]} - [ref, isVisible]
 */
export function useScrollAnimation(options = {}) {
  const { threshold = 0.2, rootMargin = '0px' } = options
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin])

  return [elementRef, isVisible]
}

export default useScrollAnimation
