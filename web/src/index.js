import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import PublicOrDashboard from './main/publicOrDashboard'
import Store from './store';

ReactDOM.render(
    <Provider store={Store}>
        <PublicOrDashboard />
    </Provider>
    , document.getElementById('root'));