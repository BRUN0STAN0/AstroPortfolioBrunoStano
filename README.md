# Bruno Stano Portfolio (Astro)

Portfolio personale sviluppato con Astro, Tailwind CSS e DaisyUI, con supporto multilingua (`it`, `en`, `fr`), animazioni AOS, tema light/dark e pubblicazione su GitHub Pages.

## Stack

- Astro 5
- Tailwind CSS 4
- DaisyUI
- AOS (scroll animations)

## Funzionalita principali

- Layout a sezioni: Hero, Numeri, .NET, Journey, Progetti, Skills, Contatti
- Navbar responsive con switch lingua
- Toggle tema light/dark
- Search bar con:
  - ricerca testuale interna con highlight e scroll al match
  - gestione URL interni/esterni
  - whitelist per siti embeddabili in iframe
- Background canvas animato

## Avvio locale

```bash
npm install
npm run dev
```

Dev server: `http://localhost:4321`

## Build produzione

```bash
npm run build
npm run preview
```

Output statico in `dist/`.

## Deploy

Il progetto e configurato per `https://brunostano.com` in `astro.config.mjs`.

Deploy GitHub Pages attuale:
- build del progetto (`npm run build`)
- push forzato del contenuto `dist/` sul branch `gh-pages`

## Struttura progetto

```text
tender-tower/
|- public/
|- src/
|  |- assets/
|  |- components/
|  |- i18n/
|  |- layouts/
|  |- pages/
|  |- scripts/
|  `- styles/
|- astro.config.mjs
|- package.json
`- README.md
```

## Script disponibili

- `npm run dev` - avvio ambiente di sviluppo
- `npm run build` - build produzione
- `npm run preview` - preview locale della build
- `npm run astro` - comandi CLI Astro
