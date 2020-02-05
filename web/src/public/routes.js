import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import ReduxToastr from 'react-redux-toastr'

import Store from './store';

import Register from './pages/register';
import Login from './pages/login';
import LandingPage from './pages/landing-page/landing-page';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

import NavbarComp from './pages/components/NavbarComp'

export default props => (
  //<Provider store={Store}>

    <Router>
      <NavbarComp />


      <br />

      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
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
  //</Provider>
)