import './Franja.css'

const words = ['Todo el año', 'Chaco', 'Cultivo', 'Crecimiento', 'Cosecha', 'Jóvenes que emprenden']

function Sequence() {
  return (
    <span className="franja__seq">
      {words.map((word) => (
        <span key={word}>
          {word} <span className="franja__star">✦</span>
        </span>
      ))}
    </span>
  )
}

/** Bloque 2 · Franja animada */
function Franja() {
  return (
    <div className="franja" role="presentation">
      <p className="sr-only">{words.join(', ')}</p>
      <div className="franja__track" aria-hidden="true">
        <Sequence />
        <Sequence />
      </div>
    </div>
  )
}

export default Franja
