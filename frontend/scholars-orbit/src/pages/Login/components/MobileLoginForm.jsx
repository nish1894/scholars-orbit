import { useState } from 'react';

export default function MobileLoginForm({ onSubmit, canSubmit = false }) {
  const [country, setCountry] = useState('+91');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.({ country, phone }); // container checks `human`
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label">
        Mobile Number<span className="req">*</span>
      </label>

      <div className="phone-row">
        <button className="flag-btn" type="button" aria-label="Change country code">
          <span className="flag" role="img" aria-label="India flag">
            🇮🇳
          </span>
          <select
            className="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            aria-label="Country code"
          >
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
        />
      </div>

      <button className="btn btn--auth btn--auth-primary" type="submit" disabled={!canSubmit}>
        Login
      </button>
    </form>
  );
}
