
import React from 'react';
import {
    LayoutDashboard,
    Receipt,
    Settings,
    Users,
    Store,
    BarChart3,
    CreditCard,
    QrCode,
    Package,
    X
} from 'lucide-react';

const Sidebar = ({ activeView, setActiveView, mobileSidebarOpen, setMobileSidebarOpen }) => {
    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard' },
        { icon: Receipt, label: 'Transactions' },
        { icon: QrCode, label: 'QR Product Manager' },
        { icon: Package, label: 'Inventory' },
        { icon: CreditCard, label: 'Payments' },
        { icon: BarChart3, label: 'Analytics' },
        { icon: Store, label: 'Store Locations' },
        { icon: Users, label: 'Staff Management' },
        { icon: Settings, label: 'Settings' }
    ];

    const handleSelect = (label) => {
        setActiveView(label);
        setMobileSidebarOpen(false);
    };

    return (
        <>
            <div
                className={`sidebar-overlay ${mobileSidebarOpen ? 'show' : ''}`}
                onClick={() => setMobileSidebarOpen(false)}
            />
            <aside className={`sidebar ${mobileSidebarOpen ? 'sidebar-open' : ''}`}>
                <div className="sidebar-header">
                    <div className="logo-container">
                        <div className="logo-icon">
                            <QrCode size={24} color="#FFFFFF" />
                        </div>
                        <span className="logo-text">ScanPay Admin</span>
                    </div>

                    <button
                        type="button"
                        className="icon-button sidebar-close"
                        onClick={() => setMobileSidebarOpen(false)}
                        aria-label="Close sidebar"
                    >
                        <X size={18} className="text-secondary" />
                    </button>
                </div>

                <nav className="sidebar-nav">
                    <ul>
                        {menuItems.map((item, index) => {
                            const isActive = activeView === item.label;
                            return (
                                <li key={index} className="nav-item">
                                    <button
                                        onClick={() => handleSelect(item.label)}
                                        className={`nav-link w-full text-left bg-transparent border-0 cursor-pointer ${isActive ? 'active' : ''}`}
                                    >
                                        <item.icon size={20} className="nav-icon" />
                                        <span className="nav-label">{item.label}</span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
