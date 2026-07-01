import { HeaderNav } from '../components/HeaderNav';
import { IMacDisplay } from '../components/IMacDisplay';
import '../components/CaseStudySection.css';
import './CaseStudy.css';

const DEMO_URL =
  'https://www.drive.google.com/file/d/1lQ2CJ9ubuCuCygdMqlOClIw-HirydaSF/view?usp=sharing';

export function DesignSystemPluginCaseStudy() {
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
            demoSrc="/images/case-studies/design-system-plugin-demo.gif"
            demoAlt="Design system plugin demo"
          />
        </aside>

        <main className="case-study__content">
          <header className="case-study__title-block">
            <div className="case-study__title-row">
              <span className="case-study__title-letter">A</span>
              <h1 className="case-study__title">DESIGN SYSTEM PLUGIN</h1>
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
                I created this plugin using Cursor, Claude, and Figma to alleviate some of the pain my
                team faced when creating customized design systems for proposals to clients we communicated
                with. With fast turnarounds at every corner, my fellow designers and I found it increasingly
                frustrating to juggle multiple lines of brand analyses and manual design system
                reconstruction; the more menial tasks simply added to our fatigue.
              </p>
              <p className="case-study-section__spacer" aria-hidden="true">
                &nbsp;
              </p>
              <p>
                As such, I created this plugin to streamline the process of design system customization. It
                works as follows.
              </p>
              <p className="case-study-section__spacer" aria-hidden="true">
                &nbsp;
              </p>
              <ol>
                <li>
                  Open Design System Figma file. It can be open-source (Ant, Material, etc.) or a custom
                  file your team created
                </li>
                <li>Open &ldquo;DS Customizer&rdquo; plugin</li>
                <li>
                  The plugin will start reading the various components you have on your page (buttons,
                  titles, sliders, etc.)
                </li>
                <li>
                  Once the plugin has loaded, you have three of the following opportunities:
                  <ol type="a">
                    <li>
                      Run in a live web URL. The plugin will show you a preview of this site such that you
                      can verify it&apos;s the one you&apos;re thinking of. It will scan this web URL (without
                      the need for an API!), determine a color palette, and display it below the page
                      preview.
                    </li>
                    <li>
                      Run in a branding PDF. The plugin will read this PDF and determine the primary and
                      secondary colors based off of that information.
                    </li>
                  </ol>
                </li>
                <li>
                  Using the color palette the plugin generates, you can choose your primary, secondary,
                  and/or tertiary swatches and restructure the design system&apos;s colors.
                </li>
                <li>
                  Move on to the &ldquo;Typography&rdquo; section using the tabs above. Similar to the
                  previous three opportunities, you may restructure the typography of your design system via
                  web URL, PDF, or off of the top most used fonts. You may also opt to add in a secondary
                  font system.
                </li>
                <li>
                  Move on to the &ldquo;Icons&rdquo; section using the tabs above. You can preview the icons
                  your design system includes as well as add any you would like using the upload PNG option.
                </li>
                <li>
                  Throughout this entire process, there is a side drawer for you to &ldquo;Preview&rdquo;
                  your changes as it applies to a component within your system (i.e. a button).
                </li>
              </ol>
              <p className="case-study-section__spacer" aria-hidden="true">
                &nbsp;
              </p>
              <p>
                This plugin has successfully generated new design systems for client proposals. What once
                would take designers an hour or two has now been reduced to a smooth 5 minutes of minimal
                manual labor.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
