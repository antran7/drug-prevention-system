import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import ChatBubble from '../common/ChatBubble'


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
            <div className="flex flex-1 pt-16">
                {/* Sidebar NẰM TRONG flow layout */}
                {sidebarState !== 3 && (
                    <div
                        style={{ width: `${sidebarWidth}px` }}
                        className="bg-white shadow flex-shrink-0"
                    >
                        <Sidebar state={sidebarState} />
                    </div>
                )}

                {/* Main content */}
                <div className="flex-1">
                    <main className="p-6 space-y-6">
                        <Outlet />
                    </main>
                </div>
            </div>

            {/* Footer */}
            <Footer />

            {/* Chat bubble */}
            <ChatBubble />
        </>
    )
}

export default Layout
