import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext/Authcontex';

function PasswordComponent({
  onChangefn,
  valName,
  placeholderName,
  handleBlur,
  label,
  name,
  error
}) {
  const [showPassword, setShowPassword] = useState(false);
  const { Error } = useContext(AuthContext);

  const togglePasswordVisibility = () => {
    setShowPassword((prevPassword) => !prevPassword);
  };

  return (
    <div className="w-full mb-4">
      {/* Label for the input field */}
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {/* Password Input */}
        <input
          id={name}
          type={showPassword ? "text" : "password"}
          className={`bg-white rounded-md border focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 p-3 w-full text-sm placeholder-gray-500 shadow-sm ${
            error ? "border-red-500 focus:ring-red-500" : "border-gray-300"
          }`}
          value={valName}
          placeholder={placeholderName}
          onChange={onChangefn}
          name={name}
          onBlur={handleBlur}
          aria-invalid={error ? "true" : "false"}
        />

        {/* Show/Hide Password Button */}
        <button
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm font-medium text-blue-600 hover:underline focus:outline-none"
          type="button"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <p className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default PasswordComponent;
