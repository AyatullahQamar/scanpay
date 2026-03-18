import React, { useState } from 'react';
import { MoreVertical, Filter, Download } from 'lucide-react';

const TransactionsTable = ({ showAll = false }) => {
    const allTransactions = [
        { id: "TRX-8290", product: "Zara Basic T-Shirt", store: "Jaipur Store", method: "UPI", amount: "₹1,290", time: "10:45 AM", status: "Success" },
        { id: "TRX-8289", product: "Linen Trousers", store: "Delhi Store", method: "Credit Card", amount: "₹3,990", time: "10:30 AM", status: "Success" },
        { id: "TRX-8288", product: "Summer Dress", store: "Mumbai Store", method: "UPI", amount: "₹4,590", time: "10:15 AM", status: "Pending" },
        { id: "TRX-8287", product: "Denim Jacket", store: "Jaipur Store", method: "Debit Card", amount: "₹5,990", time: "09:50 AM", status: "Refunded" },
        { id: "TRX-8286", product: "Sneakers", store: "Bangalore Store", method: "UPI", amount: "₹6,990", time: "09:20 AM", status: "Success" },
        { id: "TRX-8285", product: "Crossbody Bag", store: "Jaipur Store", method: "Cash", amount: "₹2,490", time: "09:05 AM", status: "Success" },
        { id: "TRX-8284", product: "Silver Hoop Earrings", store: "Delhi Store", method: "UPI", amount: "₹890", time: "08:45 AM", status: "Success" },
    ];

    // If showAll is false (Dashboard view), just show first 5, else paginate
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;
    const totalPages = Math.ceil(allTransactions.length / rowsPerPage);

    const displayedTransactions = showAll
        ? allTransactions.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
        : allTransactions.slice(0, 5);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Success': return 'status-success';
            case 'Pending': return 'status-warning';
            case 'Refunded': return 'status-danger';
            default: return '';
        }
    };

    return (
        <div className="card table-card">
            <div className="card-header border-bottom">
                <h3 className="card-title">Recent Transactions</h3>
                <div className="flex gap-2">
                    <button className="btn btn-outline text-sm flex items-center gap-2">
                        <Filter size={16} /> Filter
                    </button>
                    <button className="btn btn-outline text-sm flex items-center gap-2">
                        <Download size={16} /> Export
                    </button>
                </div>
            </div>

            <div className="table-container">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Transaction ID</th>
                            <th>Product Name</th>
                            <th>Store Location</th>
                            <th>Payment Method</th>
                            <th>Amount</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedTransactions.map((trx) => (
                            <tr key={trx.id} className="table-row">
                                <td className="font-medium text-primary">{trx.id}</td>
                                <td>{trx.product}</td>
                                <td className="text-secondary">{trx.store}</td>
                                <td>{trx.method}</td>
                                <td className="font-medium">{trx.amount}</td>
                                <td className="text-secondary">{trx.time}</td>
                                <td>
                                    <span className={`status-badge ${getStatusColor(trx.status)}`}>
                                        {trx.status}
                                    </span>
                                </td>
                                <td>
                                    <button className="icon-button-sm">
                                        <MoreVertical size={16} className="text-secondary" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="card-footer">
                <span className="text-sm text-secondary">
                    Showing {showAll ? ((currentPage - 1) * rowsPerPage) + 1 : 1} to {showAll ? Math.min(currentPage * rowsPerPage, allTransactions.length) : Math.min(5, allTransactions.length)} of {allTransactions.length} entries
                </span>

                {showAll && (
                    <div className="pagination">
                        <button
                            className={`page-btn ${currentPage === 1 ? 'disabled' : ''}`}
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>

                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                                onClick={() => setCurrentPage(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            className={`page-btn ${currentPage === totalPages ? 'disabled' : ''}`}
                            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TransactionsTable;
