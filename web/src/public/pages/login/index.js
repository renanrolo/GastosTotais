import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    Container,
    Button,
    Form
} from 'react-bootstrap';
import * as AuthActions from '../../../store/auth/authActions';


function LoginPage({ user, login }) {

    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")

    function btnSubmit(e) {
        e.preventDefault();

        login({
            email: email,
            password: password,
        });
    }

    return (
        <Container>
            <Form onSubmit={btnSubmit}>

                <Form.Group controlId="formEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
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

                <Button variant="primary" type="submit">
                    Entrar
                </Button>

            </Form>
        </Container>
    )
}

const mapStateToProps = state => ({ user: state.auth.user });
const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)