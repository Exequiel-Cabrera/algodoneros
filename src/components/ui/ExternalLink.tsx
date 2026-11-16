import type { AnchorHTMLAttributes, MouseEvent } from 'react'

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  /** Abre en otra pestaña (redes, sitios de terceros) */
  newTab?: boolean
}

/**
 * Enlace hacia afuera de Algodoneros (sitio de la fiesta, redes, Subsecretaría).
 * Si el href está vacío, el enlace queda "pendiente": no navega ni salta al inicio.
 * Los enlaces se completan en src/data/links.ts.
 */
function ExternalLink({ href, newTab = false, onClick, title, children, ...rest }: ExternalLinkProps) {
  const pending = href.trim() === ''

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (pending) event.preventDefault()
    onClick?.(event)
  }

  return (
    <a
      {...rest}
      href={pending ? '#' : href}
      target={!pending && newTab ? '_blank' : undefined}
      rel={!pending && newTab ? 'noreferrer' : undefined}
      title={pending ? 'Enlace pendiente' : title}
      data-pending={pending || undefined}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}

export default ExternalLink
