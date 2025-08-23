import React from 'react'

const SecondSection = () => {
  return (
        <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Scholar's Orbit?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3>IIT Faculty</h3>
              <p>Learn from industry professionals and academic experts</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Comprehensive Curriculum</h3>
              <p>Structured learning paths designed for your success</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Career Growth</h3>
              <p>Accelerate your career with our proven programs</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default SecondSection
