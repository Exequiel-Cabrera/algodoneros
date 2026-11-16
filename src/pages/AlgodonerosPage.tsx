import { useOutlet } from 'react-router'
import { useScrollToHash } from '../hooks/useScrollToHash'
import AlgodonerosDeHoy from '../sections/AlgodonerosDeHoy'
import Apertura from '../sections/Apertura'
import Cultura from '../sections/Cultura'
import Franja from '../sections/Franja'
import LoQueAprendi from '../sections/LoQueAprendi'
import MapaAlgodoneros from '../sections/MapaAlgodoneros'
import ParteDeLaFiesta from '../sections/ParteDeLaFiesta'
import PorQue from '../sections/PorQue'
import Recorrido from '../sections/Recorrido'
import Sumate from '../sections/Sumate'

/**
 * Espacio Algodoneros (/algodoneros): los diez bloques en orden, de lo general a
 * lo particular. Si la ruta es /algodoneros/:slug, el panel del relato se abre
 * encima (ruta anidada) y la página sigue montada debajo.
 */
function AlgodonerosPage() {
  useScrollToHash()
  const storyPanel = useOutlet()

  return (
    <>
      {!storyPanel && <title>Algodoneros · Fiesta Nacional del Algodón</title>}
      <Apertura />
      <Franja />
      <PorQue />
      <Recorrido />
      <Cultura />
      <ParteDeLaFiesta />
      <AlgodonerosDeHoy />
      <LoQueAprendi />
      <MapaAlgodoneros />
      <Sumate />
      {storyPanel}
    </>
  )
}

export default AlgodonerosPage
