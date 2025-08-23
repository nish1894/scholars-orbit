import { useState } from 'react';
import LoginCard from '../../pages/Login/LoginCard';
import SignUpCard from '../../pages/SignUp/SignUp';
import './AuthModal.css';

export default function AuthModal({ onClose, initialView = 'login' }) {
    const [currentView, setCurrentView] = useState(initialView);

    const switchToSignup = () => setCurrentView('signup');
    const switchToLogin = () => setCurrentView('login');

    return (
        <div className="auth-modal-overlay" onClick={onClose}>
            <div className="auth-modal-container" onClick={(e) => e.stopPropagation()}>
                {currentView === 'login' ? (
                    <LoginCard
                        onClose={onClose}
                        onSwitchToSignup={switchToSignup}
                    />
                ) : (
                    <SignUpCard
                        onClose={onClose}
                        onSwitchToLogin={switchToLogin}
                    />
                )}
            </div>
        </div>
    );
}
