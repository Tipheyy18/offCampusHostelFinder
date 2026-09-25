# HostelFinder

A responsive React/Vite marketplace for discovering off-campus student accommodation.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run check
npm run preview
```

The deployable output is generated in `dist/`.

## Netlify deployment

This repository includes `netlify.toml` and `public/_redirects` for React Router fallback support. In Netlify, connect the GitHub repository and use:

- Build command: `npm run build`
- Publish directory: `dist`

No environment variables are required for the current mock-data MVP.

## Demo behavior

Authentication, favourites, and theme preferences use browser `localStorage`. Property data is currently local mock data and can be replaced by API services later.
