import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PasswordComponents from './PasswordInput';
import { UserSignUp } from '../../services/Api';
import Swal from 'sweetalert2';
import { fileSizeverify, passwordverify, Verifyemail, verifyUsername } from '../../utils/VerifyInput';
import { FcAddImage } from 'react-icons/fc';

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState({ email: '', password: '', image: '', username: '' });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
    setError({ ...error, [name]: '' });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (!fileSizeverify(file)) {
      setError((prev) => ({ ...prev, image: 'Image must be under 100KB' }));
    } else {
      setError((prev) => ({ ...prev, image: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === 'email' && !Verifyemail(value)) {
      setError((prev) => ({ ...prev, email: 'Invalid email address.' }));
    } else if (name === 'username' && !verifyUsername(value)) {
      setError((prev) => ({ ...prev, username: 'Invalid username.' }));
    } else if (name === 'password' && !passwordverify(value)) {
      setError((prev) => ({ ...prev, password: 'Password must meet requirements.' }));
    }
  };

  const validateForm = () => {
    const { username, email, password } = form;
    const emailValid = Verifyemail(email);
    const usernameValid = verifyUsername(username);
    const passwordValid = passwordverify(password);

    return emailValid && usernameValid && passwordValid && !error.image;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    const { username, email, password } = form;
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('username', username);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await UserSignUp(formData);
      if (response.success === true) {
        Swal.fire('Success', 'Account created successfully. Please verify your email.', 'success');
        setForm({ username: '', email: '', password: '' });
        setImage(null);
        navigate('/auth/verifyemail');
      } else {
        Swal.fire('Error', 'Something went wrong, please try again.', 'error');
      }
    } catch (err) {
      const errorData = err.response?.data?.data || {};
      Swal.fire('Error', 'Check the highlighted fields and try again.', 'error');
      setError({
        email: errorData.email || '',
        password: errorData.password || '',
        image: errorData.image || '',
        username: errorData.username || '',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 px-4 py-4">
      <div className="w-full max-w-md bg-white rounded-md shadow-md p-6">
        <h1 className="text-3xl font-bold text-yellow-500 text-center mb-4">Sign Up</h1>
        <hr className="w-1/4 mx-auto mb-5 border-gray-300" />

        <form onSubmit={submitForm} className="space-y-6">
          {/* Username Field */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`mt-1 block w-full rounded-md border-2 p-2 text-lg ${
                error.username ? 'border-red-500' : 'border-gray-300'
              } focus:border-yellow-400 focus:outline-none`}
              placeholder="Enter your username"
              required
            />
            {error.username && <p className="text-red-500 text-sm mt-1">{error.username}</p>}
          </div>

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
              handleBlur={handleBlur}
            />
            {/* {error.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>} */}
          </div>

          {/* Image Upload */}
          <div>
            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-700 cursor-pointer"
            >
              Upload Profile Image (optional)
            </label>
            <input
              id="file"
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="file"
              className="flex items-center justify-center gap-3 border border-dashed border-gray-400 rounded-lg p-4 cursor-pointer bg-gray-50"
            >
              <FcAddImage className="text-2xl" />
              <p className="text-yellow-800">Choose Image</p>
            </label>
            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="preview"
                className="w-20 h-20 rounded-full mt-2"
              />
            )}
            {error.image && <p className="text-red-500 text-sm mt-1">{error.image}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 text-white text-lg font-semibold rounded-md ${
              loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-600'
            }`}
          >
            {loading ? 'Processing...' : 'Sign Up'}
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{' '}
            <Link to="/auth" className="text-blue-600 font-medium hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
