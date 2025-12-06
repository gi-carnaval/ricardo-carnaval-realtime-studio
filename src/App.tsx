import './App.css'
import { FrameOverlay } from './components/FrameOverlay'
import { TvSlideshow } from './components/TvSlideshow'
import { apiUrl, driveLink, eventId } from './data/config'

function App() {
  return (
    <div className="">
      <div className="relative w-full h-screen overflow-hidden">
        <FrameOverlay
          eventName="Casamento Letícia e Hélio"
        >
          <TvSlideshow driveLink={driveLink} apiUrl={apiUrl} eventId={eventId} />
        </FrameOverlay>
      </div>
    </div>
  )
}

export default App
