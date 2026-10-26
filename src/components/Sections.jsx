import { Divider, SectionHeading } from './Ornaments'
import Reveal from './Reveal'

export function Blessing({ data }) {
  const { bride, groom, blessing } = data
  return (
    <section className="section sec-blessing">
      <span className="halo halo-l" aria-hidden="true" />
      <span className="halo halo-r" aria-hidden="true" />
      <Reveal as="h2" className="script-title">
        {blessing.title}
      </Reveal>
      <Reveal as="p" className="body-text" delay={100}>
        {blessing.text}
      </Reveal>
      <Reveal as="p" className="couple" delay={200}>
        {groom.first} <span className="amp">&amp;</span> {bride.first}
      </Reveal>
    </section>
  )
}

export function Timeline({ data }) {
  const { label, title, items } = data.timeline
  return (
    <section className="section sec-tan sec-timeline">
      <Reveal>
        <SectionHeading label={label} title={title} />
      </Reveal>
      <ol className="timeline">
        {items.map((it, i) => (
          <Reveal as="li" key={it.title} delay={i * 90}>
            <span className="tl-time">{it.time}</span>
            <span className="tl-dot" aria-hidden="true" />
            <div className="tl-body">
              <h3>{it.title}</h3>
              {it.note && <p>{it.note}</p>}
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}

export function Venue({ data }) {
  const v = data.venue
  return (
    <section className="section sec-venue">
      <Reveal className="venue-card">
        <p className="eyebrow eyebrow-gold">{v.label}</p>
        <Divider star />
        <h2 className="script-title">{v.name}</h2>
        <p className="venue-address">{v.address}</p>
        <a className="btn btn-gold" href={v.mapUrl} target="_blank" rel="noreferrer">
          View on Google Maps
        </a>
      </Reveal>
    </section>
  )
}

export function DressCode({ data }) {
  const d = data.dressCode
  return (
    <section className="section sec-dress">
      <Reveal as="header" className="sec-head">
        <p className="eyebrow">{d.label}</p>
        <h2 className="script-title">{d.title}</h2>
      </Reveal>
      <Reveal as="p" className="body-text" delay={100}>
        {d.text}
      </Reveal>
      <Reveal className="swatches" delay={200}>
        {d.palette.map((c) => (
          <span key={c} style={{ background: c }} />
        ))}
      </Reveal>
    </section>
  )
}

export function Festivities({ data }) {
  const { label, title, events } = data.festivities
  return (
    <section className="section sec-fest">
      <Reveal>
        <SectionHeading label={label} title={title} />
      </Reveal>
      <div className="events">
        {events.map((e) => (
          <Reveal className="event-card" key={e.name}>
            <h3>{e.name}</h3>
            <p className="event-when">{e.when}</p>
            <p className="event-place">{e.place}</p>
            <a className="btn btn-outline" href={e.mapUrl} target="_blank" rel="noreferrer">
              View on Google Maps
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Presence({ data }) {
  const p = data.presence
  return (
    <section className="section sec-dark sec-presence">
      <Reveal as="p" className="eyebrow eyebrow-gold">
        {p.label}
      </Reveal>
      <Reveal as="h2" className="script-title" delay={100}>
        {p.title}
      </Reveal>
      <Reveal as="p" className="presence-text" delay={200}>
        {p.text}
      </Reveal>
    </section>
  )
}

export function Closing({ data }) {
  const { bride, groom, closing } = data
  return (
    <section className="section sec-closing">
      <Reveal className="arch">
        <Divider />
        <h2 className="script-title closing-title">
          {closing.title.split('\n').map((l, i) => (
            <span key={i}>{l}</span>
          ))}
        </h2>
        <p className="couple">
          {groom.first} <span className="amp">&amp;</span> {bride.first}
        </p>
        <p className="closing-footer">{closing.footer}</p>
      </Reveal>
    </section>
  )
}
