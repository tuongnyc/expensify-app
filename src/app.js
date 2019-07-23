// install -> import -> use
// install either use npm or yarn!
// yarn add validator
// yarn add react react-dom

import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';  // run the firebase

import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
//import { setTextFilter  } from './actions/filters';

import { Provider } from 'react-redux';   // react-redux store!

import 'react-dates/initialize';

const store = configureStore();

/*// subscribe the store
store.subscribe(() => {
    console.log(store.getState());
    const state = store.getState();  // get both expenses and filters
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log('visible Expenses', visibleExpenses);
}) */

/*
const expenseOne = store.dispatch(addExpense({description: 'Water Bill', amount: 5500 }));
const expenseTwo = store.dispatch(addExpense({description: 'Gas Bill', amount: 8900}));
const expenseThree = store.dispatch(addExpense({description: 'Rent', amount: 10999, createdAt: 1000}));
const expenseFour = store.dispatch(addExpense({description: 'Walmart', amount: 500, createdAt: 5}));
*/

//store.dispatch(setTextFilter('bill'));
/*
const state = store.getState();
console.log(store.getState());

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses); */

const jsx = (
    // using the provider redux store is much more efficient, because we don't have 
    // to pass the store around!  react-redux package for Provider!
    // connect function is available from react-redux for Provider
    // the store is passed into AppRouter and all children!
    <Provider store={store}>
        <AppRouter />
    </Provider>

)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
})


//ReactDOM.render(<AppRouter />, document.getElementById('app'));
//ReactDOM.render(<p>This is a test</p>, document.getElementById('app') )