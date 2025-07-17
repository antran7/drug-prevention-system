import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../components/styles/LoginPage.css";
import { resetPasswordWithToken, sendPasswordResetEmail, signInWithEmailAndPassword } from "../../services/authService";
import toast from "react-hot-toast";

function LoginPage() {
  const [state, setState] = useState({
    email: "",
    password: "",
    keepLoggedIn: false,
  });
  const [errors, setErrors] = useState({});
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isVerifyEmail, setIsVerifyEmail] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef();
  const tokenRef = useRef();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!state.email) newErrors.email = "email is required.";
    if (!state.password) newErrors.password = "Password is required.";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        // const response = await fetch(
        //   "https://684f8c28e7c42cfd179502d0.mockapi.io/api/user"
        // );
        // const users = await response.json();

        // const user = users.find(
        //   (u) => u.email === state.email && u.password === state.password
        // );

        const response = await signInWithEmailAndPassword(state.email, state.password);

        if (response) {
          if (state.keepLoggedIn) {
            localStorage.setItem("user", JSON.stringify(response.user));
          } else {
            sessionStorage.setItem("user", JSON.stringify(response.user));
          }
          toast(response.message, {
            icon: "✅",
          });
          navigate("/");
        } else {
          setErrors({ general: "Invalid email or password." });
        }
      } catch (error) {
        toast(error.message.toString(), {
          icon: "❌",
        });
        setErrors({ general: "An error occurred. Please try again." });
      }
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await sendPasswordResetEmail(emailRef.current.value);
      if (response) {
        toast(response.message, {
          icon: "✅",
        });
      }
      setIsForgotPassword(!isForgotPassword);
      setIsVerifyEmail(true);
    } catch (error) {
      toast(error.message.toString(), {
        icon: "❌",
      });
    }
  }

  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    try {
      await resetPasswordWithToken(tokenRef.current.value);
    } catch (error) {
      toast(error.message.toString(), {
        icon: "❌",
      });
    } finally {
      setIsVerifyEmail(false);
    }
  }

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
          <h1>FSA – LMS</h1>
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
        {isForgotPassword ? (
          <div className="login-card bg-white text-black p-8 rounded-xl shadow-2xl">
            {isVerifyEmail ? (
              <>
                <h3 className="text-2xl font-bold mb-2">Verify token</h3>
                <p className="text-gray-600 mb-6">
                  Enter the token sent to your email to verify your identity.
                </p>
                <form onSubmit={handleVerifyEmail} className="space-y-4">
                  <div className="mb-4 input-group">
                    <label className="block text-xs mb-1 font-semibold">
                      Enter token:
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      ref={tokenRef}
                      className={`w-full p-1 pl-2.5 border rounded bg-gray-100 focus:bg-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-400 hover:border-green-400 ${errors.email ? "border-red-400" : ""
                        }`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="login-btn w-full text-white p-3 rounded font-semibold text-lg shadow-md hover:opacity-90 transition"
                  >
                    Verify token
                  </button>
                </form>
                <div className="text-center mt-4">
                  <p className="text-md mt-6">
                    Didn't receive OTP?{" "}
                    <button onClick={() => setIsForgotPassword(!isForgotPassword)} className="text-blue-500 font-bold hover:underline">
                      Resend OTP
                    </button>
                  </p>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-2">Forgot Password</h3>
                <p className="text-gray-600 mb-6">
                  Enter your email address to receive an OTP for password reset.
                </p>
                <form onSubmit={handleForgotPassword} className="space-y-4">
                  <div className="mb-4 input-group">
                    <label className="block text-xs mb-1 font-semibold">
                      Email
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      ref={emailRef}
                      className={`w-full p-1 pl-2.5 border rounded bg-gray-100 focus:bg-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-400 hover:border-green-400 ${errors.email ? "border-red-400" : ""
                        }`}
                      autoComplete="email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="login-btn w-full text-white p-3 rounded font-semibold text-lg shadow-md hover:opacity-90 transition"
                  >
                    Send OTP
                  </button>
                </form>
                <div className="text-center mt-4">
                  <p className="text-md mt-6">
                    Don't have an account?{" "}
                    <button onClick={() => setIsForgotPassword(!isForgotPassword)} className="text-blue-500 font-bold hover:underline">
                      Login here
                    </button>
                  </p>
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="login-card-wrapper">
            <div className="login-card-gradient"></div>
            <div className="login-card bg-white text-black p-8 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-2">Login</h3>
              <p className="text-gray-600 mb-6">
                Login below to see all your courses.
              </p>
              {errors.general && (
                <div className="text-red-500 text-xs mb-4">{errors.general}</div>
              )}
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="mb-4 input-group">
                  <label className="block text-xs mb-1 font-semibold">
                    Email
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    className={`w-full p-1 pl-2.5 border rounded bg-gray-100 focus:bg-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-400 hover:border-green-400 ${errors.email ? "border-red-400" : ""
                      }`}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.email}
                    </div>
                  )}
                </div>
                <div className="mb-6 input-group">
                  <label className="block text-xs mb-1 font-semibold">
                    Password
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                    className={`w-full p-1 pl-2.5 border rounded bg-gray-100 focus:bg-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-400 hover:border-green-400 ${errors.password ? "border-red-400" : ""
                      }`}
                    autoComplete="current-password"
                  />
                  {errors.password && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.password}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="login-btn w-full text-white p-3 rounded font-semibold text-lg shadow-md hover:opacity-90 transition"
                >
                  Login
                </button>
              </form>
              <div className="flex justify-between items-center text-xs mt-4">
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
                <button
                  href="#"
                  className="text-blue-500 hover:underline"
                  onClick={() => setIsForgotPassword(!isForgotPassword)}
                >
                  Forgot Password?
                </button>
              </div>
              <p className="text-xs mt-6 text-center">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-500 hover:underline">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        )}
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
