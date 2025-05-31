import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("user");
      sessionStorage.removeItem("user");
      navigate("/login");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-4xl font-bold text-blue-500 p-6">Dat nguu 🎉</div>
      <button
        onClick={handleLogout}
        className="mt-4 px-6 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600 transition"
      >
        Log out
      </button>
    </div>
  );
};

export default Home;
