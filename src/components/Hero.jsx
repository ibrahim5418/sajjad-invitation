import { Divider } from './Ornaments'

export default function Hero({ data, ready }) {
  const { bride, groom, hero, media } = data
  return (
    <section className={`hero ${ready ? 'is-ready' : ''}`}>
      <img className="hero-bg stage-media" src={media.heroBg} alt="" draggable="false" />
      <div className="hero-shade" aria-hidden="true" />
      {/* same box as the cover-fitted background, so text stays inside the arch */}
      <div className="hero-frame">
        <div className="hero-content">
          <p className="bismillah hero-item" style={{ '--d': 0 }} lang="ar">
            ﷽
          </p>
          <Divider star className="hero-item hero-divider" style={{ '--d': 1 }} />
          <p className="hero-eyebrow hero-item" style={{ '--d': 2 }}>
            {hero.request}
          </p>
          <h1 className="hero-name hero-item" style={{ '--d': 3 }}>
            {groom.full}
          </h1>
          <p className="hero-parents hero-item" style={{ '--d': 4 }}>
            S/o {groom.parents}
          </p>
          <p className="hero-amp hero-item" style={{ '--d': 5 }}>
            &amp;
          </p>
          <h1 className="hero-name hero-item" style={{ '--d': 6 }}>
            {bride.full}
          </h1>
          <p className="hero-parents hero-item" style={{ '--d': 7 }}>
            D/o {bride.parents}
          </p>
          <p className="hero-eyebrow hero-closing hero-item" style={{ '--d': 8 }}>
            {hero.closing}
          </p>
        </div>
      </div>
      <div className="scroll-cue hero-item" style={{ '--d': 9 }}>
        <span>Scroll</span>
        <i />
      </div>
    </section>
  )
}
