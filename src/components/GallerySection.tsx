import clsx from 'clsx';
import type { PhotoName } from '../data/config';
import { useLang } from '../i18n';
import { Photo } from './Photo';
import { Reveal } from './Reveal';

// Captions and alt text come from strings.ts, in this same order
const gallery: { photo: PhotoName; layout: string }[] = [
  { photo: 'hero', layout: 'md:col-span-8 md:h-[30rem]' },
  { photo: 'macchiato', layout: 'md:col-span-4 md:h-[30rem]' },
  { photo: 'snacks', layout: 'md:col-span-4 md:h-[26rem]' },
  { photo: 'avocado_juice', layout: 'md:col-span-4 md:h-[26rem]' },
  { photo: 'burger', layout: 'md:col-span-4 md:h-[26rem]' },
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

        {/* Swipeable strip on mobile, editorial grid on desktop */}
        <Reveal className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-12 md:gap-4 md:overflow-visible md:px-0">
          {gallery.map((img, i) => (
            <div key={img.photo} className={clsx('w-[78vw] shrink-0 snap-center md:w-auto', img.layout)}>
              <figure className="group relative aspect-[4/5] h-full w-full overflow-hidden md:aspect-auto">
                <Photo
                  name={img.photo}
                  alt={s.gallery.items[i].alt}
                  sizes="(min-width: 768px) 60vw, 78vw"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-ink/80 to-transparent" />
                <figcaption className="absolute bottom-4 left-4 flex items-baseline gap-3">
                  <span className="text-xs text-gold">0{i + 1}</span>
                  <span className="font-display text-lg italic">{s.gallery.items[i].caption}</span>
                </figcaption>
              </figure>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
