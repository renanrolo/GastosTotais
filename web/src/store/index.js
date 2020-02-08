import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import { reducer as ToastrReducer } from 'react-redux-toastr'

import auth from './auth/authReducer';
import gastos from './gastos/gastosReducer'

const rootReducer = combineReducers({
    auth,
    gastos,
    toastr: ToastrReducer
});

//original
//const store = createStore(rootReducer);

//exemplo 1
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

//exemplo 2
//const store = applyMiddleware(promisse, ReduxThunk)(createStore)(rootReducer)

export default store;