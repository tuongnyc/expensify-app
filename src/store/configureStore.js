import { createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
    // store creation, it combined two reducers!
    const store = createStore(combineReducers({
    expenses: expenseReducer,    // expense is at the root, also filter
    filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}

