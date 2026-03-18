import React, { useState } from 'react';
import { Link2, Smartphone, Server, CheckCircle2, XCircle } from 'lucide-react';

const Integrations = () => {
    const [integrations, setIntegrations] = useState([
        {
            id: 1,
            name: "Retail ERP (SAP)",
            description: "Inventory sync & stock management",
            icon: Server,
            connected: true
        },
        {
            id: 2,
            name: "UPI Payment Gateway",
            description: "Razorpay / PhonePe integration",
            icon: Smartphone,
            connected: true
        },
        {
            id: 3,
            name: "Legacy POS System",
            description: "Old billing counter hardware",
            icon: Link2,
            connected: false
        }
    ]);

    const toggleConnection = (id) => {
        setIntegrations(integrations.map(item =>
            item.id === id ? { ...item, connected: !item.connected } : item
        ));
    };

    return (
        <div className="card mt-6">
            <div className="card-header border-bottom">
                <div>
                    <h3 className="card-title">System Integrations</h3>
                    <p className="text-sm text-secondary mt-1">Manage connected services and hardware</p>
                </div>
                <button className="btn btn-outline text-sm">Add New</button>
            </div>

            <div className="p-6 flex flex-col gap-4">
                {integrations.map((item) => (
                    <div key={item.id} className="integration-item transition-all duration-300">
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${item.connected ? 'bg-primary-light text-primary' : 'bg-gray-100 text-gray-400'}`}>
                                <item.icon size={24} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-primary-text">{item.name}</h4>
                                <p className="text-sm text-secondary">{item.description}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                {item.connected ? (
                                    <><CheckCircle2 size={16} className="text-success" /> <span className="text-sm font-medium text-success">Connected</span></>
                                ) : (
                                    <><XCircle size={16} className="text-secondary" /> <span className="text-sm font-medium text-secondary">Disconnected</span></>
                                )}
                            </div>
                            <button
                                onClick={() => toggleConnection(item.id)}
                                className={`btn text-sm ${item.connected ? 'btn-outline' : 'btn-primary'}`}
                            >
                                {item.connected ? 'Disconnect' : 'Connect'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Integrations;
