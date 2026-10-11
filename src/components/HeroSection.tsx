import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import clsx from 'clsx';
import { ArrowDown, ArrowRight, Baby, BookOpen, Images, MapPin, UtensilsCrossed } from 'lucide-react';
import type { PhotoName } from '../data/config';
import { useLang } from '../i18n';
import { Photo } from './Photo';
import { easeOut } from './Reveal';

const slides: PhotoName[] = ['cafe_night', 'cafe_day', 'play_castle', 'play_slides'];

const SLIDE_INTERVAL_MS = 5500;

export function HeroSection() {
  const { s } = useLang();
  const reduceMotion = useReducedMotion();
  const [slide, setSlide] = useState({ current: 0, previous: -1 });

  const goToSlide = (next: number) => {
    setSlide(({ current }) => (next === current ? { current, previous: -1 } : { current: next, previous: current }));
  };

  // Advance automatically; the timer restarts whenever the slide changes, including by hand
  useEffect(() => {
    if (reduceMotion) return;
    const timer = setTimeout(() => goToSlide((slide.current + 1) % slides.length), SLIDE_INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [slide.current, reduceMotion]);

  const quickLinks = [
    { name: s.nav.menu, href: '#menu', icon: UtensilsCrossed },
    { name: s.nav.play, href: '#play', icon: Baby },
    { name: s.nav.gallery, href: '#gallery', icon: Images },
    { name: s.nav.story, href: '#about', icon: BookOpen },
    { name: s.nav.visit, href: '#contact', icon: MapPin },
  ];

  const slideAlts = [s.hero.photoAlt, s.gallery.items[0].alt, s.play.items[0].alt, s.play.items[2].alt];
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  return (
    <>
      <section ref={sectionRef} id="home" className="relative isolate flex min-h-svh flex-col overflow-hidden bg-ink text-cream">
        {/* Photo slideshow behind the text. Each photo is shown whole, never cropped,
            over a blurred copy of itself that fills the rest of the hero. */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.6, ease: easeOut }}
            style={{ y: photoY }}
            className="relative h-full w-full"
          >
            {/* The current slide sits in view, the one before it leaves to the left, the rest wait on the right */}
            {slides.map((photo, i) => {
              const isCurrent = i === slide.current;
              const isLeaving = i === slide.previous;
              return (
                <motion.div
                  key={photo}
                  initial={false}
                  animate={{ x: isCurrent ? '0%' : isLeaving ? '-100%' : '100%' }}
                  transition={{ duration: isCurrent || isLeaving ? 1.4 : 0, ease: [0.65, 0, 0.35, 1] }}
                  aria-hidden={!isCurrent}
                  className="absolute inset-0"
                >
                  {/* Blurred backdrop, drifting slowly while the slide is up */}
                  <motion.div
                    initial={false}
                    animate={{ scale: isCurrent ? 1.25 : 1.15 }}
                    transition={{ duration: isCurrent ? 8 : 0, ease: 'linear' }}
                    className="absolute inset-0"
                  >
                    <Photo name={photo} alt="" sizes="200px" className="h-full w-full object-cover blur-2xl brightness-75" />
                  </motion.div>
                  {/* The whole photo: across the top below the header on phones, down the right side on desktop */}
                  <Photo
                    name={photo}
                    alt={slideAlts[i]}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    eager={i === 0}
                    className="absolute inset-x-0 top-[4.5rem] h-[calc(100%-4.5rem)] w-full object-contain object-top lg:top-20 lg:h-[calc(100%-5rem)] lg:object-right"
                  />
                </motion.div>
              );
            })}
          </motion.div>
          {/* Darkens the photo behind the text: from the bottom on phones, from the left on desktop */}
          <div className="absolute inset-0 bg-linear-to-t from-ink from-20% via-ink/70 via-50% to-transparent to-75% lg:bg-linear-to-r lg:from-ink/90 lg:from-0% lg:via-ink/55 lg:via-35% lg:to-transparent lg:to-55%" />
          <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-ink/70 to-transparent" />
        </div>

        {/* Slide picker */}
        <div className="absolute right-3 top-[4.75rem] z-10 flex items-center md:right-8 lg:top-auto lg:bottom-7">
          <span className="mr-3 hidden text-xs tabular-nums text-cream/70 lg:inline">
            0{slide.current + 1} / 0{slides.length}
          </span>
          {slides.map((photo, i) => (
            <button
              key={photo}
              onClick={() => goToSlide(i)}
              aria-label={`${s.hero.slideLabel} ${i + 1}`}
              aria-current={i === slide.current}
              className="group px-1 py-3"
            >
              <span
                className={clsx(
                  'block h-[3px] rounded-full transition-all duration-500',
                  i === slide.current ? 'w-8 bg-gold' : 'w-4 bg-cream/45 group-hover:bg-cream'
                )}
              />
            </button>
          ))}
        </div>

        <div className="wrap flex flex-1 flex-col justify-end pt-28 pb-6 lg:justify-center lg:pt-32 lg:pb-12">
          <div className="lg:max-w-[46%]">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
              className="eyebrow mb-5 flex items-center gap-3 text-gold md:mb-7"
            >
              <span className="h-px w-8 bg-gold" />
              {s.hero.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.45, ease: easeOut }}
              className="font-display text-[3.1rem] font-light leading-[0.98] tracking-tight text-balance sm:text-7xl lg:text-6xl xl:text-[5.5rem]"
            >
              {s.hero.heading.before} <em className="whitespace-nowrap text-gold">{s.hero.heading.accent}</em> {s.hero.heading.after}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: easeOut }}
              className="mt-5 max-w-md text-base leading-relaxed text-cream/75 md:mt-8 md:text-lg"
            >
              {s.hero.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9, ease: easeOut }}
              className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:gap-8 md:mt-10"
            >
              {/* On phones the button spans the screen, with red and yellow turning round its border */}
              <span className="relative block w-full overflow-hidden rounded-2xl bg-ink/70 p-[2px] sm:w-auto sm:overflow-visible sm:rounded-full sm:bg-transparent sm:p-0">
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 aspect-square w-[160%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3.5s_linear_infinite] bg-[conic-gradient(from_0deg,#E11D2A,#FFD21F,#E11D2A,#FFD21F,#E11D2A)] motion-reduce:hidden sm:hidden"
                />
                <a
                  href="#menu"
                  className="group relative flex w-full items-center justify-center gap-3 rounded-[14px] bg-gold px-7 py-3 text-[15px] font-semibold text-ink transition-colors hover:bg-cream sm:inline-flex sm:w-auto sm:rounded-full sm:py-3.5 sm:text-sm"
                >
                  {s.hero.primaryCta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </span>
              <a
                href="#contact"
                className="border-b border-cream/40 pb-1 text-sm font-medium text-cream transition-colors hover:border-gold hover:text-gold"
              >
                {s.hero.secondaryCta}
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="wrap pb-6 lg:pb-8"
        >
          {/* Phones: an animated scroll cue. Desktop: opening details. */}
          <a href="#about" className="flex flex-col items-center gap-3 text-cream/80 lg:hidden">
            <span className="flex h-10 w-6 justify-center rounded-full border border-cream/50 pt-2">
              <span className="h-2 w-1 animate-scroll-cue rounded-full bg-gold motion-reduce:animate-none" />
            </span>
            <span className="eyebrow">{s.hero.scrollExplore}</span>
          </a>

          {/* Phones: shortcuts to each section */}
          <nav aria-label={s.footer.explore} className="mt-6 lg:hidden">
            <ul className="grid grid-cols-5 gap-2">
              {quickLinks.map(({ name, href, icon: Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="flex flex-col items-center gap-1.5 rounded-xl border border-cream/15 bg-ink/50 px-1 py-2.5 text-[11px] leading-none text-cream/90 backdrop-blur-sm transition-colors active:border-gold active:text-gold"
                  >
                    <Icon className="h-[18px] w-[18px] text-gold" strokeWidth={1.5} />
                    <span className="whitespace-nowrap">{name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-end justify-between gap-6 border-t border-cream/15 pt-5 lg:flex lg:max-w-[46%]">
            <dl className="flex gap-8 md:gap-12">
              <div>
                <dt className="eyebrow text-sand">{s.hero.openDaily}</dt>
                <dd className="mt-1.5 text-sm text-cream">{s.hero.openFrom}</dd>
              </div>
              <div>
                <dt className="eyebrow text-sand">{s.hero.kind}</dt>
                <dd className="mt-1.5 text-sm text-cream">{s.hero.offer}</dd>
              </div>
            </dl>
            <a href="#about" className="flex items-center gap-2 text-xs text-cream/80 hover:text-gold">
              {s.hero.scroll}
              <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Running strip of what's on offer */}
      <div className="overflow-hidden border-y border-cream/10 bg-espresso py-4" aria-hidden="true">
        <div className="flex w-max animate-marquee motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center">
              {s.hero.marquee.map((item) => (
                <li key={item} className="flex items-center font-display text-xl italic text-cream/70 md:text-2xl">
                  <span className="px-6 md:px-9">{item}</span>
                  <span className="h-1.5 w-1.5 rotate-45 bg-clay" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
