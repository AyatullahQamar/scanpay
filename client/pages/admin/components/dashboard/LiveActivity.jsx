import React from 'react';
import { Smartphone, CreditCard, ShoppingBag, CheckCircle2 } from 'lucide-react';

const LiveActivity = () => {
    const activities = [
        {
            id: 1,
            customer: "Customer #4829",
            action: "purchased",
            product: "Zara Basic T-Shirt",
            method: "UPI",
            amount: "₹1,290",
            time: "Just now",
            icon: Smartphone,
            color: "var(--success)"
        },
        {
            id: 2,
            customer: "Customer #4828",
            action: "scanned",
            product: "Denim Jacket",
            method: null,
            amount: null,
            time: "2 mins ago",
            icon: ShoppingBag,
            color: "var(--primary)"
        },
        {
            id: 3,
            customer: "Customer #4827",
            action: "purchased",
            product: "Linen Trousers",
            method: "Credit Card",
            amount: "₹3,990",
            time: "5 mins ago",
            icon: CreditCard,
            color: "var(--success)"
        },
        {
            id: 4,
            customer: "Customer #4826",
            action: "scanned",
            product: "Summer Dress",
            method: null,
            amount: null,
            time: "8 mins ago",
            icon: ShoppingBag,
            color: "var(--primary)"
        }
    ];

    return (
        <div className="card live-activity-card">
            <div className="card-header">
                <h3 className="card-title">Live Store Activity</h3>
                <div className="pulse-indicator">
                    <span className="pulse-dot"></span>
                    <span className="pulse-text">Live updates</span>
                </div>
            </div>

            <div className="activity-feed">
                {activities.map((item) => (
                    <div key={item.id} className="activity-item">
                        <div className="activity-icon" style={{ backgroundColor: `${item.color}20`, color: item.color }}>
                            <item.icon size={16} />
                        </div>
                        <div className="activity-details">
                            <p className="activity-text">
                                <span className="font-medium">{item.customer}</span> {item.action} <span className="font-medium">{item.product}</span>
                            </p>
                            <div className="activity-meta">
                                {item.amount && (
                                    <span className="activity-amount">{item.amount} via {item.method}</span>
                                )}
                                <span className="activity-time">{item.time}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LiveActivity;
