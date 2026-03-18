import React from 'react';
import { MapPin, Users, Receipt, TrendingUp } from 'lucide-react';

const StoreLocations = () => {
    const stores = [
        {
            name: "Zara – Jaipur Store",
            revenue: "₹84,500",
            transactions: "412",
            active: "24",
            trend: "+12.5%",
            isPrimary: true
        },
        {
            name: "Zara – Delhi Select Citywalk",
            revenue: "₹1,24,900",
            transactions: "845",
            active: "45",
            trend: "+8.2%",
            isPrimary: false
        },
        {
            name: "Zara – Mumbai Palladium",
            revenue: "₹96,200",
            transactions: "620",
            active: "32",
            trend: "-2.4%",
            isPrimary: false
        }
    ];

    return (
        <div className="card mt-6">
            <div className="card-header border-bottom">
                <div>
                    <h3 className="card-title">Store Locations Performance</h3>
                    <p className="text-sm text-secondary mt-1">Real-time metrics across all your branches</p>
                </div>
                <button className="btn btn-primary text-sm">View All Stores</button>
            </div>

            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {stores.map((store, idx) => (
                        <div key={idx} className="store-card relative">
                            {store.isPrimary && (
                                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-2 py-1 rounded-bl-md rounded-tr-md">
                                    Current
                                </div>
                            )}

                            <h4 className="font-semibold text-lg flex items-center gap-2 mb-4">
                                <MapPin size={18} className="text-primary" /> {store.name}
                            </h4>

                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-secondary flex items-center gap-2"><TrendingUp size={14} /> Revenue</span>
                                    <span className="font-bold">{store.revenue}</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-secondary flex items-center gap-2"><Receipt size={14} /> Transactions</span>
                                    <span className="font-medium">{store.transactions}</span>
                                </div>

                                <div className="flex justify-between items-center bg-primary-light p-2 rounded-sm border border-primary-light">
                                    <span className="text-sm font-medium text-primary flex items-center gap-2"><Users size={14} /> Active Shoppers</span>
                                    <span className="font-bold text-primary flex items-center gap-2">
                                        <span className="pulse-dot bg-primary w-2 h-2 rounded-full inline-block"></span>
                                        {store.active}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StoreLocations;
