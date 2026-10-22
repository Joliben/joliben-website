# Product visions — standalone preview

[Deutsch](VORSCHAU.md) · **English**

## Bilingual edition of 23 October 2026

`JOLIBEN-Vorschau.html` bundles the eight current presentation pages with embedded styles, scripts and images. The DE/EN controls switch the interface, demo cases and marked English reading translations of source excerpts. The original German excerpts remain available. Large videos are replaced by still images in this offline edition. The [live website](https://joliben.github.io/joliben-website/?lang=en) retains the original videos with German narration; text baked into images is not translated.

On GitHub, choose **Code → Download ZIP**, extract the complete archive and open `JOLIBEN-Vorschau.html` in a browser. PDF and GitHub links need an internet connection. To run the full website including videos, use Python 3 in the extracted folder: `python3 -m http.server 8000 --bind 127.0.0.1`, then open `http://127.0.0.1:8000`. Stop the server with Ctrl+C.

Verification of this edition covers translations, language switching, document links and static demo workflows. It is not a fresh test run of the private product. There are no live AI calls or connections to the private core.

## Historical note on the original integration

The following statements record the preview and acceptance status at the time. References to a pending merge or acceptance concern that historical state, rather than the publication status of the bilingual edition.

This branch contains the integration of KIBORAYA, Kanzlei Lab and Commerce Lab. It is intended for review and is not yet being merged into `main`.

### Open the preview

1. On GitHub, choose **Code → Download ZIP** and extract the complete archive.
2. Open `JOLIBEN-Vorschau.html`: a standalone preview with embedded styles, images and demo pages. Large videos are replaced by film stills here.
3. For the complete website, start Python 3 in the extracted folder with `python3 -m http.server 8000 --bind 127.0.0.1`, then open `http://127.0.0.1:8000` in a browser. Stop it with Ctrl+C.

The standalone HTML preview was checked in Chromium with network access blocked: layout, all three demos, language switching, simulation and return navigation. The full version was checked through a local web server on desktop, tablet and smartphone.

The embedded demo data and original demo scripts are retained. The original KIBORAYA-OXXC reference file in the upload remains unchanged; the website version includes additional navigation and links.

No live AI calls. This is not a real law-firm or commerce application. Human acceptance of this website integration is still pending.

### Revised navigation

The main navigation is identical on every page. Under “Product visions”, a submenu operable by click, keyboard or touch opens the three labs or the shared overview. The current product page is marked. A lab’s section links, such as roles and the case lab, appear in a separate, narrow row below the main navigation. On mobile, this row remains horizontally scrollable; the full main navigation opens through the menu button. The three preview cards on the homepage and the demo content are unchanged.
