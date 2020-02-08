import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {
    Container,
    Button,
    Form
} from 'react-bootstrap';
import * as AuthActions from '../../../store/auth/authActions';
import { Nav, Navbar, NavItem } from "react-bootstrap";

const NavbarComp = ({ auth, logout }) => {
    const history = useHistory();

    const sair = function () {
        logout();
        history.push("/home");
    }

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
                    {auth && auth.validToken ? (
                        <Button type="button" onClick={sair} >Sair</Button>
                    ) : (
                            <>
                                <Nav.Item>
                                    <Nav.Link href="/login">Logar</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/register">Registrar</Nav.Link>
                                </Nav.Item>
                            </>
                        )
                    }
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}


const mapStateToProps = state => ({ auth: state.auth });
const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComp)