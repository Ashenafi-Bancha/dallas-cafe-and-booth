import { useEffect, useRef } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { LanguageProvider } from './i18n';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GalleryPage, HomePage, KidsPage, MenuPage, VisitPage } from './pages';

// Each page opens at the top, except links to a section (/#about), which scroll to it.
// Arriving straight at such a link jumps there at once; clicking one within the site glides.
function ScrollManager() {
  const { pathname, hash } = useLocation();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: isFirstLoad.current ? 'instant' : 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    isFirstLoad.current = false;
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <ScrollManager />
          <div className="flex min-h-svh flex-col font-sans text-cream bg-ink selection:bg-gold/40">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/kids" element={<KidsPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/visit" element={<VisitPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </MotionConfig>
    </LanguageProvider>
  );
}

export default App;
