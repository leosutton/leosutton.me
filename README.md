# leosutton.me

Professional profile website for Leo Sutton, built with [Astro](https://astro.build/) and deployed as a static site.

## Local development

```bash
npm install
npm run dev
```

## Verification

```bash
npm test
npm run build
```

## Deployment

The repository includes a GitHub Actions workflow for GitHub Pages. The domain is configured via `public/CNAME` as:

```text
leosutton.me
```

After the repository is pushed, enable GitHub Pages with **Source: GitHub Actions**, then point DNS for `leosutton.me` at GitHub Pages.
