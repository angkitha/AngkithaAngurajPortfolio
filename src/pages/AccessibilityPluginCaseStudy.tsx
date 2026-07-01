import { HeaderNav } from '../components/HeaderNav';
import { IMacDisplay } from '../components/IMacDisplay';
import { assetPath } from '../lib/assetPath';
import '../components/CaseStudySection.css';
import './CaseStudy.css';

const DEMO_URL = 'https://drive.google.com/file/d/1jbClBKtbJXj4VKgV0pOTrRsg8FxerK7n/view';

export function AccessibilityPluginCaseStudy() {
  return (
    <div className="case-study">
      <HeaderNav />
      <div className="case-study__layout">
        <aside className="case-study__demo" aria-label="Product demo">
          <div className="case-study__demo-link">
            <span className="case-study__demo-number">01</span>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="case-study__watch-demo"
            >
              Watch Demo
            </a>
            <img
              src={assetPath('images/case-studies/play-icon.png')}
              alt=""
              className="case-study__play-icon"
              draggable={false}
            />
          </div>
          <IMacDisplay
            demoSrc={assetPath('images/case-studies/accessibility-plugin-demo.gif')}
            demoAlt="Accessibility plugin demo"
          />
        </aside>

        <main className="case-study__content">
          <header className="case-study__title-block">
            <div className="case-study__title-row">
              <span className="case-study__title-letter">A</span>
              <h1 className="case-study__title">ACCESSIBILITY PLUGIN</h1>
            </div>
            <div className="case-study__date-row">
              <span className="case-study__date-letter">A.1</span>
              <p className="case-study__date">July 2026</p>
            </div>
          </header>

          <section className="case-study__plain-section">
            <div className="case-study__plain-section-header">
              <span className="case-study__plain-section-letter">B</span>
              <h2 className="case-study__plain-section-title">Background</h2>
            </div>
            <div className="case-study__plain-section-body">
              <p>
                After attending Config 2026, I created this plugin to test out Figma&apos;s new
                &ldquo;Plugin&rdquo; feature.
              </p>
              <p className="case-study-section__spacer" aria-hidden="true">
                &nbsp;
              </p>
              <p>
                As someone who really values active feedback in my design processes, WCAG standards are
                always something that live in the back of my mind. However, while I strive for perfection, I
                am also often tasked with numerous projects that require my attention. This often leads to a
                lack of time in which I can sit down and conduct a thorough WCAG analysis. As such, I
                formulated the Accessibility Plug-in you see to your right.
              </p>
              <p className="case-study-section__spacer" aria-hidden="true">
                &nbsp;
              </p>
              <p>
                Select the screen you would like to conduct a review on and opt for an AA review or AAA
                review. The plugin will then scan through this screen and produce a comprehensive score. The
                report will include scores for each criteria often reviewed by WCAG experts along with
                recommendations on how to improve upon these scores. Each report comes with an extensive list
                of pass fails, making identifying avenues of errors much easier and amending them much
                faster.
              </p>
              <p className="case-study-section__spacer" aria-hidden="true">
                &nbsp;
              </p>
              <p>
                By automating this process within the Figma native canvas, this plugin has the potential to
                save designers hours of time and alleviate their workload.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
