import './ParteDeLaFiesta.css'

/** Bloque 6 · Parte de la fiesta */
function ParteDeLaFiesta() {
  return (
    <section className="section parte" aria-labelledby="parte-title">
      <div className="shell">
        <div className="split-heading reveal">
          <div>
            <p className="eyebrow">Parte de la fiesta</p>
            <h2 id="parte-title">
              Suma lo que
              <br />
              <em>hoy no está.</em>
            </h2>
          </div>
          <p>
            Algodoneros no reemplaza ninguna sección del sitio: extiende cada una y suma la
            experiencia de los emprendedores durante el resto del año.
          </p>
        </div>

        <div className="two-way">
          <article className="way way--fiesta reveal">
            <p className="label">Algodoneros le aporta a la fiesta</p>
            <h3>Presencia todo el año.</h3>
            <p>
              Futuros expositores mejor preparados y un acceso para quienes hoy no consiguen un
              lugar, por costo o por cupo.
            </p>
          </article>
          <article className="way way--algodoneros reveal">
            <p className="label">La fiesta le aporta a Algodoneros</p>
            <h3>Una cosecha cada año.</h3>
            <p>
              Visibilidad, el respaldo de un evento con historia y un momento presencial que cada
              año cierra el ciclo con la cosecha.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ParteDeLaFiesta
