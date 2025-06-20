import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import UserTable from "./UserTable";
import UserHistoryModal from "./UserHistoryModal";
import {
  FaSearch,
  FaFilter,
  FaTrash,
  FaPlus,
  FaUpload,
  FaDownload,
  FaPrint,
} from "react-icons/fa";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [showHistory, setShowHistory] = useState(false);
  const [historyData, setHistoryData] = useState({});

  const fetchUsers = () => {
    fetch("https://684f8c28e7c42cfd179502d0.mockapi.io/api/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Sau khi fetchUsers(), cập nhật lại currentPage nếu cần
  useEffect(() => {
    const totalPages = Math.ceil(
      users.filter((u) =>
        u.username?.toLowerCase().includes(search.toLowerCase())
      ).length / itemsPerPage
    );
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [users, search, currentPage, itemsPerPage]);

  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleBulkDelete = async () => {
    await Promise.all(
      selected.map((id) =>
        fetch(`https://684f8c28e7c42cfd179502d0.mockapi.io/api/user/${id}`, {
          method: "DELETE",
        })
      )
    );
    toast.success("Deleted selected users");
    fetchUsers();
    setSelected([]);
  };

  const filteredUsers = users.filter((u) =>
    u.username?.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const currentUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Hàm lấy dữ liệu lịch sử user
  const handleShowHistory = (user) => {
    setHistoryData({
      createdDate: user.createdAt?.split(" ")[0] || "2025-04-02",
      createdTime: user.createdAt?.split(" ")[1] || "01:20:59",
      createdBy: user.createdBy || "Unknown",
      updatedDate: user.updatedAt?.split(" ")[0] || "2025-04-11",
      updatedTime: user.updatedAt?.split(" ")[1] || "01:29:25",
      updatedBy: user.updatedBy || user.username || "superadmin",
    });
    setShowHistory(true);
  };

  return (
    <>
      <UserHistoryModal
        show={showHistory}
        onClose={() => setShowHistory(false)}
        history={historyData}
      />
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-4xl font-medium text-center mb-6">Users</h2>

        <div className="flex flex-wrap items-center mb-6 gap-4">
          {/* Delete button - left */}
          <div className="flex-shrink-0">
            <button
              onClick={handleBulkDelete}
              disabled={selected.length === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded font-medium transition
              ${
                selected.length === 0
                  ? "bg-red-300 cursor-not-allowed text-white"
                  : "bg-red-600 hover:bg-red-700 text-white cursor-pointer"
              }`}
            >
              <FaTrash /> Delete ({selected.length})
            </button>
          </div>

          {/* Search + Filter - center, grow */}
          <div className="flex-1 flex gap-2 items-center justify-center min-w-[250px]">
            <div className="relative w-full max-w-xs">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search by username"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="flex items-center gap-1 px-3 py-2 border rounded text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
              <FaFilter /> ALL USERS
            </button>
          </div>

          {/* Action buttons - right */}
          <div className="flex gap-2 items-center flex-shrink-0">
            <button className="p-2 border rounded hover:bg-gray-100 cursor-pointer">
              <FaUpload />
            </button>
            <button className="p-2 border rounded hover:bg-gray-100 cursor-pointer ">
              <FaDownload />
            </button>
            <button className="p-2 border rounded hover:bg-gray-100 cursor-pointer">
              <FaPrint />
            </button>
            <Link
              to="/users/add"
              className="p-2 border rounded text-green-600 hover:bg-green-100"
            >
              <FaPlus />
            </Link>
          </div>
        </div>

        <UserTable
          users={currentUsers}
          selected={selected}
          onSelect={handleSelect}
          onDelete={async (id) => {
            await fetch(
              `https://684f8c28e7c42cfd179502d0.mockapi.io/api/user/${id}`,
              {
                method: "DELETE",
              }
            );
            toast.success("Deleted user");
            fetchUsers();
          }}
          onShowHistory={handleShowHistory} // truyền hàm này xuống
          startIndex={(currentPage - 1) * itemsPerPage}
        />

        <div className="flex justify-center items-center gap-1 mt-6 text-sm flex-wrap">
          <button
            className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(1)}
          >
            First
          </button>
          <button
            className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded border ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          >
            Next
          </button>
          <button
            className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(totalPages)}
          >
            Last
          </button>
        </div>
      </div>
    </>
  );
};

export default UserList;
