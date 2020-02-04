import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import { Nav, Navbar, NavItem } from "react-bootstrap";
import ReduxToastr from 'react-redux-toastr'

import Store from './store';

import Register from './pages/register/register';
import LandingPage from './pages/landing-page/landing-page';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

export default props => (
  <Provider store={Store}>

    <Router>

      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <br />

      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>

      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-left"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick />
    </Router>
  </Provider>
)