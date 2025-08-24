import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ onLoginClick, onSignupClick }) {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(true);

  return (
    <header className="nav-wrap">
      <div className="nav-topbar">
        Need Help? Talk to our Academic Advisors {'  '}
        <a href="#apply" style={{ color: '#fff', textDecoration: 'underline' }}>
          Request a Call
        </a>
      </div>{' '}
      <nav className="nav">
        {/* Brand */}
        <Link to="/" className="brand" aria-label="Home">
          <span className="brand-primary">Scholar's</span>
          <span className="brand-sub">Orbit</span>
        </Link>

        {/* Hamburger (mobile) */}
        <button
          className="hamburger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Center links */}
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <a href="#curriculum">Curriculum</a>
          </li>
          <li>
            <a href="#reviews">Reviews</a>
          </li>
          <li>
            <a href="#mentorship">Mentorship</a>
          </li>
          <li>
            <a href="#community">Community</a>
          </li>
          <li>
            <a href="#careers">Careers</a>
          </li>
          <li>
            <a href="#faqs">FAQs</a>
          </li>
        </ul>

        {/* Right actions */}
        <div className="actions">
          <button
            type="button"
            className="btn btn--nav login-btn"
            onClick={onLoginClick}
          >
            Login
          </button>
          {/* <button
            type="button"
            className="btn btn--nav-primary"
            onClick={onSignupClick}
          >
            Sign Up
          </button> */}
          <a href="#request-call" className="btn call-btn">
            Request a Call
          </a>
        </div>
      </nav>
    </header>
  );
}
