import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div>
            <nav className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="text-xl font-bold">Finance Dashboard</Link>
                    <div>
                        <Link to="/expense-tracker" className="ml-4 hover:underline">Expense Tracker</Link>
                        <Link to="/investment-tracker" className="ml-4 hover:underline">Investment Tracker</Link>
                    </div>
                </div>
            </nav>
            <div className="container mx-auto mt-4">
                {children}
            </div>
        </div>
    );
};

export default Layout;
