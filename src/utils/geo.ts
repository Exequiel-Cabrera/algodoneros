import { departments, PROJECTION } from '../data/chacoGeo'

export interface LatLon {
  lat: number
  lon: number
}

export interface Point {
  x: number
  y: number
}

/** Convierte latitud y longitud en coordenadas del dibujo del mapa */
export function project({ lat, lon }: LatLon): Point {
  return {
    x: (lon - PROJECTION.lonMin) * PROJECTION.cos * PROJECTION.k,
    y: (PROJECTION.latMax - lat) * PROJECTION.k,
  }
}

/** Kilómetros representados por una unidad del dibujo */
export const KM_PER_UNIT = 111.32 / PROJECTION.k

/** Lee los anillos de un path "M x yL x y…Z" generado por el script del mapa */
function parseRings(d: string): Array<Array<[number, number]>> {
  return d
    .split('Z')
    .filter(Boolean)
    .map((part) =>
      part
        .replace('M', '')
        .split('L')
        .map((pair) => {
          const [x, y] = pair.trim().split(' ').map(Number)
          return [x, y] as [number, number]
        }),
    )
}

function inRing({ x, y }: Point, ring: Array<[number, number]>) {
  let inside = false
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i]
    const [xj, yj] = ring[j]
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside
  }
  return inside
}

const departmentRings = departments.map((dep) => ({ name: dep.name, rings: parseRings(dep.d) }))

/** Nombre del departamento del Chaco que contiene la ubicación, si la hay */
export function departmentAt(coords: LatLon): string | undefined {
  const point = project(coords)
  return departmentRings.find((dep) => dep.rings.some((ring) => inRing(point, ring)))?.name
}
