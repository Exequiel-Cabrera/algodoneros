import { Link, useLocation } from 'react-router'
import { stageById } from '../../data/stages'
import type { Story } from '../../types'
import Photo from '../ui/Photo'
import StageTag from '../ui/StageTag'
import './StoryCard.css'

interface StoryCardProps {
  story: Story
  className?: string
}

/**
 * Tarjeta de un relato: etiqueta de etapa, foto (cambia según la etapa),
 * datos del protagonista, bajada y "Leer la historia".
 */
function StoryCard({ story, className = '' }: StoryCardProps) {
  const { search } = useLocation()
  const stage = stageById[story.stage]

  return (
    <article className={`story-card ${className}`}>
      <div className="story-card__media">
        <Photo
          label={story.cover?.label ?? stage.photoLabel}
          src={story.cover?.src}
          position={story.cover?.position}
          stage={story.stage}
          ratio="4 / 3"
        />
        <StageTag stage={story.stage} className="story-card__tag" />
      </div>
      <div className="story-card__body">
        <h3>{story.business}</h3>
        <p className="story-card__meta">
          {story.person}
          {story.age && `, ${story.age}`} · {story.locality}
        </p>
        <p className="story-card__summary">{story.summary}</p>
        <Link
          to={{ pathname: `/algodoneros/${story.slug}`, search }}
          className="story-card__link"
          aria-label={`Leer la historia: ${story.business}, etapa ${stage.name}`}
        >
          Leer la historia <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}

export default StoryCard
