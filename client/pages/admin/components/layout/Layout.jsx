
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = ({ children, activeView, setActiveView }) => {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    return (
        <div className="app-container">
            <Sidebar
                activeView={activeView}
                setActiveView={setActiveView}
                mobileSidebarOpen={mobileSidebarOpen}
                setMobileSidebarOpen={setMobileSidebarOpen}
            />
            <div className="main-content">
                <Navbar setMobileSidebarOpen={setMobileSidebarOpen} />
                <main className="content-area">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
