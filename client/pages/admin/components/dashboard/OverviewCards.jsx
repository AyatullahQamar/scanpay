import React from 'react';
import { TrendingUp, TrendingDown, Clock, Users, ArrowUpRight } from 'lucide-react';

const OverviewCards = () => {
    const metrics = [
        {
            title: "Today's Revenue",
            value: "₹1,24,500",
            trend: "+15.2%",
            isPositive: true,
            timeframe: "vs yesterday"
        },
        {
            title: "Total Transactions",
            value: "842",
            trend: "+5.1%",
            isPositive: true,
            timeframe: "vs yesterday"
        },
        {
            title: "Average Checkout Time",
            value: "45s",
            trend: "-12.5%",
            isPositive: true, // Lower is better here
            timeframe: "vs yesterday"
        },
        {
            title: "Skipped Billing Line",
            value: "312",
            trend: "+24.8%",
            isPositive: true,
            timeframe: "customers today"
        }
    ];

    return (
        <>
            {metrics.map((metric, idx) => (
                <div key={idx} className="card metric-card">
                    <div className="flex justify-between items-center">
                        <span className="metric-title">{metric.title}</span>
                        {idx === 0 && <TrendingUp size={18} className="text-secondary" />}
                        {idx === 1 && <ReceiptIcon size={18} className="text-secondary" />}
                        {idx === 2 && <Clock size={18} className="text-secondary" />}
                        {idx === 3 && <Users size={18} className="text-secondary" />}
                    </div>
                    <span className="metric-value">{metric.value}</span>
                    <div className={`metric-trend ${metric.isPositive ? 'trend-up' : 'trend-down'}`}>
                        {metric.isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                        <span>{metric.trend} {metric.timeframe}</span>
                    </div>
                </div>
            ))}
        </>
    );
};

// Helper since Receipt isn't directly imported in this file
const ReceiptIcon = ({ size, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
        <path d="M12 17V7" />
    </svg>
);

export default OverviewCards;
