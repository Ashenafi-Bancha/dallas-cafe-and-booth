import { useLang } from '../i18n';
import { Photo } from './Photo';
import { Reveal } from './Reveal';

// The three pours of the Ethiopian coffee ceremony
const numerals = ['I', 'II', 'III'];

export function AboutSection() {
  const { s } = useLang();

  return (
    <section id="about" className="overflow-hidden bg-ink py-24 text-cream md:py-36">
      <div className="wrap grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
        {/* Image */}
        <Reveal className="relative lg:col-span-5">
          <figure>
            <div className="aspect-[4/5] overflow-hidden">
              <Photo
                name="ethiopian_coffee"
                alt={s.about.photoAlt}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="tibeb mt-4 opacity-80" />
            <figcaption className="eyebrow mt-4 text-sand">{s.about.caption}</figcaption>
          </figure>
        </Reveal>

        {/* Text Content */}
        <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
          <Reveal>
            <p className="eyebrow mb-5 text-gold">{s.about.eyebrow}</p>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {s.about.heading.before} <em className="text-gold">{s.about.heading.accent}</em>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">{s.about.body}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow mt-14 mb-2 text-sand">{s.about.cupsLabel}</p>
          </Reveal>
          <ol>
            {s.about.cups.map((cup, i) => (
              <li key={cup.name}>
                <Reveal delay={0.1 + i * 0.1} className="grid grid-cols-[3rem_1fr] gap-x-4 border-t border-cream/15 py-6 md:grid-cols-[4rem_10rem_1fr]">
                  <span className="font-display text-2xl italic text-gold">{numerals[i]}</span>
                  <div>
                    <h3 className="font-display text-2xl">{cup.name}</h3>
                    <p className="mt-1 text-xs text-sand">{cup.meaning}</p>
                  </div>
                  <p className="col-start-2 mt-3 text-sm leading-relaxed text-cream/70 md:col-start-3 md:mt-1">
                    {cup.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
