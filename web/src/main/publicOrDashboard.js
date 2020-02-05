import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PublicApp from '../public/publicApp'
import DashboardApp from '../dashboard/dashboardApp'
import { validateToken } from '../store/auth/authActions'

class PublicOrDashboard extends Component {
    componentWillMount() {
        if (this.props.auth.user) {
            this.props.validateToken(this.props.auth.user.token)
        }
    }
    render() {
        const { user, validToken } = this.props.auth
        if (user && validToken) {
            axios.defaults.headers.common['authorization'] = user.token;
            return <DashboardApp />
        } else if (!user && !validToken) {
            //return <h1>NÃO ESTÁ LOGADO</h1>
            return <PublicApp />
        } else {
            return false;
        }
    }
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PublicOrDashboard)