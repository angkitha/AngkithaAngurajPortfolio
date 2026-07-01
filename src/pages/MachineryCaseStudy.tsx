import { HeaderNav } from '../components/HeaderNav';
import { IMacDisplay } from '../components/IMacDisplay';
import { CaseStudySection } from '../components/CaseStudySection';
import './CaseStudy.css';

const DEMO_URL = 'https://drive.google.com/file/d/1OJkDAGvVYSHAjlG8q5zcti70FEHQ4J2H/view';

export function MachineryCaseStudy() {
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
          <IMacDisplay demoSrc="/images/case-studies/machinery-demo.gif" demoAlt="Machinery website redesign demo" />
        </aside>

        <main className="case-study__content">
          <header className="case-study__title-block">
            <div className="case-study__title-row">
              <span className="case-study__title-letter">A</span>
              <h1 className="case-study__title">MACHINERY WEBSITE REDESIGN</h1>
            </div>
            <div className="case-study__date-row">
              <span className="case-study__date-letter">A.1</span>
              <p className="case-study__date">MAY 2026</p>
            </div>
          </header>

          <CaseStudySection
            letter="B"
            title="Background"
            backgroundSrc="/images/case-studies/machinery/bg-background.png"
          >
            <p>
              Our client presented their product with one main concern: they felt as though their catalog
              design had become outdated. While functional to users who had grown accustomed to the website,
              the legacy interface made it difficult for the client to evolve/grow their customer base. I was
              tasked with identifying key blockers on the web platform and improving it such that it is in
              touch with modern design standards.
            </p>
            <p className="case-study-section__spacer" aria-hidden="true">
              &nbsp;
            </p>
            <p>
              The first issue I focused on was the visual design. The majority of the platform looked
              monotonous; there weren&apos;t enough contrasting elements and dissonance in the typography
              that very immediately increased the cognitive load I faced whilst exploring the platform. The
              lack of visual hierarchy made it difficult to easily find the products I was looking for. It
              was obvious that a curious, first-time customer would feel discouraged from fully exploring the
              client&apos;s product offerings simply because of how loud and complex the website looked.
            </p>
            <p className="case-study-section__spacer" aria-hidden="true">
              &nbsp;
            </p>
            <p>Digging deeper, I discovered:</p>
            <ol>
              <li>
                <em>The path from landing page to product purchase was convoluted</em>. Users would need to
                click through numerous nested category pages to arrive to whichever machine part they were
                looking for.
              </li>
              <li>
                <em>Action buttons scattered across the webpage would perform the exact same function upon click</em>
                . This would make any user feel as though the webpage was not built to be interacted with
                intuitively.
              </li>
              <li>
                <em>The experience assumed customers already knew exactly what they wanted</em>. While each
                product had linked details and guides, it took extra navigation and clicks to reach said
                information and determine whether the part is appropriate for an user&apos;s need.
              </li>
            </ol>
            <p className="case-study-section__spacer" aria-hidden="true">
              &nbsp;
            </p>
            <p>
              All of the aforementioned made the product difficult to use. The interface offered no
              contextual guidance, no entry point for exploratory browsing, and no mechanism to help a user
              orient themselves within an unfamiliar product ecosystem. For customers with deep technical
              fluency, this was a friction point. For customers newer to the catalog, it was a dead end.
            </p>
          </CaseStudySection>

          <CaseStudySection
            letter="C"
            title="Competitor Analysis"
            backgroundSrc="/images/case-studies/machinery/bg-competitor.png"
          >
            <p>
              In order to better understand what a successful parts catalog web platform looks like, I
              performed a competitor analysis and analyzed two widely recognized brands: Home Depot and
              Lowe&apos;s. Both sites serve both audiences, new and old, perfectly.
            </p>
            <p className="case-study-section__spacer" aria-hidden="true">
              &nbsp;
            </p>
            <p>
              Upon analyzing Home Depot, I immediately recognized that their simple filter system allowed
              users to better narrow down what they may be looking for. Instead of focusing on product
              lines, the filter system was sorted by function, making discoverability much easier. Once the
              user narrows down their item by function, each item is neatly displayed within a frame with all
              the details laid out vertically. This thereby reduces the need to click on nested links to view
              integral product information.
            </p>
            <p className="case-study-section__spacer" aria-hidden="true">
              &nbsp;
            </p>
            <p>
              On the other hand, Lowe&apos;s utilized a similar approach to product discoverability but rather
              neatly laid out all categories at the forefront of the home page. The catalog was more complex,
              allowing users to filter down to the last detail. Once the user reaches the page they filtered
              by, items were nested within a similar box structure. But whereas Home Depot&apos;s item cards
              had more information per card, Lowe&apos;s simplified the details and utilized a much quieter
              layout.
            </p>
            <p className="case-study-section__spacer" aria-hidden="true">
              &nbsp;
            </p>
            <p>
              Taking inspiration from both sources, I realized I needed to focus on building a strong
              filtering ecosystem for the client site. Both uncertain and seasoned buyers would be able to
              find whichever items they&apos;re looking to purchase that way. Furthermore, I would need to
              reduce the number of actions displayed on each page, find avenues to reduce text, and improve
              upon the color schema to reduce the cognitive load users experience.
            </p>
          </CaseStudySection>

          <CaseStudySection
            letter="D"
            title="Personas"
            backgroundSrc="/images/case-studies/machinery/bg-personas-scroll.png"
          >
            <p>
              With the analysis in hand, I created the following 2 user personas to better guide my design
              process.
            </p>
            <div className="case-study__personas">
              <article className="case-study__persona-card">
                <div className="case-study__persona-header">
                  <img
                    src="/images/case-studies/machinery/persona-marcus.png"
                    alt=""
                    className="case-study__persona-avatar"
                    draggable={false}
                  />
                  <div>
                    <p className="case-study__persona-name">Marcus Johnson</p>
                    <p className="case-study__persona-role">
                      Maintenance Technician, 14 yrs experience
                    </p>
                  </div>
                </div>
                <p className="case-study__persona-quote">
                  &ldquo;I&apos;m looking for a very specific part. I just don&apos;t want to click as much to
                  note the specifications.&rdquo;
                </p>
                <hr className="case-study__persona-divider" />
                <div className="case-study__persona-block">
                  <p className="case-study__persona-label">Goals</p>
                  <p>• Find the exact SKU fast using part numbers he already knows</p>
                  <p>• Compare specs side-by-side before ordering</p>
                  <p>• Reorder previously purchased parts with minimal clicks</p>
                </div>
                <div className="case-study__persona-block">
                  <p className="case-study__persona-label">Frustrations</p>
                  <p>• Too many nested pages between search and checkout</p>
                  <p>• No clear purchasing UI</p>
                  <p>• No quick way to verify specs without navigating through multiple pages</p>
                </div>
              </article>

              <article className="case-study__persona-card">
                <div className="case-study__persona-header">
                  <img
                    src="/images/case-studies/machinery/persona-priya.png"
                    alt=""
                    className="case-study__persona-avatar"
                    draggable={false}
                  />
                  <div>
                    <p className="case-study__persona-name">Priya Nair</p>
                    <p className="case-study__persona-role">Associate Facilities Coordinator</p>
                  </div>
                </div>
                <p className="case-study__persona-quote">
                  &ldquo;I&apos;ve been told to buy a part to fix something. However, I have no idea on the
                  specifics.&rdquo;
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
                  <p>• Catalogue assumes she already knows technical terminology</p>
                  <p>• No onboarding or guided path for unfamiliar categories</p>
                  <p>• Risk of ordering the wrong part with no way to double-check</p>
                </div>
              </article>
            </div>
            <p>
              Additionally, I interviewed a few colleagues to understand what their pain points with the
              product were. By gathering real life interview data, I knew I would be able to pinpoint any
              design recommendations that I would not have been able to identify by myself. Using their
              feedback, which aligned closely with whatever I had brainstormed myself, I proceeded in designing
              the revised interface.
            </p>
          </CaseStudySection>

          <CaseStudySection
            letter="E"
            title="Results"
            backgroundSrc="/images/case-studies/machinery/bg-results-alt.png"
          >
            <p>
              The resulting redesign streamlined the path from landing to purchase by immediately displaying
              component specifications and key statistics in the catalog view, reducing the need for users to
              hunt for critical information before committing to a buy. By removing the nested experience while
              making the site interface applicable to the client&apos;s needs, I was able to bring a more
              modern experience to what was once an outdated buying experience.
            </p>
            <p className="case-study-section__spacer" aria-hidden="true">
              &nbsp;
            </p>
            <div className="case-study__wireframe">
              <img
                src="/images/case-studies/machinery/wireframe-1.png"
                alt="Redesigned machinery catalog wireframe"
                draggable={false}
              />
            </div>
            <p className="case-study-section__spacer" aria-hidden="true">
              &nbsp;
            </p>
            <p>
              A central feature of the new experience is the integrated AI assistant, designed to help users
              quickly understand technical product details and identify the right components for their needs.
              Where users once had to perform a google search outside the website, ask their colleagues, or
              navigate endlessly through the website, the AI has taken place. Instead, users can easily query
              the chatbot and find what they&apos;re looking for; access to the right items has never been
              easier.
            </p>
            <p className="case-study-section__spacer" aria-hidden="true">
              &nbsp;
            </p>
            <div className="case-study__wireframe">
              <img
                src="/images/case-studies/machinery/wireframe-2.png"
                alt="AI assistant wireframe"
                draggable={false}
              />
            </div>
            <p className="case-study-section__spacer" aria-hidden="true">
              &nbsp;
            </p>
            <p>
              All in all, the redesign brought the legacy platform up to modern accessibility and usability
              standards, resulting in a cleaner, more intuitive experience that supports both informed
              decision-making and confident purchasing.
            </p>
          </CaseStudySection>
        </main>
      </div>
    </div>
  );
}
