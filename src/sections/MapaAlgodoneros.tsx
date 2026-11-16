import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import Photo from '../components/ui/Photo'
import StageTag from '../components/ui/StageTag'
import { MAP_SIZE } from '../data/chacoGeo'
import { stageById, stages } from '../data/stages'
import { stories } from '../data/stories'
import type { StageId } from '../types'
import { departmentAt, project } from '../utils/geo'
import ChacoMap from './ChacoMap'
import '../components/ui/ui.css'
import './MapaAlgodoneros.css'

/** Bloque 9 · Mapa de Algodoneros */
function MapaAlgodoneros() {
  const { search } = useLocation()
  const [filter, setFilter] = useState<StageId | null>(null)
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null)
  const [hoveredDepartment, setHoveredDepartment] = useState<string | null>(null)

  const visible = filter ? stories.filter((story) => story.stage === filter) : stories
  const selected = visible.find((story) => story.slug === selectedSlug) ?? null
  const selectedDepartment = selected ? departmentAt(selected.coords) : undefined
  const activeDepartment = hoveredDepartment ?? selectedDepartment ?? null
  const storiesInActive = activeDepartment
    ? visible.filter((story) => departmentAt(story.coords) === activeDepartment).length
    : 0

  return (
    <section className="section mapa on-dark" id="mapa" aria-labelledby="mapa-title">
      <div className="dot-field mapa__dots" aria-hidden="true" />
      <div className="shell">
        <div className="split-heading reveal">
          <div>
            <p className="eyebrow eyebrow--light">Mapa de Algodoneros</p>
            <h2 id="mapa-title">
              Se emprende en
              <br />
              <em>toda la provincia.</em>
            </h2>
          </div>
          <p>
            Un punto por protagonista, del color de su etapa. No solo en las ciudades grandes:
            buscá tu departamento y conocé a quien emprende cerca.
          </p>
        </div>

        <div className="filter filter--dark mapa__filter" role="group" aria-label="Filtrar el mapa por etapa">
          <button
            type="button"
            className="filter__chip"
            aria-pressed={filter === null}
            onClick={() => setFilter(null)}
          >
            Todas
          </button>
          {stages.map((stage) => (
            <button
              key={stage.id}
              type="button"
              className="filter__chip"
              data-stage={stage.id}
              aria-pressed={filter === stage.id}
              onClick={() => setFilter(stage.id)}
            >
              <span className="filter__dot" aria-hidden="true" />
              {stage.name}
            </button>
          ))}
        </div>

        <div className="mapa__layout">
          <figure className="mapa__figure reveal">
            <div className="mapa__map">
              <div className="mapa__canvas">
                <ChacoMap activeDepartment={activeDepartment} onDepartmentChange={setHoveredDepartment} />

                {visible.map((story) => {
                  const { x, y } = project(story.coords)
                  return (
                    <button
                      key={story.slug}
                      type="button"
                      className="mapa__pin"
                      data-stage={story.stage}
                      style={{ left: `${(x / MAP_SIZE.width) * 100}%`, top: `${(y / MAP_SIZE.height) * 100}%` }}
                      aria-pressed={selectedSlug === story.slug}
                      aria-label={`${story.business}, ${story.locality}. Etapa ${stageById[story.stage].name}`}
                      onClick={() => setSelectedSlug(story.slug)}
                    >
                      <span />
                    </button>
                  )
                })}
              </div>

              <p className="mapa__zone" aria-live="polite">
                {activeDepartment ? (
                  <>
                    <span className="label">Departamento</span>
                    <strong>{activeDepartment}</strong>
                    <span className="mapa__zone-count">
                      {storiesInActive === 0
                        ? 'Todavía sin relatos'
                        : storiesInActive === 1
                          ? '1 relato'
                          : `${storiesInActive} relatos`}
                    </span>
                  </>
                ) : (
                  <span className="mapa__zone-hint">Pasá o tocá el mapa para ver cada departamento</span>
                )}
              </p>
            </div>
            <figcaption className="mapa__source">
              Límites: Instituto Geográfico Nacional, vía geoBoundaries. Localidades: API Georef
              (datos.gob.ar). El punto de Ko Huella es de ejemplo: su relato no indica la
              localidad.
            </figcaption>
          </figure>

          <div className="mapa__card" aria-live="polite">
            {selected ? (
              <article className="map-card">
                <Photo
                  label={selected.cover?.label ?? 'Retrato del emprendedor'}
                  src={selected.cover?.src}
                  position={selected.cover?.position}
                  stage={selected.stage}
                  ratio="1 / 1"
                  className="map-card__photo"
                />
                <div className="map-card__body">
                  <StageTag stage={selected.stage} />
                  <h3>{selected.business}</h3>
                  <p className="map-card__meta">
                    {selected.person}
                    {selected.age && `, ${selected.age}`} · {selected.locality}
                    {selectedDepartment && <> · Dpto. {selectedDepartment}</>}
                  </p>
                  <p className="map-card__phrase">“{selected.learned}”</p>
                  <Link
                    to={{ pathname: `/algodoneros/${selected.slug}`, search }}
                    className="btn btn--mint"
                  >
                    Leer la historia <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ) : (
              <div className="map-card map-card--empty">
                <p>
                  <strong>Tocá un punto del mapa</strong> para ver quién emprende en esa zona y
                  abrir su relato.
                </p>
                <ul className="map-legend">
                  {stages.map((stage) => (
                    <li key={stage.id} data-stage={stage.id}>
                      <span aria-hidden="true" />
                      {stage.name}
                    </li>
                  ))}
                  <li className="map-legend__town">
                    <span aria-hidden="true" />
                    Localidad de referencia
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapaAlgodoneros
