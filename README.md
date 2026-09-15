# Riley Gramlich — Portfolio

Personal portfolio for [rileygramlich.dev](https://rileygramlich.dev/).

Hand-written HTML, CSS and JavaScript. **No framework, no dependencies, no build
step.** It was a Create React App site until September 2026; the React version is
in the git history if it is ever wanted.

## Running it

There is nothing to install.

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` directly in a browser mostly works too, but the absolute
paths (`/styles.css`, `/assets/…`) resolve against the filesystem root, so use a
server for anything you intend to trust.

## Files

| | |
|---|---|
| `index.html` | the entire page — every section, all the copy |
| `styles.css` | one stylesheet; the palette lives in `:root` at the top |
| `main.js` | nav, scroll reveals, active-section highlighting, contact form |
| `assets/` | images, resized to 1200px wide (700px for the headshot) |
| `pdfs/` | resume |
| `CNAME` | custom domain — must be copied into the published output |

Editing content means editing `index.html`. There is no data file and no
templating layer; that is the trade for having no build.

## Design

Dark glass on a near-black ground. Panels are translucent and blurred, so what
passes behind them stays visible but unreadable. The ink ramp is four steps and
every one of them clears WCAG AA against the ground; the accent is a bone white
with almost no chroma, so colour never carries meaning on its own.

Dark only. The previous site had a light/dark toggle, which is gone — the glass
treatment is built around one ground, so every colour is defined once and
nothing is conditional. Say the word if you want the toggle back.

### The project stack

The projects are `position: sticky` with stepped `top` offsets and rising
`z-index`, so each card pins under the header and the next one slides up over it,
leaving a stepped edge behind. The occluding background is deliberately
*mostly opaque* rather than pure glass — at full transparency the card
underneath reads straight through and the stack turns to mush.

A pinned card's own rect stops moving, so "how far have I been covered" cannot be
measured from the card itself. `main.js` measures the **next** card's top edge
closing on it and writes that ratio to `--overtake`, which the stylesheet uses to
dim, shrink and blur the card as it goes under.

Two things this depends on, both easy to break:

- `body` uses `overflow-x: clip`, **not** `hidden`. `hidden` makes the body a
  scroll container, and a scroll container disables `position: sticky` in every
  descendant — the whole stack would quietly become a plain list.
- Below 720px wide or 620px tall the cards are taller than the viewport, where
  sticky stacking traps content behind itself. The stack falls back to a normal
  list at those sizes, and under `prefers-reduced-motion` it does too.

## The contact form

EmailJS, loaded from a CDN in `index.html` rather than installed. The service,
template and public key IDs in `main.js` are the publishable kind — they are
designed to sit in client-side code and were already public in the React build.

If the script fails to load, the form says so and gives out an email address
instead of silently doing nothing.

## Images

`ffmpeg` was used to resize, which took the image payload from 6.3 MB to 636 KB.
To add another:

```bash
ffmpeg -i original.png -vf "scale=1200:-2" -q:v 4 assets/name.jpg
```

Keep the `width` and `height` attributes on the `<img>` tag accurate — they stop
the page reflowing as images load.

## Deploying

Push to `main`. The workflow in `.github/workflows/deploy.yml` copies the site
files into `_site/`, asserts none of them are missing, and publishes to GitHub
Pages. It installs nothing.

## Outstanding

See [TODO.md](TODO.md) — mainly getting Scribist and Glossa Galore hosted again,
since both of their demo links are dead and the cards currently point only at
GitHub.
