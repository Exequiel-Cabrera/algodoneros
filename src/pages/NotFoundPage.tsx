import { Link } from 'react-router'
import './pages.css'

function NotFoundPage() {
  return (
    <section className="section not-found">
      <title>Página no encontrada · Algodoneros</title>
      <div className="shell">
        <p className="eyebrow">Error 404</p>
        <h1>
          Esta página
          <br />
          <em>no existe.</em>
        </h1>
        <p>Puede que el enlace esté mal escrito o que el contenido se haya movido.</p>
        <Link className="btn btn--navy" to="/algodoneros">
          Volver a Algodoneros
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
