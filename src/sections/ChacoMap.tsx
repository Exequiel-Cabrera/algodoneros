import type { PointerEvent } from 'react'
import { departments, MAP_SIZE, neighbors } from '../data/chacoGeo'
import { neighborLabels, regionLabel, riverLabels, towns, type Town } from '../data/chacoPlaces'
import { KM_PER_UNIT, project } from '../utils/geo'

const { width: W, height: H } = MAP_SIZE

/** Todo el contorno de la provincia en un solo trazo (para la trama y el borde) */
const provincePath = departments.map((dep) => dep.d).join('')

const SCALE_KM = 100
const scaleLength = SCALE_KM / KM_PER_UNIT

function townLabelProps(town: Town, x: number, y: number) {
  const gap = town.major ? 7 : 5.5
  switch (town.side) {
    case 'left':
      return { x: x - gap, y: y + 4, textAnchor: 'end' as const }
    case 'top':
      return { x, y: y - gap, textAnchor: 'middle' as const }
    case 'bottom':
      return { x, y: y + gap + 9, textAnchor: 'middle' as const }
    default:
      return { x: x + gap, y: y + 4, textAnchor: 'start' as const }
  }
}

interface ChacoMapProps {
  /** Departamento resaltado (al pasar el mouse, al tocarlo o el del relato elegido) */
  activeDepartment: string | null
  onDepartmentChange: (name: string | null) => void
}

/**
 * Mapa del Chaco con sus 25 departamentos, provincias vecinas, ríos y localidades
 * de referencia. Dibujado con datos abiertos (IGN y Georef) en proyección simple.
 */
function ChacoMap({ activeDepartment, onDepartmentChange }: ChacoMapProps) {
  const active = departments.find((dep) => dep.name === activeDepartment)

  const onEnter = (name: string) => (event: PointerEvent) => {
    if (event.pointerType === 'mouse') onDepartmentChange(name)
  }

  return (
    <svg
      className="chaco-map"
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label="Mapa de la provincia del Chaco con sus departamentos, sus límites con Salta, Formosa, Paraguay, Corrientes, Santa Fe y Santiago del Estero, y las principales localidades"
    >
      <defs>
        <pattern id="chaco-dots" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.1" fill="rgba(142, 216, 195, 0.16)" />
        </pattern>
      </defs>

      {/* Agua: se ve en los ríos que separan al Chaco de sus vecinos */}
      <rect className="chaco-map__water" width={W} height={H} />

      <g className="chaco-map__neighbors">
        {neighbors.map((shape) => (
          <path key={shape.name} d={shape.d} />
        ))}
      </g>

      {/* Borde exterior de la provincia */}
      <path className="chaco-map__border" d={provincePath} />

      <g className="chaco-map__departments" onPointerLeave={() => onDepartmentChange(null)}>
        {departments.map((dep) => (
          <path
            key={dep.name}
            d={dep.d}
            className={dep.name === activeDepartment ? 'is-active' : undefined}
            onPointerEnter={onEnter(dep.name)}
            onClick={() => onDepartmentChange(dep.name)}
          >
            <title>{`Departamento ${dep.name}`}</title>
          </path>
        ))}
      </g>

      <path className="chaco-map__texture" d={provincePath} />
      {active && <path className="chaco-map__highlight" d={active.d} />}

      <g className="chaco-map__labels" aria-hidden="true">
        {neighborLabels.map((label) => (
          <text key={label.name} className="chaco-map__neighbor" x={label.x} y={label.y} textAnchor="middle">
            {label.name}
            {label.second && (
              <tspan x={label.x} dy="15">
                {label.second}
              </tspan>
            )}
          </text>
        ))}

        {riverLabels.map((river) => (
          <text
            key={river.name}
            className="chaco-map__river"
            textAnchor="middle"
            transform={`translate(${river.x} ${river.y}) rotate(${river.angle})`}
          >
            {river.name}
          </text>
        ))}

        <text className="chaco-map__region" x={regionLabel.x} y={regionLabel.y} textAnchor="middle">
          {regionLabel.name}
        </text>

        {towns.map((town) => {
          const { x, y } = project(town)
          return (
            <g key={town.name} className={`chaco-map__town${town.major ? ' is-major' : ''}`}>
              <circle cx={x} cy={y} r={town.major ? 3.6 : 2.6} />
              <text {...townLabelProps(town, x, y)}>{town.name}</text>
            </g>
          )
        })}

        {/* Rosa de los vientos */}
        <g className="chaco-map__compass" transform={`translate(40 ${H - 66})`}>
          <circle r="17" />
          <path d="M0 -12 L5 3 L0 0 L-5 3 Z" />
          <text y="13" textAnchor="middle">
            N
          </text>
        </g>

        {/* Escala */}
        <g className="chaco-map__scale" transform={`translate(22 ${H - 24})`}>
          <rect width={scaleLength / 2} height="5" className="is-filled" />
          <rect x={scaleLength / 2} width={scaleLength / 2} height="5" />
          <text y="-6">0</text>
          <text x={scaleLength} y="-6" textAnchor="end">
            {SCALE_KM} km
          </text>
        </g>
      </g>
    </svg>
  )
}

export default ChacoMap
