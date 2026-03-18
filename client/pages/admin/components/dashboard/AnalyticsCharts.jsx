import React from 'react';
import { BarChart3, PieChart, TrendingUp, Filter } from 'lucide-react';

const AnalyticsCharts = () => {
    // Mock data for the charts
    const revenueData = [40, 60, 45, 80, 55, 90, 70];
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    return (
        <div className="card mt-6">
            <div className="card-header border-bottom">
                <div>
                    <h3 className="card-title">Analytics Overview</h3>
                    <p className="text-sm text-secondary mt-1">Daily revenue and transaction patterns</p>
                </div>
                <button className="btn btn-outline text-sm flex items-center gap-2">
                    This Week <Filter size={14} />
                </button>
            </div>

            <div className="p-6">
                <div className="flex gap-6">
                    {/* Main Chart (Mock Revenue Bar Chart) */}
                    <div className="flex-1">
                        <h4 className="font-medium mb-4 flex items-center gap-2">
                            <TrendingUp size={16} className="text-primary" /> Daily Revenue
                        </h4>
                        <div className="chart-container">
                            {revenueData.map((val, idx) => (
                                <div key={idx} className="chart-bar-wrapper">
                                    <div
                                        className="chart-bar"
                                        style={{ height: `${val}%`, backgroundColor: val > 70 ? 'var(--primary)' : 'var(--primary-light)' }}
                                    ></div>
                                    <span className="chart-label">{days[idx]}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Side Mini Charts */}
                    <div className="w-1/3 flex flex-col gap-6" style={{ width: '30%' }}>
                        <div className="card p-4 border shadow-sm">
                            <h4 className="font-medium text-sm flex items-center gap-2 mb-3">
                                <BarChart3 size={14} className="text-secondary" /> Peak Shopping Hours
                            </h4>
                            <div className="flex justify-between items-end h-20">
                                {[20, 40, 80, 100, 60, 30].map((h, i) => (
                                    <div key={i} className="w-4 bg-tertiary rounded-t-sm" style={{ height: `${h}%`, backgroundColor: 'var(--secondary)' }}></div>
                                ))}
                            </div>
                            <div className="flex justify-between text-xs text-secondary mt-2">
                                <span>10AM</span>
                                <span>8PM</span>
                            </div>
                        </div>

                        <div className="card p-4 border shadow-sm flex flex-col items-center justify-center relative">
                            <h4 className="font-medium text-sm flex items-center gap-2 absolute top-4 left-4">
                                <PieChart size={14} className="text-success" /> UPI Success
                            </h4>
                            <div className="mt-8 mb-2 w-24 h-24 rounded-full border-8 border-success flex items-center justify-center border-l-secondary">
                                <span className="font-bold text-lg">94%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsCharts;
