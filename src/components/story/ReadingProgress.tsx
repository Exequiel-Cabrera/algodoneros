import type { StageId } from '../../types'
import StageIcon from '../icons/StageIcon'

interface ReadingProgressProps {
  /** Avance de lectura, de 0 a 1 */
  progress: number
  /** Etapa del relato: define el color del ícono */
  stage: StageId
}

/**
 * Barra de lectura que crece: el ícono pasa de brote a planta y de planta a
 * capullo según cuánto se leyó, en el color de la etapa del relato.
 */
function ReadingProgress({ progress, stage }: ReadingProgressProps) {
  const step: StageId = progress < 1 / 3 ? 'cultivo' : progress < 2 / 3 ? 'crecimiento' : 'cosecha'
  const color = `var(--stage-${stage})`
  const percent = Math.round(progress * 100)

  return (
    <div
      className="reading"
      role="progressbar"
      aria-label="Avance de lectura"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percent}
    >
      <StageIcon stage={step} color={color} groundColor="var(--tierra-light)" size={38} />
      <span className="reading__track" aria-hidden="true">
        <span className="reading__fill" style={{ transform: `scaleX(${progress})`, background: color }} />
      </span>
    </div>
  )
}

export default ReadingProgress
