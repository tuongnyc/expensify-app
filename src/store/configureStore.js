import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expenseReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

// apply the middleware!

const composeEnhancers = window.__RUDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    // store creation, it combined two reducers!
    const store = createStore(combineReducers({
    expenses: expenseReducer,    // expense is at the root, also filter
    filters: filtersReducer
    }),
    compose(applyMiddleware(thunk))
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}

