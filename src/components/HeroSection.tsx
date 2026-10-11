import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight, Baby, BookOpen, Images, MapPin, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n';
import { Photo } from './Photo';
import { easeOut } from './Reveal';

export function HeroSection() {
  const { s } = useLang();

  const quickLinks = [
    { name: s.nav.menu, href: '/#menu', icon: UtensilsCrossed },
    { name: s.nav.play, href: '/#play', icon: Baby },
    { name: s.nav.gallery, href: '/#gallery', icon: Images },
    { name: s.nav.story, href: '/#about', icon: BookOpen },
    { name: s.nav.visit, href: '/#contact', icon: MapPin },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  return (
    <>
      <section ref={sectionRef} id="home" className="relative isolate flex min-h-svh flex-col overflow-hidden bg-ink text-cream">
        {/* The cafe at night, filling the hero edge to edge behind the text */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.6, ease: easeOut }}
            style={{ y: photoY }}
            className="h-full w-full"
          >
            {/* On desktop only a wide band of the tall photo shows, so it is framed on the pavilion */}
            <Photo
              name="cafe_night"
              alt={s.hero.photoAlt}
              sizes="100vw"
              eager
              className="h-full w-full object-cover lg:object-[50%_62%]"
            />
          </motion.div>
          {/* Darkens the photo behind the text: from the bottom on phones, from the left on desktop */}
          <div className="absolute inset-0 bg-linear-to-t from-ink from-15% via-ink/75 via-55% to-ink/35 to-100% lg:bg-linear-to-r lg:from-ink/95 lg:from-0% lg:via-ink/70 lg:via-40% lg:to-transparent lg:to-80%" />
          <div className="absolute inset-x-0 bottom-0 hidden h-44 bg-linear-to-t from-ink/75 to-transparent lg:block" />
          <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-ink/70 to-transparent" />
        </div>

        <div className="wrap flex flex-1 flex-col justify-end pt-28 pb-6 lg:justify-center lg:pt-32 lg:pb-12">
          <div className="lg:max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
              className="eyebrow mb-4 flex items-center gap-3 text-gold [text-shadow:0_1px_12px_rgb(18_14_11/0.95)] md:mb-7"
            >
              <span className="h-px w-8 bg-gold" />
              {s.hero.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.45, ease: easeOut }}
              className="font-display text-[2.75rem] font-light leading-[1.04] tracking-tight text-balance text-cream [text-shadow:0_2px_24px_rgb(18_14_11/0.7)] sm:text-6xl xl:text-[5.25rem]"
            >
              {s.hero.heading.before} <em className="text-gold">{s.hero.heading.accent}</em> {s.hero.heading.after}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: easeOut }}
              className="mt-4 font-display text-xl font-light tracking-[0.08em] text-cream/90 [text-shadow:0_1px_16px_rgb(18_14_11/0.8)] sm:text-2xl md:mt-5"
            >
              {s.hero.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: easeOut }}
              className="mt-5 max-w-md text-base leading-relaxed text-cream/75 md:mt-8 md:text-lg lg:text-cream/90 lg:[text-shadow:0_1px_16px_rgb(18_14_11/0.7)]"
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
                <Link
                  to="/#menu"
                  className="group relative flex w-full items-center justify-center gap-3 rounded-[14px] bg-gold px-7 py-3 text-[15px] font-semibold text-ink transition-colors hover:bg-cream sm:inline-flex sm:w-auto sm:rounded-full sm:py-3.5 sm:text-sm"
                >
                  {s.hero.primaryCta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </span>
              <Link
                to="/#contact"
                className="border-b border-cream/40 pb-1 text-sm font-medium text-cream transition-colors hover:border-gold hover:text-gold"
              >
                {s.hero.secondaryCta}
              </Link>
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
          <Link to="/#about" className="flex flex-col items-center gap-3 text-cream/80 lg:hidden">
            <span className="flex h-10 w-6 justify-center rounded-full border border-cream/50 pt-2">
              <span className="h-2 w-1 animate-scroll-cue rounded-full bg-gold motion-reduce:animate-none" />
            </span>
            <span className="eyebrow">{s.hero.scrollExplore}</span>
          </Link>

          {/* Phones: shortcuts to each section */}
          <nav aria-label={s.footer.explore} className="mt-6 lg:hidden">
            <ul className="grid grid-cols-5 gap-2">
              {quickLinks.map(({ name, href, icon: Icon }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="flex flex-col items-center gap-1.5 rounded-xl border border-cream/15 bg-ink/50 px-1 py-2.5 text-[11px] leading-none text-cream/90 backdrop-blur-sm transition-colors active:border-gold active:text-gold"
                  >
                    <Icon className="h-[18px] w-[18px] text-gold" strokeWidth={1.5} />
                    <span className="whitespace-nowrap">{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-end justify-between gap-6 border-t border-cream/25 pt-5 lg:flex lg:max-w-2xl">
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
            <Link to="/#about" className="flex items-center gap-2 text-xs text-cream/80 hover:text-gold">
              {s.hero.scroll}
              <ArrowDown className="h-3.5 w-3.5" />
            </Link>
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
