import './ui.css'

interface CarouselArrowsProps {
  atStart: boolean
  atEnd: boolean
  onStep: (direction: 1 | -1) => void
  label: string
  className?: string
}

/** Flechas anterior / siguiente de un carrusel */
function CarouselArrows({ atStart, atEnd, onStep, label, className = '' }: CarouselArrowsProps) {
  return (
    <div className={`carousel-arrows ${className}`}>
      <button
        type="button"
        className="carousel-arrows__btn"
        onClick={() => onStep(-1)}
        disabled={atStart}
        aria-label={`${label}: anterior`}
      >
        <span aria-hidden="true">←</span>
      </button>
      <button
        type="button"
        className="carousel-arrows__btn"
        onClick={() => onStep(1)}
        disabled={atEnd}
        aria-label={`${label}: siguiente`}
      >
        <span aria-hidden="true">→</span>
      </button>
    </div>
  )
}

export default CarouselArrows
