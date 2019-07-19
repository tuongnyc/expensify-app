import { createStore, combineReducers } from 'redux'; 
import uuid from 'uuid';

// the state object!
const demoState = {
    expenses: [{
        id: '123121323',
        description: 'shopping',
        note: 'This was for Jan. shopping',
        amount: 23000,   // represent in pennies
        createdAt: 0
    }],
    filters: {
        text: 'rent',  // search the note!
        sortBy: 'amount',  // date or amount
        startDate: undefined,
        endDate: undefined
    }
};

// type of actions!  
// ADD-EXPENSE
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),   // generate unviverse id,
        description,
        note,
        amount,
        createdAt   // shorthand for createdAt: createdAt
    }
})

// REMOVE-EXPENSE
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
})
// EDIT-EXPENSE

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})


// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
})
// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
})

// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
})

// 1 reducer for the expense array and 1 reducer for the filter, then combine them.

const expensesReducerDefaultState = [];
// Expenses Reducer, inline default empty array!
const expenseReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            // return the new state object. but do NOT change the original state!
            //return state.concat(action.expense);  //concat does not change the state array!
            return [...state, action.expense];  // equivalent to concat!  
        case 'REMOVE_EXPENSE':
            // state is an array of expense!  // filter doesn't modify the state array!
            return state.filter(s => s.id !== action.id);

            // can use destructuring
            // return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map(p => {
                if(p.id === action.id) {
                    return {
                        ...p, ...action.updates    // ...action.updates will override the p expense
                    }
                }
                return p;
            })
        default:
            return state;
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            //return {...state, ...action};  // return an object where the action 
            //will overide the element of the state!  But does not change the state!
        case 'SET_START_DATE':
        case 'SET_END_DATE':
        case 'SET_SORT_BY_DATE':
        case 'SORT_BY_AMOUNT':
            return {...state, ...action}
        default:
            return state;
    }
}


// Get Visible expenses, destructuring the filters object
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        // timestamps.  Just number!(in millisecons) - where is the spot Jan 1st, 1970 (unix epoch).
        // + are come afterward, - before!
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        // just for description!
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1: -1;
        } else if(sortBy === 'amount') {  // sort with highest item first!
            return a.amount < b.amount ? 1: -1;
        }
    })
}

// store creation, it combined two reducers!
const store = createStore(combineReducers({
    expenses: expenseReducer,    // expense is at the root, also filter
    filters: filtersReducer
}));

// subscribe the store
store.subscribe(() => {
    console.log(store.getState());
    const state = store.getState();  // get both expenses and filters
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log('visible Expenses', visibleExpenses);
})

// dispatch the action!  It will get dispatch to both reducer!
const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -1000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 200, createdAt: -21000}));

//store.dispatch(removeExpense({ id: expenseOne.expense.id}));

//store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));
/*
store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250))

console.log(store.getState());
*/

//store.dispatch(setStartDate(125));
//store.dispatch(setStartDate(2000));
store.dispatch(setTextFilter('e'));
store.dispatch(sortByAmount());

const user = {
    name: 'tuong',
    age: 24
}

console.log({
    ...user, location: 'NYC'
})