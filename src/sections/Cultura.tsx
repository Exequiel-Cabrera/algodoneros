import CottonIcon from '../components/icons/CottonIcon'
import './Cultura.css'

const pillars = [
  {
    num: '01',
    title: 'Emprender se aprende viendo a otros.',
    text: 'Emprender es una práctica social: un modo de hacer que se aprende mirando a quienes ya lo hacen y que se transmite con relatos.',
  },
  {
    num: '02',
    title: 'Toda la provincia, conectada.',
    text: 'Algodoneros conecta a emprendedores de distintas localidades y los hace visibles entre sí.',
  },
  {
    num: '03',
    title: 'La palabra, para más voces.',
    text: 'Da lugar a voces que hoy no llegan a la fiesta y les cede la palabra, en vez de presentarlas desde una institución.',
  },
]

/** Bloque 5 · La cultura como eje */
function Cultura() {
  return (
    <section className="section cultura on-dark" aria-labelledby="cultura-title">
      <div className="dot-field cultura__dots" aria-hidden="true" />
      <div className="shell">
        <div className="split-heading reveal">
          <div>
            <p className="eyebrow eyebrow--light">La cultura como eje</p>
            <h2 id="cultura-title">
              No es un servicio.
              <br />
              <em>Es una cultura.</em>
            </h2>
          </div>
          <p>
            Lo que Algodoneros extiende es la forma en que los jóvenes chaqueños emprenden, los
            saberes que comparten y la identidad que ponen en lo que hacen. Los relatos son el
            medio para que esa cultura llegue a más personas.
          </p>
        </div>

        <div className="pillars">
          {pillars.map((pillar) => (
            <article key={pillar.num} className="pillar reveal">
              <span className="pillar__num">{pillar.num}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>

        <div className="cotton-line reveal">
          <CottonIcon size={64} strokeWidth={2} />
          <p>
            El algodón es parte de la identidad productiva del Chaco.{' '}
            <strong>Como el algodón, echan raíces y crecen en esta tierra.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Cultura
