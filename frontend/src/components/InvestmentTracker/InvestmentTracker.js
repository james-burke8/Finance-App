import React, { useState } from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";

const InvestmentTracker = () => {
    const [investment, setInvestment] = useState([]);
    const [amount, setAmount] = useState("");
    const [ticker, setTicker] = useState("");

    const addInvestment = () => {
        if (amount && ticker) {
            setInvestment([...investment, { amount: parseFloat(amount), ticker }]);
            setAmount("");
            setTicker("");
        }
    };

    const totalInvestment = investment.reduce((acc, investment) => acc + investment.amount, 0);

    return (
        <Container>
            <h2 className="mt-4">Investment Tracker</h2>
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
                            value={ticker}
                            onChange={(e) => setTicker(e.target.value)}
                            placeholder="Ticker"
                        />
                    </Col>
                    <Col>
                        <Button variant="primary" onClick={addInvestment}>Add Investment</Button>
                    </Col>
                </Row>
            </Form>
            <h3 className="mt-4">Investments:</h3>
            <ListGroup>
                {investment.map((investment, index) => (
                    <ListGroup.Item key={index}>
                        {investment.ticker}: ${investment.amount.toFixed(2)}
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <h3>Total Investments: ${totalInvestment.toFixed(2)}</h3>
        </Container>
    );
};

export default InvestmentTracker;