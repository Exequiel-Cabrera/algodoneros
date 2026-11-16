import { Link } from 'react-router'
import StageIcon from '../components/icons/StageIcon'
import ExternalLink from '../components/ui/ExternalLink'
import { fiestaLinks } from '../data/links'
import { stages } from '../data/stages'
import './Recorrido.css'

/** Bloque 4 · El recorrido */
function Recorrido() {
  return (
    <section className="section recorrido" id="recorrido" aria-labelledby="recorrido-title">
      <div className="shell">
        <div className="split-heading reveal">
          <div>
            <p className="eyebrow">El recorrido</p>
            <h2 id="recorrido-title">
              Del cultivo
              <br />
              <em>a la cosecha.</em>
            </h2>
          </div>
          <p>
            Cada emprendimiento atraviesa las mismas etapas que el algodón. Cada relato se ubica en
            una de ellas según el momento del emprendimiento y, cuando alguien pasa de una etapa a
            otra, su relato suma un capítulo nuevo.
          </p>
        </div>

        <div className="recorrido__cards rail">
          {stages.map((stage) => (
            <Link
              key={stage.id}
              className="stage-card reveal"
              data-stage={stage.id}
              to={{ pathname: '/algodoneros', search: `?etapa=${stage.id}`, hash: '#relatos' }}
              aria-label={`${stage.name}: ${stage.moment} Ver los relatos de esta etapa`}
            >
              <span className="stage-card__num">{stage.number}</span>
              <StageIcon stage={stage.id} className="stage-card__icon" />
              <div>
                <p className="label stage-card__kicker">{stage.name}</p>
                <h3>{stage.moment}</h3>
                <p>{stage.description}</p>
              </div>
              <span className="stage-card__more">
                Ver relatos
                <span className="stage-card__arrow" aria-hidden="true">
                  ↗
                </span>
              </span>
            </Link>
          ))}
        </div>

        <div className="franja-1949 reveal">
          <strong>1949</strong>
          <p>
            Según su sitio oficial, la fiesta celebra la producción chaqueña desde 1949. Algodoneros
            traslada esa identidad del cultivo a las personas: los algodoneros de hoy son también
            los jóvenes que emprenden en la provincia.
          </p>
          <ExternalLink href={fiestaLinks.historia}>Conocer la historia →</ExternalLink>
        </div>
      </div>
    </section>
  )
}

export default Recorrido
