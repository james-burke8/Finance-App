// Layout.js
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-lg font-semibold">Finance Dashboard</Link>
          <div className="space-x-4">
            <Link to="/expense-tracker" className="text-gray-300 hover:text-white">Expense Tracker</Link>
            <Link to="/investment-tracker" className="text-gray-300 hover:text-white">Investment Tracker</Link>
          </div>
        </div>
      </nav>
      <div className="container mx-auto p-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
