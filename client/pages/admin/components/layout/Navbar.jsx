
import React from 'react';
import { Search, Bell, ChevronDown, Menu } from 'lucide-react';

const Navbar = ({ setMobileSidebarOpen }) => {
    return (
        <header className="navbar card">
            <div className="navbar-left">
                <button
                    className="icon-button menu-toggle"
                    onClick={() => setMobileSidebarOpen(true)}
                    aria-label="Open sidebar"
                    type="button"
                >
                    <Menu size={20} className="text-secondary" />
                </button>

                <div className="store-selector">
                    <div className="store-icon">
                        <span className="store-letter">Z</span>
                    </div>
                    <div className="store-info">
                        <span className="store-name">Zara – Jaipur Store</span>
                        <span className="store-role">Admin View</span>
                    </div>
                    <ChevronDown size={16} className="text-secondary store-chevron" />
                </div>
            </div>

            <div className="navbar-right">
                <div className="search-bar">
                    <Search size={18} className="search-icon" />
                    <input type="text" placeholder="Search transactions, products..." className="search-input" />
                </div>

                <button className="icon-button notification-btn" type="button">
                    <Bell size={20} className="text-secondary" />
                    <span className="notification-dot"></span>
                </button>

                <div className="user-profile">
                    <img src="https://ui-avatars.com/api/?name=Admin+User&background=2563EB&color=fff" alt="User" className="avatar" />
                    <ChevronDown size={16} className="text-secondary" />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
