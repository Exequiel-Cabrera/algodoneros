import { useState } from 'react'
import type { Story } from '../../types'
import Photo from '../ui/Photo'
import StageTag from '../ui/StageTag'

interface ShareButtonsProps {
  story: Story
}

/** Compartir: WhatsApp, placa para historia de Instagram y copiar el enlace. */
function ShareButtons({ story }: ShareButtonsProps) {
  const [copyState, setCopyState] = useState<'idle' | 'ok' | 'error'>('idle')
  const [plateOpen, setPlateOpen] = useState(false)

  const url = `${window.location.origin}/algodoneros/${story.slug}`
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(
    `${story.title} · Algodoneros ${url}`,
  )}`

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url)
      setCopyState('ok')
    } catch {
      setCopyState('error')
    }
  }

  return (
    <section className="share" aria-labelledby="share-title">
      <h3 id="share-title" className="panel-subtitle">
        Compartí este relato
      </h3>
      <div className="share__buttons">
        <a className="btn btn--navy" href={whatsappHref} target="_blank" rel="noreferrer">
          Por WhatsApp
        </a>
        <button
          type="button"
          className="btn btn--outline"
          aria-expanded={plateOpen}
          aria-controls="share-plate"
          onClick={() => setPlateOpen((value) => !value)}
        >
          Historia de Instagram
        </button>
        <button type="button" className="btn btn--outline" onClick={copyLink}>
          Copiar enlace
        </button>
      </div>
      <p className="share__status" role="status">
        {copyState === 'ok' && 'Enlace copiado.'}
        {copyState === 'error' && `No se pudo copiar. El enlace es: ${url}`}
      </p>

      {plateOpen && (
        <div id="share-plate" className="plate-preview">
          <div className="plate">
            <div className="plate__head">
              <span className="plate__brand">Algodoneros</span>
              <StageTag stage={story.stage} />
            </div>
            <Photo
              label={story.cover?.label ?? 'Retrato'}
              src={story.cover?.src}
              position={story.cover?.position}
              stage={story.stage}
              ratio="4 / 5"
              className="plate__photo"
            />
            <p className="plate__quote">{story.chapters[0]?.quote ?? story.learned}</p>
            <p className="plate__meta">
              {story.person} · {story.locality}
            </p>
          </div>
          <p className="plate-preview__note">
            Placa con el retrato y la frase del protagonista, lista para subir a una historia de
            Instagram. En la maqueta solo se muestra la vista previa.
          </p>
        </div>
      )}
    </section>
  )
}

export default ShareButtons
