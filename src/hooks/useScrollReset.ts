import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

const FORM_PATH = '/algodoneros/conta-tu-historia'

/** Rutas que muestran la sección (con o sin el panel de un relato abierto) */
function isSectionPath(pathname: string) {
  const path = pathname.replace(/\/$/, '')
  return path === '/algodoneros' || (path.startsWith('/algodoneros/') && path !== FORM_PATH)
}

/**
 * Vuelve arriba al cambiar de página, pero no al abrir o cerrar un relato:
 * así, al cerrar el panel, el lector queda en el mismo punto de la sección.
 * Si la URL trae un #ancla, el desplazamiento lo resuelve useScrollToHash.
 */
export function useScrollReset() {
  const { pathname, hash } = useLocation()
  const previous = useRef(pathname)

  useEffect(() => {
    const from = previous.current
    previous.current = pathname
    if (from === pathname || hash) return
    if (isSectionPath(from) && isSectionPath(pathname)) return
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
}
