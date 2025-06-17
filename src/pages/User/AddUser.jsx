import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaCheckSquare, FaTimesCircle } from "react-icons/fa";

const AddUser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    enable2FA: false,
    lockUser: false,
    role: "SUPERADMIN",
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://683b29ab43bb370a8674e73d.mockapi.io/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    toast.success("User created!");
    navigate("/users");
  };

  return (
    <div className="flex flex-col items-center max-w-3xl w-full mx-auto p-6">
      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="w-full bg-white p-6 rounded-xl shadow-2x1 border"
      >
        <h2 className="text-2xl font-semibold mb-6">Create User</h2>

        <div className="mb-4">
          <label className="block font-medium mb-1">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-6 mb-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="enable2FA"
              checked={formData.enable2FA}
              onChange={handleChange}
              className="accent-blue-600"
            />
            Enable 2FA
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="lockUser"
              checked={formData.lockUser}
              onChange={handleChange}
              className="accent-blue-600"
            />
            Lock Account
          </label>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Roles</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            readOnly
            className="w-full bg-gray-100 border border-gray-300 px-4 py-2 rounded text-gray-500"
          />
        </div>

        <div className="flex gap-3 mt-6">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded flex items-center justify-center gap-2 cursor-pointer"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => navigate("/users")}
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded flex items-center justify-center gap-2 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
