// Renders public/og.png — the image shown when a poppanda.net link is shared.
// Run with: npm run og
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const NAVY = '#2B2170';
const YELLOW = '#F7C51E';
const ORANGE = '#F26722';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${YELLOW}"/>
  <g transform="translate(150 175) scale(2.9)">
    <circle cx="19" cy="20" r="8.5" fill="${NAVY}"/>
    <circle cx="45" cy="20" r="8.5" fill="${NAVY}"/>
    <circle cx="32" cy="34" r="19" fill="${NAVY}"/>
    <path d="M23 30.5c1.6-2.6 5.2-2.6 6.8 0-1.6 2.6-5.2 2.6-6.8 0z" fill="${YELLOW}"/>
    <path d="M34.2 30.5c1.6-2.6 5.2-2.6 6.8 0-1.6 2.6-5.2 2.6-6.8 0z" fill="${YELLOW}"/>
    <path d="M28 41c2.4 2.2 5.6 2.2 8 0" stroke="${YELLOW}" stroke-width="2.6" stroke-linecap="round" fill="none"/>
    <path d="M26 55c2-6 4-9 6-9s4 3 6 9c-4 2-8 2-12 0z" fill="${ORANGE}"/>
  </g>
  <text x="460" y="290" font-family="Arial Black, Arial, sans-serif" font-size="86" font-weight="900" fill="${NAVY}" letter-spacing="-2">POPPANDA</text>
  <text x="464" y="378" font-family="Arial Black, Arial, sans-serif" font-size="62" font-weight="900" fill="${NAVY}" letter-spacing="-1">INTERACTIVE</text>
  <text x="466" y="440" font-family="Arial, sans-serif" font-size="30" fill="${NAVY}" opacity="0.75">Games &amp; video · poppanda.net</text>
  <rect x="0" y="606" width="1200" height="24" fill="${ORANGE}"/>
</svg>`;

writeFileSync('public/og.svg', svg);
await sharp(Buffer.from(svg)).png().toFile('public/og.png');
console.log('wrote public/og.png');
