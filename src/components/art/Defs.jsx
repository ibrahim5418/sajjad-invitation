// Shared SVG gradients, filters and symbols. Rendered once at the app root so
// every other SVG can reference them with url(#id) / <use href="#id" />.

export default function Defs() {
  return (
    <svg className="svg-defs" aria-hidden="true" focusable="false">
      <defs>
        {/* ---------- gold ---------- */}
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff1b8" />
          <stop offset="0.25" stopColor="#e2b453" />
          <stop offset="0.5" stopColor="#a8741f" />
          <stop offset="0.75" stopColor="#f0cd73" />
          <stop offset="1" stopColor="#8a5a14" />
        </linearGradient>
        <linearGradient id="goldV" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffe9a6" />
          <stop offset="0.45" stopColor="#d3a144" />
          <stop offset="1" stopColor="#7e5114" />
        </linearGradient>
        <radialGradient id="goldBall" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#fff6d0" />
          <stop offset="0.4" stopColor="#e2b453" />
          <stop offset="1" stopColor="#6e4510" />
        </radialGradient>

        {/* ---------- flame / glow ---------- */}
        <radialGradient id="flame" cx="0.5" cy="0.65" r="0.6">
          <stop offset="0" stopColor="#fffbe8" />
          <stop offset="0.45" stopColor="#ffd56b" />
          <stop offset="1" stopColor="#ff8a1f" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fff2c4" stopOpacity="0.95" />
          <stop offset="0.35" stopColor="#ffc860" stopOpacity="0.45" />
          <stop offset="1" stopColor="#ff9a2a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="candle" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#d9c7a4" />
          <stop offset="0.5" stopColor="#fff8e8" />
          <stop offset="1" stopColor="#c9b28a" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="0.3" stopColor="#ffe7b0" stopOpacity="0.12" />
          <stop offset="0.8" stopColor="#fff" stopOpacity="0.08" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.45" />
        </linearGradient>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="bigBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" />
        </filter>

        {/* ---------- velvet ---------- */}
        <linearGradient id="velvetFolds" x1="0" y1="0" x2="1" y2="0" spreadMethod="repeat">
          <stop offset="0" stopColor="#3a0405" />
          <stop offset="0.22" stopColor="#8f1714" />
          <stop offset="0.42" stopColor="#c93a26" />
          <stop offset="0.58" stopColor="#9c1d16" />
          <stop offset="0.8" stopColor="#5a0809" />
          <stop offset="1" stopColor="#3a0405" />
        </linearGradient>
        <linearGradient id="velvetShade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0.45" />
          <stop offset="0.3" stopColor="#000" stopOpacity="0" />
          <stop offset="0.85" stopColor="#000" stopOpacity="0.15" />
          <stop offset="1" stopColor="#000" stopOpacity="0.5" />
        </linearGradient>

        {/* ---------- roses ---------- */}
        <radialGradient id="roseOuter" cx="0.5" cy="0.75" r="0.9">
          <stop offset="0" stopColor="#e2322f" />
          <stop offset="0.55" stopColor="#a30f17" />
          <stop offset="1" stopColor="#4a0207" />
        </radialGradient>
        <radialGradient id="roseMid" cx="0.5" cy="0.8" r="0.9">
          <stop offset="0" stopColor="#f04a3c" />
          <stop offset="0.6" stopColor="#b8141c" />
          <stop offset="1" stopColor="#5c040a" />
        </radialGradient>
        <radialGradient id="roseCore" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0" stopColor="#3d0005" />
          <stop offset="1" stopColor="#8a0b14" />
        </radialGradient>
        <linearGradient id="leafGreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5f7a3a" />
          <stop offset="0.6" stopColor="#2f4a22" />
          <stop offset="1" stopColor="#1c2e15" />
        </linearGradient>

        <path id="petal" d="M0,0 C-26,-6 -34,-38 0,-44 C34,-38 26,-6 0,0Z" />

        <symbol id="rose" viewBox="-50 -50 100 100" overflow="visible">
          <circle r="44" fill="#3b0206" />
          {[0, 72, 144, 216, 288].map((a) => (
            <use key={a} href="#petal" fill="url(#roseOuter)" stroke="#2c0004" strokeWidth="1.2" transform={`rotate(${a})`} />
          ))}
          {[36, 108, 180, 252, 324].map((a) => (
            <use key={a} href="#petal" fill="url(#roseMid)" stroke="#3a0006" strokeWidth="1.2" transform={`rotate(${a}) scale(0.74)`} />
          ))}
          {[10, 130, 250].map((a) => (
            <use key={a} href="#petal" fill="url(#roseOuter)" stroke="#2c0004" strokeWidth="1.4" transform={`rotate(${a}) scale(0.48)`} />
          ))}
          <circle r="9" fill="url(#roseCore)" />
          <path d="M-6,1 C-6,-6 5,-7 6,0 C7,5 -1,7 -3,2 C-4,-1 1,-2 2,0" fill="none" stroke="#e8424a" strokeWidth="1.3" opacity="0.7" />
          <ellipse cx="-10" cy="-14" rx="16" ry="7" fill="#fff" opacity="0.07" transform="rotate(-25)" />
        </symbol>

        <radialGradient id="roseWhite" cx="0.5" cy="0.75" r="0.9">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.6" stopColor="#f6eedd" />
          <stop offset="1" stopColor="#cdbd9c" />
        </radialGradient>
        <symbol id="roseWhite" viewBox="-50 -50 100 100" overflow="visible">
          <circle r="44" fill="#b9a988" />
          {[0, 72, 144, 216, 288].map((a) => (
            <use key={a} href="#petal" fill="url(#roseWhite)" stroke="#bfae8c" strokeWidth="1.2" transform={`rotate(${a})`} />
          ))}
          {[36, 108, 180, 252, 324].map((a) => (
            <use key={a} href="#petal" fill="url(#roseWhite)" stroke="#c7b694" strokeWidth="1.2" transform={`rotate(${a}) scale(0.74)`} />
          ))}
          {[10, 130, 250].map((a) => (
            <use key={a} href="#petal" fill="url(#roseWhite)" stroke="#bfae8c" strokeWidth="1.4" transform={`rotate(${a}) scale(0.48)`} />
          ))}
          <circle r="8" fill="#e9dcc0" />
        </symbol>

        <symbol id="leaf" viewBox="0 -12 40 24" overflow="visible">
          <path d="M0,0 C10,-9 27,-10 40,0 C27,10 10,9 0,0Z" fill="url(#leafGreen)" />
          <path d="M1,0 L37,0" stroke="#a5b77a" strokeWidth="0.8" opacity="0.6" />
        </symbol>

        <symbol id="goldLeaf" viewBox="0 -10 40 20" overflow="visible">
          <path d="M0,0 C10,-7 27,-8 40,0 C27,8 10,7 0,0Z" fill="url(#gold)" />
          <path d="M1,0 L37,0" stroke="#6e4510" strokeWidth="0.7" opacity="0.6" />
        </symbol>

        <symbol id="blossom" viewBox="-10 -10 20 20" overflow="visible">
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse key={a} cx="0" cy="-5" rx="3.6" ry="5" fill="#fbf4e6" stroke="#d9cbb0" strokeWidth="0.5" transform={`rotate(${a})`} />
          ))}
          <circle r="2.2" fill="#e7b84f" />
        </symbol>

        <symbol id="fern" viewBox="0 -20 60 40" overflow="visible">
          <path d="M0,0 C20,-2 40,-6 60,-14" stroke="url(#gold)" strokeWidth="1.2" fill="none" />
          {[8, 16, 24, 32, 40, 48].map((x, i) => (
            <g key={x}>
              <path d={`M${x},${-x * 0.18} q4,-8 10,-9`} stroke="#d6a94e" strokeWidth="1" fill="none" />
              <path d={`M${x},${-x * 0.18} q6,4 11,1`} stroke="#c0913a" strokeWidth="1" fill="none" opacity={1 - i * 0.08} />
            </g>
          ))}
        </symbol>

        {/* C-scroll used on gilded frames */}
        <symbol id="scroll" viewBox="-4 -40 76 50" overflow="visible">
          <path
            d="M0,0 C6,-26 40,-38 58,-20 C70,-8 60,8 46,4 C36,1 38,-12 47,-12 C53,-12 54,-5 50,-3"
            fill="none"
            stroke="url(#gold)"
            strokeWidth="3.4"
            strokeLinecap="round"
          />
          <path d="M8,-12 C14,-24 30,-30 40,-26" fill="none" stroke="#fff0b5" strokeWidth="1" opacity="0.6" />
          <path d="M18,-22 q-6,-12 4,-16 q2,8 -4,16Z" fill="url(#gold)" />
          <path d="M30,-28 q-2,-12 9,-12 q-1,8 -9,12Z" fill="url(#gold)" />
        </symbol>
      </defs>
    </svg>
  )
}
