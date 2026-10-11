import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, ChevronDown, Globe } from 'lucide-react';
import clsx from 'clsx';
import { siteConfig, type Lang } from '../data/config';
import { useLang } from '../i18n';
import { easeOut } from './Reveal';
import { SocialLinks } from './SocialLinks';

const languages: { code: Lang; short: string; name: string }[] = [
  { code: 'en', short: 'EN', name: 'English' },
  { code: 'am', short: 'አማ', name: 'አማርኛ' },
];

function LanguageSwitch() {
  const { lang, setLang, s } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const current = languages.find(({ code }) => code === lang)!;

  // Close on a click outside or on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handlePointerDown = (e: PointerEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={s.nav.language}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className="flex h-10 items-center gap-1.5 rounded-full border border-cream/20 px-3 text-xs font-medium text-cream transition-colors hover:border-gold"
      >
        <Globe className="h-4 w-4" strokeWidth={1.5} />
        <span lang={current.code}>{current.short}</span>
        <ChevronDown className={clsx('h-3.5 w-3.5 transition-transform duration-200', isOpen && 'rotate-180')} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            role="menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 top-full mt-2 w-40 overflow-hidden rounded-xl border border-cream/15 bg-espresso py-1.5 shadow-2xl shadow-black/50"
          >
            {languages.map(({ code, name }) => (
              <li key={code} role="none">
                <button
                  role="menuitemradio"
                  aria-checked={lang === code}
                  lang={code}
                  onClick={() => {
                    setLang(code);
                    setIsOpen(false);
                  }}
                  className={clsx(
                    'flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors hover:bg-cream/10',
                    lang === code ? 'text-gold' : 'text-cream/80'
                  )}
                >
                  {name}
                  {lang === code && <Check className="h-4 w-4" />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
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
    { name: s.nav.play, href: '#play' },
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
      <nav className="wrap flex items-center justify-between gap-3" aria-label="Main">
        <a href="#home" className="relative z-50 flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
          <img
            src="/logo-mark.png"
            alt=""
            width={192}
            height={192}
            className="h-11 w-11 shrink-0 rounded-full bg-[#fefefe] object-contain p-1 md:h-12 md:w-12"
          />
          {/* Name stacked over the descriptor on phones, side by side from tablet up */}
          <span className="flex flex-col gap-1.5 md:flex-row md:items-baseline md:gap-2.5">
            <span className="font-display text-2xl md:text-[1.7rem] leading-none text-cream">{t(siteConfig.shortName)}</span>
            <span className="whitespace-nowrap text-[10px] font-medium uppercase leading-none tracking-[0.22em] text-gold md:text-[11px] md:tracking-[0.28em] [html[lang=am]_&]:text-xs [html[lang=am]_&]:tracking-normal">
              {t(siteConfig.descriptor)}
            </span>
          </span>
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
        <div className="relative z-50 flex items-center gap-1.5 md:hidden">
          <LanguageSwitch />
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-[6px]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? s.nav.closeMenu : s.nav.openMenu}
            aria-expanded={isMobileMenuOpen}
          >
            <span className={clsx('h-px w-6 bg-cream transition-transform duration-300', isMobileMenuOpen && 'translate-y-[7px] rotate-45')} />
            <span className={clsx('h-px w-6 bg-cream transition-opacity duration-200', isMobileMenuOpen && 'opacity-0')} />
            <span className={clsx('h-px w-6 bg-cream transition-transform duration-300', isMobileMenuOpen && '-translate-y-[7px] -rotate-45')} />
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
                    className="flex items-baseline justify-between py-4 font-display text-4xl text-cream"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                    <span className="font-sans text-xs text-gold">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto">
              <div className="tibeb mb-6 opacity-70" />
              <p className="eyebrow text-sand">{t(siteConfig.location)}</p>
              <p className="mt-2 text-sm text-cream/70">{s.visit.weekdays} {t(siteConfig.openingHours.weekdays)}</p>
              <p className="text-sm text-cream/70">{s.visit.weekends} {t(siteConfig.openingHours.weekends)}</p>
              <p className="eyebrow mt-6 mb-3 text-sand">{s.social.followUs}</p>
              <SocialLinks />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
