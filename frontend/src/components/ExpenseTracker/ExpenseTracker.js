import React, { useState } from 'react';

const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState ([]);
    const [amount, setAmount] = useState ('');
    const [desc, setDesc] = useState ('');

    const addExpense = () => {
        if (amount && desc){
            setExpenses([...expenses, {amount: parseFloat(amount), desc}]);
            setAmount('');
            setDesc('');
        }
    };

    const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

    return (
        <div>
            <h2>Expense Tracker</h2>
            <input 
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
            />
            <input
                type="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Description"
            />
            <button onClick={addExpense}>Add Expense</button>
            <h3>Expenses:</h3>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>
                        {expense.desc}: ${expense.amount.toFixed(2)}
                    </li>
                ))}
            </ul>
            <h3>Total Expenses: ${totalExpenses.toFixed(2)}</h3>
        </div>
    );
};

export default ExpenseTracker;