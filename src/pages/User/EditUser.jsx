import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  FaSave,
  FaTimesCircle,
  FaClock,
  FaCopy,
  FaFileAlt,
  FaUserPlus,
  FaUserCheck,
  FaEnvelope,
  FaRedo,
  FaChartBar,
  FaTrash,
} from "react-icons/fa";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    enable2FA: false,
    lockUser: false,
    role: "",
  });

  useEffect(() => {
    fetch(`https://683b29ab43bb370a8674e73d.mockapi.io/users/${id}`)
      .then((res) => res.json())
      .then((data) => setFormData(data));
  }, [id]);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`https://683b29ab43bb370a8674e73d.mockapi.io/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    toast.success("User updated successfully!");
    navigate("/users");
  };

  const handleDelete = async () => {
    await fetch(`https://683b29ab43bb370a8674e73d.mockapi.io/users/${id}`, {
      method: "DELETE",
    });
    toast.success("User deleted!");
    navigate("/users");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto p-6">
      {/* Left: form card */}
      <form
        onSubmit={handleSubmit}
        className="w-full lg:flex-1 bg-white p-6 rounded-xl shadow border"
      >
        <h2 className="text-2xl font-semibold mb-6">Edit User</h2>

        {["username", "firstName", "lastName", "email"].map((field) => (
          <div className="mb-4" key={field}>
            <label className="block font-medium mb-1 capitalize">{field}</label>
            <input
              type="text"
              name={field}
              value={formData[field] || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        ))}

        <div className="mb-4">
          <label className="block font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Leave blank to keep current password"
            onChange={handleChange}
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
            Lock User
          </label>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Roles</label>
          <input
            type="text"
            name="role"
            value={formData.role || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </form>

      {/* Right: action panel */}
      <div className="w-full lg:w-[270px] bg-white px-2 py-4 rounded shadow flex flex-col gap-2">
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded flex items-center justify-center gap-2 cursor-pointer"
          onClick={handleSubmit}
          type="submit"
        >
          <FaSave /> Save
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 rounded flex items-center justify-center gap-2 cursor-pointer"
          onClick={() => navigate("/users")}
          type="button"
        >
          <FaTimesCircle /> Cancel
        </button>

        <div className="flex flex-col gap-2 mt-2">
          <button className="w-full border border-gray-300 bg-white hover:bg-gray-200 py-2 rounded flex items-center gap-2 justify-center text-gray-700 text-sm font-normal cursor-pointer transition">
            <FaClock /> View History
          </button>
          <button className="w-full border border-gray-300 bg-white hover:bg-gray-200 py-2 rounded flex items-center gap-2 justify-center text-gray-700 text-sm font-normal cursor-pointer transition">
            <FaCopy /> Duplicate
          </button>
          <button className="w-full border border-gray-300 bg-white hover:bg-gray-200 py-2 rounded flex items-center gap-2 justify-center text-gray-700 text-sm font-normal cursor-pointer transition">
            <FaFileAlt /> User Transcript
          </button>
          <button className="w-full border border-gray-300 bg-white hover:bg-gray-200 py-2 rounded flex items-center gap-2 justify-center text-gray-700 text-sm font-normal cursor-pointer transition">
            <FaUserPlus /> Enroll
          </button>
          <button className="w-full border border-gray-300 bg-white hover:bg-gray-200 py-2 rounded flex items-center gap-2 justify-center text-gray-700 text-sm font-normal cursor-pointer transition">
            <FaUserCheck /> Assign
          </button>
          <button className="w-full border border-gray-300 bg-white hover:bg-gray-200 py-2 rounded flex items-center gap-2 justify-center text-gray-700 text-sm font-normal cursor-pointer transition">
            <FaEnvelope /> Message
          </button>
          <button className="w-full border border-gray-300 bg-white hover:bg-gray-200 py-2 rounded flex items-center gap-2 justify-center text-gray-700 text-sm font-normal cursor-pointer transition">
            <FaRedo /> Reset Password
          </button>
          <button className="w-full border border-gray-300 bg-white hover:bg-gray-200 py-2 rounded flex items-center gap-2 justify-center text-gray-700 text-sm font-normal cursor-pointer transition">
            <FaChartBar /> Progress User
          </button>
          <button
            className="w-full border border-red-500 text-red-600 hover:bg-red-500 hover:text-white font-semibold py-2 rounded flex items-center justify-center gap-2 text-sm cursor-pointer transition"
            onClick={handleDelete}
            type="button"
          >
            <FaTrash /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
