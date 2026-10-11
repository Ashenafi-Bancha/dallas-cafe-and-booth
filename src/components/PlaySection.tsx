import type { PhotoName } from '../data/config';
import { useLang } from '../i18n';
import { withPlainAmpersand } from './Ampersand';
import { Photo } from './Photo';
import { Reveal } from './Reveal';

// Captions and alt text come from strings.ts, in this same order
const playPhotos: PhotoName[] = ['play_castle', 'play_trampoline', 'play_slides', 'play_seesaw'];

export function PlaySection() {
  const { s } = useLang();

  return (
    <section id="play" className="overflow-hidden bg-ink py-24 text-cream md:py-36">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow mb-5 text-gold">{s.play.eyebrow}</p>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {s.play.heading.before} <em className="text-gold">{s.play.heading.accent}</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="text-base leading-relaxed text-cream/70 md:text-lg">{s.play.body}</p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 md:mt-16 items-start md:grid-cols-2 md:gap-4 lg:grid-cols-4">
          {playPhotos.map((photo, i) => (
            <Reveal key={photo} delay={(i % 2) * 0.08}>
              <figure>
                <Photo
                  name={photo}
                  alt={s.play.items[i].alt}
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="h-auto w-full"
                />
                <figcaption className="mt-4 flex items-baseline gap-3">
                  <span className="text-xs text-gold">0{i + 1}</span>
                  <span className="font-display text-xl italic">{withPlainAmpersand(s.play.items[i].caption)}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="tibeb mt-12 opacity-70" />
          <p className="mt-5 text-sm text-sand">{s.play.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
