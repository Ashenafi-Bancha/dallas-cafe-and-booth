import type { PhotoName } from '../data/config';
import { useLang } from '../i18n';
import { withPlainAmpersand } from './Ampersand';
import { Photo } from './Photo';
import { Reveal } from './Reveal';

// Captions and alt text come from strings.ts, in this same order.
const gallery: PhotoName[] = [
  'pavilion_day',
  'pavilion_night',
  'sign',
  'seating_garden',
  'ceremony_corner',
  'pavilion_gate',
  'seating_tables',
  'pavilion_evening',
  'seating_plant',
  'pavilion_corner',
  'seating_booth',
  'seating_canopy',
  'grounds',
  'pavilion_garden',
];

export function GallerySection() {
  const { s } = useLang();

  return (
    <section id="gallery" className="overflow-hidden bg-espresso py-24 text-cream md:py-36">
      <div className="wrap">
        {/* Header */}
        <Reveal className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-5 text-gold">{s.gallery.eyebrow}</p>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {s.gallery.heading.before} <em className="text-gold">{s.gallery.heading.accent}</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-cream/65">{s.gallery.intro}</p>
        </Reveal>

        {/* Every photo keeps its own proportions, so nothing is cropped: tall and wide
            photos pack into columns. One column on phones, two on tablets, three on desktop. */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((photo, i) => (
            <Reveal key={photo} className="mb-6 break-inside-avoid">
              <figure>
                <Photo
                  name={photo}
                  alt={s.gallery.items[i].alt}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full"
                />
                <figcaption className="mt-3 flex items-baseline gap-3">
                  <span className="text-xs text-gold">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-lg italic">{withPlainAmpersand(s.gallery.items[i].caption)}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
