import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig, type MenuItem } from '../data/config';
import { useLang } from '../i18n';
import { Photo } from './Photo';
import { Reveal } from './Reveal';

export function FeaturedMenu() {
  const { s, t, other } = useLang();
  const [activeItem, setActiveItem] = useState<MenuItem>(siteConfig.menu[0].items[0]);

  return (
    <section id="menu" className="relative bg-paper py-24 text-ink md:py-36">
      <div className="wrap">
        {/* Section header */}
        <Reveal className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-5 text-clay">{s.menu.eyebrow}</p>
            <h2 className="font-display text-5xl font-light leading-none tracking-tight sm:text-6xl md:text-7xl">
              {s.menu.heading.before} <em>{s.menu.heading.accent}</em> {s.menu.heading.after}
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink/65">{s.menu.intro}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Photo that follows the hovered item (desktop) */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={activeItem.photo}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <Photo name={activeItem.photo} alt="" sizes="40vw" className="h-full w-full object-cover" />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <p className="font-display text-xl italic">{t(activeItem.name)}</p>
                <p className="eyebrow text-ink/50">{s.menu.hoverHint}</p>
              </div>
            </div>
          </div>

          {/* Typeset menu */}
          <div className="space-y-16 lg:col-span-6 lg:col-start-7">
            {siteConfig.menu.map((category, i) => (
              <Reveal key={category.category.en}>
                <div className="flex items-baseline gap-4 border-b border-ink pb-4">
                  <span className="text-xs font-medium text-clay">0{i + 1}</span>
                  <h3 className="font-display text-3xl italic md:text-4xl">{t(category.category)}</h3>
                </div>
                <ul>
                  {category.items.map((item) => (
                    <li
                      key={item.name.en}
                      onMouseEnter={() => setActiveItem(item)}
                      className="group flex items-center gap-4 border-b border-ink/15 py-4 md:gap-5"
                    >
                      <div className="h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden bg-ink/10 md:h-20 md:w-20">
                        <Photo
                          name={item.photo}
                          alt=""
                          sizes="80px"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline">
                          <h4 className="font-display text-xl transition-colors group-hover:text-clay md:text-2xl">{t(item.name)}</h4>
                          <span className="mx-3 flex-1 -translate-y-1 border-b border-dotted border-ink/35" />
                          <p className="font-display text-xl md:text-2xl">
                            {item.price}
                            <span className="ml-1.5 font-sans text-[10px] font-medium tracking-widest text-ink/50">
                              {t(siteConfig.currency)}
                            </span>
                          </p>
                        </div>
                        {/* The name in the other language, so the menu reads in both */}
                        <p lang={other} className="mt-1 text-sm font-medium text-clay">{item.name[other]}</p>
                        <p className="mt-1 text-sm text-ink/60">{t(item.description)}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}

            {siteConfig.menuIsSample && <p className="text-xs italic text-ink/50">{s.menu.sampleNote}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
