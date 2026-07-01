import { MenuRow } from './MenuRow';
import { SkillsTank } from './SkillsTank';
import { assetPath } from '../lib/assetPath';
import './HeroDisplay.css';

type HeroDisplayProps = {
  skillsTankSession: number;
};

export function HeroDisplay({ skillsTankSession }: HeroDisplayProps) {
  return (
    <section className="hero-display">
      <div className="hero-display__title-block">
        <div className="hero-display__hey">
          <p>HEY, I&apos;M</p>
        </div>
        <div className="hero-display__names">
          <div className="hero-display__name-crop hero-display__name-crop--angkitha">
            <img src={assetPath('images/angkitha.png')} alt="" draggable={false} />
          </div>
          <div className="hero-display__name-crop hero-display__name-crop--anguraj">
            <img src={assetPath('images/angkitha.png')} alt="" draggable={false} />
          </div>
        </div>
      </div>

      <div className="hero-display__description">
        <span className="hero-display__section-number hero-display__section-number--large">01</span>
        <p className="hero-display__bio">
          I&apos;m an AI strategist and UX Designer. I strive to craft seamless, human-centered
          products.
        </p>
      </div>

      <nav className="hero-display__menu" aria-label="Contact and links">
        <MenuRow number="02" variant="static">
          angkithaa@gmail.com
        </MenuRow>
        <MenuRow
          number="03"
          variant="link"
          href="https://www.linkedin.com/in/angkitha-anguraj/"
          external
        >
          LinkedIn
        </MenuRow>
        <MenuRow number="04" variant="static">
          San Francisco, CA
        </MenuRow>
        <MenuRow
          number="05"
          variant="link"
          href="https://drive.google.com/file/d/1RWTrI_ng5fZsf26B3z-_maYz0xkTgNiN/view"
          external
        >
          Resume
        </MenuRow>
        <MenuRow
          number="00"
          variant="construction"
          tooltip="Under Construction! Please visit later :D"
        >
          <span>
            Have more time? Here&apos;s my Personal Site.{' '}
            <span className="menu-row__text-small">(UNDER CONSTRUCTION)</span>
          </span>
        </MenuRow>
      </nav>

      <SkillsTank sessionKey={skillsTankSession} />
    </section>
  );
}
