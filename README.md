# Caneyville.org

An independent community guide owned and maintained by Twin Lakes Web Co. LLC. This website is not operated by or affiliated with the City of Caneyville government.

## Run locally

This is a static HTML, CSS and JavaScript website with no build step. Serve the repository root with any static web server, or open `index.html` for a quick preview. All fonts and the hero map are hosted within this repository.

## Update content

- Business listings are HTML list items in `index.html`, under `#dirgrid`. Keep `data-cat` aligned with the category options. Search indexes each listing's visible content. The result count is calculated automatically; update the initial HTML count if adding or removing a listing so it is also correct without JavaScript.
- Population is **529, from the 2020 U.S. Decennial Census**. Always retain the year and source; do not present it as a current estimate.
- Link event dates, utility services and school information to their organizers or official websites. The community descriptions are background, not a live calendar.
- Corrections and listing requests go to `casey@twinlakesweb.com`.

## Assets

The hero uses `assets/caneyville-map-transparent.png`, an edit of the supplied `assets/KYMap-doton-Caneyville.png`. The white background was removed with imagegen. The original source image is preserved. Font: Archivo, copyright the Archivo Project Authors, licensed under the SIL Open Font License; see `assets/fonts/OFL.txt`.

## Validation

The rebuild preserves all 27 original business records and contact links. Browser checks cover search, combined category filtering, the empty state, reset, and the mobile menu. Desktop and mobile compositions were reviewed in Safari at 1440px and 390px. The map has an alpha channel with a transparent background. Source links and structured data identify the 2020 Census count.

Design tokens and layout conventions are recorded in `DESIGN.md` and `.impeccable/design.json`.
