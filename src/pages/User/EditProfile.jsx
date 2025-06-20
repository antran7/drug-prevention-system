import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    phoneNumber: "",
    fullName: "",
    role: "",
    avatar: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(
      localStorage.getItem("user") || sessionStorage.getItem("user")
    );
    if (!storedUser) return navigate("/login");
    setForm({
      username: storedUser.username || "",
      phoneNumber: storedUser.phoneNumber || "",
      fullName: storedUser.fullName || "",
      role: storedUser.role || "",
      avatar: storedUser.avatar || "",
    });
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { ...form };
    const userStr = JSON.stringify(updatedUser);
    if (localStorage.getItem("user")) {
      localStorage.setItem("user", userStr);
    } else {
      sessionStorage.setItem("user", userStr);
    }
    alert("Profile updated successfully.");
    navigate("/profile");
  };

  const handleCancel = () => navigate("/profile");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSaveAvatar = () => {
    if (selectedFile) {
      const avatarUrl = URL.createObjectURL(selectedFile);
      setForm((prev) => ({ ...prev, avatar: avatarUrl }));
      setShowModal(false);
      setSelectedFile(null);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-md rounded-md p-6 mt-6">
      <h2 className="text-2xl font-semibold text-center mb-4">Edit Profile</h2>
      <div className="border-b-2 bg-gray-800 text-center text-white px-4 py-2 rounded-t-md font-semibold">
        Edit Profile Details
      </div>

      <div className="flex flex-col md:flex-row gap-6 p-6">
        <div className="w-full md:w-1/4 flex flex-col items-center justify-center">
          <img
            src={form.avatar || "https://via.placeholder.com/100"}
            alt="Avatar"
            className="rounded-full w-24 h-24 object-cover mb-3"
          />
          <button
            className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600"
            onClick={() => setShowModal(true)}
          >
            Edit Avatar
          </button>
        </div>

        <div className="w-full md:w-3/4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username:
            </label>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number:
            </label>
            <input
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name:
            </label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role:
            </label>
            <input
              name="role"
              value={form.role}
              readOnly
              className="w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-4">
        <button
          onClick={handleSubmit}
          className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded shadow"
        >
          Save Changes
        </button>
        <button
          onClick={handleCancel}
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded shadow"
        >
          Cancel
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
              <h3 className="text-lg font-semibold mb-4 border-b pb-2">Edit Avatar</h3>

              {selectedFile ? (
                <div className="flex justify-center mb-4">
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    alt="Preview"
                    className="w-24 h-24 rounded-full object-cover shadow"
                  />
                </div>
              ) : (
                <div className="text-center text-sm text-gray-500 mb-4 italic">
                  Chưa chọn ảnh
                </div>
              )}

              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full border border-gray-300 px-3 py-2 rounded mb-4"
              />

              <div className="flex justify-end gap-3">
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                  onClick={() => {
                    setSelectedFile(null);
                    setShowModal(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                  onClick={handleSaveAvatar}
                  disabled={!selectedFile}
                >
                  Save
                </button>
              </div>

              <button
                className="absolute top-2 right-3 text-xl text-gray-500 hover:text-gray-700"
                onClick={() => {
                  setSelectedFile(null);
                  setShowModal(false);
                }}
              >
                ×
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EditProfile;
