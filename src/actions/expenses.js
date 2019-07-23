import uuid from 'uuid';
import database from '../firebase/firebase';

// component calls action generator
// action generator returns an object
// component dispatches the object
// redux store changes!

// asynchronous!
// components calls action generator
// action generator returns function
// component dispatches function (?)  // redux does not dispatch a function.
// function runs (has the ability to dispatch other actions and do whatever it wants)
// redux-thunk!!  add support for dispatch function!

// type of actions!  
// ADD-EXPENSE
/*
export const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),   // generate unviverse id,
        description,
        note,
        amount,
        createdAt   // shorthand for createdAt: createdAt
    }
}); */

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;

        const expense = { description, note, amount, createdAt };

        // save some data!
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        }).catch(error => {console.log('Error: ', error);})
    };
}

// REMOVE-EXPENSE
export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id: id
})
// EDIT-EXPENSE

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
