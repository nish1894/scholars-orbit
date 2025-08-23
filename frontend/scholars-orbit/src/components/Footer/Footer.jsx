import './footer.css';

const SocialIcon = ({ label, path }) => (
  <a className="social" href="#" aria-label={label} title={label}>
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={path} />
    </svg>
  </a>
);

// super-lightweight glyphs (Facebook, YouTube, LinkedIn, X/Twitter, Instagram, Quora)
const ICONS = {
  facebook:
    'M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.19 8.44 10v-7.06H7.9V12h2.54V9.79c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.62.77-1.62 1.56V12h2.76l-.44 2.99h-2.32V22c4.78-.81 8.44-4.98 8.44-9.94Z',
  youtube:
    'M23.5 6.18a3.05 3.05 0 0 0-2.14-2.16C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.36.52A3.05 3.05 0 0 0 .5 6.18 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.82 3.05 3.05 0 0 0 2.14 2.16C4.3 20.5 12 20.5 12 20.5s7.7 0 9.36-.52a3.05 3.05 0 0 0 2.14-2.16A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.82ZM9.75 15.5v-7l6 3.5-6 3.5Z',
  linkedin:
    'M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8ZM8 8h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.5V23H8V8Z',
  twitter:
    'M22.46 6c-.77.35-1.6.58-2.46.69a4.26 4.26 0 0 0 1.87-2.35 8.54 8.54 0 0 1-2.7 1.03 4.27 4.27 0 0 0-7.3 3.89 12.1 12.1 0 0 1-8.79-4.46 4.27 4.27 0 0 0 1.32 5.69 4.22 4.22 0 0 1-1.93-.54v.05a4.27 4.27 0 0 0 3.42 4.19 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 3.99 2.97A8.57 8.57 0 0 1 2 19.54a12.08 12.08 0 0 0 6.54 1.92c7.85 0 12.14-6.51 12.14-12.16 0-.19 0-.39-.01-.58A8.7 8.7 0 0 0 24 6.56a8.36 8.36 0 0 1-2.54.7Z',
  instagram:
    'M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.95.24 2.4.4.6.23 1.03.5 1.48.94.44.45.7.88.94 1.48.16.46.35 1.24.4 2.4.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.95-.4 2.4a3.86 3.86 0 0 1-.94 1.48 3.86 3.86 0 0 1-1.48.94c-.46.16-1.24.35-2.4.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.95-.24-2.4-.4a3.86 3.86 0 0 1-1.48-.94 3.86 3.86 0 0 1-.94-1.48c-.16-.46-.35-1.24-.4-2.4C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.95.4-2.4.23-.6.5-1.03.94-1.48.45-.44.88-.7 1.48-.94.46-.16 1.24-.35 2.4-.4C8.42 2.21 8.8 2.2 12 2.2Zm0 2.2c-3.13 0-3.5.01-4.73.07-.97.04-1.49.21-1.83.35-.46.18-.79.4-1.14.75-.35.35-.57.68-.75 1.14-.14.34-.31.86-.35 1.83-.06 1.23-.07 1.6-.07 4.73s.01 3.5.07 4.73c.04.97.21 1.49.35 1.83.18.46.4.79.75 1.14.35.35.68.57 1.14.75.34.14.86.31 1.83.35 1.23.06 1.6.07 4.73.07s3.5-.01 4.73-.07c.97-.04 1.49-.21 1.83-.35.46-.18.79-.4 1.14-.75.35-.35.57-.68.75-1.14.14-.34.31-.86.35-1.83.06-1.23.07-1.6.07-4.73s-.01-3.5-.07-4.73c-.04-.97-.21-1.49-.35-1.83a2.47 2.47 0 0 0-.75-1.14 2.47 2.47 0 0 0-1.14-.75c-.34-.14-.86-.31-1.83-.35-1.23-.06-1.6-.07-4.73-.07Zm0 3.5a6.1 6.1 0 1 1 0 12.2 6.1 6.1 0 0 1 0-12.2Zm0 10a3.9 3.9 0 1 0 0-7.8 3.9 3.9 0 0 0 0 7.8Zm5.5-10.95a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8Z',
  quora:
    'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.1 0 4.04-.65 5.64-1.76l1.67 2.02 1.69-1.4-1.7-2.03A9.94 9.94 0 0 0 22 12C22 6.48 17.52 2 12 2Zm0 2c4.42 0 8 3.58 8 8a7.96 7.96 0 0 1-3.48 6.56 5.15 5.15 0 0 0-.66-1.12c-.55-.72-1.27-1.31-2.14-1.31-1.17 0-2.1.62-2.66 1.52-.46-.22-.88-.56-1.25-1.04a6.5 6.5 0 1 1 3.71-12.05c-1.05 1.03-1.71 2.41-1.71 3.95 0 2.92 2.15 5.23 4.8 5.23.58 0 1.13-.12 1.64-.33A8.02 8.02 0 0 1 12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8Z',
};

