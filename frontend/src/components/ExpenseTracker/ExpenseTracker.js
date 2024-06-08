import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';

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
        <Container>
            <h2 className="mt-4">Expense Tracker</h2>
            <Form>
                <Row>
                    <Col>
                        <Form.Control
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Amount"
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            placeholder="Description"
                        />
                    </Col>
                    <Col>
                        <Button variant="primary" onClick={addExpense}>Add Expense</Button>
                    </Col>
                </Row>
            </Form>
            <h3 className="mt-4">Expenses:</h3>
            <ListGroup>
                {expenses.map((expense, index) => (
                    <ListGroup.Item key={index}>
                        {expense.desc}: ${expense.amount.toFixed(2)}
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <h3>Total Expenses: ${totalExpenses.toFixed(2)}</h3>
        </Container>
    );
};

export default ExpenseTracker;