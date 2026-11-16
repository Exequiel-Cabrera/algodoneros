export type StageId = 'cultivo' | 'crecimiento' | 'cosecha'

export interface Stage {
  id: StageId
  number: string
  name: string
  /** Momento del emprendimiento, ej. "La idea y los primeros pasos" */
  moment: string
  description: string
  /** Qué foto lleva la tarjeta del relato en esta etapa */
  photoLabel: string
}

export type ChapterMedia = 'video' | 'gallery'

export interface Chapter {
  id: string
  title: string
  paragraphs: string[]
  /** Cita destacada, con la voz del protagonista */
  quote?: string
  /** Índice del párrafo después del cual va la cita (por defecto, al final del capítulo) */
  quoteAfter?: number
  /** Recursos que se intercalan al final del capítulo, en este orden: video, galería */
  media?: ChapterMedia[]
}

export interface StoryLink {
  label: string
  href: string
}

/** Una foto del relato. Sin `src`, se muestra un recuadro con el texto de `label`. */
export interface StoryPhoto {
  /** Qué muestra la foto. Es el texto alternativo, o el del recuadro si todavía no hay foto. */
  label: string
  /** Archivo de la foto (importado desde src/assets) */
  src?: string
  /** Punto de la foto que queda a la vista al recortarla (`object-position`), ej. 'center 25%' */
  position?: string
}

/** Un elemento de la galería: una foto (por defecto) o un video vertical */
export interface GalleryItem extends StoryPhoto {
  type?: 'photo' | 'video'
}

/** Escena en video. Sin `src`, se muestra el recuadro de la maqueta. */
export interface StoryVideo {
  /** Qué se ve en la escena (epígrafe) */
  caption: string
  /** Archivo del video vertical (importado desde src/assets) */
  src?: string
}

export interface Story {
  slug: string
  stage: StageId
  business: string
  person: string
  /** Va después del nombre: la edad, o la ocupación si no se publica la edad */
  age?: string
  locality: string
  /** Rubro */
  field: string
  /** Título tomado de una frase del protagonista */
  title: string
  /** Bajada breve para la tarjeta */
  summary: string
  /** Portada: la foto de la tarjeta, del retrato del panel, del mapa y de la placa para compartir */
  cover?: StoryPhoto
  /** Aviso breve al inicio del panel, por ejemplo para un relato de muestra */
  note?: string
  chapters: Chapter[]
  /** Cierre del relato: un saber concreto contado de par a par */
  learned: string
  /** Escena en video del capítulo que la lleva */
  video?: StoryVideo
  /** Fotos y videos de la galería, con su epígrafe */
  gallery: GalleryItem[]
  /** Recuadro que deriva a la Subsecretaría cuando el relato lo pide */
  followUp?: { text: string; link: StoryLink }
  socials: StoryLink[]
  /** Ficha de presencia online para quien todavía no tiene stand (etapa Cosecha) */
  onlinePresence?: { product: string; locality: string; link: StoryLink }
  /** Ubicación de la localidad, para el mapa (se puede tomar de la API Georef o de Google Maps) */
  coords: { lat: number; lon: number }
  /** Fecha de publicación (AAAA-MM-DD), para ordenar de más reciente a más antiguo */
  publishedAt: string
}
