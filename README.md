<<<<<<< HEAD
# Engagement Invitation (React + Vite)

A scrolling digital engagement invitation: tap-to-open curtain film, a chandelier-lit stage that
glides into the gilded hero frame, scratch-to-reveal date with a petal shower, live countdown,
timeline, venue, dress code, festivities and closing arch.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in dist/
```

## Personalise

- **All text, dates, venues, events**: `src/data/invitation.js`
- **Countdown target**: `eventDate` in the same file (ISO format with timezone)
- **Background music**: add `public/music.mp3`; it starts when the guest taps to open

## Media

| File | What it is |
|---|---|
| `public/video/intro.mp4` | Curtain opening + stage-to-hero film, joined, sped up, silent |
| `public/images/intro-poster.jpg` | First frame of the film (the "tap to open" screen) |
| `public/images/hero-bg.jpg` | Last frame of the film, watermark patched; the hero background |
| `public/images/scratch-frame.webp` | Gold frame with transparent window around the scratch card |
| `public/images/garland.webp` | Rose garland divider between sections |

The original Google Flow downloads are kept in `assets-source/` (not served).
The film is shown zoomed 13% from the top so the generator's corner mark stays off-screen;
the hero background uses the same framing, so the hand-off is seamless.
=======
# sajjad-invitation
>>>>>>> 739f698bf1f29a0ed5cc7bf11c58bf0286aaf06d
