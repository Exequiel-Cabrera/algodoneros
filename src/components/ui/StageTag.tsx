import { stageById } from '../../data/stages'
import type { StageId } from '../../types'
import './ui.css'

interface StageTagProps {
  stage: StageId
  className?: string
}

/** Etiqueta "01 · Cultivo" en el color de la etapa */
function StageTag({ stage, className = '' }: StageTagProps) {
  const { number, name } = stageById[stage]
  return (
    <span className={`stage-tag ${className}`} data-stage={stage}>
      {number} · {name}
    </span>
  )
}

export default StageTag
