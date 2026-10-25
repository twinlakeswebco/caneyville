---
name: Caneyville.org
description: A plainspoken independent community circular in plum and lavender.
colors:
  ink: "#30203f"
  plum: "#43265e"
  muted: "#685b72"
  lavender: "#eee8f5"
  paper: "#fbfafc"
  white: "#fff"
  rule: "#d8cfe0"
  accent: "#e2edab"
  button-hover: "#5b3776"
  light-button-hover: "#d4e68b"
  field-border: "#a99ab4"
  panel-rule: "#d2c6dc"
  resource-hover: "#744c8d"
  inverse-copy: "#e0d6e9"
typography:
  headline:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(30px, 3.4vw, 44px)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "21px"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  intro:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  business-name:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 650
    lineHeight: 1.45
    letterSpacing: "-0.015em"
  button:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 650
    lineHeight: 1.5
  metadata:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  square: "0"
  field: "5px"
  button: "6px"
  service-corner: "0 24px 0 0"
  service-corner-mobile: "0 20px 0 0"
spacing:
  compact: "8px"
  inset: "12px"
  paragraph: "16px"
  list-gap: "20px"
  panel-inline: "30px"
  section-mobile: "48px"
  section-band: "54px"
components:
  button-primary:
    backgroundColor: "{colors.plum}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "13px 21px"
  button-primary-hover:
    backgroundColor: "{colors.button-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.plum}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "13px 21px"
  button-outline-hover:
    backgroundColor: "{colors.lavender}"
  button-light:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.plum}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "13px 21px"
  button-light-hover:
    backgroundColor: "{colors.light-button-hover}"
  text-button:
    backgroundColor: "transparent"
    textColor: "{colors.plum}"
    padding: "10px 0"
  search-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "12px 18px 12px 51px"
    height: "54px"
  category-select:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "12px 36px 12px 15px"
    height: "54px"
  service-panel:
    backgroundColor: "{colors.lavender}"
    textColor: "{colors.ink}"
    rounded: "{rounded.service-corner}"
    padding: "28px 30px 8px"
  business-row:
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "21px 0 19px"
  navigation:
    textColor: "{colors.ink}"
  disclosure:
    textColor: "{colors.ink}"
---

# Design System: Caneyville.org

## Overview

**Creative North Star: "The cooperative community circular"**

Caneyville.org uses the familiar density of a local circular: a compact nameplate, open listings, practical service columns and clear reading sections. The character is direct and neighborly. Plum references the local Purple Flash identity; pale lavender and white keep long information pages light.

Archivo carries both the nameplate and ordinary reading. Rules and tonal fields organize the information without decoration or floating cards. The supplied Kentucky map is a specific identity asset with transparent ground, original linework and a red location marker; its page placement belongs to the home surface contract, not a universal heading rule.

**Key Characteristics:**

- Plum type and controls on paper, lavender and white.
- Open directory rows and ruled service lists.
- One self-hosted type family with a compact, strong heading voice.
- Flat sections, restrained rounded controls and one asymmetric service-panel corner.
- Direct interactions with visible keyboard focus and reduced-motion support.

## Colors

A purple family supplies both identity and structure; yellow-green marks the light action on a dark field and selected text.

### Primary

- **Plum** (`plum`): masthead identity, primary buttons, dark information bands, focus outlines and strong rules.
- **Button hover** (`button-hover`): the primary action's lighter purple hover state.
- **Resource hover** (`resource-hover`): linked service rows on lavender.

### Secondary

- **Yellow-green** (`accent`): the school-band action, selected text and focus outlines on dark plum.
- **Light button hover** (`light-button-hover`): the yellow-green action's hover state.

### Neutral

- **Ink** (`ink`) and **muted purple** (`muted`): primary reading and supporting metadata.
- **Paper** (`paper`), **white** (`white`) and **lavender** (`lavender`): page ground, directory reading surface and practical information panels.
- **Rule** (`rule`), **panel rule** (`panel-rule`) and **field border** (`field-border`): section boundaries, row dividers and input outlines.
- **Inverse copy** (`inverse-copy`): supporting reading in the dark school band.

**The Tonal Structure Rule.** Organize information through paper, white, lavender and plum fields, with thin purple-family rules separating rows.

## Typography

**Display Font:** Archivo, with Arial and sans-serif fallbacks.  
**Body Font:** Archivo, with the same fallbacks.

The bundled variable font supports weights from 100 through 900. The implementation uses weight and slightly tightened headings for hierarchy, without a second display face or a fixed modular ratio. Font loading uses swap.

### Hierarchy

