import { Link } from 'react-router'
import { fiestaLinks, socialLinks } from '../../data/links'
import { stages } from '../../data/stages'
import CottonIcon from '../icons/CottonIcon'
import ExternalLink from '../ui/ExternalLink'

const explorar = [
  { label: 'La fiesta', href: fiestaLinks.laFiesta },
  { label: 'Experiencias', href: fiestaLinks.experiencias },
  { label: 'Expositores', href: fiestaLinks.expositores },
  { label: 'Historia', href: fiestaLinks.historia },
]

const participar = [
  { label: 'Entradas', href: fiestaLinks.entradas, newTab: false },
  { label: 'Reina Nacional', href: fiestaLinks.reinaNacional, newTab: false },
  { label: 'WhatsApp', href: socialLinks.whatsapp, newTab: true },
  { label: 'Instagram', href: socialLinks.instagram, newTab: true },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link to="/algodoneros" className="brand brand--footer">
              <span className="brand__mark">
                <CottonIcon />
              </span>
              <span className="brand__text">
                <strong>Algodoneros</strong>
                <small>Fiesta Nacional del Algodón</small>
              </span>
            </Link>
            <p>
              Presidencia Roque Sáenz Peña, Chaco. La cultura del emprendimiento joven, todo el
              año.
            </p>
          </div>

          <div>
            <h2 className="site-footer__title">Explorar</h2>
            <ul>
              {explorar.map((item) => (
                <li key={item.label}>
                  <ExternalLink href={item.href}>{item.label}</ExternalLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="site-footer__title">Algodoneros</h2>
            <ul>
              {stages.map((stage) => (
                <li key={stage.id}>
                  <Link
                    to={{ pathname: '/algodoneros', search: `?etapa=${stage.id}`, hash: '#relatos' }}
                  >
                    {stage.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/algodoneros/conta-tu-historia">Contá tu historia</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="site-footer__title">Participar</h2>
            <ul>
              {participar.map((item) => (
                <li key={item.label}>
                  <ExternalLink href={item.href} newTab={item.newTab}>
                    {item.label}
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>Maqueta académica · TP3 GEPC · Propuesta de sección, no es el sitio oficial.</span>
          <span>Sáenz Peña hace la fiesta.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
