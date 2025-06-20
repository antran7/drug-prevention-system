import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(
      localStorage.getItem("user") || sessionStorage.getItem("user")
    );
    setUser(storedUser);
  }, []);

  if (!user) return <div className="text-center mt-10 text-gray-500">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">My Profile</h2>

      <div className="bg-white shadow-md rounded-md overflow-hidden">
        <div className="bg-gray-800 text-white px-4 py-2 text-center font-semibold text-sm">
          Profile Details
        </div>

        <div className="flex flex-col md:flex-row p-6 gap-6 items-start">
          {/* Avatar - 1/4 */}
          <div className="w-full md:w-1/4 flex justify-center">
            <img
              src={user.avatar || "https://via.placeholder.com/150?text=Avatar"}
              alt="Profile Avatar"
              className="w-28 h-28 rounded-full object-cover border shadow"
            />
          </div>

          {/* Info - 3/4 */}
          <div className="w-full md:w-3/4 text-sm space-y-2">
            <p><span className="font-bold text-gray-600">ID:</span> {user.id}</p>
            <p><span className="font-bold text-gray-600">Username:</span> {user.username}</p>
            <p><span className="font-bold text-gray-600">Phone Number:</span> {user.phoneNumber}</p>
            <p><span className="font-bold text-gray-600">Role:</span> {user.role}</p>
            <p><span className="font-bold text-gray-600">Full Name:</span> {user.fullName}</p>
          </div>
        </div>

        <div className="bg-gray-100 px-6 py-3 flex justify-end">
          <button
            onClick={() => navigate("/profile/edit")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded text-sm"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
