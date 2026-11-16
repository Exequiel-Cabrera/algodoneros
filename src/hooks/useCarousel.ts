import { useCallback, useEffect, useRef, useState } from 'react'
import { scrollBehavior } from './motion'

/**
 * Carrusel con scroll-snap: se desliza con el dedo y además tiene flechas.
 * Devuelve la referencia del carril, si está en el inicio o en el final y
 * una función para avanzar o retroceder una tarjeta.
 */
export function useCarousel<T extends HTMLElement>() {
  const trackRef = useRef<T>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const update = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    setAtStart(track.scrollLeft <= 4)
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 4)
  }, [])

  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [update])

  const step = useCallback((direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const first = track.firstElementChild as HTMLElement | null
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    const distance = first ? first.offsetWidth + gap : track.clientWidth * 0.8
    track.scrollBy({ left: direction * distance, behavior: scrollBehavior() })
  }, [])

  return { trackRef, atStart, atEnd, step, onScroll: update }
}
