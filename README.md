# edeki okoh — personal site

Static site built with [Astro](https://astro.build). Deploys to `https://okohedeki.github.io/`.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build    # static output in dist/
```

Needs Node 22.12 or newer. There's no lockfile: this repo's pre-commit hook caps commits at 1,000 lines, so the deploy runs `npm install` against the version range in `package.json`.

## Where things live

| To change | Edit |
| --- | --- |
| Name, the by day / by night / by accident lines, links, photo | `src/data/site.ts` |
| Projects (newest first) | `src/data/projects.ts` |
| Colors, fonts, layout | `src/styles/global.css` |

## Adding your photo

1. Save it as `public/me.jpg`. A 3:4 portrait works best: it fills the right half on desktop and the top of the page on phones.
2. In `src/data/site.ts`, set `photo: 'me.jpg'`.

## Adding a project

Add an entry to the top of `src/data/projects.ts`. Leave out `url` if the repo is private, and add `status: 'wip'` (or `'prototype'`) if it isn't finished.

## Deploying

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages on every push to `main`. In the repo settings, set **Pages → Source** to **GitHub Actions**.
