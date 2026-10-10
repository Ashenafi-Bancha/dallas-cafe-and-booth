// Converts the full-size photos in image-sources/ into the compressed
// WebP files the site serves from public/images/.
// Run with: npm run images
import { mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SRC = 'image-sources';
const OUT = 'public/images';
const SMALL_WIDTH = 640;

await mkdir(OUT, { recursive: true });

for (const file of await readdir(SRC)) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const name = path.parse(file).name;
  const input = path.join(SRC, file);
  const { width, height } = await sharp(input).metadata();

  await sharp(input).webp({ quality: 78 }).toFile(path.join(OUT, `${name}-lg.webp`));
  await sharp(input)
    .resize({ width: SMALL_WIDTH })
    .webp({ quality: 74 })
    .toFile(path.join(OUT, `${name}-sm.webp`));

  console.log(`${name}: { width: ${width}, height: ${height} },`);
}
