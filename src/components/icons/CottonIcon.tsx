interface CottonIconProps {
  size?: number
  /** Color de los tres círculos del capullo */
  color?: string
  /** Color del tallo */
  stemColor?: string
  strokeWidth?: number
  className?: string
}

/** Ícono del capullo: tres círculos de línea fina, como las ilustraciones del sitio. */
function CottonIcon({
  size = 28,
  color = 'var(--mint)',
  stemColor = 'var(--gold)',
  strokeWidth = 2.4,
  className,
}: CottonIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke={color} strokeWidth={strokeWidth}>
        <circle cx="13" cy="15" r="8" />
        <circle cx="27" cy="15" r="8" />
        <circle cx="20" cy="25" r="8" />
      </g>
      <path d="M20 33 L20 40" stroke={stemColor} strokeWidth={strokeWidth} />
    </svg>
  )
}

export default CottonIcon
