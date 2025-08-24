import React from 'react';
import './Faculty.css';

const Faculty = () => {
  const facultyMembers = [
    {
      id: 1,
      name: 'Ravindra Poonia',
      institution: 'IIT Kharagpur',
      expertise: 'Chemistry',
      image: '👨‍🏫',
      experience: '5 years',
    },
    {
      id: 2,
      name: 'Pradyumn Mehra',
      institution: 'IIT Bombay',
      expertise: 'Physics',
      image: '👨‍🏫',
      experience: '3 years',
    },
    {
      id: 3,
      name: 'Abhishek Kumar',
      institution: 'IIT Kharagpur',
      expertise: 'Mathematics',
      image: '👨‍🏫',
      experience: '4 years',
    },
  ];

  return (
    <div className="faculty-container">
 

      {/* Faculty Grid */}
      <section className="faculty-section">
        <div className="container">
          <div className="faculty-grid">
            {facultyMembers.map((member) => (
              <div key={member.id} className="faculty-card">
                <div className="faculty-avatar">{member.image}</div>
                <div className="faculty-info">
                  <h3 className="faculty-name">{member.name}</h3>
                  <p className="faculty-institution">{member.institution}</p>
                  <div className="faculty-expertise">
                    <span className="expertise-label">Expertise:</span>
                    <span className="expertise-text">{member.expertise}</span>
                  </div>
                  <div className="faculty-experience">
                    <span className="experience-label">Experience:</span>
                    <span className="experience-text">{member.experience}</span>
                  </div>
 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Faculty */}
      <section className="why-faculty-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Faculty?</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-icon">🎓</div>
              <h3>Top-Tier Education</h3>
              <p>All faculty members hold PhDs from world-renowned universities</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">💼</div>
              <h3>Industry Experience</h3>
              <p>Combined experience of working with leading tech companies</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">🔬</div>
              <h3>Research Excellence</h3>
              <p>Published hundreds of research papers and patents</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">🌟</div>
              <h3>Award Winners</h3>
              <p>Recognized with prestigious awards and honors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="faculty-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Learn from the Best?</h2>
            <p>Join our programs and get mentored by industry experts</p>
            <div className="cta-actions">
              <button className="btn btn--primary">Enroll Now</button>
              <button className="btn btn--outline">View Programs</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
