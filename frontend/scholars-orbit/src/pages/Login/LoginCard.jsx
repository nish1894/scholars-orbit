import { useEffect, useState } from 'react';
import './LoginCard.css';
import MobileLoginForm from './components/MobileLoginForm';
import EmailLoginForm from './components/EmailLoginForm';
import SocialLogins from './components/SocialLogins';
import { apiPost } from '../../utils/api';
import HumanCheck from './components/HumanCheck';

/**
 * LoginCard Component - Handles user authentication with multiple login methods
 * @param {Object} props
 * @param {Function} props.onClose - Callback function to handle modal closing
 * @param {Function} props.onSwitchToSignup - Callback function to switch to signup view
 */
export default function LoginCard({ onClose = () => { }, onSwitchToSignup = () => { } }) {
  // State management for component
  const [closing, setClosing] = useState(false); // Controls closing animation
  const [showPhone, setShowPhone] = useState(true); // Toggles between phone/email login
  const [human, setHuman] = useState(false); // Human verification state

  // Modal closing handlers
  const requestClose = () => setClosing(true);
  const finishClose = () => onClose();

  // Add escape key listener for modal closing
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && requestClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /**
   * Handle phone number based login submission
   * @param {Object} data - Contains country and phone number
   */
  const handlePhoneSubmit = ({ country, phone }) => {
    if (!human) return alert('Please verify you are human.');
    alert(`Login with ${country} ${phone}`);
  };

  /**
   * Handle email based login submission
   * @param {Object} data - Contains email and password
   */
  const handleEmailSubmit = async ({ email, password }) => {
    if (!human) return alert('Please verify you are human.');
    try {
      const res = await apiPost('/auth/login', { email, password });
      alert('Login successful');
      // TODO: store token if needed: localStorage.setItem('token', res.accessToken)
      onClose();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    // Main card container with closing animation
    <section
      className={`card ${closing ? 'closing' : ''}`}
      onAnimationEnd={() => closing && finishClose()}
    >
      {/* Close button */}
      <button type="button" aria-label="Close" className="close-x" onClick={requestClose}>
        ×
      </button>

      {/* Header section */}
      <h1 className="title">Login</h1>
      <p className="subtitle">
        or{' '}
        <button
          type="button"
          className="link"
          onClick={onSwitchToSignup}
        >
          create your Scholar&apos;s Orbit account
        </button>
      </p>

      {/* Login method toggle section */}
      <div className="row-between" style={{ marginBottom: 12 }}>
        <span className="muted">{showPhone ? 'Using Mobile' : 'Using Email'}</span>
        {showPhone ? (
          <button type="button" className="link link-inline" onClick={() => setShowPhone(false)}>
            continue using email
          </button>
        ) : (
          <button type="button" className="link link-inline" onClick={() => setShowPhone(true)}>
            continue using phone
          </button>
        )}
      </div>

      {/* Conditional rendering of login forms */}
      {showPhone ? (
        <MobileLoginForm onSubmit={handlePhoneSubmit} canSubmit={human} />
      ) : (
        <EmailLoginForm onSubmit={handleEmailSubmit} canSubmit={human} />
      )}

      {/* Human verification checkbox */}
      <HumanCheck checked={human} onChange={setHuman} />

      {/* Social login section divider */}
      <div className="or">
        <span>OR</span>
      </div>

      {/* Social login options */}
      <p className="muted">Log in using</p>
      <SocialLogins />
    </section>
  );
}
