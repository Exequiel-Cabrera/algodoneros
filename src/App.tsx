import { Navigate, Route, Routes } from 'react-router'
import Layout from './components/layout/Layout'
import AlgodonerosPage from './pages/AlgodonerosPage'
import ContaTuHistoriaPage from './pages/ContaTuHistoriaPage'
import NotFoundPage from './pages/NotFoundPage'
import StoryRoute from './pages/StoryRoute'

/**
 * Rutas
 *   /                                → redirige a /algodoneros
 *   /algodoneros                     → la sección (?etapa=cultivo|crecimiento|cosecha filtra los relatos)
 *   /algodoneros/:slug               → la sección con el panel del relato abierto
 *   /algodoneros/conta-tu-historia   → formulario de cinco pasos
 *   *                                → página no encontrada
 */
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/algodoneros" replace />} />
        <Route path="algodoneros" element={<AlgodonerosPage />}>
          <Route path=":slug" element={<StoryRoute />} />
        </Route>
        <Route path="algodoneros/conta-tu-historia" element={<ContaTuHistoriaPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
