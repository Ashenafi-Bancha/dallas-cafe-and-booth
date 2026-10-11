import { useLang, usePageTitle } from './i18n';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExploreSection } from './components/ExploreSection';
import { FeaturedMenu } from './components/FeaturedMenu';
import { PlaySection } from './components/PlaySection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';

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
  usePageTitle(useLang().s.nav.menu);
  return <FeaturedMenu />;
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
