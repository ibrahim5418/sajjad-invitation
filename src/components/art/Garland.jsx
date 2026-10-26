import { memo } from 'react'
import { seeded, lerp } from './random'

// Horizontal rose swag used as the divider between every section.
function buildGarland(seed) {
  const r = seeded(seed)
  const W = 600
  const yAt = (x) => 30 + Math.sin((x / W) * Math.PI) * 10 // gentle sag
  const items = []

  // leaves + gold ferns along the vine, fanning outward from the centre
  for (let x = 6; x < W - 6; x += 5.5) {
    const side = x < W / 2 ? -1 : 1
    const fade = 1 - Math.abs(x - W / 2) / (W / 2)
    const len = lerp(0.5, 0.95, fade) + r() * 0.2
    const up = r() > 0.5 ? -1 : 1
    const angle = (side < 0 ? 180 : 0) + up * (10 + r() * 45)
    const gold = r() < 0.3
    items.push({ k: 'leaf', x, y: yAt(x) + (r() - 0.5) * 8, a: angle, s: len, gold })
  }

  // white blossoms and buds
  for (let i = 0; i < 34; i++) {
    const x = lerp(30, W - 30, r())
    items.push({ k: 'blossom', x, y: yAt(x) + (r() - 0.5) * 20, s: 0.45 + r() * 0.4 })
  }

  // roses along the whole swag, fuller and larger toward the centre
  const roses = []
  for (let i = 0; i < 40; i++) {
    const t = i < 14 ? r() : (r() + r()) / 2
    const x = lerp(30, W - 30, t)
    const fade = 1 - Math.abs(x - W / 2) / (W / 2)
    roses.push({ k: 'rose', x, y: yAt(x) + (r() - 0.5) * 14, s: lerp(7, 17, fade) + r() * 4, rot: r() * 360 })
  }
  roses.sort((a, b) => a.s - b.s)

  // hanging amaranthus strands under the centre
  const strands = []
  for (let i = 0; i < 7; i++) {
    const x = W / 2 + (i - 3) * 22 + (r() - 0.5) * 10
    const len = 10 + r() * 16 * (1 - Math.abs(i - 3) / 5)
    strands.push({ x, y: yAt(x) + 8, len, sway: (r() - 0.5) * 10 })
  }

  return { items, roses, strands, yAt, W }
}

const GARLANDS = [buildGarland(7), buildGarland(21)]

function Garland({ variant = 0, className = '' }) {
  const g = GARLANDS[variant % GARLANDS.length]
  return (
    <svg className={`garland ${className}`} viewBox="0 0 600 95" aria-hidden="true">
      <path d={`M10,30 Q300,52 590,30`} stroke="#4a3618" strokeWidth="2" fill="none" opacity="0.6" />
      {g.strands.map((s, i) => (
        <path
          key={i}
          d={`M${s.x},${s.y} q${s.sway},${s.len / 2} 0,${s.len}`}
          stroke="#7a0c18"
          strokeWidth="2.6"
          strokeDasharray="1.6 1.2"
          strokeLinecap="round"
          fill="none"
        />
      ))}
      {g.items.map((it, i) =>
        it.k === 'leaf' ? (
          <use
            key={i}
            href={it.gold ? '#fern' : '#leaf'}
            width={it.gold ? 30 : 22}
            height={it.gold ? 20 : 13}
            x="0"
            y={it.gold ? -10 : -6.5}
            transform={`translate(${it.x} ${it.y}) rotate(${it.a}) scale(${it.s * 1.6})`}
          />
        ) : (
          <use key={i} href="#blossom" x={-6 * it.s} y={-6 * it.s} width={12 * it.s} height={12 * it.s} transform={`translate(${it.x} ${it.y})`} />
        ),
      )}
      {g.roses.map((ro, i) => (
        <use
          key={i}
          href="#rose"
          x={-ro.s}
          y={-ro.s}
          width={ro.s * 2}
          height={ro.s * 2}
          transform={`translate(${ro.x} ${ro.y}) rotate(${ro.rot})`}
        />
      ))}
    </svg>
  )
}

export default memo(Garland)
