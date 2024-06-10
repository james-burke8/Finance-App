// ExpenseTracker.js
import React, { useState } from 'react';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState('');
  const [desc, setDesc] = useState('');

  const addExpense = () => {
    if (amount && desc) {
      setExpenses([...expenses, { amount: parseFloat(amount), desc }]);
      setAmount('');
      setDesc('');
    }
  };

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Expense Tracker</h2>
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
        <button onClick={addExpense} className="p-2 bg-blue-500 text-white rounded">Add Expense</button>
      </div>
      <h3 className="text-xl font-semibold mb-2">Expenses:</h3>
      <ul className="mb-4">
        {expenses.map((expense, index) => (
          <li key={index} className="mb-2">
            {expense.desc}: ${expense.amount.toFixed(2)}
          </li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold">Total Expenses: ${totalExpenses.toFixed(2)}</h3>
    </div>
  );
};

export default ExpenseTracker;
