import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseTracker from './components/ExpenseTracker/ExpenseTracker';
import InvetmentTracker from './components/InvestmentTracker/InvestmentTracker';
import Layout from './components/Layout/Layout';
import Dashboard from './components/Dashboard/dashboard';
import InvestmentTracker from './components/InvestmentTracker/InvestmentTracker';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/expense-tracker" element={<ExpenseTracker />} />
                    <Route path="/investment-tracker" element={<InvestmentTracker />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;

