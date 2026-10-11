import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { PhotoName } from '../data/config';
import { useLang } from '../i18n';
import { Photo } from './Photo';
import { Reveal } from './Reveal';

// Doorways from the home page to the other pages
export function ExploreSection() {
  const { s } = useLang();

  const pages: { name: string; to: string; photo: PhotoName }[] = [
    { name: s.nav.menu, to: '/menu', photo: 'pizza_special' },
    { name: s.nav.play, to: '/kids', photo: 'play_castle_front' },
    { name: s.nav.gallery, to: '/gallery', photo: 'seating_garden' },
    { name: s.nav.visit, to: '/visit', photo: 'cafe_night' },
  ];

  return (
    <section className="overflow-hidden bg-espresso py-24 text-cream md:py-32">
      <div className="wrap">
        <Reveal className="mb-12 md:mb-16">
          <p className="eyebrow mb-5 text-gold">{s.explore.eyebrow}</p>
          <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {s.explore.heading.before} <em className="text-gold">{s.explore.heading.accent}</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
          {pages.map(({ name, to, photo }, i) => (
            <Reveal key={to} delay={(i % 2) * 0.08}>
              <Link to={to} className="group relative block aspect-[3/4] overflow-hidden">
                <Photo
                  name={photo}
                  alt=""
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/20 to-transparent" />
                <span className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2 font-display text-2xl italic md:text-3xl">
                  {name}
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
