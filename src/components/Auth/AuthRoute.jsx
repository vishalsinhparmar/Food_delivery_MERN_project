import React from 'react';
import authimg from '@assets/Auth/authImage.jpg';
import { Outlet } from 'react-router-dom';
import { AuthContextProvider } from './AuthContext/Authcontex';

const AuthRoute = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative">
      {/* Blurred Background Image */}
      <div className="hidden lg:block absolute top-0 left-0 w-full h-full">
        <img
          src={authimg}
          alt="Background"
          className="w-full h-full object-cover filter blur-lg brightness-75"
          loading="lazy"
        />
      </div>

      {/* Overlay for Mobile Responsiveness */}
      <div className="absolute inset-0  lg:bg-transparent"></div>

      {/* Centered Form Container */}
      <div className="relative z-10 bg-white shadow-md rounded-lg max-w-md w-full px-6 py-8 sm:px-10 lg:py-12">
        {/* Welcome Text */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-sm text-gray-500">
            Please sign in or sign up to access your account.
          </p>
        </div>

        {/* Outlet for Child Components */}
        <AuthContextProvider>
          <Outlet />
        </AuthContextProvider>
      </div>
    </div>
  );
};

export default AuthRoute;
