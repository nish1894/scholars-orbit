import { useEffect, useState } from 'react';
import './sidecard.css';
import { MobileLoginForm, EmailLoginForm, HumanCheck, SocialLogins } from './components';

export default function LoginSideCard({ onClose = () => { }, onSwitchToSignup = () => { } }) {
    const [closing, setClosing] = useState(false);
    const [showPhone, setShowPhone] = useState(true);
    const [human, setHuman] = useState(false);

    const requestClose = () => setClosing(true);
    const finishClose = () => onClose();

    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && requestClose();
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    const handlePhoneSubmit = ({ country, phone }) => {
        if (!human) return alert('Please verify you are human.');
        alert(`Login with ${country} ${phone}`);
    };

    const handleEmailSubmit = ({ email, password }) => {
        if (!human) return alert('Please verify you are human.');
        alert(`Login with ${email} / ${'*'.repeat(password.length)}`);
    };

    return (
        <section
            className={`card ${closing ? 'closing' : ''}`}
            onAnimationEnd={() => closing && finishClose()}
        >
            {/* Close */}
            <button type="button" aria-label="Close" className="close-x" onClick={requestClose}>
                ×
            </button>

            {/* Header */}
            <h1 className="title">Login</h1>
            <p className="subtitle">
                or{' '}
                <button type="button" className="link" onClick={onSwitchToSignup}>
                    create your Scholar's Orbit account
                </button>
            </p>

            {/* Toggle */}
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

            {/* Forms */}
            {showPhone ? (
                <MobileLoginForm onSubmit={handlePhoneSubmit} canSubmit={human} />
            ) : (
                <EmailLoginForm onSubmit={handleEmailSubmit} canSubmit={human} />
            )}

            {/* Human check */}
            <HumanCheck checked={human} onChange={setHuman} />

            {/* Divider + socials */}
            <div className="or">
                <span>OR</span>
            </div>
            <p className="muted">Log in using</p>
            <SocialLogins />
        </section>
    );
}
