import { useState, useEffect, useRef, useCallback } from 'react'

/**
 * Custom hook to trigger animations when elements enter/leave the viewport.
 * Returns a ref to attach to the target element and a boolean indicating visibility.
 * 
 * @param {Object} options - IntersectionObserver options
 * @returns {[React.RefObject, boolean]} - [ref, isVisible]
 */
export function useScrollAnimation(options = { threshold: 0.2, rootMargin: '0px' }) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Sync visibility state with intersection status
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: options.threshold,
        rootMargin: options.rootMargin,
        // Disable if not supported (fallback to always visible)
        fallback: () => setIsVisible(true)
      }
    )

    observer.observe(element)

    // Cleanup observer on unmount or options change
    return () => {
      observer.disconnect()
    }
  }, [options.threshold, options.rootMargin])

  return [elementRef, isVisible]
}

export default useScrollAnimation
