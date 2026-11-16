import { useEffect } from 'react'

/**
 * Mientras un panel a pantalla completa está abierto:
 * - la página de atrás no hace scroll (y conserva su posición),
 * - el resto del sitio queda inerte, así el foco no se escapa del panel.
 */
export function useModalIsolation() {
  useEffect(() => {
    const root = document.getElementById('root')
    const scrollbar = window.innerWidth - document.documentElement.clientWidth

    document.body.classList.add('is-locked')
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`
    root?.setAttribute('inert', '')

    return () => {
      document.body.classList.remove('is-locked')
      document.body.style.paddingRight = ''
      root?.removeAttribute('inert')
    }
  }, [])
}
