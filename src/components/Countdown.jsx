import { useEffect, useState } from 'react'
import { SectionHeading } from './Ornaments'
import Reveal from './Reveal'

function remaining(target) {
  const ms = Math.max(0, new Date(target).getTime() - Date.now())
  const s = Math.floor(ms / 1000)
  return {
    Days: Math.floor(s / 86400),
    Hours: Math.floor((s % 86400) / 3600),
    Minutes: Math.floor((s % 3600) / 60),
    Seconds: s % 60,
  }
}

export default function Countdown({ data }) {
  const [left, setLeft] = useState(() => remaining(data.eventDate))

  useEffect(() => {
    const t = setInterval(() => setLeft(remaining(data.eventDate)), 1000)
    return () => clearInterval(t)
  }, [data.eventDate])

  return (
    <section className="section sec-dark sec-countdown">
      <Reveal>
        <SectionHeading label={data.countdown.label} title={data.countdown.title} />
      </Reveal>
      <Reveal className="countdown" delay={120}>
        {Object.entries(left).map(([unit, value]) => (
          <div key={unit} className="cd-cell">
            <span className="cd-num">{String(value).padStart(2, '0')}</span>
            <span className="cd-unit">{unit}</span>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
