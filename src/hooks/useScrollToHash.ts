import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { scrollBehavior } from './motion'

/**
 * Si la URL trae un #ancla, baja con desplazamiento suave hasta ese bloque.
 * Se vuelve a ejecutar en cada navegación, aunque el ancla sea la misma.
 */
export function useScrollToHash() {
  const { hash, key } = useLocation()

  useEffect(() => {
    if (!hash) return
    const target = document.getElementById(decodeURIComponent(hash.slice(1)))
    target?.scrollIntoView({ behavior: scrollBehavior(), block: 'start' })
  }, [hash, key])
}
