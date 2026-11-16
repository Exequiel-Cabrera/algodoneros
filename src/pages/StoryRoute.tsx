import { Navigate, useLocation, useParams } from 'react-router'
import StoryPanel from '../components/story/StoryPanel'
import { findStory } from '../data/stories'

/** /algodoneros/:slug → abre el panel del relato. Si no existe, vuelve a la sección. */
function StoryRoute() {
  const { slug } = useParams()
  const { search } = useLocation()
  const story = findStory(slug)

  if (!story) return <Navigate to={{ pathname: '/algodoneros', search }} replace />

  // key: al pasar de un relato a otro, el panel arranca de cero (scroll, foco, audio)
  return <StoryPanel key={story.slug} story={story} />
}

export default StoryRoute
