---
name: Vinh Tran Research Portfolio
description: A scientific field atlas of computation, fabrication, and experiment.
colors:
  ink: "#173f35"
  accent: "#dce8ab"
  paper: "#f4f6f2"
  muted: "#50615a"
  line: "#cad3ca"
  surface: "#e5ebdf"
  article-ink: "#273c32"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(42px, 5.4vw, 78px)"
    fontWeight: 600
    lineHeight: 1.07
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(30px, 3.3vw, 46px)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "25px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.8
  article:
    fontFamily: "Georgia, serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.8
  action:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 600
  metadata:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 400
rounded:
  filter: "24px"
spacing:
  gutter: "clamp(22px, 5vw, 88px)"
  compact: "15px"
  related: "24px"
  group: "30px"
  panel: "65px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.action}"
    padding: "15px 23px"
  button-contact:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    padding: "15px 23px"
  filter:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.filter}"
    padding: "10px 18px"
  filter-selected:
    backgroundColor: "{colors.ink}"
    textColor: "white"
    rounded: "{rounded.filter}"
    padding: "10px 18px"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.action}"
  notice:
    backgroundColor: "{colors.surface}"
    padding: "22px"
---

# Design System: Vinh Tran Research Portfolio

## Overview

**Creative North Star: "Scientific field atlas"**

The portfolio presents scientific work through pale mineral surfaces, evergreen typography, factual image plates, and image-led project cards. Its character is quiet, precise, and evidence-led. Generous section spacing gives compact method descriptions and real research imagery room to be read.

The index uses Manrope for clear scanning; technical articles switch to Georgia for sustained reading while retaining Manrope headings and navigation. Flat surfaces and thin rules establish hierarchy without obscuring plots, microscopy, or equations. This records the implemented static portfolio in `assets/css/portfolio.css`, `index.html`, and the technical pages; it does not govern retained legacy templates that do not load that stylesheet.

**Key Characteristics:**

- Mineral paper and evergreen ink with restrained pale lime accents.
- Rectangular scientific image plates and image-led project cards.
- Manrope navigation and headings; Georgia technical prose.
- Visible methods, responsive indexes, and direct document links.

## Colors

The palette is low-chroma and botanical, leaving the color of scientific evidence intact.

### Primary

- **Evergreen ink** (`ink`): headings, primary actions, selected filters, and the contact panel.
- **Pale lime** (`accent`): the contact action and text selection.

### Neutral

- **Mineral paper** (`paper`): the page canvas and text on evergreen actions.
- **Sage gray** (`muted`): explanatory copy, captions, methods, and supporting navigation.
- **Mineral rule** (`line`): masthead, project, course, and article dividers.
- **Pale sage surface** (`surface`): the about panel and notices.
- **Reading ink** (`article-ink`): long technical prose.

**The Evidence Color Rule.** Keep scientific images in their source colors; the surrounding interface supplies the restrained palette.

## Typography

**Display Font:** Manrope, with Arial and sans-serif fallbacks. Locally served weights are regular (400), semibold (600), and extra bold (800).

**Body Font:** Manrope for portfolio summaries; Georgia with serif fallback for technical articles.

**Character:** Tight, balanced sans-serif headings organize the atlas. More spacious serif prose supports equations and extended explanation. This is a role-based ramp, not a fixed mathematical scale.

### Hierarchy

- **Display:** the fluid `display` role serves the homepage headline. Detail-page titles use a smaller fluid range (`clamp(38px, 5vw, 68px)`).
- **Headline:** the fluid `headline` role serves sections. Article section titles are fixed at 30px on desktop and 26px on mobile.
- **Title:** the `title` role serves project names; mobile project titles reduce to 20px. Article subheads use 23px.
- **Body:** supporting overview paragraphs use the `body` role. Introductory leads use 17px, project descriptions 14px, and article prose the `article` role with a maximum measure of 56ch. Mobile article prose reduces to 17px.
- **Action:** semibold action links and buttons use the `action` role.
- **Metadata:** the `metadata` role supports captions, counts, methods, and footer links. Navigation uses 14px on desktop and 12px on mobile; filters use 13px.

**The Reading Measure Rule.** Keep technical prose within 56ch and allow figures, code, tables, and equations to adapt to the available width.

## Layout

The shared wrapper is centered, capped at 1600px, and uses the fluid `gutter` token. Spacing is pragmatic rather than a uniform multiplier: recurring 15px, 24px, and 30px gaps separate related content; broad 65px panel padding and 80–85px section intervals create breathing room.

