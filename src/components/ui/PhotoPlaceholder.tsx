import type { StageId } from '../../types'
import './ui.css'

interface PhotoPlaceholderProps {
  /** Qué foto va en este lugar. También es el texto alternativo. */
  label: string
  stage?: StageId
  tone?: 'light'
  /** Proporción CSS, ej. "4 / 5" para retratos o "4 / 3" para tarjetas */
  ratio?: string
  className?: string
}

/** Recuadro que ocupa el lugar de una foto real mientras no haya material. */
function PhotoPlaceholder({ label, stage, tone, ratio = '4 / 3', className = '' }: PhotoPlaceholderProps) {
  return (
    <div
      className={`photo-ph ${className}`}
      data-stage={stage}
      data-tone={tone}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={label}
    >
      <span className="photo-ph__label" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="6" width="18" height="14" rx="3" />
          <circle cx="12" cy="13" r="3.5" />
          <path d="M8.5 6 L10 3.5 H14 L15.5 6" />
        </svg>
        {label}
      </span>
    </div>
  )
}

export default PhotoPlaceholder
