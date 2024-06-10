// InvestmentTracker.js
import React, { useState } from 'react';

const InvestmentTracker = () => {
  const [investments, setInvestments] = useState([]);
  const [amount, setAmount] = useState('');
  const [desc, setDesc] = useState('');

  const addInvestment = () => {
    if (amount && desc) {
      setInvestments([...investments, { amount: parseFloat(amount), desc }]);
      setAmount('');
      setDesc('');
    }
  };

  const totalInvestments = investments.reduce((acc, investment) => acc + investment.amount, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Investment Tracker</h2>
      <div className="mb-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="p-2 border rounded mr-2"
        />
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
          className="p-2 border rounded mr-2"
        />
        <button onClick={addInvestment} className="p-2 bg-green-500 text-white rounded">Add Investment</button>
      </div>
      <h3 className="text-xl font-semibold mb-2">Investments:</h3>
      <ul className="mb-4">
        {investments.map((investment, index) => (
          <li key={index} className="mb-2">
            {investment.desc}: ${investment.amount.toFixed(2)}
          </li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold">Total Investments: ${totalInvestments.toFixed(2)}</h3>
    </div>
  );
};

export default InvestmentTracker;
