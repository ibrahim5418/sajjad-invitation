import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'

// Floating play/pause control for the background track.
const MusicToggle = forwardRef(function MusicToggle({ src }, ref) {
  const audio = useRef(null)
  const [playing, setPlaying] = useState(false)
  // true once the guest wants music on; cleared when they pause it themselves
  const wanted = useRef(false)

  const play = () => {
    wanted.current = true
    return audio.current
      ?.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false))
  }

  useImperativeHandle(ref, () => ({ play }))

  // Music only plays while the site is open on screen: hush it when the tab is
  // hidden or the phone is locked, and pick up again on return.
  useEffect(() => {
    const onVisibility = () => {
      const a = audio.current
      if (!a) return
      if (document.hidden) {
        a.pause()
        setPlaying(false)
      } else if (wanted.current) {
        a.play()
          .then(() => setPlaying(true))
          .catch(() => setPlaying(false))
      }
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  const toggle = () => {
    if (!audio.current) return
    if (playing) {
      wanted.current = false
      audio.current.pause()
      setPlaying(false)
    } else {
      play()
    }
  }

  return (
    <>
      <audio ref={audio} src={src} loop preload="auto" />
      <button className={`music-toggle ${playing ? 'is-playing' : ''}`} onClick={toggle} aria-label={playing ? 'Pause music' : 'Play music'}>
        <span />
        <span />
        <span />
        <span />
        <span />
      </button>
    </>
  )
})

export default MusicToggle
