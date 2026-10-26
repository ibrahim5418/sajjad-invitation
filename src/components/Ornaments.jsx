// Small typographic ornaments shared across sections.

export function Divider({ star = false, className = '', style }) {
  return (
    <div className={`divider ${className}`} style={style} aria-hidden="true">
      <span className="divider-line" />
      {star ? (
        <svg viewBox="0 0 12 12" className="divider-star">
          <path d="M6,0 L7.2,4.8 L12,6 L7.2,7.2 L6,12 L4.8,7.2 L0,6 L4.8,4.8Z" fill="currentColor" />
        </svg>
      ) : (
        <svg viewBox="0 0 12 12" className="divider-diamond">
          <path d="M6,1 L11,6 L6,11 L1,6Z" fill="none" stroke="currentColor" strokeWidth="1.1" />
        </svg>
      )}
      <span className="divider-line" />
    </div>
  )
}

export function Flourish({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 240 24" aria-hidden="true">
      <path d="M10,12 L96,12 M144,12 L230,12" stroke="currentColor" strokeWidth="0.8" />
      <path
        d="M120,4 C126,8 130,12 120,20 C110,12 114,8 120,4Z M96,12 C104,4 112,6 114,12 C112,18 104,20 96,12Z M144,12 C136,4 128,6 126,12 C128,18 136,20 144,12Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="120" cy="12" r="1.6" fill="currentColor" />
      <circle cx="86" cy="12" r="1.3" fill="currentColor" />
      <circle cx="154" cy="12" r="1.3" fill="currentColor" />
    </svg>
  )
}

export function SectionHeading({ label, title, star = false }) {
  return (
    <header className="sec-head">
      <p className="eyebrow">{label}</p>
      <h2 className="script-title">
        {title.split('\n').map((line, i) => (
          <span key={i}>{line}</span>
        ))}
      </h2>
      <Divider star={star} />
    </header>
  )
}
