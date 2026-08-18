// Trims the yellow border off the supplied logo art and writes the web copies.
// Run with: npm run logos
import sharp from 'sharp';

const jobs = [
  { in: 'public/media/logo-source.jpg', out: 'src/assets/logo.png', height: 120 },
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

// The panda arrives with its background already cut out. Trimming works on the
// alpha channel here, so the empty margin goes without touching the artwork,
// and the result is enlarged past source size for high-density screens.
const mark = await sharp('public/media/mark-source.png')
  .trim({ threshold: 2 })
  .resize({ height: 1000, kernel: 'lanczos3' })
  .sharpen({ sigma: 1, m1: 0.4, m2: 2 })
  .png({ compressionLevel: 9, palette: true, colours: 64, quality: 92 })
  .toFile('src/assets/mark.png');

console.log(`src/assets/mark.png  ${mark.width}x${mark.height}`);
