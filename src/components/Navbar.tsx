import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
import { siteConfig, type Lang } from '../data/config';
import { useLang } from '../i18n';
import { easeOut } from './Reveal';
import { SocialLinks } from './SocialLinks';

const languages: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'am', label: 'አማ' },
];

function LanguageSwitch() {
  const { lang, setLang, s } = useLang();

  return (
    <div role="group" aria-label={s.nav.language} className="flex items-center rounded-full border border-cream/20 p-0.5">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          lang={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={clsx(
            'rounded-full px-2.5 py-1 text-xs font-medium leading-none transition-colors',
            lang === code ? 'bg-cream text-ink' : 'text-cream/70 hover:text-cream'
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export function Navbar() {
  const { s, t } = useLang();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: s.nav.story, href: '#about' },
    { name: s.nav.menu, href: '#menu' },
    { name: s.nav.gallery, href: '#gallery' },
    { name: s.nav.visit, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keep the page from scrolling behind the open mobile menu
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500',
        isScrolled && !isMobileMenuOpen
          ? 'bg-ink/85 backdrop-blur-md border-cream/10 py-3.5'
          : 'bg-transparent border-transparent py-5 md:py-6'
      )}
    >
      <nav className="wrap flex items-center justify-between gap-4" aria-label="Main">
        <a href="#home" className="relative z-50 flex items-baseline gap-2.5" onClick={() => setIsMobileMenuOpen(false)}>
          <span className="font-display text-2xl md:text-[1.7rem] leading-none text-cream">{t(siteConfig.shortName)}</span>
          <span className="eyebrow hidden text-gold min-[400px]:inline">{t(siteConfig.descriptor)}</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <ul className="flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="group relative text-sm text-cream/80 hover:text-cream transition-colors">
                  {link.name}
                  <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitch />
          <a
            href="#menu"
            className="hidden rounded-full border border-gold/60 px-5 py-2 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-ink lg:block"
          >
            {s.nav.cta}
          </a>
        </div>

        {/* Mobile language switch and menu toggle */}
        <div className="relative z-50 flex items-center gap-3 md:hidden">
          <LanguageSwitch />
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-[7px]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? s.nav.closeMenu : s.nav.openMenu}
            aria-expanded={isMobileMenuOpen}
          >
            <span className={clsx('h-px w-6 bg-cream transition-transform duration-300', isMobileMenuOpen && 'translate-y-1 rotate-45')} />
            <span className={clsx('h-px w-6 bg-cream transition-transform duration-300', isMobileMenuOpen && '-translate-y-1 -rotate-45')} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40 flex flex-col bg-ink px-5 pt-28 pb-8"
          >
            <ul className="flex flex-col">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.08 + i * 0.07, ease: easeOut }}
                  className="border-b border-cream/10"
                >
                  <a
                    href={link.href}
                    className="flex items-baseline justify-between py-5 font-display text-4xl text-cream"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                    <span className="font-sans text-xs text-gold">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto">
              <p className="eyebrow mb-3 text-sand">{s.social.followUs}</p>
              <SocialLinks className="mb-6" />
              <div className="tibeb mb-6 opacity-70" />
              <p className="eyebrow text-sand">{t(siteConfig.location)}</p>
              <p className="mt-2 text-sm text-cream/70">{s.visit.weekdays} {t(siteConfig.openingHours.weekdays)}</p>
              <p className="text-sm text-cream/70">{s.visit.weekends} {t(siteConfig.openingHours.weekends)}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
