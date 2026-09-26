# Vinh Tran — research portfolio

A static portfolio for research employers. Plain HTML, CSS, with no JavaScript required for browsing projects. No Ruby, Jekyll, Bundler, npm install, or build step is required.

## Preview locally

From this folder, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://localhost:8000. Save edits and refresh the browser. Stop the server with Control+C. Use a local web server rather than opening HTML directly, because links begin at the site root.

## Edit the site

- `experience.html`: chronological research roles, education, publications, and recognition from the supplied résumé.
- `index.html`: introduction, research summaries, methods, and contact section. Each project is an `<article class="project">`; `data-category` is `computation` or `experiment`.
- `assets/css/portfolio.css`: the shared visual style and responsive layouts. Colors are defined at the top.
- `assets/js/portfolio.js`: legacy optional filtering helper; the homepage now displays all projects without filter controls.
- `portfolio_posts/*.html`: standalone research articles. The sidebar links point to the headings' `id` attributes.
- `dft.html` and `dft/*.html`: DFT index and lab notes.
- `teaching.html`, `electrodynamics/*.html`, `quantum_1/qm1.html`: courses and available notes.
- `images/`: existing research figures and photos.
- `Tran_Vinh_CV.pdf`: replace this file to update the CV without changing links.

Navigation and footer markup are repeated in the standalone HTML pages. When changing shared links, update them in each active page. No generated files need rebuilding.

To add a project, copy an existing article page, update its title, description, contents, and section links, then add a project row to `index.html`. Update the initial project count there; JavaScript computes counts after filtering.

## Hosting

This repository can be served as static files on GitHub Pages. `.nojekyll` bypasses Jekyll for branch-based Pages publishing. In the repository's Pages settings, select the branch and root folder containing this site. If Pages uses a custom Actions workflow, ensure it uploads the static site instead of running Jekyll. Publishing settings were not changed by this redesign.

Links assume the site is hosted at the domain root, matching this repository's `vinh-c-tran.github.io` name. Hosting under a subdirectory requires adjusting root-relative links.

## Content and dependencies

Project body text, figures, equations, and the current lithography draft were retained. Electrodynamics resources are linked where files actually exist. Incorrect cross-course links were removed; unpublished quantum mechanics materials are labeled accordingly. No publications or employment claims were invented.

Fonts are self-hosted Manrope (SIL Open Font License in `assets/fonts/OFL.txt`). MathJax 3.2.2 loads from jsDelivr on technical article pages and requires internet access. A few pre-existing DFT figures also load from external hosts. The rest of the portfolio works with local assets.

The old Gemfile, Jekyll layouts, collections, experimental pages, and Phantom styles remain for reference but are not used by the new navigation or active pages. You do not need to install their dependencies. The pre-existing `Gemfile.lock` edit is retained.
