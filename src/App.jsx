import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { invitation } from './data/invitation'
import Defs from './components/art/Defs'
import Garland from './components/art/Garland'
import Intro from './components/Intro'
import Hero from './components/Hero'
import ScratchReveal from './components/ScratchReveal'
import Countdown from './components/Countdown'
import Petals from './components/Petals'
import MusicToggle from './components/MusicToggle'
import { Blessing, Timeline, Venue, DressCode, Festivities, Presence, Closing } from './components/Sections'

// Photo garland; falls back to the drawn SVG if the image is missing.
function Swag({ variant = 0 }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="swag" aria-hidden="true">
      {failed ? (
        <Garland variant={variant} />
      ) : (
        <img
          className={`garland-img ${variant % 2 ? 'is-flipped' : ''}`}
          src={invitation.media.garland}
          alt=""
          draggable="false"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

export default function App() {
  const [introDone, setIntroDone] = useState(false)
  const [burst, setBurst] = useState(0)
  const music = useRef(null)

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('locked', !introDone)
  }, [introDone])

  const handleOpen = useCallback(() => music.current?.play(), [])
  const handleDone = useCallback(() => setIntroDone(true), [])

  // Optional sections are skipped when their data is null; garlands sit between the rest.
  const sections = [
    <Blessing data={invitation} />,
    <ScratchReveal data={invitation} onReveal={() => setBurst((b) => b + 1)} />,
    <Countdown data={invitation} />,
    invitation.timeline && <Timeline data={invitation} />,
    <Venue data={invitation} />,
    invitation.dressCode && <DressCode data={invitation} />,
    invitation.festivities && <Festivities data={invitation} />,
    <Presence data={invitation} />,
    <Closing data={invitation} />,
  ].filter(Boolean)

  return (
    <>
      <Defs />
      <div className="backdrop" aria-hidden="true" />
      <main className="invite">
        <Hero data={invitation} ready={introDone} />
        {sections.map((section, i) => (
          <Fragment key={i}>
            <Swag variant={i % 2} />
            {section}
          </Fragment>
        ))}

        <Intro media={invitation.media} onOpen={handleOpen} onDone={handleDone} />
        <Petals burst={burst} />
        <MusicToggle ref={music} src={invitation.music} />
      </main>
    </>
  )
}
