# TODO

## Get Scribist back online

`scribist.herokuapp.com` returns **404** — the Heroku dyno is gone. The repo already
carries a `vercel.json` wired for the Node server plus the CRA build, so Vercel is
the shortest path back.

Needs from you:

- A MongoDB connection string (`DATABASE_URL`) — Atlas free tier is enough.
- A `SECRET` for signing JWTs (`config/checkToken.js`).
- A Vercel project pointed at `rileygramlich/scribist`.

Worth checking while you are in there: the Socket.IO collaboration path
(`/socket.io/*` is routed to `server.js` in `vercel.json`) does not survive on
serverless functions the way it did on a long-running dyno. Live collaborative
editing may need a different host — Railway, Fly, or a small VPS — rather than Vercel.

Once it is live, add the link back to the Scribist card in `index.html`:

```html
<a class="btn btn-primary btn-sm" href="https://…" target="_blank" rel="noopener noreferrer">Live</a>
```

## Get Glossa Galore back online

`glossagalore.up.railway.app` returns **404** — the Railway deployment is gone.

Needs from you:

- A MongoDB connection string.
- A **DeepL API key** (`deepl-node` is a dependency; translation is the core feature).
- A host — Railway again, or anywhere that runs a long-lived Express process.

Same follow-up: add the `Live` button back to the Glossa Galore card in `index.html`.

## Smaller things

- **Screenshots for two cards.** God's Eye View and Geometry Dash are text-only.
  A capture of the Calgary camera layer on the globe, and one of Geo mid-jump in
  STEEM, would put them level with the rest.
- **Resume PDF.** `/pdfs/riley-gramlich-resume.pdf` is served as-is; check it is
  current before pointing people at it.
- **Client work claims.** The UrbanTec and Prairie.edu case studies were lifted from
  the old README and had never actually appeared on the live site. Read them once
  and confirm you are happy standing behind the wording.
