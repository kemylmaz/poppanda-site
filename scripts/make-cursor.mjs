// Builds the paw cursor from assets/pandahand.png, which already carries its
// own alpha channel — so this only trims the empty margin and scales it down to
// a size a pointer can wear. Run with: npm run cursor
import sharp from 'sharp';

const SOURCE = 'assets/pandahand.png';
const OUT = 'src/assets/cursor.png';
const HEIGHT = 56; // bigger than this and the paw covers what it points at

// The artwork is painted with soft alpha all the way through, so parts of the
// paw are see-through. A cursor has to sit on top of whatever it points at, so
// everything inside the silhouette is made solid — the outer rim is left alone
// to keep the edge smooth.
const { data, info } = await sharp(SOURCE)
  .ensureAlpha()
  .trim({ threshold: 8 })
  .resize({ height: HEIGHT, kernel: 'lanczos3' })
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const alphaAt = (x, y) => data[(y * width + x) * channels + 3];

const outside = new Uint8Array(width * height);
const queue = [];
for (let x = 0; x < width; x++) queue.push([x, 0], [x, height - 1]);
for (let y = 0; y < height; y++) queue.push([0, y], [width - 1, y]);

while (queue.length) {
  const [x, y] = queue.pop();
  if (x < 0 || y < 0 || x >= width || y >= height) continue;
  const flat = y * width + x;
  if (outside[flat] || alphaAt(x, y) >= 110) continue;
  outside[flat] = 1;
  queue.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
}

const touchesOutside = (x, y) => {
  for (const [nx, ny] of [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]]) {
    if (nx < 0 || ny < 0 || nx >= width || ny >= height) return true;
    if (outside[ny * width + nx]) return true;
  }
  return false;
};

// Flatten the inside onto white rather than just forcing the alpha up: the art
// was painted against white, and the strokes hiding under the soft alpha are
// meant to be read through it, not on top of whatever is behind the cursor.
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    if (outside[y * width + x]) continue;
    if (touchesOutside(x, y)) continue;

    const i = (y * width + x) * channels;
    const a = data[i + 3] / 255;
    data[i] = Math.round(data[i] * a + 255 * (1 - a));
    data[i + 1] = Math.round(data[i + 1] * a + 255 * (1 - a));
    data[i + 2] = Math.round(data[i + 2] * a + 255 * (1 - a));
    data[i + 3] = 255;
  }
}

const small = await sharp(data, { raw: { width, height, channels } })
  .png({ compressionLevel: 9 })
  .toBuffer({ resolveWithObject: true });

await sharp(small.data).toFile(OUT);

// The click lands on the tip of the raised finger: the topmost solid pixel.
const probe = await sharp(small.data).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
let tipX = 0;
let tipY = 0;
outer: for (let y = 0; y < probe.info.height; y++) {
  for (let x = 0; x < probe.info.width; x++) {
    if (probe.data[(y * probe.info.width + x) * probe.info.channels + 3] > 160) {
      tipX = x;
      tipY = y;
      break outer;
    }
  }
}

console.log(`${OUT}  ${small.info.width}x${small.info.height}`);
console.log(`hotspot: ${tipX} ${tipY}  → global.css içindeki cursor satırı`);
