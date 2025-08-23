import {useState} from 'react';

const RequestCall = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };
  return (
    <div className="hero-form-card">
      <h2 className="form-title">
        Book a Live Class, <span className="form-highlight">For Free!</span>
      </h2>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group phone-group">
          <div className="country-selector">
            <span className="flag">🇮🇳</span>
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleInputChange}
              className="country-code"
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+61">+61</option>
            </select>
            <span className="chevron">▾</span>
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="form-input phone-input"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn--form">
            Continue Booking Live Class
          </button>
          <div className="seats-info">
            <span className="seats-icon">👥</span>
            <span className="seats-text">Limited seats left</span>
          </div>
        </div>

        <div className="existing-user">
          Already have an account?{' '}
          <a href="#login" className="login-link">
            Click here
          </a>
        </div>

        <div className="terms-disclaimer">
          By creating an account I have read and agree to Scholar's Orbit's{' '}
          <a href="#terms" className="terms-link">
            Terms
          </a>{' '}
          and{' '}
          <a href="#privacy" className="terms-link">
            Privacy Policy
          </a>
          .
        </div>
      </form>
    </div>
  );
};

export default RequestCall;
