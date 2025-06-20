import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBell, FaBookOpen, FaList } from "react-icons/fa";

export default function Navbar({ onToggle }) {
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const accountRef = useRef();
    const navigate = useNavigate();

    // Đóng dropdown nếu click ra ngoài
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (accountRef.current && !accountRef.current.contains(event.target)) {
                setShowAccountMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        // Xoá thông tin đăng nhập và điều hướng về Login
        localStorage.removeItem("token");
        localStorage.removeItem("userInfo");
        navigate("/login");
    };

    const handleProfile = () => {
        navigate("/profile");
    };

    return (
        <header className="bg-[#052c45] text-white h-16 flex items-center justify-between px-6 shadow">
            {/* Left: Logo + Toggle */}
            <div className="flex items-center gap-4 text-lg font-bold">
                <span>NAME</span>
                <button onClick={onToggle} className="text-xl cursor-pointer">
                    <div className="space-y-1">
                        <div className="w-5 h-0.5 bg-white" />
                        <div className="w-5 h-0.5 bg-white" />
                        <div className="w-5 h-0.5 bg-white" />
                    </div>
                </button>
            </div>

            {/* Right: Icons + Role + Account Dropdown */}
            <div className="flex items-center gap-4 text-sm relative">
                <FaBell className="text-lg cursor-pointer" />
                <div className="flex items-center gap-1 cursor-pointer hover:underline">
                    <FaBookOpen className="text-base" />
                    <span>Go to learn</span>
                    <FaList className="text-base" />
                </div>
                <div className="text-sm">Role: SUPERADMIN</div>

                {/* Account Dropdown */}
                <div ref={accountRef} className="relative">
                    <div
                        onClick={() => setShowAccountMenu(!showAccountMenu)}
                        className="cursor-pointer text-sm font-medium px-2 py-1 hover:underline"
                    >
                        Account ▾
                    </div>
                    {showAccountMenu && (
                        <div className="absolute left-0 mt-2 w-36 bg-white text-gray-700 rounded-md shadow-lg z-50 text-sm overflow-hidden">
                            <div
                                onClick={handleProfile}
                                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                            >
                                My Profile
                            </div>
                            <div
                                onClick={handleLogout}
                                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                            >
                                Logout
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
