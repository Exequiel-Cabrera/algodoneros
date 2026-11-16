import type { Stage, StageId } from '../types'

/** Las tres etapas del algodón. Textos de la Consigna 4 · El recorrido. */
export const stages: Stage[] = [
  {
    id: 'cultivo',
    number: '01',
    name: 'Cultivo',
    moment: 'La idea y los primeros pasos.',
    description: 'Cómo empezaron otros jóvenes, sus dudas y lo que aprendieron.',
    photoLabel: 'Foto del emprendedor',
  },
  {
    id: 'crecimiento',
    number: '02',
    name: 'Crecimiento',
    moment: 'Funciona y busca consolidarse.',
    description: 'El proceso, los errores y los cambios, contados con fotos.',
    photoLabel: 'Foto del proceso',
  },
  {
    id: 'cosecha',
    number: '03',
    name: 'Cosecha',
    moment: 'Llegar a la fiesta y a nuevos mercados.',
    description:
      'Relatos de llegada y presencia online para quien todavía no tiene stand.',
    photoLabel: 'Foto de cosecha',
  },
]

export const stageById: Record<StageId, Stage> = {
  cultivo: stages[0],
  crecimiento: stages[1],
  cosecha: stages[2],
}

export function isStageId(value: string | null): value is StageId {
  return value === 'cultivo' || value === 'crecimiento' || value === 'cosecha'
}

/**
 * Temporada editorial según el mes:
 * diciembre a marzo, cultivo · abril a julio, crecimiento · agosto a noviembre, cosecha.
 */
export function seasonStage(date: Date): StageId {
  const month = date.getMonth() // 0 = enero
  if (month === 11 || month <= 2) return 'cultivo'
  if (month <= 6) return 'crecimiento'
  return 'cosecha'
}
