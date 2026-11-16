import { Link, useLocation } from 'react-router'
import CarouselArrows from '../components/ui/CarouselArrows'
import StageTag from '../components/ui/StageTag'
import { stories } from '../data/stories'
import { useCarousel } from '../hooks/useCarousel'
import './LoQueAprendi.css'

/** Bloque 8 · Lo que aprendí: carrusel con las frases de cierre de los relatos */
function LoQueAprendi() {
  const { search } = useLocation()
  const { trackRef, atStart, atEnd, step, onScroll } = useCarousel<HTMLUListElement>()

  return (
    <section className="section aprendi" aria-labelledby="aprendi-title">
      <div className="shell">
        <div className="aprendi__head reveal">
          <div>
            <p className="eyebrow eyebrow--tierra">Frases de cierre</p>
            <h2 id="aprendi-title">
              Lo que
              <br />
              <em>aprendí.</em>
            </h2>
          </div>
          <div className="aprendi__aside">
            <p>
              Cada relato cierra con un saber concreto, en una o dos oraciones, contado de par a
              par. Tocá una frase para leer el relato completo.
            </p>
            <CarouselArrows
              atStart={atStart}
              atEnd={atEnd}
              onStep={step}
              label="Frases"
              className="aprendi__arrows"
            />
          </div>
        </div>

        <ul className="aprendi__track" ref={trackRef} onScroll={onScroll}>
          {stories.map((story) => (
            <li key={story.slug} className="aprendi__item">
              <Link
                className="phrase-card"
                to={{ pathname: `/algodoneros/${story.slug}`, search }}
                aria-label={`${story.learned} ${story.person}, ${story.locality}. Leer el relato.`}
              >
                <span className="phrase-card__mark" aria-hidden="true">
                  “
                </span>
                <p className="phrase-card__text">{story.learned}</p>
                <span className="phrase-card__foot">
                  <span>
                    <strong>{story.person}</strong> · {story.locality}
                  </span>
                  <StageTag stage={story.stage} />
                </span>
                <span className="phrase-card__link">
                  Leer su relato <span aria-hidden="true">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default LoQueAprendi
