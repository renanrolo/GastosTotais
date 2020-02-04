import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    Container,
    Button,
    Form
} from 'react-bootstrap';

import api from '../../services/api'
import * as AuthActions from '../../store/auth/authActions';


import axios from 'axios'
import consts from '../../consts'
import { toastr } from 'react-redux-toastr'


function RegisterPage({ user, signup, dispatch }) {
    const [msgAviso, setMsgAviso] = useState("")

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

    function cadastrarUsuario(e) {
        e.preventDefault();

        signup({
            name: name,
            email: email,
            password: password,
            confirm_password: confirmPassword
        });
    }

    return (
        <Container>
            <Form onSubmit={cadastrarUsuario}>

                <Form.Group controlId="formName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <Form.Text className="text-muted">
                        Seu login sempre será seu e-mail.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={e => setpassword(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formConfirmPassword">
                    <Form.Label>Confirmar Senha</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirmar Senha"
                        value={confirmPassword}
                        onChange={e => setconfirmPassword(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Enviar
                </Button>

                <br />
                <br />

                <div>
                    {msgAviso}
                </div>

            </Form>
        </Container>
    )
}

const mapStateToProps = state => ({ user: state.auth.user });
const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)