const Badge = ({ title, subtitle }) => (
  <div className="badge">
    <div className="badge-inner">
      <div className="badge-title">{title}</div>
      <div className="badge-sub">{subtitle}</div>
      <div className="badge-small">Monitored by Delve</div>
    </div>
  </div>
);

const GooglePlayBadge = () => (
  <a className="gplay" href="#" aria-label="Get it on Google Play">
    <div className="gplay-triangle" />
    <div className="gplay-text">
      <span className="small">GET IT ON</span>
      <span className="brand">Google Play</span>
    </div>
  </a>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        {/* Left column: logo, socials, badges, app */}
        <div className="col brand-col">
          <div className="logo">
            <span>Scholar's Orbit</span>
            <span className="sq" aria-hidden="true" />
          </div>

          <div className="socials">
            <SocialIcon label="Facebook" path={ICONS.facebook} />
            <SocialIcon label="YouTube" path={ICONS.youtube} />
            <SocialIcon label="LinkedIn" path={ICONS.linkedin} />
            <SocialIcon label="Twitter / X" path={ICONS.twitter} />
            <SocialIcon label="Instagram" path={ICONS.instagram} />
            <SocialIcon label="Quora" path={ICONS.quora} />
          </div>

          <div className="badges">
            <Badge title="ISO 27001" subtitle="" />
            <Badge title="SOC 2" subtitle="Type 1" />
          </div>

          <div className="app-block">
            <div className="qr" aria-hidden="true">
              {/* simplified QR visual */}
              {[...Array(25)].map((_, i) => (
                <span key={i} />
              ))}
            </div>
            <div className="app-copy">
              <div className="app-line1">Download our App</div>
              <GooglePlayBadge />
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col">
          <h3>Scaler Offerings</h3>
          <ul className="links">
            <li>
              <a href="#">Software Development (Academy)</a>
            </li>
            <li>
              <a href="#">Data Science</a>
            </li>
            <li>
              <a href="#">DevOps and Cloud Computing</a>
            </li>
            <li>
              <a href="#">Advanced AI &amp; Machine Learning</a>
            </li>
            <li>
              <a href="#">Scaler School of Technology</a>
            </li>
            <li>
              <a href="#">Scaler School of Business</a>
            </li>
            <li>
              <a href="#">Scaler Neovarsity (Master’s Program)</a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="col">
          <h3>Resources</h3>
          <ul className="links">
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Scaler Topics</a>
            </li>
            <li>
              <a href="#">Alumini Review</a>
            </li>
            <li>
              <a href="#">Scaler Blogs</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="col">
          <h3>Other</h3>
          <ul className="links">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Become a Mentor</a>
            </li>
            <li>
              <a href="#">Become a TA</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bottom">
        © {new Date().getFullYear()} InterviewBit Technologies Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}
