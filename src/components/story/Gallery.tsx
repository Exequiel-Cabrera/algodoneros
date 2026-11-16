import { useCarousel } from '../../hooks/useCarousel'
import type { GalleryItem } from '../../types'
import CarouselArrows from '../ui/CarouselArrows'
import Photo from '../ui/Photo'
import AutoplayVideo from './AutoplayVideo'

interface GalleryProps {
  items: GalleryItem[]
}

/** "3 fotos", "1 video", "2 fotos y 1 video" */
function countLabel(items: GalleryItem[]) {
  const videos = items.filter((item) => item.type === 'video').length
  const photos = items.length - videos
  const parts = [
    photos > 0 && `${photos} ${photos === 1 ? 'foto' : 'fotos'}`,
    videos > 0 && `${videos} ${videos === 1 ? 'video' : 'videos'}`,
  ].filter(Boolean)
  return parts.join(' y ')
}

/**
 * Galería del relato: se desliza con el dedo o con flechas, con epígrafes cortos.
 * Las fotos reales van verticales (3 / 4); los recuadros vacíos, apaisados. Los videos
 * van en 9 / 16 y arrancan solos, sin sonido, cuando aparecen en pantalla.
 */
function Gallery({ items }: GalleryProps) {
  const { trackRef, atStart, atEnd, step, onScroll } = useCarousel<HTMLUListElement>()

  return (
    <section className="gallery" aria-label="Galería">
      <div className="gallery__head">
        <p className="label">Galería · {countLabel(items)}</p>
        <CarouselArrows atStart={atStart} atEnd={atEnd} onStep={step} label="Galería" />
      </div>
      <ul className="gallery__track" ref={trackRef} onScroll={onScroll}>
        {items.map((item) => (
          <li key={item.label}>
            <figure>
              {item.type === 'video' && item.src ? (
                <AutoplayVideo src={item.src} className="gallery__video" />
              ) : (
                <Photo
                  label={item.label}
                  src={item.src}
                  position={item.position}
                  tone="light"
                  ratio={item.src ? '3 / 4' : '4 / 3'}
                />
              )}
              <figcaption>{item.label}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Gallery
