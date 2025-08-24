import React, { useState } from 'react';
import Faculty from './Faculty';
import Management from './Management';
import './Team.css';

const Team = () => {
    const [activeView, setActiveView] = useState('faculty'); // 'faculty' or 'management'

    return (
        <div className="team-container">
            {/* Hero Section */}
            <section className="team-hero">
                <div className="container">
                    <h1 className="team-title">
                        Meet Our <span className="highlight">Team</span>
                    </h1>
                    <p className="team-subtitle">
                        Learn from the brightest minds in technology and academia
                    </p>

                    {/* Toggle Buttons */}
                    <div className="view-toggle">
                        <button
                            className={`toggle-btn ${activeView === 'faculty' ? 'active' : ''}`}
                            onClick={() => setActiveView('faculty')}
                        >
                            <span className="toggle-icon">👨‍🏫</span>
                            Faculty
                        </button>
                        <button
                            className={`toggle-btn ${activeView === 'management' ? 'active' : ''}`}
                            onClick={() => setActiveView('management')}
                        >
                            <span className="toggle-icon">👔</span>
                            Management
                        </button>
                    </div>
                </div>
            </section>

            {/* Dynamic Content Based on Toggle */}
            <div className="team-content">
                {activeView === 'faculty' ? <Faculty /> : <Management />}
            </div>
        </div>
    );
};

export default Team;
