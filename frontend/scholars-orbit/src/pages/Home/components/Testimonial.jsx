import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Rahul Sharma',
            role: 'Software Engineer',
            company: 'Google',
            image: '👨‍💻',
            rating: 5,
            text: 'Scholar\'s Orbit transformed my career! The AI-powered learning approach and expert faculty helped me land my dream job at Google. The practical projects and mentorship were game-changing.',
            batch: 'Batch 2023'
        },
        {
            id: 2,
            name: 'Priya Patel',
            role: 'Data Scientist',
            company: 'Microsoft',
            image: '👩‍💻',
            rating: 5,
            text: 'I was skeptical about online learning, but Scholar\'s Orbit exceeded all expectations. The curriculum is industry-relevant, and the AI mentor provided personalized guidance throughout my journey.',
            batch: 'Batch 2023'
        },
        {
            id: 3,
            name: 'Amit Kumar',
            role: 'Full Stack Developer',
            company: 'Amazon',
            image: '👨‍💼',
            rating: 5,
            text: 'The combination of IIT faculty expertise and cutting-edge AI technology made learning incredibly effective. I went from beginner to Amazon developer in just 8 months!',
            batch: 'Batch 2023'
        }
    ];

    const renderStars = (rating) => {
        return Array.from({ length: rating }, (_, index) => (
            <span key={index} className="star">⭐</span>
        ));
    };

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="testimonials-header">
                    <h2 className="section-title">
                        What Our <span className="highlight">Students Say</span>
                    </h2>
                    <p className="section-subtitle">
                        Join thousands of successful graduates who transformed their careers with Scholar's Orbit
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="testimonial-header">
                                <div className="testimonial-avatar">
                                    {testimonial.image}
                                </div>
                                <div className="testimonial-info">
                                    <h3 className="testimonial-name">{testimonial.name}</h3>
                                    <p className="testimonial-role">{testimonial.role}</p>
                                    <p className="testimonial-company">{testimonial.company}</p>
                                    <div className="testimonial-rating">
                                        {renderStars(testimonial.rating)}
                                    </div>
                                </div>
                                <div className="testimonial-batch">
                                    {testimonial.batch}
                                </div>
                            </div>

                            <div className="testimonial-content">
                                <p className="testimonial-text">"{testimonial.text}"</p>
                            </div>

                            <div className="testimonial-footer">
                                <div className="company-logo">
                                    {testimonial.company === 'Google' && '🔍'}
                                    {testimonial.company === 'Microsoft' && '🪟'}
                                    {testimonial.company === 'Amazon' && '📦'}
                                </div>
                                <span className="verified-badge">✓ Verified Graduate</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="testimonials-cta">
                    <p className="cta-text">Ready to join our success stories?</p>
                    <button className="btn btn--primary">Start Your Journey</button>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
