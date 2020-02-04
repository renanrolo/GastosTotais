import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import promisse from 'redux-promise';

import { reducer as ToastrReducer } from 'react-redux-toastr'
import auth from './auth/authReducer';

const rootReducer = combineReducers({
    auth,
    toastr: ToastrReducer
});

//original
//const store = createStore(rootReducer);

//exemplo 1
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

//exemplo 2
//const store = applyMiddleware(promisse, ReduxThunk)(createStore)(rootReducer)

export default store;