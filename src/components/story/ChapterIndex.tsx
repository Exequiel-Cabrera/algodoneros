import type { Chapter } from '../../types'

interface ChapterIndexProps {
  chapters: Chapter[]
  activeId: string
  onJump: (id: string) => void
}

/** Índice de capítulos: queda fijo arriba (o al costado) mientras se lee. */
function ChapterIndex({ chapters, activeId, onJump }: ChapterIndexProps) {
  return (
    <nav className="chapter-index" aria-label="Capítulos del relato">
      <p className="label chapter-index__title">Capítulos</p>
      <ol>
        {chapters.map((chapter, i) => (
          <li key={chapter.id}>
            <button
              type="button"
              className="chapter-index__item"
              aria-current={chapter.id === activeId ? 'true' : undefined}
              onClick={() => onJump(chapter.id)}
            >
              <span className="chapter-index__num">{String(i + 1).padStart(2, '0')}</span>
              <span>{chapter.title}</span>
            </button>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default ChapterIndex
