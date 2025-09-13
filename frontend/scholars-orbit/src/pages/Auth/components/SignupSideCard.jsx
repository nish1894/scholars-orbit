import { useState } from 'react';
import './sidecard.css';
import { HumanCheck, SocialLogins } from './components';

export default function SignupSideCard({ onClose = () => { }, onSwitchToLogin = () => { } }) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [cc, setCc] = useState('+91');
    const [phone, setPhone] = useState('');
    const [human, setHuman] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!human) return alert('Please verify you are human.');
        alert(`Sign up ${fullName} / ${email} / ${cc} ${phone}`);
    };

    return (
        <section className="card">
            {/* Close */}
            <button type="button" aria-label="Close" className="close-x" onClick={onClose}>
                ×
            </button>

            {/* Title */}
            <h1 className="title" style={{ fontSize: 28, lineHeight: 1.2 }}>
                Take your career to the next level now!
            </h1>

            <form className="form" onSubmit={handleSubmit}>
                {/* Full Name */}
                <label className="label">
                    Full Name <span className="req">*</span>
                </label>
                <input
                    className="text-input"
                    type="text"
                    placeholder="Enter your name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />

                {/* Email */}
                <label className="label">
                    Email <span className="req">*</span>
                </label>
                <input
                    className="text-input"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                />

                {/* Phone */}
                <label className="label">
                    Phone Number <span className="req">*</span>
                </label>
                <div className="phone-row">
                    <button className="flag-btn" type="button" aria-label="Change country code">
                        <span className="flag" role="img" aria-label="India">
                            🇮🇳
                        </span>
                        <select className="country" value={cc} onChange={(e) => setCc(e.target.value)} aria-label="Country code">
                            <option value="+91">+91</option>
                            <option value="+1">+1</option>
                            <option value="+44">+44</option>
                            <option value="+61">+61</option>
                        </select>
                        <span className="chev">▾</span>
                    </button>

                    <input
                        className="phone-input"
                        type="tel"
                        placeholder="Enter your mobile number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        inputMode="numeric"
                    />
                </div>

                {/* Human verify */}
                <HumanCheck checked={human} onChange={setHuman} />

                {/* CTA */}
                <button className="btn btn--auth btn--auth-primary" type="submit" style={{ width: '100%', marginTop: 12 }}>
                    SIGN UP
                </button>
            </form>

            <p className="muted" style={{ textAlign: 'center', marginTop: 8 }}>
                Already a member?{' '}
                <button type="button" className="link" onClick={onSwitchToLogin}>
                    LOG IN
                </button>
            </p>

            {/* Divider */}
            <div className="or">
                <span>OR</span>
            </div>
            <p className="muted" style={{ textAlign: 'center' }}>Log in using</p>
            <SocialLogins />
        </section>
    );
}
