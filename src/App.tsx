import { MotionConfig } from 'framer-motion';
import { LanguageProvider } from './i18n';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturedMenu } from './components/FeaturedMenu';
import { PlaySection } from './components/PlaySection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <div className="font-sans text-cream bg-ink selection:bg-gold/40">
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <FeaturedMenu />
            <PlaySection />
            <GallerySection />
            <LocationSection />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </LanguageProvider>
  );
}

export default App;
