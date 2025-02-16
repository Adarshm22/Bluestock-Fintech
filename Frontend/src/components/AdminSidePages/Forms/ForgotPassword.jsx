import React, { useState } from "react";
import logo from "../../../assets/logo.png"


const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset requested for:", email);
    // Your password-reset logic goes here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      {/* Form Container */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white shadow-md rounded-lg p-6"
      >
        {/* Logo + Title */}
        <div className="text-center mb-6">
          {/* Replace /bluestock-logo.png with your actual logo path */}
          <img
            src={logo}
            alt="BLUESTOCK"
            className="mx-auto mb-10 h-6"
          />
          <h2 className="text-xl font-semibold text-gray-800">
            Forgot Password?
          </h2>
          <p className="text-sm text-gray-500 mt-1 flex flex-col">
            <span>Enter your email address to get the</span> <span>password reset link.</span>
          </p>
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm text-gray-700 font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="hello@bluestock.in"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500"
            required
          />
        </div>

        {/* Password Reset Button */}
        <button
          type="submit"
          className="w-full bg-violet-800 text-white rounded-md py-2 text-sm font-medium hover:bg-purple-700 transition-colors"
        >
          Password Reset
        </button>

        {/* Back to Login */}
        <div className="text-center mt-4">
          <a href="#" className="text-sm text-gray-500 hover:underline">
            Back to login
          </a>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