The homepage starts with the research heading, filters, and project rows directly below the masthead. A 240px sticky introduction sits to the right of the flexible research column, separated by 64px. Projects use a three-column card grid with 28px gaps, 4:3 image plates, white surfaces, and thin borders. Descriptions follow images; method labels and project links align at each card’s bottom. The introduction uses a 27px heading, 14px prose, and CV/contact links. Article pages retain a sticky 230px navigation column with a flexible reading column and a 60px gap.

At 1100px the homepage sidebar becomes 210px with a 36px gap, and the cards become a two-column grid. At 900px and below, the introduction follows the complete project list in both DOM and visual order; it is no longer sticky. At 620px and below, cards form one column with the same image-first layout. The main research heading is 34px. Navigation remains visible, filters wrap, and counts remain announced. About, teaching, and article layouts become single-column as before.

The homepage has no large hero image or capabilities strip. Research plates crop to their thumbnail containers; technical figures preserve their aspect ratio and use contain behavior with a 650px height cap. Tables, code, and display equations scroll locally when needed. Print removes navigation, filters, and contact actions and makes the article layout a single block.

## Elevation & Depth

The system has no shadows. Pale filled panels, the evergreen contact surface, image contrast, and thin divider rules provide depth. No element floats above the page as a decorative card.

**The Flat Atlas Rule.** Separate content with whitespace, tonal surfaces, and rules rather than raised containers.

## Shapes

Image plates, panels, metadata tags, and primary actions are rectangular. Filter controls are the recurring rounded exception, using the `filter` radius. Thin one-pixel rules structure lists without enclosing every item. Directional arrows are inline stroked SVGs (18px), not text glyphs.

## Components

### Buttons

Compact rectangular actions use evergreen fill with mineral-paper text, the `action` type role, and a minimum height of 48px. Hover changes evergreen to `#2c5e48`. The contact action uses pale lime on evergreen, changing to `#edf3ce` on hover. The mobile contact action wraps long text. Focus uses the shared visible outline: 3px solid `#487657` with a 6px offset.

### Chips

Filters are outlined pills with a minimum height of 44px. Selection fills the control with evergreen and sets `aria-pressed`; hover strengthens the border. Filters wrap naturally and reduce horizontal padding to 15px on mobile. Filtering reveals a live project count and leaves all projects accessible when JavaScript is absent.

Detail-page method tags are static rectangular labels with pale sage fill, 12px type, and 8px by 12px padding. Their appearance does not imply interactivity.

### Navigation

The masthead is open, separated from content by a thin bottom rule. Navigation links use underlining for hover and current-page state; the CV link retains a bottom rule. The keyboard skip link appears on focus. Article navigation is a vertical, sticky list on desktop and a wrapping list above the article on mobile. Text links retain a 5px underline offset.

### Project index

Rows combine one real image plate, a linked title, concise description, methods, and a direct project link. A bottom rule separates entries. Hover scales the cropped thumbnail to 1.045 over 0.5 seconds using `cubic-bezier(.16, 1, .3, 1)`; the layout itself stays still. Reduced-motion preference disables transitions and smooth scrolling.

### Resource and method lists

Courses, downloadable resources, and method definitions use open rows with bottom rules and restrained metadata. Links identify available material; plain text is used where no resource exists. These rows inherit the typography and divider vocabulary rather than becoming boxed cards.

### Notices

Pale sage rectangular notices separate status information from technical prose. Existing unfinished source sections are explicitly labeled. The notice treatment is reusable; unfinished content is not a visual convention to perpetuate.

## Do's and Don'ts

### Do:

- **Do** use real scientific imagery with factual captions and intact source colors.
- **Do** preserve method text when project rows compress on mobile.
- **Do** keep long technical reading within 56ch.
- **Do** retain visible focus, live filter counts, and reduced-motion behavior.

### Don't:

- **Don't** add shadows or nested containers to the user-requested project cards.
- **Don't** crop technical figures as if they were index thumbnails.
- **Don't** style static method tags as clickable filter controls.
- **Don't** treat unfinished source prose or empty legacy captions as reusable content patterns.

The homepage sidebar places a 184px circular portrait between its opening heading and biography. Preserve the source photograph; use CSS `object-fit: cover` and a 50% radius. Sidebar contact links and footer links wrap on narrow screens. LinkedIn is available in both places.

Experience is a chronological reading surface with four sections: research, education, publications, and recognition. Each entry uses a 210px date column and a content column capped at 760px, separated by a 40px gap and thin top rule. At 700px, dates stack above content with a 12px gap. Section headings use 34px desktop / 28px mobile; topic headings use 17px and body text 15px. Main navigation places Experience between Research and About and wraps on narrow screens.
