import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <div>
                <aside>
                    Sidebar ne
                </aside>
                <div>
                    <header>Header ne</header>
                    <main>
                        <Outlet />
                    </main>
                    <footer>Footer ne</footer>
                </div>
            </div>
        </>
    )
}

export default Layout
