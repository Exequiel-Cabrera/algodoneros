import { useState } from 'react'
import { useSearchParams } from 'react-router'
import StoryCard from '../components/story/StoryCard'
import { isStageId, seasonStage, stageById, stages } from '../data/stages'
import { stories } from '../data/stories'
import type { StageId } from '../types'
import '../components/ui/ui.css'
import './AlgodonerosDeHoy.css'

const INITIAL_COUNT = 3

/** En cada temporada se muestran primero los relatos de la etapa del momento. */
const season = seasonStage(new Date())

const orderedStories = [...stories].sort((a, b) => {
  const bySeason = Number(b.stage === season) - Number(a.stage === season)
  if (bySeason !== 0) return bySeason
  return b.publishedAt.localeCompare(a.publishedAt)
})

/** Bloque 7 · Algodoneros de hoy */
function AlgodonerosDeHoy() {
  const [params, setParams] = useSearchParams()
  const [expanded, setExpanded] = useState(false)

  const etapa = params.get('etapa')
  const filter: StageId | null = isStageId(etapa) ? etapa : null
  const list = filter ? orderedStories.filter((story) => story.stage === filter) : orderedStories
  const visible = filter || expanded ? list : list.slice(0, INITIAL_COUNT)
  const hiddenCount = list.length - visible.length

  function selectStage(next: StageId | null) {
    setParams(
      (current) => {
        const updated = new URLSearchParams(current)
        if (next) updated.set('etapa', next)
        else updated.delete('etapa')
        return updated
      },
      { replace: true, preventScrollReset: true },
    )
  }

  return (
    <section className="section relatos" id="relatos" aria-labelledby="relatos-title">
      <div className="shell">
        <div className="split-heading reveal">
          <div>
            <p className="eyebrow">Historias</p>
            <h2 id="relatos-title">
              Algodoneros
              <br />
              <em>de hoy.</em>
            </h2>
          </div>
          <p>
            Relatos en primera persona de jóvenes que emprenden en el Chaco, cada uno ubicado en
            una etapa del recorrido. Los contenidos de plantilla se reemplazan por relatos reales.
          </p>
        </div>

        <div className="relatos__toolbar">
          <div className="filter" role="group" aria-label="Filtrar relatos por etapa">
            <button
              type="button"
              className="filter__chip"
              aria-pressed={filter === null}
              onClick={() => selectStage(null)}
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
                onClick={() => selectStage(stage.id)}
              >
                <span className="filter__dot" aria-hidden="true" />
                {stage.name}
              </button>
            ))}
          </div>
          <p className="relatos__season">
            Temporada de {stageById[season].name.toLowerCase()}: primero, los relatos de esta
            etapa.
          </p>
        </div>

        <div className="relatos__grid rail" aria-live="polite">
          {visible.map((story) => (
            <StoryCard key={story.slug} story={story} className="reveal" />
          ))}
        </div>

        {hiddenCount > 0 && (
          <div className="relatos__more">
            <button type="button" className="btn btn--outline" onClick={() => setExpanded(true)}>
              Ver más relatos ({hiddenCount})
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default AlgodonerosDeHoy
