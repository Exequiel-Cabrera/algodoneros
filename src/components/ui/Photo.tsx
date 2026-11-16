import type { StageId } from '../../types'
import PhotoPlaceholder from './PhotoPlaceholder'
import './ui.css'

interface PhotoProps {
  /** Qué muestra la foto. Es el texto alternativo, o el del recuadro si no hay `src`. */
  label: string
  src?: string
  /** Punto de la foto que queda a la vista al recortarla (`object-position`) */
  position?: string
  stage?: StageId
  tone?: 'light'
  /** Proporción CSS, ej. "4 / 5" para retratos o "4 / 3" para tarjetas */
  ratio?: string
  className?: string
}

/** Foto real si hay archivo; si no, el recuadro de relleno con el mismo tamaño. */
function Photo({ src, position, ratio = '4 / 3', className = '', ...placeholder }: PhotoProps) {
  if (!src) return <PhotoPlaceholder ratio={ratio} className={className} {...placeholder} />

  return (
    <img
      className={`photo ${className}`}
      src={src}
      alt={placeholder.label}
      loading="lazy"
      decoding="async"
      style={{ aspectRatio: ratio, objectPosition: position }}
    />
  )
}

export default Photo
