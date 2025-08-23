import { useState } from 'react';

export default function EmailLoginForm({ onSubmit, canSubmit = false }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.({ email, password }); // container checks `human`
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label">
        Email<span className="req">*</span>
      </label>
      <input
        className="text-input"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoComplete="email"
      />

      <label className="label">
        Password<span className="req">*</span>
      </label>
      <input
        className="text-input"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        autoComplete="current-password"
      />

      <button className="btn btn--auth btn--auth-primary" type="submit" disabled={!canSubmit}>
        Login
      </button>
    </form>
  );
}
