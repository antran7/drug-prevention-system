import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Thêm Link để điều hướng


// Component Trang Đăng Ký
function RegisterPage() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const handleRegister = () => {
    console.log("Đăng ký", state);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-500 to-blue-900 text-white flex flex-col">
      <header className="p-4">
        <h1 className="text-xl font-bold">FSA - LMS</h1>
      </header>
      <main className="flex flex-1 items-center justify-end p-8">
        <div className="bg-white text-black p-6 rounded-lg shadow-lg w-96">
          <h3 className="text-xl font-semibold mb-2">Đăng Ký</h3>
          <p className="text-gray-600 mb-4">Tạo tài khoản để truy cập nền tảng học tập của chúng tôi.</p>
          <div className="mb-4">
            <label className="block text-sm mb-1">Tên <span className="text-gray-500 text-xs">Bắt buộc</span></label>
            <input
              type="text"
              name="firstName"
              value={state.firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Họ <span className="text-gray-500 text-xs">Bắt buộc</span></label>
            <input
              type="text"
              name="lastName"
              value={state.lastName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Email <span className="text-gray-500 text-xs">Bắt buộc</span></label>
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Tên Đăng Nhập <span className="text-gray-500 text-xs">Bắt buộc</span></label>
            <input
              type="text"
              name="username"
              value={state.username}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Mật Khẩu <span className="text-gray-500 text-xs">Bắt buộc</span></label>
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            onClick={handleRegister}
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white p-2 rounded"
          >
            Đăng Ký
          </button>
          <p className="text-sm mt-2">
            Đã có tài khoản? <Link to="/login" className="text-blue-500">Đăng nhập tại đây</Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export default RegisterPage;