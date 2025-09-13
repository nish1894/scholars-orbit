import { useState } from 'react';
import SignupSideCard from '../../pages/Auth/SignupSideCard.jsx';
import LoginSideCard from '../../pages/Auth/LoginSideCard';

import './AuthModal.css';

export default function AuthModal({ onClose, initialView = 'login' }) {
    const [currentView, setCurrentView] = useState(initialView);

    const switchToSignup = () => setCurrentView('signup');
    const switchToLogin = () => setCurrentView('login');

    return (
        <div className="auth-modal-overlay" onClick={onClose}>
            <div className="auth-modal-container" onClick={(e) => e.stopPropagation()}>
                {currentView === 'login' ? (
                    <LoginSideCard
                        onClose={onClose}
                        onSwitchToSignup={switchToSignup}
                    />
                ) : (
                    <SignupSideCard
                        onClose={onClose}
                        onSwitchToLogin={switchToLogin}
                    />
                )}
            </div>
        </div>
    );
}
