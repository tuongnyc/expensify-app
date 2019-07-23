import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expenseReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';


// apply the middleware!

const composeEnhancers = window.__RUDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    // store creation, it combined two reducers!
    const store = createStore(combineReducers({
    expenses: expenseReducer,    // expense is at the root, also filter
    filters: filtersReducer,
    auth: authReducer
    }),
    compose(applyMiddleware(thunk))
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}

