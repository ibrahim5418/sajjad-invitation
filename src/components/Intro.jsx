import { useCallback, useEffect, useRef, useState } from 'react'
import { Flourish } from './Ornaments'

// Full-screen opening film:
//   idle    → first frame (closed curtains) dimmed, with "tap to open"
//   playing → curtains part, camera glides into the hero frame (intro.mp4)
//   leaving → overlay fades out over the hero, which shows the same final frame
//   done    → overlay removed
const PLAYBACK_RATE = 1 // the 10.3s film plays at its natural pace
const END_LEAD = 0.3 // seconds before the end to start the hand-off
const SAFETY_MS = 14000 // finish even if the video stalls

export default function Intro({ media, onOpen, onDone }) {
  const video = useRef(null)
  const [phase, setPhase] = useState('idle')

  const leave = useCallback(() => setPhase((p) => (p === 'playing' ? 'leaving' : p)), [])

  useEffect(() => {
    if (phase === 'playing') {
      const t = setTimeout(leave, SAFETY_MS)
      return () => clearTimeout(t)
    }
    if (phase === 'leaving') {
      onDone?.()
      const t = setTimeout(() => setPhase('done'), 1000)
      return () => clearTimeout(t)
    }
  }, [phase, leave, onDone])

  const open = () => {
    if (phase !== 'idle') return
    onOpen?.()
    const v = video.current
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!v || reduced) {
      setPhase('playing')
      setTimeout(leave, 0)
      return
    }
    setPhase('playing')
    v.playbackRate = PLAYBACK_RATE
    v.play().catch(leave)
  }

  const onTime = (e) => {
    const v = e.currentTarget
    if (v.duration && v.currentTime >= v.duration - END_LEAD * PLAYBACK_RATE) leave()
  }

  if (phase === 'done') return null

  return (
    <div
      className={`intro intro-${phase}`}
      onClick={open}
      role="button"
      tabIndex={0}
      aria-label="Tap to open the invitation"
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && open()}
    >
      <video
        ref={video}
        className="intro-video stage-media"
        src={media.introVideo}
        poster={media.introPoster}
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        onTimeUpdate={onTime}
        onEnded={leave}
        onError={leave}
      />

      <div className="intro-cover">
        <div className="intro-vignette" />
        <div className="tap-ring" aria-hidden="true">
          <span />
        </div>
        <div className="tap-text">
          <Flourish className="tap-flourish" />
          <span>tap to open</span>
          <Flourish className="tap-flourish tap-flourish-b" />
        </div>
      </div>
    </div>
  )
}
