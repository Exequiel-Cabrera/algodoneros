import './PorQue.css'

const problems = [
  {
    num: '01',
    kicker: 'En el tiempo',
    title: 'Tres días al año.',
    text: 'La fiesta dura tres días y su comunicación se concentra alrededor del evento.',
    strong: 'El resto del año, la conversación se apaga.',
  },
  {
    num: '02',
    kicker: 'En el acceso',
    title: 'Lugares limitados.',
    text: 'Para participar como expositor hay que conseguir un lugar, y los espacios son limitados.',
    strong: 'Muchos de quienes están empezando, y en especial los jóvenes, quedan fuera o solo aparecen tres días.',
  },
]

/** Bloque 3 · Por qué Algodoneros */
function PorQue() {
  return (
    <section className="section porque" aria-labelledby="porque-title">
      <div className="dot-field porque__dots" aria-hidden="true" />
      <div className="shell">
        <div className="split-heading reveal">
          <div>
            <p className="eyebrow">Por qué Algodoneros</p>
            <h2 id="porque-title">
              No hace falta irse
              <br />
              <em>para crecer.</em>
            </h2>
          </div>
          <p>
            En el interior del Chaco está instalada la idea de que para progresar hay que irse, y
            a los jóvenes les faltan referentes cercanos que muestren lo contrario. La fiesta
            podría ser ese espacio, pero hoy es un escenario acotado en dos sentidos.
          </p>
        </div>

        <div className="porque__grid">
          {problems.map((problem) => (
            <article key={problem.num} className="problem reveal">
              <span className="problem__num">{problem.num}</span>
              <p className="label problem__kicker">{problem.kicker}</p>
              <h3>{problem.title}</h3>
              <p>
                {problem.text} <strong>{problem.strong}</strong>
              </p>
            </article>
          ))}
        </div>

        <div className="idea reveal">
          <span className="idea__label">Idea fuerza</span>
          <div>
            <blockquote>
              Mostrar que en el Chaco se puede emprender sin irse y{' '}
              <em>llevar la fiesta a quienes todavía no pueden participar de ella.</em>
            </blockquote>
            <p>
              Quien aún no consigue un lugar en la fiesta puede ser parte online: contar su
              historia, conocer la de otros y prepararse para llegar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PorQue
