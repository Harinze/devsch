'use client';

import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('User Info:', form);
    // Proceed with API call or Firebase signup
  };

  const handleGoogleSignup = () => {
    console.log('Google signup triggered');
    // Trigger your Google Auth logic here
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 via-white to-gray-200 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            required
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (optional)"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold py-3 rounded-xl hover:bg-yellow-600 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition"
        >
          <FcGoogle className="text-xl" />
          <span className="font-medium text-gray-700">Sign up with Google</span>
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{' '}
          <button
            onClick={goToLogin}
            className="text-yellow-600 hover:underline font-semibold"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
