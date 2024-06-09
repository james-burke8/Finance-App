import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-6">Finance Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/expense-tracker" className="p-4 bg-blue-100 border border-blue-300 rounded">
                    <h2 className="text-2xl font-bold">Expense Tracker</h2>
                    <p>Track your daily expenses.</p>
                </Link>
                <Link to="/investment-tracker" className="p-4 bg-green-100 border border-green-300 rounded">
                    <h2 className="text-2xl font-bold">Investment Tracker</h2>
                    <p>Monitor your investments.</p>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
