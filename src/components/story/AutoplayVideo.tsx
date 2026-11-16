import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../../hooks/motion'

interface AutoplayVideoProps {
  src: string
  className?: string
}

/**
 * Video que arranca solo, sin sonido, cuando aparece en pantalla, y se pausa al salir.
 * Los navegadores solo dejan arrancar solo un video silenciado: el sonido se activa desde
 * los controles. Si quien lee lo pausa, no se vuelve a reproducir al pasar de nuevo por él.
 * Con "reducir movimiento" activado, no arranca solo.
 */
function AutoplayVideo({ src, className = '' }: AutoplayVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    let pausedByUser = false
    let pausingOnScroll = false
    const onPlay = () => {
      pausedByUser = false
    }
    const onPause = () => {
      if (!pausingOnScroll) pausedByUser = true
      pausingOnScroll = false
    }
    el.addEventListener('play', onPlay)
    el.addEventListener('pause', onPause)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (el.paused && !pausedByUser) el.play().catch(() => {})
        } else if (!el.paused) {
          pausingOnScroll = true
          el.pause()
        }
      },
      { threshold: 0.5 },
    )
    observer.observe(el)

    return () => {
      observer.disconnect()
      el.removeEventListener('play', onPlay)
      el.removeEventListener('pause', onPause)
    }
  }, [])

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      muted
      loop
      playsInline
      controls
      preload="metadata"
    >
      Tu navegador no puede reproducir este video.
    </video>
  )
}

export default AutoplayVideo
