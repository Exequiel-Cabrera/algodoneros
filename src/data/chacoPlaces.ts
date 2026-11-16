import type { LatLon } from '../utils/geo'

/*
 * Lugares de referencia del mapa de Algodoneros.
 * Coordenadas de localidades: API Georef (datos.gob.ar), centroide de cada localidad.
 * Las posiciones de los textos (x, y) están en unidades del dibujo (ver MAP_SIZE en chacoGeo.ts).
 */

export interface Town extends LatLon {
  name: string
  /** Las secundarias se ocultan en pantallas chicas */
  major?: boolean
  /** Lado del punto donde va el nombre */
  side?: 'left' | 'right' | 'top' | 'bottom'
}

export const towns: Town[] = [
  { name: 'Resistencia', lat: -27.4511, lon: -58.9865, major: true, side: 'left' },
  { name: 'Sáenz Peña', lat: -26.791, lon: -60.4412, major: true, side: 'right' },
  { name: 'Villa Ángela', lat: -27.5769, lon: -60.7111, major: true, side: 'right' },
  { name: 'Charata', lat: -27.2179, lon: -61.1873, major: true, side: 'right' },
  { name: 'J. J. Castelli', lat: -25.9466, lon: -60.6201, major: true, side: 'right' },
  { name: 'Gral. San Martín', lat: -26.5363, lon: -59.3413, major: true, side: 'left' },
  { name: 'Taco Pozo', lat: -25.615, lon: -63.2649, side: 'bottom' },
  { name: 'El Sauzalito', lat: -24.428, lon: -61.6832, side: 'left' },
  { name: 'Nueva Pompeya', lat: -24.9331, lon: -61.4831, side: 'left' },
  { name: 'Los Frentones', lat: -26.4071, lon: -61.4129, side: 'left' },
  { name: 'Concepción del Bermejo', lat: -26.6003, lon: -60.9462, side: 'left' },
  { name: 'Tres Isletas', lat: -26.3403, lon: -60.4313, side: 'right' },
  { name: 'General Pinedo', lat: -27.3254, lon: -61.281, side: 'left' },
]

/** Provincias y país vecinos */
export const neighborLabels = [
  { name: 'Salta', x: 70, y: 110 },
  { name: 'Formosa', x: 420, y: 150 },
  { name: 'Paraguay', x: 545, y: 60 },
  { name: 'Corrientes', x: 556, y: 430 },
  { name: 'Santiago', x: 110, y: 322, second: 'del Estero' },
  { name: 'Santa Fe', x: 330, y: 502 },
]

/** Ríos que marcan los límites de la provincia */
export const riverLabels = [
  { name: 'Río Bermejo', x: 352, y: 178, angle: 38 },
  { name: 'Río Paraguay', x: 566, y: 312, angle: 52 },
  { name: 'Río Paraná', x: 522, y: 470, angle: -80 },
]

/** Región del noroeste */
export const regionLabel = { name: 'El Impenetrable', x: 255, y: 205 }
