# Soroptimist International of Poway — Frontend

This is the Jekyll/GitHub Pages frontend for the Soroptimist International of Poway (SIP) website, built and maintained by the CSP Code Warriors student team.

- **GitHub:** [cspcodewarriors/codewarrior-pages](https://github.com/cspcodewarriors/codewarrior-pages)
- **Live site:** [https://sip.opencodingsociety.com/](https://sip.opencodingsociety.com/)
- **Backend API:** [cspcodewarriors/codewarriorflask](https://github.com/cspcodewarriors/codewarriorflask) — `https://sipoway.opencodingsociety.com/`

## What This Project Does

- Serves the public-facing SIP website as a static GitHub Pages site.
- Contains all SIP pages — home, programs, contact forms, blog, and interactive features.
- Fetches live data (events, blog posts, volunteer submissions) from the Flask backend API.
- Uses Jekyll to compile Markdown and HTML templates into the deployed site.

---

## Site Pages

All SIP pages live in the `sip-website/` directory.

| Page | Permalink | Description |
|------|-----------|-------------|
| Home | `/` | Landing page with animated flower background and SIP navigation |
| Contact | `/sip/contact` | Get Involved and Get Help forms (sends to backend) |
| Blog | `/sip/blog` | SIP event blog (fetches posts from backend) |
| Find Your Program | `/sip/persona/` | Quiz to match users to SIP programs |
| Garden | `/sip/garden/` | Interactive garden feature |
| Transitional Housing | `/sip/transitional-housing/` | Program info page |
| Live Your Dream | `/sip/live-your-dream/` | Program info page |
| Dream It, Be It | `/sip/dreamit-beit/` | Program info page |
| STAT! | `/sip/stat/` | Program info page |
| Abraxas Scholarship | `/sip/abraxas-scholarship/` | Program info page |
| Colegio La Esperanza | `/sip/colegio-la-esparanza/` | Program info page |

---

## Project Structure

```
sip-website/          # All SIP pages (Markdown + inline HTML/CSS/JS)
  sip-home.md         # Home page (permalink: /)
  sip-contact.md      # Contact / volunteer forms
  blog-page.md        # Blog page
  garden.md           # Interactive garden
  persona.md          # Find Your Program quiz
  card1–6.md          # Individual program pages
  sip-images/         # Images used by SIP pages

_layouts/             # Jekyll page layouts (opencs layout used by SIP pages)
_includes/            # Reusable HTML components (sip-infograph.html, etc.)
_sass/                # SASS stylesheets
assets/               # JS, CSS, and other static assets
navigation/           # Navigation bar config and pages
images/               # Site-wide images
```

---

## Local Development

### Prerequisites

- Ruby + Bundler
- Python 3 (for notebook conversion scripts)

### Setup

```bash
git clone https://github.com/cspcodewarriors/codewarrior-pages.git
cd codewarrior-pages

# macOS
./scripts/activate_macos.sh

# Ubuntu / WSL
./scripts/activate_ubuntu.sh

bundle install
```

### Run the local server

```bash
make
```

The site will be available at `http://localhost:4500/`. Changes to `.md` and `.html` files trigger automatic regeneration — refresh the browser to see updates.

### Other make commands

| Command | What it does |
|---------|-------------|
| `make` | Start the preview server |
| `make stop` | Stop the server |
| `make clean` | Stop and remove all generated files |
| `make convert` | Convert notebooks to Markdown (useful for debugging conversion errors) |

---

## Adding or Editing SIP Pages

1. All SIP content lives in `sip-website/`. Edit the relevant `.md` file.
2. SIP pages use the `opencs` layout — keep `layout: opencs` in the front matter.
3. Images go in `sip-website/sip-images/`.
4. To add a new program page, create a new `.md` file in `sip-website/` following the pattern of `card1.md`–`card6.md`.

### Front matter example

```yaml
---
layout: opencs
title: Program Name — Soroptimist International of Poway
permalink: /sip/program-name/
search_exclude: true
---
```

---

## Backend Connection

Pages that fetch live data (contact forms, blog, events) make API calls to the Flask backend at `https://sipoway.opencodingsociety.com/`. When running locally, you may need to update API base URLs in the relevant page files to point to a local backend instance (`http://localhost:4500`).
