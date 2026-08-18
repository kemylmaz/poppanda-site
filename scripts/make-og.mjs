// Renders the share image and the favicons from the real logo art.
// Run with: npm run og
import sharp from 'sharp';

const YELLOW = { r: 247, g: 197, b: 30, alpha: 1 };

// 1200x630 share card: the stacked lockup centred on brand yellow.
const lockup = await sharp('public/media/logo-stacked.png')
  .resize({ height: 470, withoutEnlargement: true })
  .toBuffer();

await sharp({ create: { width: 1200, height: 630, channels: 4, background: YELLOW } })
  .composite([{ input: lockup, gravity: 'center' }])
  .png()
  .toFile('public/og.png');
console.log('wrote public/og.png');

// Square icons from the panda mark.
for (const size of [180, 512]) {
  const mark = await sharp('public/media/mark-source.jpg')
    .trim({ threshold: 18 })
    .resize({ height: Math.round(size * 0.82), withoutEnlargement: true })
    .toBuffer();

  await sharp({ create: { width: size, height: size, channels: 4, background: YELLOW } })
    .composite([{ input: mark, gravity: 'center' }])
    .png()
    .toFile(size === 180 ? 'public/apple-touch-icon.png' : 'public/icon-512.png');
}
await sharp('public/icon-512.png').resize(48, 48).png().toFile('public/favicon.png');
console.log('wrote icons');
