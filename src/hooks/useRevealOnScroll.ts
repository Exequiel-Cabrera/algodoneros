import { useEffect, type RefObject } from 'react'

/**
 * Aparición al hacer scroll: a cada elemento con la clase `.reveal` dentro del
 * contenedor le suma `.is-visible` cuando entra en pantalla. También observa los
 * elementos que se agregan después (por ejemplo, al filtrar relatos).
 */
export function useRevealOnScroll(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = root.current
    if (!container) return

    if (!('IntersectionObserver' in window)) {
      container.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12 },
    )

    const observeAll = () => {
      container.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => io.observe(el))
    }

    observeAll()
    const mo = new MutationObserver(observeAll)
    mo.observe(container, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [root])
}
