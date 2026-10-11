import { siteConfig } from '../data/config';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  const { s, t } = useLang();

  const quickLinks = [
    { name: s.nav.home, href: '/' },
    { name: s.nav.story, href: '/#about' },
    { name: s.nav.menu, href: '/#menu' },
    { name: s.nav.play, href: '/#play' },
    { name: s.nav.gallery, href: '/#gallery' },
    { name: s.nav.visit, href: '/#contact' },
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
            <div className="hidden md:block">
              <h4 className="eyebrow mt-10 mb-4 text-sand">{s.social.followUs}</h4>
              <SocialLinks />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="eyebrow mb-5 text-sand">{s.footer.explore}</h4>
            <ul className="space-y-2.5 text-sm text-cream/75">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="transition-colors hover:text-gold">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Find Us */}
          <div className="md:col-span-3">
            <h4 className="eyebrow mb-5 text-sand">{s.footer.findUs}</h4>
            <ul className="space-y-2.5 text-sm text-cream/75">
              <li>{t(siteConfig.location)}</li>
              {siteConfig.contact.phone && (
                <li>
                  <a
                    href={`tel:${siteConfig.contact.phoneDial ?? siteConfig.contact.phone}`}
                    className="transition-colors hover:text-gold"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
              )}
              {siteConfig.contact.mapsUrl && (
                <li>
                  <a
                    href={siteConfig.contact.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gold underline-offset-4 hover:underline"
                  >
                    {s.visit.directions} →
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="tibeb mt-16 opacity-60" />
      </div>

      {/* Oversized wordmark */}
      <p
        aria-hidden="true"
        className="mt-8 select-none whitespace-nowrap text-center font-display text-[16.5vw] font-light leading-none tracking-tight text-cream/[0.07] [html[lang=am]_&]:text-[19vw]"
      >
        {t(siteConfig.shortName)}
      </p>

      {/* On phones the social links close the page */}
      <div className="wrap flex flex-col items-center pt-4 md:hidden">
        <h4 className="eyebrow mb-4 text-sand">{s.social.followUs}</h4>
        <SocialLinks />
      </div>

      <div className="wrap flex flex-col items-center justify-between gap-2 py-6 text-xs text-cream/45 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} {t(siteConfig.name)}. {s.footer.rights}</p>
        <p>
          {s.footer.credit} (
          <a href={`tel:${siteConfig.developer.phoneDial}`} className="transition-colors hover:text-gold">
            {siteConfig.developer.phone}
          </a>
          )
        </p>
      </div>
    </footer>
  );
}
