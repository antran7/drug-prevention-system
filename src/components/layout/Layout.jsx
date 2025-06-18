import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import ChatBubble from '../ui/ChatBubble'


const Layout = () => {
  const [sidebarState, setSidebarState] = useState(1); // 1 = mini, 2 = full, 3 = hidden

  const toggleSidebar = () => {
    setSidebarState((prev) => (prev % 3) + 1);
  };

  const sidebarWidth = sidebarState === 1 ? 80 : sidebarState === 2 ? 256 : 0;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-40">
        <Navbar onToggle={toggleSidebar} />
      </div>
      <div className="flex flex-1">
        {sidebarState !== 3 && (
          <div className="bg-white shadow flex-shrink-0 h-screen sticky top-0">
            <Sidebar state={sidebarState} />
          </div>
        )}

        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          {/* Content */}
          <main className="py-6 px-16 space-y-6 flex-1">
            <Outlet />
          </main>
        </div>
      </div>

      <ChatBubble />
    </div>
  );
};

export default Layout;
