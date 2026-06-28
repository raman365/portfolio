# Portfolio

Raman Oraha's portfolio site, built with [React](https://react.dev/), [Vite](https://vite.dev/), and [Tailwind CSS](https://tailwindcss.com/).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode with Vite.\
Open the printed `http://localhost:5173/portfolio/` URL to view it in your browser.\
The page hot-reloads as you make changes.

(`npm start` is kept as an alias for `npm run dev`.)

### `npm run build`

Builds the app for production to the `build/` folder, minified and with hashed
filenames. The site is served from the `/portfolio/` base path (configured in
`vite.config.js`) to match GitHub Pages.

### `npm run preview`

Serves the production build locally so you can verify it before deploying.

## Deployment

Deployment is automatic. Every push to `main` triggers the
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) GitHub Actions
workflow, which builds the site with Vite and publishes it to GitHub Pages at
https://raman365.github.io/portfolio. No manual deploy step is needed.

## Learn More

- [Vite documentation](https://vite.dev/guide/)
- [React documentation](https://react.dev/)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)
