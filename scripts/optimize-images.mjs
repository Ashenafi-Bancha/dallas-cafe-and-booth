// Converts the full-size photos in image-sources/ into the compressed
// WebP files the site serves from public/images/.
// Run with: npm run images
import { mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SRC = 'image-sources';
const OUT = 'public/images';
const SMALL_WIDTH = 640;
const THUMB_WIDTH = 200;

await mkdir(OUT, { recursive: true });

for (const file of await readdir(SRC)) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const name = path.parse(file).name;
  if (name === 'logo') continue; // handled separately below
  const input = path.join(SRC, file);
  const { width, height } = await sharp(input).metadata();

  await sharp(input).webp({ quality: 78 }).toFile(path.join(OUT, `${name}-lg.webp`));
  await sharp(input)
    .resize({ width: SMALL_WIDTH })
    .webp({ quality: 74 })
    .toFile(path.join(OUT, `${name}-sm.webp`));
  await sharp(input)
    .resize({ width: THUMB_WIDTH })
    .webp({ quality: 72 })
    .toFile(path.join(OUT, `${name}-xs.webp`));

  console.log(`${name}: { width: ${width}, height: ${height} },`);
}

// Link-preview image for social sharing; JPEG because not every app reads WebP previews
await sharp(path.join(SRC, 'hero.jpg'))
  .resize({ width: 1200, height: 630, fit: 'cover' })
  .jpeg({ quality: 82 })
  .toFile('public/og.jpg');

// Logo. The crop boxes are measured on the 1254px-square logo.jpg, so re-measure them if the file is replaced.
const logo = sharp(path.join(SRC, 'logo.jpg'));
// Full lockup with the name, for the footer
await logo.clone().extract({ left: 271, top: 177, width: 712, height: 907 }).resize({ width: 480 }).png().toFile('public/logo.png');
// Chef and DC monogram only, for the navigation badge and browser tab
const paper = '#fefefe'; // the logo file's own background
const mark = sharp(
  await logo
    .clone()
    .extract({ left: 300, top: 200, width: 645, height: 640 })
    .extend({ top: 30, bottom: 35, left: 30, right: 30, background: paper })
    .png()
    .toBuffer()
);
for (const [file, size] of [['logo-mark.png', 192], ['apple-touch-icon.png', 180], ['favicon.png', 64]]) {
  await mark.clone().resize(size, size, { fit: 'contain', background: paper }).png().toFile(`public/${file}`);
}
