import { ArrowRight } from 'lucide-react';
import { useLang } from '../i18n';
import { Photo } from './Photo';
import { Reveal } from './Reveal';

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
        <div className="lg:col-span-6 lg:col-start-7 lg:self-center">
          <Reveal>
            <p className="eyebrow mb-5 text-gold">{s.about.eyebrow}</p>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {s.about.heading.before} <em className="text-gold">{s.about.heading.accent}</em>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">{s.about.body}</p>
            <a
              href="#menu"
              className="group mt-10 inline-flex items-center gap-3 border-b border-gold pb-1.5 text-sm font-medium text-cream transition-colors hover:text-gold"
            >
              {s.hero.primaryCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
