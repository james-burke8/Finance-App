import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseTracker from './components/ExpenseTracker/ExpenseTracker';
import Layout from './components/Layout/Layout';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<ExpenseTracker />} />
                    {/* Add more routes here if needed */}
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;

