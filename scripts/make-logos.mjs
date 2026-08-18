// Trims the yellow border off the supplied logo art and writes the web copies.
// Run with: npm run logos
import sharp from 'sharp';

const jobs = [
  { in: 'public/media/logo-source.jpg', out: 'public/media/logo.png', height: 120 },
  { in: 'public/media/mark-source.jpg', out: 'public/media/mark.png', height: 512 },
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
