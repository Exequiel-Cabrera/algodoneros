import type { StageId } from '../../types'

interface StageIconProps {
  stage: StageId
  color?: string
  /** Color de la línea de suelo. Las tres etapas crecen del mismo suelo color tierra. */
  groundColor?: string
  showGround?: boolean
  size?: number
  className?: string
}

/** Brote (cultivo), planta con hojas (crecimiento) y capullo (cosecha). */
function StageIcon({
  stage,
  color = 'var(--navy)',
  groundColor = 'var(--tierra)',
  showGround = true,
  size = 84,
  className,
}: StageIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 84 84"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {stage === 'cultivo' && (
          <>
            <path d="M42 74 V48" />
            <path d="M42 56 C31 55 26 46 28 38 C37 38 43 45 42 56Z" />
            <path d="M42 52 C53 51 58 42 56 34 C47 34 41 41 42 52Z" />
          </>
        )}
        {stage === 'crecimiento' && (
          <>
            <path d="M42 74 V20" />
            <path d="M42 60 C31 59 27 50 29 42 C38 43 43 50 42 60Z" />
            <path d="M42 46 C53 45 57 37 55 29 C46 30 41 37 42 46Z" />
            <path d="M42 32 C35 31 31 25 32 19 C38 20 42 25 42 32Z" />
          </>
        )}
        {stage === 'cosecha' && (
          <>
            <circle cx="34" cy="22" r="9" />
            <circle cx="50" cy="22" r="9" />
            <circle cx="42" cy="35" r="9" />
            <path d="M42 44 V74" />
          </>
        )}
      </g>
      {showGround && (
        <path d="M12 75 H72" stroke={groundColor} strokeWidth="3" strokeLinecap="round" />
      )}
    </svg>
  )
}

export default StageIcon
