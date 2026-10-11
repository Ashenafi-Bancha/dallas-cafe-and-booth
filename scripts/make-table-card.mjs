// Builds the printable QR table cards in print/:
//   table-card-a5.html  - a single A5 card for an acrylic menu stand
//   table-cards-a4-2up.html - two of the same card on one A4 sheet, to cut apart
// Run with: npm run table-card
// Change MENU_URL if the site moves to its own domain, then reprint.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import QRCode from 'qrcode';

const MENU_URL = 'https://dallas-cafe-and-booth.vercel.app/menu';
const OUT = 'print';

const INK = '#120E0B';
const CREAM = '#F4ECDD';
const GOLD = '#C9A45C';
const CLAY = '#B5532C';

// The QR code as SVG, with a clear circle in the middle for the logo.
// Error correction "H" lets up to 30% of the code be covered and still scan.
function qrSvg(logoDataUri) {
  const { modules } = QRCode.create(MENU_URL, { errorCorrectionLevel: 'H' });
  const n = modules.size;
  const centre = n / 2;
  const hole = n * 0.15;

  let cells = '';
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (!modules.get(y, x)) continue;
      if (Math.hypot(x + 0.5 - centre, y + 0.5 - centre) < hole + 0.6) continue;
      cells += `<rect x="${x + 0.04}" y="${y + 0.04}" width="0.92" height="0.92" rx="0.18"/>`;
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${n}" shape-rendering="geometricPrecision">
    <g fill="${INK}">${cells}</g>
    <clipPath id="badge"><circle cx="${centre}" cy="${centre}" r="${hole - 0.2}"/></clipPath>
    <circle cx="${centre}" cy="${centre}" r="${hole}" fill="#fefefe"/>
    <image href="${logoDataUri}" x="${centre - hole}" y="${centre - hole}" width="${hole * 2}" height="${hole * 2}" clip-path="url(#badge)"/>
    <circle cx="${centre}" cy="${centre}" r="${hole}" fill="none" stroke="${GOLD}" stroke-width="0.35"/>
  </svg>`;
}

const tibeb = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='14' viewBox='0 0 28 14'%3E%3Cpath d='M14 1l7 6-7 6-7-6z' fill='none' stroke='%23C9A45C'/%3E%3Cpath d='M14 4.5l3 2.5-3 2.5-3-2.5z' fill='%23B5532C'/%3E%3Cpath d='M0 7h4M24 7h4' stroke='%23C9A45C'/%3E%3C/svg%3E")`;

const styles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { background: ${INK}; font-family: "DM Sans", "Noto Sans Ethiopic", sans-serif; color: ${CREAM}; }
  .card {
    position: relative; width: 148mm; height: 210mm; overflow: hidden;
    background: radial-gradient(120% 80% at 50% 0%, #2B2019 0%, ${INK} 62%);
    display: flex; flex-direction: column; align-items: center; text-align: center;
    padding: 11mm 13mm 9mm;
  }
  .frame { position: absolute; inset: 5mm; border: 0.3mm solid ${GOLD}; opacity: 0.55; pointer-events: none; }
  .tibeb { width: 100%; height: 14px; background: ${tibeb} repeat-x center / 28px 14px; opacity: 0.9; }
  .logo { width: 21mm; height: 21mm; border-radius: 50%; background: #fefefe; padding: 1.4mm; margin-top: 4mm; }
  .name { margin-top: 3.5mm; font-size: 11pt; font-weight: 700; letter-spacing: 0.3em; text-transform: uppercase; }
  .where { margin-top: 1.5mm; font-size: 6.5pt; letter-spacing: 0.32em; text-transform: uppercase; color: ${GOLD}; }
  h1 { margin-top: 6mm; font-family: "EB Garamond", "Noto Serif Ethiopic", serif; font-style: italic; font-weight: 500; font-size: 33pt; line-height: 1; }
  h1 em { color: ${GOLD}; }
  .am { margin-top: 2.5mm; font-family: "Noto Serif Ethiopic", serif; font-size: 13pt; color: ${CREAM}; opacity: 0.92; }
  .qr { margin-top: 6mm; width: 74mm; height: 74mm; padding: 5mm; background: ${CREAM}; border-radius: 4mm; outline: 0.5mm solid ${GOLD}; outline-offset: 1.6mm; }
  .qr svg { display: block; width: 100%; height: 100%; }
  .steps { margin-top: 7.5mm; display: flex; align-items: center; gap: 3mm; font-size: 7.5pt; letter-spacing: 0.16em; text-transform: uppercase; color: ${CREAM}; opacity: 0.85; }
  .steps i { width: 1.4mm; height: 1.4mm; background: ${CLAY}; transform: rotate(45deg); }
  .foot { margin-top: auto; width: 100%; }
  .tag { font-family: "EB Garamond", serif; font-style: italic; font-size: 15pt; color: ${GOLD}; margin-bottom: 3mm; }
  .contact { margin-top: 3mm; font-size: 7pt; letter-spacing: 0.14em; color: ${CREAM}; opacity: 0.7; }
`;

const fonts = `<link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=EB+Garamond:ital,wght@1,500&family=Noto+Sans+Ethiopic:wght@400;500&family=Noto+Serif+Ethiopic:wght@400;500&display=swap" />`;

function card(qr, logoDataUri) {
  return `<div class="card">
    <div class="frame"></div>
    <div class="tibeb"></div>
    <img class="logo" src="${logoDataUri}" alt="" />
    <p class="name">Dallas Café</p>
    <p class="where">Wolaita Sodo · Ethiopia</p>
    <h1>Scan for <em>our menu</em></h1>
    <p class="am">ሜኑውን ለማየት ስካን ያድርጉ</p>
    <div class="qr">${qr}</div>
    <p class="steps">Open camera <i></i> Point at the code <i></i> Tap the link</p>
    <div class="foot">
      <p class="tag">Eat. Sip. Stay. Play.</p>
      <div class="tibeb"></div>
      <p class="contact">0965 55 15 42 &nbsp;·&nbsp; dallas-cafe-and-booth.vercel.app</p>
    </div>
  </div>`;
}

const page = (title, size, extraCss, body) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8" /><title>${title}</title>${fonts}
<style>@page { size: ${size}; margin: 0; }${styles}${extraCss}</style></head><body>${body}</body></html>`;

const logo = `data:image/png;base64,${(await readFile('public/logo-mark.png')).toString('base64')}`;
const qr = qrSvg(logo);

await mkdir(OUT, { recursive: true });

await writeFile(`${OUT}/table-card-a5.html`, page('Dallas Café menu card (A5)', '148mm 210mm', '', card(qr, logo)));

// Two cards side by side on one A4 landscape sheet, with a cut line down the middle.
// Cut them apart and slide them back to back into a stand so the menu reads from both sides.
await writeFile(
  `${OUT}/table-cards-a4-2up.html`,
  page(
    'Dallas Café menu cards (2 per A4)',
    '297mm 210mm',
    `.sheet { position: relative; width: 297mm; height: 210mm; display: flex; background: ${INK}; }
     .sheet .card { width: 148.5mm; }
     .cut { position: absolute; left: 148.5mm; top: 0; height: 210mm; border-left: 0.2mm dashed rgba(244, 236, 221, 0.4); }`,
    `<div class="sheet">${card(qr, logo)}${card(qr, logo)}<div class="cut"></div></div>`
  )
);

console.log(`QR points to ${MENU_URL}`);
