import { siteConfig } from '../data/config';
import { useLang } from '../i18n';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  const { s, t } = useLang();

  const quickLinks = [
    { name: s.nav.home, href: '#home' },
    { name: s.nav.story, href: '#about' },
    { name: s.nav.menu, href: '#menu' },
    { name: s.nav.gallery, href: '#gallery' },
    { name: s.nav.visit, href: '#contact' },
  ];

  return (
    <footer className="overflow-hidden border-t border-cream/10 bg-ink text-cream">
      <div className="wrap pt-16 md:pt-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-5">
            <img
              src="/logo.png"
              alt={t(siteConfig.name)}
              width={480}
              height={611}
              loading="lazy"
              className="mb-8 w-28 rounded-xl bg-[#fefefe] p-2.5 md:w-32"
            />
            <p className="max-w-xs font-display text-2xl font-light leading-snug md:text-3xl">{s.footer.tagline}</p>
            <h4 className="eyebrow mt-10 mb-4 text-sand">{s.social.followUs}</h4>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="eyebrow mb-5 text-sand">{s.footer.explore}</h4>
            <ul className="space-y-2.5 text-sm text-cream/75">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-gold">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Find Us */}
          <div className="md:col-span-3">
            <h4 className="eyebrow mb-5 text-sand">{s.footer.findUs}</h4>
            <ul className="space-y-2.5 text-sm text-cream/75">
              <li>{t(siteConfig.location)}</li>
              {siteConfig.contact.phone && <li>{siteConfig.contact.phone}</li>}
            </ul>
          </div>
        </div>

        <div className="tibeb mt-16 opacity-60" />
      </div>

      {/* Oversized wordmark */}
      <p
        aria-hidden="true"
        className="mt-8 select-none text-center font-display text-[27vw] font-light leading-[0.8] tracking-tight text-cream/[0.07] md:text-[24vw]"
      >
        {t(siteConfig.shortName)}
      </p>

      <div className="wrap flex flex-col items-center justify-between gap-2 py-6 text-xs text-cream/45 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} {t(siteConfig.name)}. {s.footer.rights}</p>
        <p>{s.footer.credit}</p>
      </div>
    </footer>
  );
}
