import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import ChatBubble from '../common/ChatBubble';

const Layout = () => {
  const [sidebarState, setSidebarState] = useState(1); // 1 = mini, 2 = full, 3 = hidden

  const toggleSidebar = () => {
    setSidebarState((prev) => (prev % 3) + 1);
  };

  const sidebarWidth = sidebarState === 1 ? 80 : sidebarState === 2 ? 256 : 0;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar onToggle={toggleSidebar} />
      </div>

      {/* Content area */}
      <div className="pt-16 flex">
        {/* Sidebar */}
        {sidebarState !== 3 && (
          <div
            style={{ width: `${sidebarWidth}px` }}
            className="bg-white shadow fixed top-16 left-0 bottom-0 z-40 transition-all"
          >
            <Sidebar state={sidebarState} />
          </div>
        )}

        {/* Main content */}
        <div
          className="flex-1 transition-all"
          style={{ marginLeft: `${sidebarState !== 3 ? sidebarWidth : 0}px` }}
        >
          <main className="p-6 space-y-6 min-h-screen">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>

      {/* Chat bubble */}
      <ChatBubble />
    </>
  );
};

export default Layout;
