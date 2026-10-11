import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { useLang } from '../i18n';
import { Photo } from './Photo';
import { easeOut } from './Reveal';

export function HeroSection() {
  const { s } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  return (
    <>
      <section ref={sectionRef} id="home" className="relative isolate flex min-h-svh flex-col overflow-hidden bg-ink text-cream">
        {/* Photo: full-bleed on mobile, right half on desktop */}
        <div className="absolute inset-0 -z-10 lg:left-[50%]">
          <motion.div
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.6, ease: easeOut }}
            style={{ y: photoY }}
            className="h-full w-full"
          >
            <Photo
              name="cafe_night"
              alt={s.hero.photoAlt}
              sizes="(min-width: 1024px) 50vw, 100vw"
              eager
              className="h-full w-full object-cover object-[50%_60%]"
            />
          </motion.div>
          <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/75 to-ink/25 lg:bg-linear-to-r lg:from-ink lg:via-ink/35 lg:via-30% lg:to-transparent" />
          <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-ink/70 to-transparent" />
        </div>

        <div className="wrap flex flex-1 flex-col justify-end pt-32 pb-10 lg:justify-center lg:pb-12">
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
              className="font-display text-[3.1rem] font-light leading-[0.98] tracking-tight text-balance sm:text-7xl xl:text-[5.5rem]"
            >
              {s.hero.heading.before} <em className="whitespace-nowrap text-gold">{s.hero.heading.accent}</em> {s.hero.heading.after}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: easeOut }}
              className="mt-6 max-w-md text-base leading-relaxed text-cream/75 md:mt-8 md:text-lg"
            >
              {s.hero.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9, ease: easeOut }}
              className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 md:mt-10"
            >
              <a
                href="#menu"
                className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-cream"
              >
                {s.hero.primaryCta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
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
          className="wrap pb-8"
        >
          <div className="flex items-end justify-between gap-6 border-t border-cream/15 pt-5 lg:max-w-[46%]">
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
            <a href="#about" className="hidden items-center gap-2 text-xs text-cream/80 hover:text-gold lg:flex">
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
