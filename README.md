# Adrian Lobato - Portfolio Website

My personal portfolio: a single-page home (Home, About, Portfolio, Experience, Qualifications, Contact) plus fully routed sections for a project archive and certificate archive. No backend - the contact form sends email straight from the browser via EmailJS.

### Live:

- Render: [portfolio-website-adrian-lobato.onrender.com](https://portfolio-website-adrian-lobato.onrender.com)
- Vercel: [adrian-lobato-portfolio-website.vercel.app](https://adrian-lobato-portfolio-website.vercel.app/)

## Tech Stack

- **React 18** + **Vite 5**
- **React Router DOM 6** - data router (`createBrowserRouter`), routes defined once in `src/App.jsx`
- **Bootstrap 5** + Bootstrap Icons for layout/styling
- **Framer Motion** for animations
- **FontAwesome** (solid + brand icon sets)
- **React Hook Form** + **EmailJS** for the contact form (no backend)
- **React PDF** for in-app certificate/resume viewing
- **React Helmet** for per-page SEO tags

## Getting Started

**Prerequisites:** Node.js and npm.

```bash
git clone https://github.com/adrian1715/portfolio-website-code.git
cd portfolio-website-code
npm install
```

The contact form needs an [EmailJS](https://www.emailjs.com/) account. Create a `.env` file in the project root:

```bash
VITE_REACT_APP_SERVICE_ID=your_service_id
VITE_REACT_APP_TEMPLATE_ID=your_template_id
VITE_REACT_APP_PUBLIC_KEY=your_public_key
```

Then start the dev server:

```bash
npm run dev
```

Vite is pinned to port `3000` (see `vite.config.js`), falling back to the next free port if it's taken.

## Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the Vite dev server                |
| `npm run build`   | Production build to `dist/`              |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | `eslint . --ext js,jsx --max-warnings 0` |

There is no test suite configured in this repo.

## Architecture

### Routing lives in one place

The full route tree is a single nested `createBrowserRouter` config in `src/App.jsx`. Two derived exports are used everywhere else instead of duplicating route data:

- `links` - the entire route tree, introspected to check valid child paths, build nav menus, or look up a route's metadata.
- `navLinks` - the subset of `links` flagged `navLink: true`, used to build the navbar.

Route nodes carry ad-hoc metadata consumed by pages: `navLink`, `type: "dropdown"`, `items` (display list for dropdown menus), `projects: true`.

### Two navbar/theme-toggler implementations coexist on purpose

`src/pages/RootElement.jsx` renders `Navbar` / `ThemeToggler` on every route **except** the homepage, and `NavbarNew` / `ThemeTogglerNew` on the homepage (`/`). This is an intentional, gradual design refresh - not dead code.

### One scrolling homepage, everything else routed

`src/pages/Homepage.jsx` stacks section components (`Home`, `About`, `Portfolio`, `Experience`, `Qualifications`, `Contact`) as anchors on a single page. Every other route - individual projects, certificates - is a real routed page under `src/pages` / `src/projects`.

### Project listings live in three places - kept in sync by hand

1. **`src/components/homepage/Portfolio.jsx`** - the homepage carousel, a hardcoded array of _featured_ projects only. Entries can override defaults with `website`, `chromeStore`, `github`, or `image`; otherwise the GitHub link and preview image are derived from the project name.
2. **`src/pages/Projects.jsx`** - the full `/projects` index (`export const projects`). Single-element arrays are standalone projects; multi-element arrays are categories with sub-projects. Cross-referenced against `links` - every entry here needs a matching route in `App.jsx`.
3. **`src/App.jsx`**'s `/projects` children - the actual routes. Projects with an in-app page get a component; externally-hosted projects (GitHub-only code, Chrome Web Store listings) use `<Redirect path="..." />`, which bounces the browser off-site via `window.location.href`.

`ShowProjects.jsx` renders category listings (Simulators, Simple Projects, Website Clones) and special-cases specific paths to link straight out to GitHub instead of an internal route.

Certificates follow the same pattern (`Certificates.jsx` + `ShowCertificate.jsx`), but their data comes from `public/data/courses.json` instead of a hardcoded array.

### Vanilla-JS projects ported into React

Several `src/projects/*` entries (Letrico, Timer, ScoreKeeper, ToDoList, Copa, LibSul, BuscaCEP) started life as standalone HTML/vanilla-JS mini-apps. They keep an `app.js` alongside their `.jsx` wrapper and `import("./app")` inside a `useEffect` rather than being rewritten as idiomatic React - deliberate, not a bug.

### Shared utilities (`src/utils`)

- `toLinkFormatter(name)` - display name → URL slug.
- `formatLinkPath(path)` - URL slug → display name.
- `isCurrentPage(pathname, pagesUrls)` - used by `Projects.jsx` / `ShowProjects.jsx` / `Certificates.jsx` to decide whether to render their own listing UI or delegate to `<Outlet />` because a child route matched.

## Project Structure

```
portfolio-website/
├── public/                 # Static assets, courses.json (certificates data)
├── src/
│   ├── components/         # Shared components, incl. homepage/* section components
│   ├── pages/               # Routed pages (Homepage, Projects, Certificates, ...)
│   ├── projects/             # Individual project pages, some wrapping ported vanilla-JS apps
│   ├── utils/                 # Routing/formatting helpers
│   ├── App.jsx               # Route tree (single source of truth for routing)
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── vite.config.js
└── package.json
```

## Deployment

```bash
npm run build
```

`dist/` contains the static build, deployable to any static host. This project is currently deployed on [Render](https://render.com) and [Vercel](https://adrian-lobato-portfolio-website.vercel.app/).
