import { Fragment, useCallback, useEffect, useRef, useState, type TouchEvent } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation, useNavigate } from 'react-router'
import { partnerLinks } from '../../data/links'
import { stageById } from '../../data/stages'
import { stories } from '../../data/stories'
import { scrollBehavior } from '../../hooks/motion'
import { useModalIsolation } from '../../hooks/useModalIsolation'
import type { Story } from '../../types'
import ExternalLink from '../ui/ExternalLink'
import Photo from '../ui/Photo'
import StageTag from '../ui/StageTag'
import ChapterIndex from './ChapterIndex'
import Gallery from './Gallery'
import ReadingProgress from './ReadingProgress'
import ShareButtons from './ShareButtons'
import StoryCard from './StoryCard'
import VideoScene from './VideoScene'
import './StoryPanel.css'

/** Distancia (px) que hay que deslizar hacia abajo para cerrar el panel */
const SWIPE_TO_CLOSE = 120

const chapterDomId = (chapterId: string) => `relato-${chapterId}`

interface StoryPanelProps {
  story: Story
}

/**
 * Panel del relato: se abre a pantalla completa sobre la sección.
 * Se cierra con la cruz, con Escape o deslizando hacia abajo desde el inicio.
 */
function StoryPanel({ story }: StoryPanelProps) {
  const navigate = useNavigate()
  const { search } = useLocation()
  const stage = stageById[story.stage]

  const scrollRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const touchStartY = useRef<number | null>(null)
  const [progress, setProgress] = useState(0)
  const [activeChapter, setActiveChapter] = useState(story.chapters[0]?.id ?? '')
  const [dragY, setDragY] = useState(0)

  useModalIsolation()

  const close = useCallback(() => {
    navigate({ pathname: '/algodoneros', search })
  }, [navigate, search])

  // Foco en la cruz al abrir; al cerrar, vuelve a donde estaba (ej. "Leer la historia")
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    return () => {
      requestAnimationFrame(() => previous?.focus({ preventScroll: true }))
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [close])

  function handleScroll() {
    const el = scrollRef.current
    if (!el) return
    const max = el.scrollHeight - el.clientHeight
    setProgress(max > 0 ? Math.min(1, el.scrollTop / max) : 0)

    const threshold = el.getBoundingClientRect().top + el.clientHeight * 0.35
    let current = story.chapters[0]?.id ?? ''
    for (const chapter of story.chapters) {
      const node = document.getElementById(chapterDomId(chapter.id))
      if (node && node.getBoundingClientRect().top <= threshold) current = chapter.id
    }
    setActiveChapter(current)
  }

  function jumpTo(chapterId: string) {
    document
      .getElementById(chapterDomId(chapterId))
      ?.scrollIntoView({ behavior: scrollBehavior(), block: 'start' })
  }

  // Deslizar hacia abajo para cerrar, solo si el panel está al inicio
  function onTouchStart(event: TouchEvent) {
    const atTop = (scrollRef.current?.scrollTop ?? 0) <= 0
    touchStartY.current = atTop ? event.touches[0].clientY : null
  }

  function onTouchMove(event: TouchEvent) {
    if (touchStartY.current === null) return
    const delta = event.touches[0].clientY - touchStartY.current
    setDragY(delta > 0 ? delta : 0)
  }

  function onTouchEnd() {
    if (dragY > SWIPE_TO_CLOSE) close()
    else setDragY(0)
    touchStartY.current = null
  }

  const related = stories.filter((s) => s.stage === story.stage && s.slug !== story.slug)

  return createPortal(
    <div className="panel-backdrop">
      <title>{`${story.business} · Algodoneros`}</title>
      <div
        className="panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="panel-title"
        style={dragY > 0 ? { transform: `translateY(${dragY}px)`, transition: 'none' } : undefined}
      >
        <div
          className="panel__scroll"
          ref={scrollRef}
          onScroll={handleScroll}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="panel__bar">
            <span className="panel__grabber" aria-hidden="true" />
            <ReadingProgress progress={progress} stage={story.stage} />
            <p className="panel__bar-title">{story.business}</p>
            <button
              ref={closeRef}
              type="button"
              className="panel__close"
              onClick={close}
              aria-label="Cerrar el relato"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <article className="panel__article">
            <header className="panel__intro">
              <div className="panel__intro-text">
                <div className="panel__meta">
                  <StageTag stage={story.stage} />
                  <p className="label">
                    {story.person}
                    {story.age && `, ${story.age}`} · {story.locality} · {story.field}
                  </p>
                </div>
                <p className="panel__business">{story.business}</p>
                <h2 id="panel-title">{story.title}</h2>
                {story.note && <p className="panel__note">{story.note}</p>}
              </div>
              <Photo
                label={story.cover?.label ?? 'Retrato del emprendedor'}
                src={story.cover?.src}
                position={story.cover?.position}
                stage={story.stage}
                ratio="4 / 5"
                className="panel__portrait"
              />
            </header>

            <div className="panel__layout">
              <ChapterIndex chapters={story.chapters} activeId={activeChapter} onJump={jumpTo} />

              <div className="panel__content">
                {story.chapters.map((chapter, i) => (
                  <section
                    key={chapter.id}
                    id={chapterDomId(chapter.id)}
                    className="chapter"
                    aria-labelledby={`${chapterDomId(chapter.id)}-title`}
                  >
                    <p className="label chapter__num">Capítulo {i + 1}</p>
                    <h3 id={`${chapterDomId(chapter.id)}-title`}>{chapter.title}</h3>
                    {chapter.paragraphs.map((paragraph, p) => (
                      <Fragment key={paragraph}>
                        <p>{paragraph}</p>
                        {chapter.quote &&
                          p === (chapter.quoteAfter ?? chapter.paragraphs.length - 1) && (
                            <blockquote className="quote">{chapter.quote}</blockquote>
                          )}
                      </Fragment>
                    ))}
                    {chapter.media?.includes('video') && <VideoScene video={story.video} />}
                    {chapter.media?.includes('gallery') && <Gallery items={story.gallery} />}
                  </section>
                ))}

                <section className="learned" aria-labelledby="learned-title">
                  <h3 id="learned-title" className="label learned__label">
                    Lo que aprendí
                  </h3>
                  <p className="learned__text">{story.learned}</p>
                </section>

                {story.followUp && (
                  <aside className="follow-up" aria-label="Para seguir">
                    <p className="label">Para seguir</p>
                    <p>{story.followUp.text}</p>
                    <ExternalLink href={story.followUp.link.href} newTab className="follow-up__link">
                      {story.followUp.link.label} <span aria-hidden="true">↗</span>
                    </ExternalLink>
                  </aside>
                )}

                {story.onlinePresence && (
                  <aside className="presence" aria-label="Presencia online">
                    <p className="label">Presencia online · Todavía sin stand</p>
                    <dl>
                      <div>
                        <dt>Producto</dt>
                        <dd>{story.onlinePresence.product}</dd>
                      </div>
                      <div>
                        <dt>Localidad</dt>
                        <dd>{story.onlinePresence.locality}</dd>
                      </div>
                    </dl>
                    <ExternalLink href={story.onlinePresence.link.href} newTab className="presence__link">
                      {story.onlinePresence.link.label} <span aria-hidden="true">↗</span>
                    </ExternalLink>
                    <p className="presence__note">
                      Algodoneros no vende: la venta ya la resuelve{' '}
                      <ExternalLink href={partnerLinks.multitienda} newTab>
                        Multitienda
                      </ExternalLink>
                      .
                    </p>
                  </aside>
                )}

                <section className="socials" aria-labelledby="socials-title">
                  <h3 id="socials-title" className="panel-subtitle">
                    Conocé su emprendimiento
                  </h3>
                  <ul>
                    {story.socials.map((social) => (
                      <li key={social.label}>
                        <ExternalLink href={social.href} newTab className="btn btn--outline">
                          {social.label} <span aria-hidden="true">↗</span>
                        </ExternalLink>
                      </li>
                    ))}
                  </ul>
                </section>

                <ShareButtons story={story} />
              </div>
            </div>

            <section className="panel__more" aria-labelledby="more-title">
              <h3 id="more-title" className="panel-subtitle">
                {related.length > 0
                  ? `Otros relatos de ${stage.name.toLowerCase()}`
                  : 'Seguí recorriendo'}
              </h3>
              <div className="panel__more-grid">
                {related.map((item) => (
                  <StoryCard key={item.slug} story={item} />
                ))}
                <div className="panel__next">
                  <p>¿Querés seguir recorriendo?</p>
                  <Link className="btn btn--mint" to={{ pathname: '/algodoneros', search, hash: '#mapa' }}>
                    Ver el mapa
                  </Link>
                  <Link className="btn btn--tierra" to="/algodoneros/conta-tu-historia">
                    Contá tu historia <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default StoryPanel