- **Headline:** the fluid headline token governs main section headings. Smaller contextual headings use 20–30px; the service-panel heading is 25px on desktop.
- **Title:** the title token governs general third-level headings; history details use 23px on desktop and 22px on small screens.
- **Introduction:** the intro token is limited to the short opening paragraph; it becomes 17px at 900px and below and has a 39ch desktop measure.
- **Body:** the body token is the reading baseline. Ordinary paragraphs stop at 70ch; several two-column passages use shorter measures. FAQ answers use a 1.7 line height.
- **Business name:** the business-name token distinguishes entries from their category, address and contact metadata.
- **Button:** the button token applies to all filled and outlined actions. Navigation uses 14px at weight 600 on desktop.
- **Metadata:** the metadata token serves category labels, source notes, ownership and legal context. Addresses and directory descriptions use 13–14px as appropriate to the component.

**The Reading Baseline Rule.** Keep substantive paragraph copy at the body size or larger; reserve the smaller sizes for controls and supporting metadata.

The legacy large h1 style remains in CSS, but the home h1 is visually expressed by the supplied map with a screen-reader title. Its unused text-display scale is not a recommended visible heading token.

## Layout

The content measure is 1200px, with fluid side gutters of `clamp(20px, 4vw, 56px)`. Layouts use open CSS grids rather than enclosed card collections. The directory is two columns with a 48px gap; search pairs a flexible field with a 300px category control. Content pairs use equal or gently unequal columns and fluid gaps.

At 900px, gaps tighten and resource rows may stack their text. At 700px, content grids and directory tools become one column, the masthead becomes 74px high, and the JavaScript navigation becomes a toggled two-column link group. Without JavaScript, the navigation and all business records remain readable. Above 1500px, the welcome spacing expands to 80px vertically.

Spacing follows the component's reading task rather than a strict arithmetic scale: paragraph separation is 16px, business rows use 21px/19px vertical padding, information bands use 54px section padding, and longer desktop reading sections use 70–84px. Small-screen content sections commonly use 45–48px vertical padding. The sticky masthead is 88px on desktop; anchor offsets are 100px, reducing to 85px on small screens.

## Elevation & Depth

The system has no box shadows. Background changes, thin dividers and the sticky masthead's border convey structure. The masthead uses z-index 5; the keyboard skip link uses z-index 10. No decorative texture, entrance sequence or background blur is present.

**The Flat Circular Rule.** Keep information surfaces flat and separate them with tone and rules.

## Shapes

Buttons have compact rounded corners; fields are slightly tighter. Most information surfaces and rows stay square. The everyday-services panel alone has an open, asymmetric upper-right corner, which tightens on mobile. Borders are generally 1px; the Purple Flash history column begins with a 2px plum rule. Icons are simple inline stroked SVG arrows, menu lines and a search magnifier.

## Components

### Buttons

Confident, compact links and actions. Primary buttons use plum and white; outline buttons use a transparent ground and plum border; light buttons use yellow-green and plum on a dark section. Each uses the frontmatter button geometry with a 50px minimum height, a 26px content gap and 20px arrow. Hover changes background over 180ms with ease-out. The transparent clear-filter button is underlined with a 44px minimum target height. Disabled buttons lower opacity to 0.5.

Keyboard focus uses a 3px plum outline offset by 5px; dark plum bands switch the focus color to yellow-green. Reduced-motion mode removes transitions and smooth scrolling.

### Inputs / Fields

Native search and select controls are white, outlined and full-width, with 16px text. The search reserves left padding for its 22px magnifier; the category control preserves a native selector. Hover strengthens the border to plum, and the shared keyboard outline remains clearly outside the field. The source does not define error or validation styling.

### Navigation

The sticky paper masthead uses a compact plum wordmark with a muted domain suffix. Desktop links have generous vertical padding and underline on hover. The small-screen Menu button is at least 44px high. Its expanded links use 15px text; Escape closes the menu and returns focus to its button. No active-section highlight is implemented.

### Ruled lists and information panels

Directory entries remain open rows separated by a single rule. A business name is followed by muted description/address metadata and plum contact links with 36px minimum link height. This is a list treatment, not a reusable elevated-card component.

The lavender service panel uses the asymmetric corner and compact ruled links. Town facts use a square lavender field with tabular numbers, muted labels and right-aligned values; supporting Census text stays visibly attached to its value. Native details/summary disclosures provide history sources and common questions with ruled boundaries and no scripted animation.

## Do's and Don'ts

### Do:

- **Do** use plum, lavender, paper and white to distinguish practical information regions.
- **Do** preserve open, ruled lists and the shared 16px reading baseline.
- **Do** keep inline SVG symbols functional, with visible focus for keyboard interactions.
- **Do** preserve the supplied map's transparent ground and location marker when reusing that asset.
- **Do** keep reduced-motion and no-JavaScript access intact.

### Don't:

- **Don't** introduce shadows, decorative grain or stock photographs into this circular's visual language.
- **Don't** convert directory rows into a boxed card grid.
- **Don't** turn source notes, category labels or controls into decorative uppercase kickers.
- **Don't** make the home map treatment a requirement for every future heading.
