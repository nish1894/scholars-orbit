import React from 'react';

const Management = () => {
  const managementMembers = [
    {
      id: 1,
      name: 'Neelam Thorali',
      position: 'Management',
      institution: "Scholar's Orbit",
      image: '👨‍💼',
      experience: '20+ years',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'Chief Academic Officer',
      institution: "Scholar's Orbit",
      image: '👩‍💼',
      experience: '15+ years',
    },
  ];

  return (
    <div className="management-container">
      {/* Management Grid */}
      <section className="management-section">
        <div className="container">
          <div className="management-grid">
            {managementMembers.map((member) => (
              <div key={member.id} className="management-card">
                <div className="management-avatar">{member.image}</div>
                <div className="management-info">
                  <h3 className="management-name">{member.name}</h3>
                  <p className="management-position">{member.position}</p>
                  <p className="management-institution">{member.institution}</p>

                  <div className="management-experience">
                    <span className="experience-label">Experience:</span>
                    <span className="experience-text">{member.experience}</span>
                  </div>

                  {/* removed expertise & achievements */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Management */}
      <section className="why-management-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Management?</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-icon">🎯</div>
              <h3>Strategic Vision</h3>
              <p>Proven track record of building successful edtech companies</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">🚀</div>
              <h3>Innovation Focus</h3>
              <p>Constantly evolving and adapting to industry changes</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">🤝</div>
              <h3>Student-Centric</h3>
              <p>Every decision is made with student success in mind</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">💡</div>
              <h3>Industry Expertise</h3>
              <p>Combined experience from top tech companies and universities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="management-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join Our Community?</h2>
            <p>Experience world-class education under expert leadership</p>
            <div className="cta-actions">
              <button className="btn btn--primary">Enroll Now</button>
              <button className="btn btn--outline">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Management;
