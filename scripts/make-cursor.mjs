// Builds the paw cursor from assets/pandahand.png.
// The artwork sits on opaque white, and the paw's own palm is white too, so a
// plain "make white transparent" pass would punch holes through the middle.
// Instead the background is flood-filled inward from the edges: only white that
// is connected to the border goes, and the dark outline stops the fill at the
// paw. Run with: npm run cursor
import sharp from 'sharp';

const SOURCE = 'assets/pandahand.png';
const OUT = 'src/assets/cursor.png';
const HEIGHT = 64; // a cursor larger than this starts to cover what it points at
const WHITE = 236; // anything at least this bright counts as background

const { data, info } = await sharp(SOURCE)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const at = (x, y) => (y * width + x) * channels;
const isBackground = (i) =>
  data[i] >= WHITE && data[i + 1] >= WHITE && data[i + 2] >= WHITE;

const seen = new Uint8Array(width * height);
const queue = [];

for (let x = 0; x < width; x++) {
  queue.push([x, 0], [x, height - 1]);
}
for (let y = 0; y < height; y++) {
  queue.push([0, y], [width - 1, y]);
}

while (queue.length) {
  const [x, y] = queue.pop();
  if (x < 0 || y < 0 || x >= width || y >= height) continue;

  const flat = y * width + x;
  if (seen[flat]) continue;

  const i = at(x, y);
  if (!isBackground(i)) continue;

  seen[flat] = 1;
  data[i + 3] = 0;
  queue.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
}

const cut = await sharp(data, { raw: { width, height, channels } })
  .png()
  .toBuffer();

// Trim the now-empty margin, then find the tip of the raised finger: it is the
// topmost pixel that survived, and that is where the click lands.
const trimmed = await sharp(cut).trim({ threshold: 2 }).png().toBuffer();
const small = await sharp(trimmed)
  .resize({ height: HEIGHT, kernel: 'lanczos3' })
  .png({ compressionLevel: 9 })
  .toBuffer({ resolveWithObject: true });

await sharp(small.data).toFile(OUT);

const probe = await sharp(small.data).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
let tipX = 0;
let tipY = 0;
outer: for (let y = 0; y < probe.info.height; y++) {
  for (let x = 0; x < probe.info.width; x++) {
    if (probe.data[(y * probe.info.width + x) * probe.info.channels + 3] > 128) {
      tipX = x;
      tipY = y;
      break outer;
    }
  }
}

console.log(`${OUT}  ${small.info.width}x${small.info.height}`);
console.log(`hotspot: ${tipX} ${tipY}  (global.css içindeki cursor satırına yaz)`);
