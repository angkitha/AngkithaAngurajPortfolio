import { Link } from 'react-router-dom';
import { HeaderNav } from '../components/HeaderNav';
import { IMacDisplay } from '../components/IMacDisplay';
import { CaseStudySection } from '../components/CaseStudySection';
import './CaseStudy.css';

const DEMO_URL = 'https://drive.google.com/file/d/1po4kGNLHcdwH9DsyJbTkaAniG9OsD3Ro/view';

export function InternalRedesignCaseStudy() {
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
              src="/images/case-studies/play-icon.png"
              alt=""
              className="case-study__play-icon"
              draggable={false}
            />
          </div>
          <IMacDisplay
            demoSrc="/images/case-studies/internal-redesign-demo.gif"
            demoAlt="Internal project redesign demo"
          />
        </aside>

        <main className="case-study__content">
          <header className="case-study__title-block">
            <div className="case-study__title-row">
              <span className="case-study__title-letter">A</span>
              <h1 className="case-study__title">INTERNAL PROJECT REDESIGN</h1>
            </div>
            <div className="case-study__date-row">
              <span className="case-study__date-letter">A.1</span>
              <p className="case-study__date">MAY 2026</p>
            </div>
          </header>

          <CaseStudySection
            letter="B"
            title="Background"
            backgroundSrc="/images/case-studies/internal/bg-background.png"
          >
            <p>
              This project was a revision upon a previous product we had released to our client. Upon
              releasing the product we had designed to their own customers, our client came back and asked
              for slight revisions on the experience. They were looking for a fresh experience a little
              bit more similar to other Financial Tech internal websites. As one of the two main designers on
              the previous project with extensive familiarity on the evolution of the product, I was brought
              into this internal effort.
            </p>
            <p className="case-study-section__spacer" aria-hidden="true">
              &nbsp;
            </p>
            <p>
              For more context on the previous project, please visit the{' '}
              <Link to="/case-study/fintech-website-design" className="case-study__inline-link">
                Fintech Website Design Case Study
              </Link>
              .
            </p>
          </CaseStudySection>

          <CaseStudySection
            letter="C"
            title="Competitor Analysis"
            backgroundSrc="/images/case-studies/internal/bg-competitor.png"
          >
            <p>
              Given the platform&apos;s complexity, I looked to Mobbin to conduct a broad pattern sweep. The
              site consisted of numerous complex flows; an AI assistant, a new account creation wizard, an
              account dashboard, a hub, etc. As such, I scraped through approximately 18 competitor screens
              across leading fintech, enterprise, and AI products. I mapped these screens to the distinct
              sections within the product we had built and started taking notes on exactly what could be
              changed to match the successful design decisions of our competitors.
            </p>
            <p className="case-study-section__spacer" aria-hidden="true">
              &nbsp;
            </p>
            <p>
              What I noted across the 18 studies I performed was clean, simple visual design. Data was
              displayed in an almost minimalistic sense, with hovers being the key points of interaction. AI
              assistants emphasized quick actions and kept the UI simple. Form inputs and wizards alike
              focused on reducing text on the screen and vertical scrolling with tabs. I mapped each of these
              success factors to the product my colleague and I had designed.
            </p>
            <p className="case-study-section__spacer" aria-hidden="true">
              &nbsp;
            </p>
            <p>
              My goal wasn&apos;t to copy any one product but rather to apply whatever pattern I found the
              strongest to create a cohesive product. This way, I could guarantee that the platform felt
              personally tailored.
            </p>
          </CaseStudySection>

          <CaseStudySection
            letter="D"
            title="Personas"
            backgroundSrc="/images/case-studies/internal/bg-personas.png"
          >
            <p>
              With my analyses completed, I formulated the following 2 user personas to better guide my
              design process.
            </p>
            <div className="case-study__personas">
              <article className="case-study__persona-card">
                <div className="case-study__persona-header">
                  <img
                    src="/images/case-studies/internal/persona-maya.png"
                    alt=""
                    className="case-study__persona-avatar"
                    draggable={false}
                  />
                  <div>
                    <p className="case-study__persona-name">Maya Torres</p>
                    <p className="case-study__persona-role">Call Center Agent, 3 yrs experience</p>
                  </div>
                </div>
                <p className="case-study__persona-quote">
                  &ldquo;I need to navigate to the correct pages before the person I have on call loses
                  patience.&rdquo;
                </p>
                <hr className="case-study__persona-divider" />
                <div className="case-study__persona-block">
                  <p className="case-study__persona-label">Goals</p>
                  <p>• Resolve calls quickly, reduce hold time, surface account info without deep navigation</p>
                  <p>• Compare specs side-by-side before ordering</p>
                  <p>• Reorder previously purchased parts with minimal clicks</p>
                </div>
                <div className="case-study__persona-block">
                  <p className="case-study__persona-label">Frustrations</p>
                  <p>• Cluttered layout made it hard to find key info mid-call</p>
                  <p>• Harsh lines increases visual fatigue</p>
                </div>
              </article>

              <article className="case-study__persona-card">
                <div className="case-study__persona-header">
                  <img
                    src="/images/case-studies/internal/persona-jason.png"
                    alt=""
                    className="case-study__persona-avatar"
                    draggable={false}
                  />
                  <div>
                    <p className="case-study__persona-name">Jason Chen</p>
                    <p className="case-study__persona-role">Senior Financial Account Manager</p>
                  </div>
                </div>
                <p className="case-study__persona-quote">
                  &ldquo;I want a clear picture of the accounts I need to oversee, without having to dig for
                  it.&rdquo;
                </p>
                <hr className="case-study__persona-divider" />
                <div className="case-study__persona-block">
                  <p className="case-study__persona-label">Goals</p>
                  <p>• Identify the right part using simple searches</p>
                  <p>• Get guidance without phoning a friend</p>
                  <p>• Feel confident she&apos;s ordering the right item</p>
                </div>
                <div className="case-study__persona-block">
                  <p className="case-study__persona-label">Frustrations</p>
                  <p>• Information fragmented across pages; no consolidated summary view</p>
                  <p>• Wants information more readily available</p>
                </div>
              </article>
            </div>
            <p>
              Again, as I do with all my design tasks, I interviewed fellow design colleagues to gauge if they
              had any further advice on improving the product I had to redesign. They echoed a sentiment I
              already had in mind: the repeated usage of similar component usage across the pages should be
              translated to reusable Figma variables to streamline future design reiterations.
            </p>
            <p className="case-study-section__spacer" aria-hidden="true">
              &nbsp;
            </p>
            <p>With the aforementioned in mind, I proceeded to create my final product design.</p>
          </CaseStudySection>

          <CaseStudySection
            letter="E"
            title="Results"
            backgroundSrc="/images/case-studies/internal/bg-results.png"
          >
            <p>
              My redesign delivered on two fronts: a stronger foundation and a significantly cleaner
              experience. A comprehensive design system with tokens and variables was built from the ground
              up, making knowledge transfer more reliable and leaving the product genuinely customizable for
              future iterations. Streamlining data by using a tab-centric navigation while keeping integral
              data points available at all times (without the need to switch tabs or scroll vertically) would
              alleviate any cognitive load a call center user or manager would experience when familiarizing
              themselves with the user account.
            </p>
            <div className="case-study__wireframes-row">
              <div className="case-study__wireframe-panel">
                <img
                  src="/images/case-studies/internal/wireframe-1.png"
                  alt="Redesigned account dashboard wireframe"
                  draggable={false}
                />
              </div>
              <div className="case-study__wireframe-panel">
                <img
                  src="/images/case-studies/internal/wireframe-2.png"
                  alt="Portal activities wireframe"
                  draggable={false}
                />
              </div>
            </div>
            <p>
              The navigation bar and side menu were always accessible but not intrusive. If the employee would
              need to navigate to any other tool other than the account related information, they could easily
              do so using the almost hub-like menu. The account wizard followed the same logic; the experience
              centered around being well-organized while reducing the original &ldquo;form-heavy&rdquo; feel.
            </p>
            <div className="case-study__wireframe case-study__wireframe--tall">
              <img
                src="/images/case-studies/internal/wireframe-3.png"
                alt="Edit MAR wireframe"
                draggable={false}
              />
            </div>
            <p>
              All in all, the redesign brought the platform forward from a fragmented, dated experience into
              a cohesive, modern product. This new design gives agents the speed they need mid-call, managers
              the clarity they need at a glance, and the underlying system the flexibility to grow.
            </p>
          </CaseStudySection>
        </main>
      </div>
    </div>
  );
}
