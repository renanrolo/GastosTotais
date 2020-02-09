import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Mes from '../components/mes'
import * as AuthActions from '../../../store/auth/authActions';


function DashboardPage({ user }) {

    return (
        <Mes />
    )
}

const mapStateToProps = state => ({ user: state.auth.user });
const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)