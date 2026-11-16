import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { fiestaLinks } from '../../data/links'
import CottonIcon from '../icons/CottonIcon'
import ExternalLink from '../ui/ExternalLink'

/** Ítems que llevan a la página principal de la fiesta */
const fiestaNav = [
  { label: 'La fiesta', href: fiestaLinks.laFiesta },
  { label: 'Experiencias', href: fiestaLinks.experiencias },
  { label: 'Expositores', href: fiestaLinks.expositores },
  { label: 'Historia', href: fiestaLinks.historia },
]

function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <Link
          to="/algodoneros"
          className="brand"
          onClick={close}
          aria-label="Algodoneros, Fiesta Nacional del Algodón"
        >
          <span className="brand__mark">
            <CottonIcon />
          </span>
          <span className="brand__text">
            <strong>Fiesta Nacional</strong>
            <small>
              del Algodón · <b>Algodoneros</b>
            </small>
          </span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="main-nav"
          className={`main-nav${open ? ' is-open' : ''}`}
          aria-label="Navegación principal"
        >
          <ul>
            {fiestaNav.map((item) => (
              <li key={item.label}>
                <ExternalLink href={item.href} onClick={close}>
                  {item.label}
                </ExternalLink>
              </li>
            ))}
            <li>
              <NavLink to="/algodoneros" className="main-nav__new" onClick={close}>
                Algodoneros <i>Nuevo</i>
              </NavLink>
            </li>
            <li>
              <Link to="/algodoneros/conta-tu-historia" className="nav-cta" onClick={close}>
                Contá tu historia <span aria-hidden="true">↗</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
