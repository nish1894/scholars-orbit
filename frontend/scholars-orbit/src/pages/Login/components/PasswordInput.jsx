import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const togglePassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="Password-Input">
      <label className="form-label">
        Password
        <div className="password-container">
          <input
            value={value}
            onChange={onChange}
            type={isShowPassword ? 'text' : 'password'}
            placeholder={placeholder || 'password'}
            className="input-box"
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => togglePassword()}
            aria-label={isShowPassword ? 'Hide password' : 'Show password'}
          >
            <FontAwesomeIcon icon={isShowPassword ? faEyeSlash : faEye} />
          </button>
        </div>
      </label>
    </div>
  );
};

export default PasswordInput;
