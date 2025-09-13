import React, { useState } from 'react';
import './Comparision.css';

const Comparision = () => {
    const [activeTab, setActiveTab] = useState(0);

    const comparisonData = [
        {
            parameter: 'Fee',
            scholarsOrbit: '₹45,000/year',
            schoolOnly: '₹80,000-1,20,000/year',
            dedicatedCoaching: '₹60,000-1,00,000/year',
            hybrid: '₹1,40,000-2,00,000/year'
        },
        {
            parameter: 'Student-Teacher Ratio',
            scholarsOrbit: '1:15 (AI + Human)',
            schoolOnly: '1:40-50',
            dedicatedCoaching: '1:25-30',
            hybrid: '1:30-35'
        },
        {
            parameter: 'Focus',
            scholarsOrbit: 'AI-Powered Personalized Learning',
            schoolOnly: 'General Education + Basic Coaching',
            dedicatedCoaching: 'Exam-Focused Preparation',
            hybrid: 'Balanced Education + Coaching'
        },
        {
            parameter: 'Time Flexibility',
            scholarsOrbit: '24/7 AI Support + Live Classes',
            schoolOnly: 'Fixed School Hours',
            dedicatedCoaching: 'Fixed Coaching Hours',
            hybrid: 'Fixed School + Coaching Hours'
        },
        {
            parameter: 'Extra Curriculars',
            scholarsOrbit: 'AI Projects + Industry Connect',
            schoolOnly: 'Basic Sports & Activities',
            dedicatedCoaching: 'Limited to Coaching',
            hybrid: 'School Activities + Limited Coaching'
        }
    ];

    const options = [
        {
            name: "Scholar's Orbit",
            subtitle: "Home coaching but online",
            highlight: true,
            icon: "🚀"
        },
        {
            name: "School Only",
            subtitle: "Traditional education",
            highlight: false,
            icon: "🏫"
        },
        {
            name: "Dedicated Coaching",
            subtitle: "Exam-focused preparation",
            highlight: false,
            icon: "📚"
        },
        {
            name: "Hybrid",
            subtitle: "School + coaching",
            highlight: false,
            icon: "🔄"
        }
    ];

    return (
        <section className="comparison-section">
            <div className="container">
                <div className="comparison-header">
                    <h2 className="section-title">
                        Why Choose <span className="highlight">Scholar's Orbit</span>?
                    </h2>
                    <p className="section-subtitle">
                        Compare and see why Our Home coaching but Online is the Better choice
                    </p>
                </div>

                <div className="comparison-container">
                    {/* Options Tabs */}
                    <div className="options-tabs">
                        {options.map((option, index) => (
                            <div
                                key={index}
                                className={`option-tab ${activeTab === index ? 'active' : ''} ${option.highlight ? 'highlight' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                <div className="option-icon">{option.icon}</div>
                                <div className="option-content">
                                    <h3 className="option-name">{option.name}</h3>
                                    <p className="option-subtitle">{option.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Comparison Table */}
                    <div className="comparison-table-container">
                        <div className="comparison-table">
                            <div className="table-header">
                                <div className="parameter-header">Parameters</div>
                                {options.map((option, index) => (
                                    <div key={index} className={`value-header ${option.highlight ? 'highlight' : ''}`}>
                                        {option.name}
                                    </div>
                                ))}
                            </div>

                            <div className="table-body">
                                {comparisonData.map((row, rowIndex) => (
                                    <div key={rowIndex} className="table-row">
                                        <div className="parameter-cell">
                                            <span className="parameter-name">{row.parameter}</span>
                                        </div>
                                        <div className={`value-cell ${options[0].highlight ? 'highlight' : ''}`}>
                                            {row.scholarsOrbit}
                                        </div>
                                        <div className="value-cell">
                                            {row.schoolOnly}
                                        </div>
                                        <div className="value-cell">
                                            {row.dedicatedCoaching}
                                        </div>
                                        <div className="value-cell">
                                            {row.hybrid}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Comparison Cards */}
                    <div className="mobile-comparison">
                        {options.map((option, index) => (
                            <div key={index} className={`mobile-option ${option.highlight ? 'highlight' : ''}`}>
                                <div className="mobile-option-header">
                                    <div className="mobile-option-icon">{option.icon}</div>
                                    <div className="mobile-option-info">
                                        <h3 className="mobile-option-name">{option.name}</h3>
                                        <p className="mobile-option-subtitle">{option.subtitle}</p>
                                    </div>
                                </div>

                                <div className="mobile-option-details">
                                    {comparisonData.map((row, rowIndex) => (
                                        <div key={rowIndex} className="mobile-detail-row">
                                            <span className="mobile-parameter">{row.parameter}:</span>
                                            <span className="mobile-value">
                                                {index === 0 ? row.scholarsOrbit :
                                                    index === 1 ? row.schoolOnly :
                                                        index === 2 ? row.dedicatedCoaching : row.hybrid}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Comparision;
