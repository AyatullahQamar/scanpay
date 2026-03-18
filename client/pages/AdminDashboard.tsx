import { useState } from "react";
import OverviewCards from "./admin/components/dashboard/OverviewCards";
import LiveActivity from "./admin/components/dashboard/LiveActivity";
import TransactionsTable from "./admin/components/dashboard/TransactionsTable";
import QRProductManager from "./admin/components/dashboard/QRProductManager";
import Inventory from "./admin/components/dashboard/Inventory";
import AnalyticsCharts from "./admin/components/dashboard/AnalyticsCharts";
import StoreLocations from "./admin/components/dashboard/StoreLocations";
import Integrations from "./admin/components/dashboard/Integrations";
import Layout from "./admin/components/layout/Layout";
import "@/styles/admin-base.css";
import "@/styles/admin-dashboard.css";

function toLowerCaseSafe(str: string) {
  return str ? str.toLowerCase() : "";
}

export default function AdminDashboardPage() {
  const [activeView, setActiveView] = useState("Dashboard");

  const renderContent = () => {
    switch (activeView) {
      case "Dashboard":
        return (
          <div className="dashboard-grid">
            <div className="overview-section">
              <OverviewCards />
            </div>
            <div className="left-column">
              <TransactionsTable />
              <StoreLocations />
            </div>
            <div className="right-column">
              <LiveActivity />
            </div>
          </div>
        );
      case "Transactions":
        return <div className="dashboard-grid"><div style={{ gridColumn: "span 12" }}><TransactionsTable showAll={true} /></div></div>;
      case "QR Product Manager":
        return <div className="dashboard-grid"><div className="left-column"><QRProductManager /></div></div>;
      case "Inventory":
        return <div className="dashboard-grid"><div style={{ gridColumn: "span 12" }}><Inventory /></div></div>;
      case "Analytics":
        return <div className="dashboard-grid"><div style={{ gridColumn: "span 12" }}><OverviewCards /><div className="mt-6"></div><AnalyticsCharts /></div></div>;
      case "Store Locations":
        return <div className="dashboard-grid"><div style={{ gridColumn: "span 12" }}><StoreLocations /></div></div>;
      case "Settings":
      case "Integrations":
      case "Payments":
        return <div className="dashboard-grid"><div className="left-column"><Integrations /></div></div>;
      default:
        return (
          <div className="flex items-center justify-center h-64 border-2 border-dashed border-border-color rounded-lg mt-6">
            <div className="text-center text-secondary">
              <p className="text-lg font-medium">{activeView} view is under construction</p>
              <p className="text-sm">Please check back later.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <Layout activeView={activeView} setActiveView={setActiveView}>
      <div className="dashboard-header mb-6">
        <div>
          <h1 className="text-xl font-bold">{activeView} Overview</h1>
          <p className="text-sm text-secondary mt-1">
            {activeView === "Dashboard"
              ? "Welcome back, here's what's happening today."
              : `Manage your ${toLowerCaseSafe(activeView)} settings and data.`}
          </p>
        </div>
        <div className="date-picker">
          <span className="text-sm font-medium">Today</span>
        </div>
      </div>
      {renderContent()}
    </Layout>
  );
}
