import { useState } from 'react'
import type { StoryVideo } from '../../types'
import AutoplayVideo from './AutoplayVideo'

interface VideoSceneProps {
  /** Video del relato; si falta, se muestra el recuadro de la maqueta */
  video?: StoryVideo
}

/**
 * Escena en video: video vertical que arranca solo, sin sonido, cuando aparece en
 * pantalla, y se pausa al salir. El sonido se activa desde los controles.
 * Si el relato todavía no tiene archivo, muestra un recuadro que ocupa su lugar.
 */
function VideoScene({ video }: VideoSceneProps) {
  return (
    <figure className="video-scene">
      {video?.src ? (
        <AutoplayVideo src={video.src} className="video-scene__video" />
      ) : (
        <PlaceholderVideo />
      )}
      <figcaption>
        {video?.caption ?? 'Un momento del trabajo, contado por su protagonista. Con subtítulos.'}
      </figcaption>
    </figure>
  )
}

/** Recuadro de la maqueta para los relatos que todavía no tienen video */
function PlaceholderVideo() {
  const [open, setOpen] = useState(false)

  if (open) {
    return (
      <div className="video-scene__frame video-scene__player">
        <p className="label">Una escena · 1:15</p>
        <p>
          Acá se reproduce el video vertical, grabado con celular, con la voz del protagonista
          mientras trabaja y el sonido ambiente del lugar.
        </p>
        <p className="video-scene__subs">Texto de los subtítulos incrustados</p>
        <p className="video-scene__note">Maqueta: todavía no hay archivo de video.</p>
      </div>
    )
  }

  return (
    <button
      type="button"
      className="video-scene__frame video-scene__poster"
      onClick={() => setOpen(true)}
      aria-label="Cargar la escena en video"
    >
      <span className="video-scene__play" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="26" height="26">
          <path d="M8 5 L19 12 L8 19 Z" fill="currentColor" />
        </svg>
      </span>
      <span className="label">Una escena</span>
      <span className="video-scene__hint">Video de 60 a 90 s · se carga al tocarlo</span>
    </button>
  )
}

export default VideoScene
