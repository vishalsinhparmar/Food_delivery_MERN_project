import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PasswordComponents from './PasswordInput';
import { UserSignIn } from '../../services/Api';
import Swal from 'sweetalert2';
import { passwordverify, Verifyemail } from '../../utils/VerifyInput';
import { AuthContext } from './AuthContext/Authcontex';

function SignIn() {
  const {UserData} = useContext(AuthContext)
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
    setError({ ...error, [name]: '' });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === 'email' && !Verifyemail(value)) {
      setError((prev) => ({ ...prev, email: 'Invalid email address.' }));
    }
    if (name === 'password' && !passwordverify(value)) {
      setError((prev) => ({ ...prev, password: 'Password must meet requirements.' }));
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { email, password } = form;
    const emailValid = Verifyemail(email);
    const passwordValid = passwordverify(password);

    if (!emailValid || !passwordValid) {
      setError({
        email: emailValid ? '' : 'Invalid email address.',
        password: passwordValid ? '' : 'Password must meet requirements.',
      });
      setLoading(false);
      return;
    }

    try {
      const response = await UserSignIn({ email, password });
      if (response.success) {
        localStorage.setItem('authToken', response.data?.token);
        setForm({ email: '', password: '' });
       await UserData()
        navigate('/');
      } else {
        Swal.fire('Error', 'Invalid credentials. Please try again.', 'error');
      }
    } catch (err) {
      const errorData = err.response?.data?.data || {};
      Swal.fire('Error', 'Check the highlighted fields and try again.', 'error');
      setError({
        email: errorData.email || '',
        password: errorData.password || '',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center  bg-gray-100 px-4 py-4">
      <div className="w-full max-w-md bg-white rounded-md shadow-md p-6">
        <h1 className="text-3xl font-bold text-yellow-500 text-center mb-4">Sign In</h1>
        <hr className="w-1/4 mx-auto mb-5 border-gray-300" />

        <form onSubmit={submitForm} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`mt-1 block w-full rounded-md border-2 p-2 text-lg ${
                error.email ? 'border-red-500' : 'border-gray-300'
              } focus:border-yellow-400 focus:outline-none`}
              placeholder="Enter your email"
              required
            />
            {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
          </div>

          {/* Password Field */}
          <div>
            <PasswordComponents
              onChangefn={handleChange}
              valName={form.password}
              name="password"
              label="Password"
              placeholderName="Enter your password"
              error={error.password}
            />
            {error.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 text-white text-lg font-semibold rounded-md ${
              loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-600'
            }`}
          >
            {loading ? 'Processing...' : 'Sign In'}
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-4 text-center">
          <p className="text-sm">
            Don't have an account?{' '}
            <Link to="/auth/SignUp" className="text-blue-600 font-medium hover:underline">
              Sign Up
            </Link>
          </p>
          <button
            onClick={() => navigate('/auth/ForgottePassword')}
            className="mt-2 text-sm text-red-500 font-medium hover:underline"
          >
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
