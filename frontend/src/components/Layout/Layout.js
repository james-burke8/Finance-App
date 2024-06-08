import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Finance Dashboard</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/expense-tracker">Expense Tracker</Nav.Link>
                        <Nav.Link href="/investment-tracker">Investment Tracker</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                {children}
            </Container>
        </div>
    );
};

export default Layout;