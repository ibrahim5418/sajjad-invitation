import { useEffect, useRef, useState } from 'react'
import { Divider } from './Ornaments'
import Reveal from './Reveal'

const REVEAL_AT = 0.42 // fraction scratched before the card auto-clears

function paintCover(canvas) {
  const ctx = canvas.getContext('2d')
  const { width: w, height: h } = canvas
  const g = ctx.createLinearGradient(0, 0, w, h)
  g.addColorStop(0, '#6e0a14')
  g.addColorStop(0.5, '#b0182a')
  g.addColorStop(1, '#7c0c18')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, w, h)
  const rg = ctx.createRadialGradient(w * 0.55, h * 0.4, 0, w * 0.55, h * 0.4, w * 0.6)
  rg.addColorStop(0, 'rgba(255,140,150,0.25)')
  rg.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.fillStyle = rg
  ctx.fillRect(0, 0, w, h)
  // glitter
  for (let i = 0; i < 260; i++) {
    const x = Math.random() * w
    const y = Math.random() * h
    const s = Math.random() * 1.6 + 0.3
    ctx.fillStyle = Math.random() < 0.5 ? 'rgba(255,215,150,0.75)' : 'rgba(255,255,255,0.6)'
    ctx.beginPath()
    ctx.arc(x, y, s * (w / 400), 0, Math.PI * 2)
    ctx.fill()
  }
  // a few four-point sparkles
  ctx.strokeStyle = 'rgba(255,230,190,0.8)'
  ctx.lineWidth = w / 400
  for (let i = 0; i < 14; i++) {
    const x = Math.random() * w
    const y = Math.random() * h
    const s = (Math.random() * 4 + 3) * (w / 400)
    ctx.beginPath()
    ctx.moveTo(x - s, y)
    ctx.lineTo(x + s, y)
    ctx.moveTo(x, y - s)
    ctx.lineTo(x, y + s)
    ctx.stroke()
  }
}

function ScratchCanvas({ onDone }) {
  const ref = useRef(null)
  const state = useRef({ drawing: false, last: null, moves: 0, done: false })
  const [cleared, setCleared] = useState(false)

  useEffect(() => {
    const canvas = ref.current
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const rect = canvas.getBoundingClientRect()
    canvas.width = Math.round(rect.width * dpr)
    canvas.height = Math.round(rect.height * dpr)
    paintCover(canvas)
  }, [])

  const pos = (e) => {
    const canvas = ref.current
    const r = canvas.getBoundingClientRect()
    return [((e.clientX - r.left) / r.width) * canvas.width, ((e.clientY - r.top) / r.height) * canvas.height]
  }

  const progress = () => {
    const canvas = ref.current
    const { data } = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height)
    let clear = 0
    let total = 0
    for (let i = 3; i < data.length; i += 4 * 24) {
      total++
      if (data[i] < 128) clear++
    }
    return clear / total
  }

  const scratch = (from, to) => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    ctx.globalCompositeOperation = 'destination-out'
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.lineWidth = canvas.width * 0.13
    ctx.beginPath()
    ctx.moveTo(...from)
    ctx.lineTo(...to)
    ctx.stroke()
  }

  const finish = () => {
    if (state.current.done) return
    state.current.done = true
    setCleared(true)
    onDone()
  }

  const down = (e) => {
    if (state.current.done) return
    e.currentTarget.setPointerCapture?.(e.pointerId)
    state.current.drawing = true
    const p = pos(e)
    state.current.last = p
    scratch(p, [p[0] + 0.1, p[1] + 0.1])
  }
  const move = (e) => {
    const s = state.current
    if (!s.drawing || s.done) return
    const p = pos(e)
    scratch(s.last, p)
    s.last = p
    if (++s.moves % 8 === 0 && progress() > REVEAL_AT) finish()
  }
  const up = () => {
    const s = state.current
    s.drawing = false
    if (!s.done && progress() > REVEAL_AT) finish()
  }

  return (
    <canvas
      ref={ref}
      className={`scratch-canvas ${cleared ? 'is-cleared' : ''}`}
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={up}
      onPointerCancel={up}
      aria-label="Scratch to reveal the date"
    />
  )
}

export default function ScratchReveal({ data, onReveal }) {
  const [revealed, setRevealed] = useState(false)
  const d = data.date

  const done = () => {
    setRevealed(true)
    onReveal?.()
  }

  return (
    <section className="section sec-date">
      <Reveal as="header" className="sec-head">
        <p className="eyebrow">{d.label}</p>
        <h2 className="script-title swap-title">
          <span className={revealed ? 'is-out' : ''}>{d.titleBefore}</span>
          <span className={revealed ? '' : 'is-out'} aria-hidden={!revealed}>
            {d.titleAfter}
          </span>
        </h2>
        <Divider />
      </Reveal>

      <Reveal className={`scratch-frame ${revealed ? 'is-revealed' : ''}`} delay={120}>
        <div className="sf-window">
          <div className="sf-card">
            <p className="sf-invited">{d.invited}</p>
            <p className="sf-date">{d.long}</p>
            <p className="sf-time">{d.dayTime}</p>
          </div>
          <ScratchCanvas onDone={done} />
        </div>
        <img className="sf-frame" src={data.media.scratchFrame} alt="" draggable="false" />
      </Reveal>
    </section>
  )
}
