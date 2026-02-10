import { useState, useEffect, useCallback } from 'react';
import BootSequence from './components/BootSequence';
import CRTOverlay from './components/CRTOverlay';
import CommandNav from './components/CommandNav';
import HeroTerminal from './components/HeroTerminal';
import SystemOverview from './components/SystemOverview';
import ModuleBreakdown from './components/ModuleBreakdown';
import TechSpecs from './components/TechSpecs';
import ContactRelay from './components/ContactRelay';
import Footer from './components/Footer';
import { initSmoothScroll, destroySmoothScroll } from './lib/smooth-scroll';
import { initScrollAnimations, destroyScrollAnimations } from './lib/animations';

export default function App() {
  const [booting, setBooting] = useState(() => {
    // Show boot sequence only once per session
    return !sessionStorage.getItem('ascent-booted');
  });

  const handleBootComplete = useCallback(() => {
    setBooting(false);
  }, []);

  useEffect(() => {
    if (!booting) {
      initSmoothScroll();
      // Small delay to ensure DOM is painted before setting up scroll animations
      const raf = requestAnimationFrame(() => {
        initScrollAnimations();
      });
      return () => {
        cancelAnimationFrame(raf);
        destroyScrollAnimations();
        destroySmoothScroll();
      };
    }
  }, [booting]);

  if (booting) {
    return <BootSequence onComplete={handleBootComplete} />;
  }

  return (
    <>
      <CRTOverlay />
      <CommandNav />
      <main>
        <HeroTerminal />
        <SystemOverview />
        <ModuleBreakdown />
        <TechSpecs />
        <ContactRelay />
      </main>
      <Footer />
    </>
  );
}
