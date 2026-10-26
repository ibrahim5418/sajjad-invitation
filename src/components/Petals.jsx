import { useMemo } from 'react'

// Rose-petal shower that drifts down over the page; re-runs whenever `burst` changes.
export default function Petals({ burst }) {
  const petals = useMemo(
    () =>
      burst
        ? Array.from({ length: 46 }, (_, i) => ({
            id: `${burst}-${i}`,
            left: Math.random() * 100,
            size: 8 + Math.random() * 10,
            delay: Math.random() * 1.6,
            dur: 3.6 + Math.random() * 2.8,
            drift: (Math.random() - 0.5) * 140,
            spin: (Math.random() - 0.5) * 720,
            hue: Math.random() < 0.5 ? '#b3121f' : Math.random() < 0.5 ? '#d42a2f' : '#8a0a15',
          }))
        : [],
    [burst],
  )

  if (!burst) return null
  return (
    <div className="petals" aria-hidden="true">
      {petals.map((p) => (
        <svg
          key={p.id}
          className="petal"
          viewBox="0 0 20 24"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 1.2,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
            '--drift': `${p.drift}px`,
            '--spin': `${p.spin}deg`,
          }}
        >
          <path d="M10,0 C18,4 20,14 10,24 C0,14 2,4 10,0Z" fill={p.hue} />
          <path d="M10,3 C12,9 12,15 10,21" stroke="#fff" strokeOpacity="0.18" fill="none" />
        </svg>
      ))}
    </div>
  )
}
