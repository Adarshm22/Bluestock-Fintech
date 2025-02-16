import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../../assets/logo.png"
import { Link } from "react-router";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-lg w-96">
        <div className="text-center mb-8">
          <img src={logo} alt="Bluestock" className="mx-auto w-72 mb-6" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm placeholder-gray-400"
            required
          />
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-700 text-sm font-semibold">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm placeholder-gray-400"
              required
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <Link to="/forgotPassword" className="text-xs text-blue-500 float-right mt-2">Forgot Password?</Link>
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-sm text-gray-700">Keep me signed in</label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-semibold hover:bg-blue-700"
        >
          Login
        </button>
        <div className="relative text-center mt-6 text-gray-500 text-xs">
          <span className="bg-white px-2">or sign in with</span>
        </div>
        <button className="w-full mt-3 bg-gray-200 py-2 rounded-md flex items-center justify-center text-sm font-semibold">
          <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-2" /> Continue with Google
        </button>
        <div className="text-center mt-6">
          <Link to="/signUp" className="text-sm text-blue-600 font-semibold">Create an account</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;