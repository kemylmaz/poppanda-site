// Renders the social icons in public/media/social from the SVG sources in
// assets/social. The glyphs come out white and transparent, because the tile
// behind them already carries the platform's colour.
// Run with: npm run social
import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const SIZE = 96;
const GLYPH = 58;

// source file -> the key SocialLinks.astro looks for
const icons = {
  github: 'github',
  linkedin: 'linkedin',
  youtube: 'youtube',
  itchdotio: 'itch',
  artstation: 'artstation',
};

for (const [source, key] of Object.entries(icons)) {
  const svg = readFileSync(`assets/social/${source}.svg`, 'utf8')
    .replace('<svg ', '<svg fill="#ffffff" ');

  const glyph = await sharp(Buffer.from(svg))
    .resize(GLYPH, GLYPH, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  await sharp({
    create: { width: SIZE, height: SIZE, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([{ input: glyph, gravity: 'center' }])
    .png()
    .toFile(`public/media/social/${key}.png`);

  console.log(`public/media/social/${key}.png`);
}
