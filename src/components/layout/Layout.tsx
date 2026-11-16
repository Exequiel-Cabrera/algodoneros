import { useRef } from 'react'
import { Outlet } from 'react-router'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'
import { useScrollReset } from '../../hooks/useScrollReset'
import Footer from './Footer'
import Header from './Header'
import MockNote from './MockNote'
import WhatsAppButton from './WhatsAppButton'
import './layout.css'

/** Cabecera, pie y botón de WhatsApp de la fiesta, iguales en todo el espacio. */
function Layout() {
  const mainRef = useRef<HTMLElement>(null)
  useRevealOnScroll(mainRef)
  useScrollReset()

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <MockNote />
      <Header />
      <main id="contenido" ref={mainRef} tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default Layout
