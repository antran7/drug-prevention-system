import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaRedo, FaClock } from "react-icons/fa";

const UserTable = ({
  users,
  selected,
  onSelect,
  onDelete,
  onShowHistory,
  startIndex = 0,
}) => {
  return (
    <div className="overflow-x-auto shadow-lg rounded-xl bg-white ring-1 ring-gray-200/50">
      <table className="min-w-full border border-gray-300 text-sm text-center">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-3">
              <input type="checkbox" disabled />
            </th>
            <th className="border border-gray-300 px-4 py-3">#</th>
            <th className="border border-gray-300 px-4 py-3">Username</th>
            <th className="border border-gray-300 px-4 py-3">Email</th>
            <th className="border border-gray-300 px-4 py-3">First Name</th>
            <th className="border border-gray-300 px-4 py-3">Last Name</th>
            <th className="border border-gray-300 px-4 py-3">Updated Time</th>
            <th className="border border-gray-300 px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr
              key={user.id}
              className="hover:bg-gray-50 hover:shadow transition duration-200"
            >
              <td className="border border-gray-200 px-4 py-2">
                <input
                  type="checkbox"
                  checked={selected.includes(user.id)}
                  onChange={() => onSelect(user.id)}
                />
              </td>
              <td className="border border-gray-200">{startIndex + idx + 1}</td>
              <td className="border border-gray-200">{user.username}</td>
              <td className="border border-gray-200">{user.email}</td>
              <td className="border border-gray-200">{user.firstName}</td>
              <td className="border border-gray-200">{user.lastName}</td>
              <td className="border border-gray-200">{user.updatedAt}</td>
              <td className="border border-gray-200">
                <div className="flex justify-center gap-2">
                  <Link
                    to={`/users/${user.id}/edit`}
                    className="p-2 bg-yellow-400 text-white rounded shadow hover:bg-yellow-500 transition"
                  >
                    <FaEdit />
                  </Link>
                  <button
                    onClick={() => onDelete(user.id)}
                    className="p-2 bg-red-500 text-white rounded shadow hover:bg-red-600 transition cursor-pointer"
                  >
                    <FaTrash />
                  </button>
                  <button
                    className="p-2 bg-gray-300 text-gray-700 rounded shadow hover:bg-gray-400 transition cursor-pointer"
                    onClick={() => onShowHistory(user)}
                  >
                    <FaClock />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
