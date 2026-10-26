# Google Flow guide: images first, then videos

Everything is made in Google Flow (labs.google/flow). Images first, videos last.
Save images to `public/images/` and videos to `public/video/` with exactly these names.

| Step | Type | Aspect ratio | Flow mode | File | Status |
|---|---|---|---|---|---|
| 1 | Image | 9:16 | Create image | `stage.jpg` | done |
| 2 | Image | 9:16 | Create image + reference (stage) | `intro-closed.jpg` | done |
| 3 | Image | 9:16 | Create image + reference (stage) | `hero-bg.jpg` | done |
| 4 | Image | 16:9 | Create image + reference (stage) | `garland.png` | |
| 5 | Image | 16:9 | Create image + reference (stage) | `scratch-frame.png` | |
| 6 | Image | 3:4 | Create image | `story-1.jpg` | optional if you have real photos |
| 7 | Image | 3:4 | Create image | `story-2.jpg` | optional if you have real photos |
| 8 | Image | 3:4 | Create image | `story-3.jpg` | optional if you have real photos |
| 9 | Video | 9:16 | Frames to Video | `intro-open.mp4` | |
| 10 | Video | 9:16 | Frames to Video | `stage-to-hero.mp4` | optional |

---

## Step 4: `garland.png`
**Image · 16:9 · Create image · Reference: `stage.jpg`**

```
Use the reference image only for the colours of the roses and gold leaves. Photorealistic horizontal floral garland swag for a luxury wedding invitation, isolated on a plain pure white background, laid out straight across the middle of the image from the left edge to the right edge, drooping slightly in the centre. Lush deep red roses, small white blossoms, dark green leaves and gold-painted fern leaves. The roses are fullest and largest in the centre, tapering to thin trailing leaves at both ends. A few strands of red hanging amaranthus dangle from the centre. Soft natural shadows, front view, ultra detailed. Nothing else in the image, no text.
```

Pick one where the garland touches both side edges and the background is pure white.
Remove the white background (remove.bg or Canva → BG Remover) and save as PNG.

---

## Step 5: `scratch-frame.png`
**Image · 16:9 · Create image · Reference: `stage.jpg`**

```
Use the reference image only for its colours and gold style. Photorealistic landscape ornate wedding frame on a plain pure white background, front view, perfectly symmetrical. A rectangular antique gold baroque frame whose inside is a completely EMPTY plain white rectangle covering about 75% of the width and 60% of the height. Along the top edge, a lush band of red roses and gold foliage with a small crystal chandelier with lit candles at the top centre. Crimson velvet curtain swags drape from both upper corners partway down the sides. Small gold candelabras with lit candles in both lower corners, clusters of red roses at the bottom corners, and a gold scroll crest at the bottom centre. Ultra detailed. No text, no letters.
```

Pick one with a large, clean, empty middle.
Remove the white background **outside and inside** the frame and save as PNG.

---

## Step 6: `story-1.jpg`
**Image · 3:4 · Create image · No reference**

```
Photorealistic close-up of a South Asian bride and groom holding pinky fingers. The groom's hand in a black sherwani sleeve comes from the left; the bride's hand, with intricate henna and gold rings and a maroon embroidered dupatta, comes from the right. Soft blurred green field background, warm natural light, shallow depth of field, fine-art wedding photography. Faces not shown. No text.
```

## Step 7: `story-2.jpg`
**Image · 3:4 · Create image · No reference**

```
Photorealistic close-up of a bride's henna-decorated hand and a groom's hand wearing a silver ring, held up side by side in front of their faces so the faces are hidden. Warm golden indoor light, soft bokeh, candid wedding photography. No text.
```

## Step 8: `story-3.jpg`
**Image · 3:4 · Create image · No reference**

```
Photorealistic close-up of a bride's henna-decorated hand resting on the groom's hand, showing a sparkling engagement ring, maroon and gold embroidered fabric around them, warm candlelight, shallow depth of field, elegant wedding photography. No text.
```

---

## Step 9: `intro-open.mp4` (the intro film)
**Video · 9:16 · Frames to Video · Quality model for the final**

- First frame: **`intro-closed.jpg`** (Step 2)
- Last frame: **`stage.jpg`** (Step 1)

```
Static, locked-off front camera. The closed crimson velvet theatre curtains begin to part from the centre seam, sliding apart horizontally to the left and right, then gathering and tying back at the sides with gold tassels, revealing the brightly lit stage and the sparkling crystal chandelier behind them. The curtains are fully open by about 3 seconds. For the remaining time the camera very slowly pulls back while the chandelier crystals glitter and the candle flames flicker gently. Smooth, graceful, elegant, cinematic, photorealistic. No people, no text.
```

Download as MP4, 1080p if offered.

**Backup if things warp or slide around:** use Frames to Video with **only `stage.jpg` as the first frame** (leave the last frame empty) and this prompt. Claude will reverse the clip so it plays as the curtains opening.

```
Static, locked-off front camera. Heavy crimson velvet theatre curtains slowly slide in from the left and right sides and close in front of the stage, meeting in the exact centre and completely hiding the chandelier. Smooth, graceful, cinematic, photorealistic. No people, no text.
```

---

## Step 10 (optional): `stage-to-hero.mp4`
**Video · 9:16 · Frames to Video**

- First frame: **`stage.jpg`** (Step 1)
- Last frame: **`hero-bg.jpg`** (Step 3)

```
The camera glides slowly forward and slightly upward toward the crystal chandelier. The gold panel, valance and stage curtains softly dissolve and transform into the framed red velvet panel with the gold arch, while the large chandelier gently rises and shrinks into the smaller chandelier at the top centre. Seamless, dreamy, smooth and cinematic. Photorealistic. No people, no text.
```

If you skip this, the site crossfades from the stage to the main frame instead.

---

## Not from Flow
- `bismillah.png` (optional): download a gold Bismillah calligraphy PNG from Freepik or Pinterest.
- `music.mp3` (optional, goes in `public/`): from Pixabay Music or the YouTube Audio Library.

## Quick fixes
| Problem | Fix |
|---|---|
| Fake letters in an image | Regenerate |
| Garland or frame background isn't pure white | Add "plain pure white studio background" and regenerate |
| Frame middle not empty | Regenerate; add "the inside of the frame is completely empty" |
| Curtains lift upward | Add "part sideways to the left and right, not upward" |
| Stage melts or changes in the video | Use the Quality model, or use the Step 9 backup |
| Watermark (✦) or sound in a video | Fine; the site crops it and plays muted |
