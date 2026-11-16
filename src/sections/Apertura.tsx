import { Link } from 'react-router'
import CottonIcon from '../components/icons/CottonIcon'
import './Apertura.css'

/** Sello circular "Todo el año" que gira despacio */
function Seal() {
  return (
    <span className="seal" aria-hidden="true">
      <svg className="seal__ring" viewBox="0 0 120 120">
        <defs>
          <path id="seal-circle" d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" />
        </defs>
        <text>
          <textPath href="#seal-circle" textLength="276">
            TODO EL AÑO · TODO EL AÑO · TODO EL AÑO ·
          </textPath>
        </text>
      </svg>
      <CottonIcon className="seal__icon" size={34} color="var(--cream)" stemColor="var(--cream)" />
    </span>
  )
}

/** Bloque 1 · Apertura */
function Apertura() {
  return (
    <section className="apertura" aria-labelledby="apertura-title">
      <div className="surcos" aria-hidden="true" />
      <div className="dot-field apertura__dots" aria-hidden="true" />

      <div className="shell apertura__grid">
        <div>
          <p className="eyebrow eyebrow--cream">Nueva sección · Todo el año</p>
          <h1 id="apertura-title">
            Algodoneros
            <em>La cultura del emprendimiento joven en el Chaco.</em>
          </h1>
          <p className="apertura__lead">
            <strong>Algodoneros es una rama de la Fiesta Nacional del Algodón</strong> que
            extiende la cultura del emprendimiento joven en el Chaco durante todo el año, no solo
            durante los tres días de la fiesta. Cuenta el recorrido de los emprendedores usando
            como metáfora las tres etapas del algodón.
          </p>
          <div className="btn-row">
            <Link className="btn btn--navy" to="#recorrido">
              Recorrer las etapas <span aria-hidden="true">↓</span>
            </Link>
            <Link className="btn btn--ghost" to="#sumate">
              Quiero participar
            </Link>
          </div>
        </div>

        <aside className="apertura__card reveal" aria-label="La fiesta y Algodoneros">
          <p className="label apertura__tag">Sáenz Peña hace la fiesta</p>
          <div className="apertura__compare">
            <div>
              <strong>3</strong>
              <small>días de fiesta</small>
            </div>
            <span className="apertura__arrow" aria-hidden="true">
              →
            </span>
            <div>
              <strong className="is-tierra">365</strong>
              <small>días de Algodoneros</small>
            </div>
          </div>
          <p>
            La fiesta celebra la producción chaqueña tres días al año. Algodoneros mantiene viva
            su cultura emprendedora el resto del año, online y en todas las localidades de la
            provincia.
          </p>
          <Seal />
        </aside>
      </div>
    </section>
  )
}

export default Apertura
