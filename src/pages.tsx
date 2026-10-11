import { useLang, usePageTitle } from './i18n';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExploreSection } from './components/ExploreSection';
import { FeaturedMenu } from './components/FeaturedMenu';
import { PlaySection } from './components/PlaySection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { Reveal } from './components/Reveal';

export function HomePage() {
  usePageTitle();
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExploreSection />
    </>
  );
}

// The page the table card's QR code opens
export function MenuPage() {
  const { s } = useLang();
  usePageTitle(s.nav.menu);

  return (
    <>
      <FeaturedMenu />
      {/* A closing note for guests who scanned the table card */}
      <section className="bg-paper pb-24 text-center text-ink md:pb-32">
        <Reveal className="wrap">
          <div className="tibeb mx-auto mb-10 max-w-md" />
          <h2 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
            {s.menu.thanks.before} <em className="text-clay">{s.menu.thanks.accent}</em>
          </h2>
          <p className="mt-4 text-base text-ink/65">{s.menu.thanksNote}</p>
        </Reveal>
      </section>
    </>
  );
}

export function KidsPage() {
  usePageTitle(useLang().s.nav.play);
  return <PlaySection />;
}

export function GalleryPage() {
  usePageTitle(useLang().s.nav.gallery);
  return <GallerySection />;
}

export function VisitPage() {
  usePageTitle(useLang().s.nav.visit);
  return <LocationSection />;
}
