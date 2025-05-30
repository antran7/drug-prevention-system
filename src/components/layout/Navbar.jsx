import { FaBell, FaBookOpen, FaList } from "react-icons/fa";

export default function Navbar({ onToggle }) {
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

            {/* Right: Icons + Dropdowns */}
            <div className="flex items-center gap-6 text-sm">
                <FaBell className="text-lg cursor-pointer" />
                <div className="flex items-center gap-1 cursor-pointer hover:underline">
                    <FaBookOpen className="text-base" />
                    <span>Go to learn</span>
                    <FaList className="text-base" />
                </div>
                <div className="cursor-pointer hover:underline">Role: SUPERADMIN ▾</div>
                <div className="cursor-pointer hover:underline">Account ▾</div>
            </div>
        </header>
    );
}
