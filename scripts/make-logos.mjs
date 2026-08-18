// Trims the yellow border off the supplied logo art and writes the web copies.
// Run with: npm run logos
import sharp from 'sharp';

const jobs = [
  { in: 'public/media/logo-source.jpg', out: 'public/media/logo.png', height: 120 },
  { in: 'public/media/stacked-source.jpg', out: 'public/media/logo-stacked.png', height: 640 },
];

for (const job of jobs) {
  const info = await sharp(job.in)
    .trim({ threshold: 18 })
    .resize({ height: job.height, withoutEnlargement: true })
    .png()
    .toFile(job.out);
  console.log(`${job.out}  ${info.width}x${info.height}`);
}

// The panda is shown small but on high-density screens, so it is enlarged well
// past its source size with a smooth kernel and then sharpened — otherwise the
// JPEG softness is what you see.
const mark = await sharp('public/media/mark-source.jpg')
  .trim({ threshold: 18 })
  .resize({ height: 900, kernel: "lanczos3" })
  .median(3)
  .sharpen({ sigma: 1.4, m1: 0.5, m2: 2.5 })
  .png({ compressionLevel: 9, palette: true, colours: 24 })
  .toFile('public/media/mark.png');

console.log(`public/media/mark.png  ${mark.width}x${mark.height}`);
