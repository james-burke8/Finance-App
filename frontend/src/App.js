// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ExpenseTracker from './components/ExpenseTracker/ExpenseTracker';
import InvestmentTracker from './components/InvestmentTracker/InvestmentTracker';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/expense-tracker" element={<ExpenseTracker />} />
          <Route path="/investment-tracker" element={<InvestmentTracker />} />
          <Route path="/" element={<h1 className="text-center text-4xl mt-8">Welcome to the Finance Dashboard</h1>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
