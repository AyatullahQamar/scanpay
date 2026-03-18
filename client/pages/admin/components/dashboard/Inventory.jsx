import React, { useState } from 'react';
import { Package, AlertTriangle, RefreshCw, Loader2 } from 'lucide-react';

const Inventory = () => {
    const [isSyncing, setIsSyncing] = useState(false);
    const [lastSyncText, setLastSyncText] = useState("Just now");

    const [inventoryItems, setInventoryItems] = useState([
        { id: 1, name: "Zara Basic T-Shirt", stock: 124, lastUpdated: "1h ago", alert: false },
        { id: 2, name: "Linen Trousers", stock: 8, lastUpdated: "2h ago", alert: true },
        { id: 3, name: "Denim Jacket", stock: 45, lastUpdated: "5h ago", alert: false },
        { id: 4, name: "Vintage Leather Jacket", stock: 2, lastUpdated: "12h ago", alert: true },
        { id: 5, name: "Summer Dress", stock: 82, lastUpdated: "1d ago", alert: false }
    ]);

    const handleSync = () => {
        setIsSyncing(true);

        // Simulate API fetch delay
        setTimeout(() => {
            // randomly update a stock value to show activity
            const updatedItems = [...inventoryItems];
            const randIdx = Math.floor(Math.random() * updatedItems.length);
            updatedItems[randIdx].stock += Math.floor(Math.random() * 10) - 2; // fluctuate stock slightly

            // Update alerts based on new stock
            updatedItems[randIdx].alert = updatedItems[randIdx].stock < 10;

            // Update timestamps
            const fullyUpdated = updatedItems.map(item => ({ ...item, lastUpdated: "Just now" }));

            setInventoryItems(fullyUpdated);
            setIsSyncing(false);

            // Setup a subtle timeout to revert "Just now" to "1m ago"
            setTimeout(() => setLastSyncText("1m ago"), 60000);
            setLastSyncText("Just now");
        }, 1500);
    };

    return (
        <div className="card table-card mt-6">
            <div className="card-header border-bottom">
                <div>
                    <h3 className="card-title flex items-center gap-2">
                        <Package size={18} /> Inventory Status
                    </h3>
                    <p className="text-xs text-secondary mt-1">Last synced ERP: {lastSyncText}</p>
                </div>
                <button
                    onClick={handleSync}
                    disabled={isSyncing}
                    className="btn btn-outline text-sm flex items-center gap-2"
                >
                    {isSyncing ? (
                        <><Loader2 size={14} className="animate-spin" /> Syncing</>
                    ) : (
                        <><RefreshCw size={14} /> Sync Stock</>
                    )}
                </button>
            </div>

            {/* Reusing the spin animation style from QR manager globally or here */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin { animation: spin 1s linear infinite; }
      `}} />

            <div className="table-container">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Available Stock</th>
                            <th>Status</th>
                            <th>Last Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventoryItems.map((item) => (
                            <tr key={item.id} className="table-row transition-colors">
                                <td className="font-medium">{item.name}</td>
                                <td>
                                    <span className={item.alert ? "text-danger font-bold" : "text-primary font-medium"}>
                                        {item.stock} units
                                    </span>
                                </td>
                                <td>
                                    {item.alert ? (
                                        <span className="stock-alert flex items-center gap-1 w-max">
                                            <AlertTriangle size={12} /> Low Stock
                                        </span>
                                    ) : (
                                        <span className="status-badge status-success">In Stock</span>
                                    )}
                                </td>
                                <td className="text-secondary">{item.lastUpdated}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Inventory;
