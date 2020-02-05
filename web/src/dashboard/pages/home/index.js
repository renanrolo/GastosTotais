import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    Container,
    Button
} from 'react-bootstrap';
import * as AuthActions from '../../../store/auth/authActions';


function DashboardPage({ user }) {

    return (
        <Container>
           <h1>Você está no dashboard</h1>
        </Container>
    )
}

const mapStateToProps = state => ({ user: state.auth.user });
const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)