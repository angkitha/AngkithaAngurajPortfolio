import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation, type Location } from 'react-router-dom';
import { AccessibilityPluginCaseStudy } from './pages/AccessibilityPluginCaseStudy';
import { DesignSystemPluginCaseStudy } from './pages/DesignSystemPluginCaseStudy';
import { FintechCaseStudy } from './pages/FintechCaseStudy';
import { InternalRedesignCaseStudy } from './pages/InternalRedesignCaseStudy';
import { MachineryCaseStudy } from './pages/MachineryCaseStudy';
import { AboutMe } from './pages/AboutMe';
import { Home } from './pages/Home';
import './components/PageTransition.css';

const DISSOLVE_MS = 720;

function RouteTree({ location }: { location: Location }) {
  return (
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/case-study/machinery-website-redesign" element={<MachineryCaseStudy />} />
      <Route path="/case-study/internal-project-redesign" element={<InternalRedesignCaseStudy />} />
      <Route path="/case-study/fintech-website-design" element={<FintechCaseStudy />} />
      <Route path="/case-study/accessibility-plugin" element={<AccessibilityPluginCaseStudy />} />
      <Route path="/case-study/design-system-plugin" element={<DesignSystemPluginCaseStudy />} />
    </Routes>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  const presentRef = useRef(location);
  const [present, setPresent] = useState(location);
  const [previous, setPrevious] = useState<Location | null>(null);
  const [dissolveActive, setDissolveActive] = useState(false);
  const [incomingVisible, setIncomingVisible] = useState(true);
  const timerRef = useRef<number>(0);

  useEffect(() => {
    if (location.pathname === presentRef.current.pathname) return;

    window.clearTimeout(timerRef.current);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      presentRef.current = location;
      setPresent(location);
      setPrevious(null);
      setDissolveActive(false);
      setIncomingVisible(true);
      return;
    }

    setPrevious(presentRef.current);
    presentRef.current = location;
    setPresent(location);
    setDissolveActive(true);
    setIncomingVisible(false);

    timerRef.current = window.setTimeout(() => {
      setPrevious(null);
      setDissolveActive(false);
      setIncomingVisible(true);
    }, DISSOLVE_MS);

    return () => window.clearTimeout(timerRef.current);
  }, [location]);

  useLayoutEffect(() => {
    if (!dissolveActive) return;

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setIncomingVisible(true));
    });

    return () => cancelAnimationFrame(frame);
  }, [dissolveActive, present.pathname]);

  return (
    <div className="page-transition-stack">
      {previous && (
        <div
          className={`page-transition page-transition--outgoing ${dissolveActive && incomingVisible ? 'page-transition--outgoing-hidden' : ''}`}
          aria-hidden
        >
          <RouteTree location={previous} />
        </div>
      )}
      <div
        key={present.pathname}
        className={`page-transition page-transition--incoming ${dissolveActive && !incomingVisible ? 'page-transition--incoming-hidden' : ''}`}
      >
        <RouteTree location={present} />
      </div>
    </div>
  );
}

export default function App() {
  return <AnimatedRoutes />;
}
