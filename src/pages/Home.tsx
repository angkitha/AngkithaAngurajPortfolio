import { useState } from 'react';
import { HeaderNav } from '../components/HeaderNav';
import { HeroDisplay } from '../components/HeroDisplay';
import { ProjectGrid } from '../components/ProjectGrid';
import { ViewportFit } from '../components/ViewportFit';
import './Home.css';

let homeVisitCount = 0;

export function Home() {
  const [skillsTankSession] = useState(() => ++homeVisitCount);

  return (
    <div className="portfolio-home">
      <HeaderNav activeTab="home" />
      <ViewportFit className="portfolio-home__main">
        <HeroDisplay skillsTankSession={skillsTankSession} />
        <ProjectGrid />
      </ViewportFit>
    </div>
  );
}
