import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../components/styles/LoginPage.css";
import { registerAccount } from "../../services/authService";
import toast from "react-hot-toast";

function RegisterPage() {
  const [state, setState] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!state.fullName) newErrors.fullName = "Full Name is required.";
    if (!state.email) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email))
      newErrors.email = "Please enter a valid email.";
    if (!state.username) newErrors.username = "Username is required.";
    if (!state.password) newErrors.password = "Password is required.";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await registerAccount(state);
        if (response) {
          toast(response.message, {
            icon: "✅",
          });
          navigate("/login");
        } else {
          setErrors({ general: "Registration failed. Please try again." });
        }
      } catch (error) {
        toast(error.message.toString(), {
          icon: "❌",
        });
        setErrors({ general: "An error occurred. Please try again." });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  return (
    <div className="login-bg min-h-screen flex flex-col relative">
      <header className="">
        <div className="banner">
          <h1>FSA – LMS</h1>
        </div>
      </header>
      <main className="login-main relative z-10">
        <div className="flex-1"></div>
        <div className="login-card-wrapper mb-7">
          <div className="login-card-gradient"></div>
          <div className="login-card bg-white text-black p-8 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-2">Register</h3>
            <p className="text-gray-600 mb-6">
              Create an account to access our learning platform.
            </p>
            {errors.general && (
              <div className="text-red-500 text-xs mb-4">{errors.general}</div>
            )}
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="mb-4 input-group">
                <label className="block text-xs mb-1 font-semibold">
                  Username<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="username"
                  value={state.username}
                  onChange={handleChange}
                  className="w-full p-1 pl-2.5 border rounded bg-gray-100 focus:bg-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-400 hover:border-green-400"
                  autoComplete="username"
                />
                {errors.username && (
                  <div className="text-red-500 text-xs mt-1">{errors.username}</div>
                )}
              </div>
              <div className="mb-4 input-group">
                <label className="block text-xs mb-1 font-semibold">
                  Full Name<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={state.fullName}
                  onChange={handleChange}
                  className="w-full p-1 pl-2.5 border rounded bg-gray-100 focus:bg-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-400 hover:border-green-400"
                  autoComplete="full-name"
                />
                {errors.lastName && (
                  <div className="text-red-500 text-xs mt-1">{errors.lastName}</div>
                )}
              </div>
              <div className="mb-4 input-group">
                <label className="block text-xs mb-1 font-semibold">
                  Email<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                  className="w-full p-1 pl-2.5 border rounded bg-gray-100 focus:bg-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-400 hover:border-green-400"
                  autoComplete="email"
                />
                {errors.email && (
                  <div className="text-red-500 text-xs mt-1">{errors.email}</div>
                )}
              </div>
              <div className="mb-6 input-group">
                <label className="block text-xs mb-1 font-semibold">
                  Password<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                  className="w-full p-1 pl-2.5 border rounded bg-gray-100 focus:bg-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-400 hover:border-green-400"
                  autoComplete="new-password"
                />
                {errors.password && (
                  <div className="text-red-500 text-xs mt-1">{errors.password}</div>
                )}
              </div>
              <button
                type="submit"
                className="login-btn w-full text-white p-3 rounded font-semibold text-lg shadow-md hover:opacity-90 transition"
              >
                Register
              </button>
            </form>
            <p className="text-xs mt-6 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
        <div className="flex-1"></div>
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

export default RegisterPage;