import { HeaderNav } from '../components/HeaderNav';
import { IMacDisplay } from '../components/IMacDisplay';
import { CaseStudySection } from '../components/CaseStudySection';
import './CaseStudy.css';

const DEMO_URL = 'https://drive.google.com/file/d/1Xp8630iNsQRUiwUjPEujA_Tsw3DyQLf6/view';

export function FintechCaseStudy() {
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
            demoSrc="/images/case-studies/fintech-demo.gif"
            demoAlt="Fintech website design demo"
          />
        </aside>

        <main className="case-study__content">
          <header className="case-study__title-block">
            <div className="case-study__title-row">
              <span className="case-study__title-letter">A</span>
              <h1 className="case-study__title">FINTECH WEBSITE DESIGN</h1>
            </div>
            <div className="case-study__date-row">
              <span className="case-study__date-letter">A.1</span>
              <p className="case-study__date">July 2025 - April 2026</p>
            </div>
          </header>

          <CaseStudySection
            letter="B"
            title="Background"
            backgroundSrc="/images/case-studies/fintech/bg-background.png"
          >
            <p>
              We were introduced to our client, a financial technology company, and their main internal
              platform at the end of July 2025. One main complaint arose from our initial discussions of
              their internal platform: it was far too outdated. The visual design of this internal product
              was harsh and monotonous. Employees from all sectors complained that it contributed to their
              overall workday fatigue. Furthermore, the platform was by no means personable to the
              company&apos;s goals and visions. Whilst exploring, I noted that it had know avenues of personal
              branding and emulated the experience of a purely technology/data-centric platform rather than a
              data-input and finance-oriented platform. It was text-dense, making it difficult for any user to
              navigate through it without feeling overwhelmed and fatigued by its monotonous look.
            </p>
            <p className="case-study-section__spacer" aria-hidden="true">
              &nbsp;
            </p>
            <p>
              While the platform had a plethora of visual points of friction, the issues in its functionality
              were no lesser. Tabs had multiplied over time with no clear hierarchy, making it difficult for
              less experienced associates to orient themselves and find what they needed under time pressure.
              Key information was buried inside nested pages, with critical details repeated across multiple
              areas in ways that created confusion rather than clarity. Action buttons cluttered the
              interface, disregarding the user&apos;s role-based access. For example, if an employee had a
              lower level of access, they would still be able to see buttons that were only available to those
              with higher access rights; as a whole, the poor functionality and the poor visual design of the
              product went hand in hand. This issue was magnified with those who interacted regularly with the
              call center function. Representatives would spend too much time navigating from page to page
              whilst juggling the callers&apos; demands. Often times, the caller&apos;s sentiment would get
              lost in translation as the representative prioritized trying to find the correct tab in a timely
              manner.
            </p>
            <p className="case-study-section__spacer" aria-hidden="true">
              &nbsp;
            </p>
            <p>
              We were given 8 months to transform the product to the best of our abilities. Keeping their
              pain points in mind, my design lead and I set to find avenues to bring a modern look and feel to
              a website as complex as this.
            </p>
          </CaseStudySection>

          <CaseStudySection
            letter="C"
            title="Competitor Analysis and Room for Improvement"
            backgroundSrc="/images/case-studies/fintech/bg-competitor.png"
          >
            <p>
              To establish a &ldquo;design guiding star&rdquo;, we looked to two of the most recognizable names
              in financial services: Bank of America and JPMorgan Chase. We knew that both companies were
              championed for their intuitive design practices. Furthermore, their internal and customer-facing
              platforms handle enormous complexity while still feeling navigable, branded, and human.
            </p>
            <p className="case-study-section__spacer" aria-hidden="true">
              &nbsp;
            </p>
            <p>
              What stood out across our explorations on the platforms of both these companies was their
              well-organized information hierarchy. Both platforms ensured to display all vital points of
              information in a streamlined manner while obscuring less important points of entry behind
              intuitive points of navigation (action buttons, tabs, trees, etc.). Key account information
              surfaced at the top level, supported by clean typographic systems and a consistent use of space.
              In terms of role-based UI access, the platform dynamically adapted from the login page, creating
              a cohesive experience that was devoid of unnecessary clutter. Branding was woven throughout the
              pages with subtle accents and consistent, intentional use of colors.
            </p>
            <p className="case-study-section__spacer" aria-hidden="true">
              &nbsp;
            </p>
            <p>
              In order to truly improve upon the call center experience, I suggested the use of an AI assistant
              similar to Bank of America&apos;s client-facing &ldquo;Erica&rdquo; chatbot. Not only would this
              chatbot serve as generic guidance for users when they are not actively in calls, but also a live
              transcript agent with quick actions that appear dynamically as the representative interacts with
              the caller. Once the call concludes, the callers&apos; account would populate with a summary of
              the call, post-call actions, and a sentiment analysis. This way, employees could keep track of
              each client, what their queries might be, and could more easily formulate a personalized way to
              serve them. As I had the most knowledge of AI based products, I was tasked with the creation of
              this portion of the website. Additionally, I spearheaded the design for the &ldquo;Edit
              Wizard&rdquo; and &ldquo;Maintain __&rdquo; portion of the website.
            </p>
          </CaseStudySection>

          <CaseStudySection
            letter="D"
            title="Personas"
            backgroundSrc="/images/case-studies/fintech/bg-personas.png"
          >
            <p>
              As per usual, I generated 2 user personas during our initial exploration of the product. While I
              generated a majority of the content using what I had pinpointed as a designer, I also set up some
              time with employees from the client side to capture a more personal idea of what thoughts they
              had on the product. I interviewed 3 employees with varying levels of role-based access and
              experience with the company. As such, I gained valuable insight into how they, personally,
              approached the product and integrated it into their workday.
            </p>
            <div className="case-study__personas">
              <article className="case-study__persona-card">
                <div className="case-study__persona-header">
                  <img
                    src="/images/case-studies/fintech/persona-alex.png"
                    alt=""
                    className="case-study__persona-avatar"
                    draggable={false}
                  />
                  <div>
                    <p className="case-study__persona-name">Alex Carter</p>
                    <p className="case-study__persona-role">Account Manager</p>
                  </div>
                </div>
                <p className="case-study__persona-quote">
                  &ldquo;I want to see everything I need in one page. I&apos;m spending too much time looking
                  across pages with too many windows open.&rdquo;
                </p>
                <hr className="case-study__persona-divider" />
                <div className="case-study__persona-block">
                  <p className="case-study__persona-label">Goals</p>
                  <p>
                    • Efficiently manage investments and complete transactions with minimal friction or human
                    assistance
                  </p>
                  <p>• Retrieve financial documents, such as quarterly statements and tax forms, easily</p>
                  <p>
                    • Monitor investment performance and optimize contributions to meet financial milestones
                  </p>
                  <p>• Interact with intuitive, AI-driven tools that feel personalized and human</p>
                </div>
                <div className="case-study__persona-block">
                  <p className="case-study__persona-label">Frustrations</p>
                  <p>
                    • Frustration from navigating complex interfaces that are not personalized to their needs
                  </p>
                  <p>• Delays caused by slow or outdated authentication processes</p>
                  <p>• Lack of immediate access to up-to-date financial data or records</p>
                </div>
              </article>

              <article className="case-study__persona-card">
                <div className="case-study__persona-header">
                  <img
                    src="/images/case-studies/fintech/persona-jessica.png"
                    alt=""
                    className="case-study__persona-avatar"
                    draggable={false}
                  />
                  <div>
                    <p className="case-study__persona-name">Jessica Lee</p>
                    <p className="case-study__persona-role">Call Center Representative</p>
                  </div>
                </div>
                <p className="case-study__persona-quote">
                  &ldquo;I worry that navigating through multiple windows is slowing down my workflow and
                  disappointing customers.&rdquo;
                </p>
                <hr className="case-study__persona-divider" />
                <div className="case-study__persona-block">
                  <p className="case-study__persona-label">Goals</p>
                  <p>• Resolve investor inquiries quickly, accurately, and in a friendly manner</p>
                  <p>• Maximize productivity and call efficiency while maintaining empathy</p>
                  <p>• Stay compliant with internal protocols and regulatory standards</p>
                  <p>• Access tools that anticipate needs and reduce guesswork</p>
                </div>
                <div className="case-study__persona-block">
                  <p className="case-study__persona-label">Frustrations</p>
                  <p>• Need to manually switch between systems or reference outdated resources</p>
                  <p>• Time lost due to manual data entry or unclear process steps</p>
                  <p>
                    • High pressure to resolve issues quickly while maintaining quality and compliance
                  </p>
                </div>
              </article>
            </div>
            <p>
              Additionally, I discussed among my colleagues to capture a more designer-centric opinion. I
              provided them with the screen exploration I had completed and gathered their advice to add to my
              design processes.
            </p>
          </CaseStudySection>

          <CaseStudySection
            letter="E"
            title="Results"
            backgroundSrc="/images/case-studies/fintech/bg-results.png"
          >
            <p>
              The final product improved upon all the previously identified pain points. It was personable,
              modern, intentional, easy-to-read, and intuitive. It was shaped around our client&apos;s needs
              and comforts; it didn&apos;t alienate legacy users but was intuitive enough to welcome more
              novice users.
            </p>
            <p className="case-study-section__spacer" aria-hidden="true">
              &nbsp;
            </p>
            <p>
              Firstly, a major structural shift came through the introduction of drawers and layered menus. To
              alleviate the problems users experienced whilst navigating through the original platform, we used
              a combination of drawers and menus to obscure any actions the users did not interface with
              often. This, thereby, left more room on the page for users to pinpoint account vitals and more
              repetitive actions. Call center users would find an easier time staying oriented on goals.
            </p>
            <p className="case-study-section__spacer" aria-hidden="true">
              &nbsp;
            </p>
            <p>
              In particular, I focused on 4 major sections of the website. In order to ensure that these
              sections adhered to the clients&apos; needs, I underwent extensive feedback sessions with a client
              team to ensure the final product landed on a pattern that they were confident in. By integrating
              frequent feedback sessions, I built a successful repertoire with the client. The AI-assisted call
              center experience was where my background in both AI and UX came together most directly. Average
              call times dropped from 12 minutes down to 5 to 6 minutes. The feedback from agents was
              consistent: finding the right information and inputs was finally fast and easy. When debuted to
              the client&apos;s customer via a live demo, it received strong positive feedback. On the other
              hand, the account wizard went through its own feedback process with stakeholders and employees
              before landing on a final design. It balanced simplicity with enough nuance for the client&apos;s
              specific needs, supported role-based controls clearly, and integrated smoothly into the broader
              workflow experience I was also responsible for designing.
            </p>
            <div className="case-study__wireframes-row">
              <div className="case-study__wireframe-panel">
                <img
                  src="/images/case-studies/fintech/wireframe-iva.png"
                  alt="AI-assisted call center wireframe"
                  draggable={false}
                />
              </div>
              <div className="case-study__wireframe-panel case-study__wireframe-panel--mar">
                <img
                  src="/images/case-studies/fintech/wireframe-mar.png"
                  alt="Account wizard wireframe"
                  draggable={false}
                />
              </div>
            </div>
            <p>
              As someone who frequently interfaced with front-end design and had to collaborate with product
              designers and backend engineers, I focused heavily on building a reusable, component-based design
              system with an emphasis on auto-layout. Though building such a comprehensive system for a product
              as complex as what we were designing added to my workload, I knew it would pay off when it came
              time for knowledge transfer and future iterative processes. It also gave the team flexibility to
              keep building without starting from scratch each time.
            </p>
            <p className="case-study-section__spacer" aria-hidden="true">
              &nbsp;
            </p>
            <p>
              Throughout everything, I kept future iterations in mind. The project ran about 8 months, and the
              client had already signaled that they wanted to continue into the design of 30+ additional
              sections to be built off of what we provided them. Every design decision I made was one that
              could be built on.
            </p>
            <div className="case-study__wireframes-row case-study__wireframes-row--tall">
              <div className="case-study__wireframe-panel case-study__wireframe-panel--tall">
                <img
                  src="/images/case-studies/fintech/wireframe-system.png"
                  alt="Design system wireframe"
                  draggable={false}
                />
              </div>
              <div className="case-study__wireframe-panel case-study__wireframe-panel--tall-narrow">
                <img
                  src="/images/case-studies/fintech/wireframe-iv.png"
                  alt="Investment view wireframe"
                  draggable={false}
                />
              </div>
            </div>
            <p>
              This project stands as one of the most comprehensive and impactful pieces of work in my portfolio.
              Taking a platform that was actively fatiguing its users and reshaping it into something fast,
              personal, and genuinely usable was no small task. But the success of the product speaks for
              itself. Reduced call times, positive live demo feedback, a scalable design system, and an
              flexible final product were only a few of the many successes I achieved with this design project.
            </p>
          </CaseStudySection>
        </main>
      </div>
    </div>
  );
}
