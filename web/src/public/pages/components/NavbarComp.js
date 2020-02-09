import React from 'react'
import { Nav, Navbar } from "react-bootstrap";


const NavbarComp = () => {

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Collapse className="justify-content-end">
                    <Nav.Item>
                        <Nav.Link href="/login">Logar</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/register">Registrar</Nav.Link>
                    </Nav.Item>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavbarComp