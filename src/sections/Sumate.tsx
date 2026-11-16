import { Link } from 'react-router'
import ExternalLink from '../components/ui/ExternalLink'
import { socialLinks } from '../data/links'
import './Sumate.css'

/** Bloque 10 · Sumate a Algodoneros */
function Sumate() {
  return (
    <section className="section sumate" id="sumate" aria-labelledby="sumate-title">
      <div className="dot-field sumate__dots" aria-hidden="true" />
      <div className="shell sumate__inner reveal">
        <p className="eyebrow eyebrow--cream eyebrow--center">Sumate a Algodoneros</p>
        <h2 id="sumate-title">
          Todavía no tenés stand.
          <br />
          <em>Ya tenés un lugar.</em>
        </h2>
        <p className="sumate__text">
          Si sos joven y emprendés en el Chaco, contanos tu recorrido. Tu historia puede ser parte
          de la fiesta durante todo el año.
        </p>
        <div className="btn-row sumate__actions">
          <Link className="btn btn--navy" to="/algodoneros/conta-tu-historia">
            Contá tu historia <span aria-hidden="true">↗</span>
          </Link>
          <ExternalLink className="btn btn--ghost" href={socialLinks.instagram} newTab>
            Seguinos en Instagram
          </ExternalLink>
        </div>
        <p className="sumate__audio">
          ¿Preferís hablar en vez de escribir?{' '}
          <ExternalLink href={socialLinks.whatsapp} newTab>
            Mandanos un audio por WhatsApp
          </ExternalLink>
          .
        </p>
      </div>
    </section>
  )
}

export default Sumate
