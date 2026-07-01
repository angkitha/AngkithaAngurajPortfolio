import { HeaderNav } from '../components/HeaderNav';
import { assetPath } from '../lib/assetPath';
import './AboutMe.css';

const bioParagraphs = [
  'Thanks for stumbling upon my page!',
  null,
  'I\u2019m Angkitha and I\u2019m a Design Engineer. What does that mean? Well, as someone who has heavily interfaced with both front-end development and UI/UX + Product Design, the term \u201cDesign Engineer\u201d is the result of a happy marriage of the two skills.',
  null,
  'I\u2019m passionate about building web products that are human-centered. At the core of what I do (and in part due to my background in software development), I strive for design system excellence and organized systems. Every design I construct is a canvas for future iterations and web development. I love talking to the people I design for and ensure that each product I release captures both my audience\u2019s satisfaction and my design expertise.',
  null,
  'I am currently developing various plug-ins to help my organization better streamline their internal design efforts. On the side, I\u2019m developing a Portfolio 2.0 meant to serve as my online diary, instead of a generic, recruiter-oriented website.',
  null,
  'I love talking with like-minded folks, regardless of technical background or industry. If you\u2019ve gotten this far, please connect with me on LinkedIn! I\u2019m sure we\u2019ll have a great chat :D',
];

export function AboutMe() {
  return (
    <div className="portfolio-about">
      <HeaderNav activeTab="about" />
      <main className="portfolio-about__main">
        <article className="about-card">
          <div className="about-card__header">
            <div className="about-card__title-block">
              <div className="about-card__title-crop">
                <img src={assetPath('images/about-me-title.png')} alt="About Me" draggable={false} />
              </div>
              <p className="about-card__name">ANGKITHA ANGURAJ KUMAR</p>
            </div>
            <p className="about-card__role">DESIGN ENGINEER</p>
          </div>

          <div className="about-card__body">
            <div className="about-card__photo-column">
              <div className="about-card__photo-crop">
                <img src={assetPath('images/profile-photo.png')} alt="Angkitha Anguraj Kumar" draggable={false} />
              </div>
              <div className="about-card__signature-crop">
                <img src={assetPath('images/angkitha-signature.png')} alt="" draggable={false} />
              </div>
            </div>

            <div className="about-card__details">
              <div className="about-card__meta">
                <div className="about-card__meta-column">
                  <div className="about-card__meta-item">
                    <span className="about-card__meta-number">01</span>
                    <span className="about-card__meta-text">San Francisco, CA</span>
                  </div>
                  <div className="about-card__meta-item">
                    <span className="about-card__meta-number">03</span>
                    <span className="about-card__meta-text">Design, Front-End, AI</span>
                  </div>
                </div>
                <div className="about-card__meta-item">
                  <span className="about-card__meta-number">02</span>
                  <span className="about-card__meta-text">3 years experience</span>
                </div>
              </div>

              <div className="about-card__bio">
                <span className="about-card__bio-number">04</span>
                <div className="about-card__bio-text">
                  {bioParagraphs.map((paragraph, index) =>
                    paragraph === null ? (
                      <p key={index} className="about-card__bio-spacer" aria-hidden="true">
                        &nbsp;
                      </p>
                    ) : (
                      <p key={index}>{paragraph}</p>
                    ),
                  )}
                </div>
              </div>

              <div className="about-card__links">
                <div className="about-card__link-item">
                  <span className="about-card__link-number">05</span>
                  <a
                    href="https://www.linkedin.com/in/angkitha-anguraj/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-card__link"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="about-card__link-item">
                  <span className="about-card__link-number">06</span>
                  <span className="about-card__link-text">angkithaa@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
