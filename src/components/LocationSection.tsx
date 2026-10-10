import { MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/config';
import { useLang } from '../i18n';
import { Reveal } from './Reveal';
import { SocialLinks } from './SocialLinks';

const { contact, openingHours } = siteConfig;

export function LocationSection() {
  const { s, t } = useLang();

  const details = [
    {
      title: s.visit.where,
      lines: [t(siteConfig.location), contact.address ? t(contact.address) : s.visit.addressSoon],
    },
    {
      title: s.visit.hours,
      lines: [`${s.visit.weekdays}  ${t(openingHours.weekdays)}`, `${s.visit.weekends}  ${t(openingHours.weekends)}`],
    },
    {
      title: s.visit.contact,
      lines: [contact.phone ?? s.visit.phoneSoon, ...(contact.email ? [contact.email] : [])],
    },
  ];

  return (
    <section id="contact" className="overflow-hidden bg-ink py-24 text-cream md:py-36">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mb-5 text-gold">{s.visit.eyebrow}</p>
          <h2 className="font-display text-5xl font-light leading-none tracking-tight sm:text-6xl md:text-8xl">
            {s.visit.heading.before} <em className="text-gold">{s.visit.heading.accent}</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 md:mt-20 lg:grid-cols-12 lg:gap-8">
          {/* Details */}
          <div className="lg:col-span-5">
            <dl>
              {details.map((detail, i) => (
                <Reveal key={i} delay={i * 0.08} className="grid grid-cols-[6rem_1fr] gap-4 border-t border-cream/15 py-6">
                  <dt className="eyebrow pt-1 text-sand">{detail.title}</dt>
                  <dd className="space-y-1 text-base text-cream/85">
                    {detail.lines.map((line) => (
                      <p key={line} className="whitespace-pre-wrap">{line}</p>
                    ))}
                  </dd>
                </Reveal>
              ))}
              <Reveal delay={0.24} className="grid grid-cols-[6rem_1fr] items-center gap-4 border-t border-cream/15 py-6">
                <dt className="eyebrow text-sand">{s.social.followUs}</dt>
                <dd>
                  <SocialLinks />
                </dd>
              </Reveal>
            </dl>

            {/* CTA Buttons, shown once the details are confirmed */}
            {(contact.phone || contact.mapsUrl) && (
              <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-3">
                {contact.phone && (
                  <a
                    href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
                    className="inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-cream"
                  >
                    <Phone className="h-4 w-4" />
                    {s.visit.call}
                  </a>
                )}
                {contact.mapsUrl && (
                  <a
                    href={contact.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-gold hover:text-gold"
                  >
                    {s.visit.directions}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </Reveal>
            )}
          </div>

          {/* Map */}
          <Reveal delay={0.15} className="lg:col-span-6 lg:col-start-7">
            {contact.mapsEmbedUrl ? (
              <iframe
                src={contact.mapsEmbedUrl}
                title={s.visit.mapTitle}
                loading="lazy"
                className="h-[320px] w-full border-0 grayscale-[35%] md:h-[460px]"
              />
            ) : (
              <div className="flex h-[320px] flex-col border border-cream/15 bg-espresso md:h-[460px]">
                <div className="tibeb m-4 opacity-70" />
                <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
                  <MapPin className="mb-4 h-8 w-8 text-gold" strokeWidth={1.25} />
                  <h3 className="font-display text-2xl italic">{s.visit.mapSoon}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/60">{s.visit.mapSoonBody}</p>
                </div>
                <div className="tibeb m-4 opacity-70" />
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
