import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../components/styles/LoginPage.css";

function LoginPage() {
  const [state, setState] = useState({
    username: "",
    password: "",
    keepLoggedIn: false,
  });
  const [errors, setErrors] = useState({});

  const handleLogin = () => {
    let newErrors = {};
    if (!state.username) newErrors.username = "Username is required.";
    if (!state.password) newErrors.password = "Password is required.";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Login", state);
    }
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  return (
    <div className="login-bg min-h-screen flex flex-col relative">
      <header className="">
        <div className="banner">
          <h1 >FSA – LMS</h1>
        </div>
      </header>
      <main className="login-main relative z-10">
        <div className="login-left">
          <img
            src="https://via.placeholder.com/100x40?text=Academy+Logo"
            alt="Academy Logo"
            className="mb-4"
          />
          <h2 className="login-title">
            <span className="learn-text">LEARN</span>
            <br />
            <span className="everywhere-text">EVERYWHERE.</span>
            <div className="login-underline"></div>
          </h2>
          <p className="login-desc">
            Expand your knowledge, skills, and career opportunities with our
            comprehensive learning platform.
          </p>
        </div>
        <div className="login-card bg-white text-black p-8 rounded-xl shadow-2xl">
          <h3 className="text-2xl font-bold mb-2">Login</h3>
          <p className="text-gray-600 mb-6">
            Login below to see all your courses.
          </p>
          <div className="mb-4">
            <label className="block text-sm mb-1 font-semibold">
              Username{" "}
              <span className="text-gray-500 text-xs font-normal">
                Required
              </span>
            </label>
            <input
              type="text"
              name="username"
              value={state.username}
              onChange={handleChange}
              className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400 ${
                errors.username ? "border-red-400" : ""
              }`}
              autoComplete="username"
            />
            {errors.username && (
              <div className="text-red-500 text-xs mt-1">{errors.username}</div>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-1 font-semibold">
              Password{" "}
              <span className="text-gray-500 text-xs font-normal">
                Required
              </span>
            </label>
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400 ${
                errors.password ? "border-red-400" : ""
              }`}
              autoComplete="current-password"
            />
            {errors.password && (
              <div className="text-red-500 text-xs mt-1">{errors.password}</div>
            )}
          </div>
          <button
            onClick={handleLogin}
            className="login-btn w-full text-white p-3 rounded font-semibold text-lg shadow-md hover:opacity-90 transition"
          >
            Login
          </button>
          <div className="flex justify-between items-center text-sm mt-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="keepLoggedIn"
                checked={state.keepLoggedIn}
                onChange={handleChange}
                className="mr-1"
              />
              Keep me logged in
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>
          <p className="text-sm mt-6 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </main>
      <footer className="login-footer flex justify-between items-center px-8 py-2 absolute bottom-0 left-0 w-full z-20">
        <span className="text-white text-xs">EN</span>
        <img src="https://via.placeholder.com/60x24?text=Logo" alt="Logo" />
      </footer>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
    </div>
  );
}

export default LoginPage;
