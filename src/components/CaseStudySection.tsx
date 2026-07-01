import type { ReactNode } from 'react';
import './CaseStudySection.css';

type CaseStudySectionProps = {
  letter: string;
  title: string;
  backgroundSrc: string;
  children: ReactNode;
};

export function CaseStudySection({ letter, title, backgroundSrc, children }: CaseStudySectionProps) {
  return (
    <section className="case-study-section">
      <img src={backgroundSrc} alt="" className="case-study-section__bg" draggable={false} />
      <div className="case-study-section__header">
        <span className="case-study-section__letter">{letter}</span>
        <h2 className="case-study-section__title">{title}</h2>
      </div>
      <div className="case-study-section__body">{children}</div>
    </section>
  );
}
