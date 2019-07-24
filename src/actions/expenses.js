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
    return (dispatch, getState) => {  // get the state
        const uid = getState().auth.uid;
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;

        const expense = { description, note, amount, createdAt };

        // save some data!
        //return database.ref('expenses').push(expense).then((ref) => {
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
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

// create startRemoveExpense 
// Test StartRemoveExpense with "should remove expenses from firebase"
// Use StartRemoveExpense in EditExpensePage Instead of removeExpense
// Adjust EditExpensePage tests
export const startRemoveExpense = (id) => {
    // already got the id at this point.
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove()
        .then(() => {
            console.log('Data is removed.');
            dispatch(removeExpense(id));
        }).catch(error => {
            console.log('Error: ', error);
        });
    }
}


// EDIT-EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates)
        .then(() => {
            dispatch(editExpense(id, updates));
        }).catch(error => {
            console.log('Error: ', error);
        })
    }
}

// SET_EXPENSES  -- set the array value
export const setExpenses = (expenses) => {
    return { 
        type: 'SET_EXPENSES',
        expenses
    }
    
}

// asynchonous action
// fetch all the data once!
// parse data using the snapshot and push to array
// dispatch SET_EXPENSES
export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        // fetch all the data from database!
        console.log('Calling startSetExpenses');
        return database.ref(`users/${uid}/expenses`).once('value')
        .then((snapshot) => {
            const expenses = [];
            snapshot.forEach((childsnapshot) => {
                expenses.push({id: childsnapshot.key,
                        ...childsnapshot.val() })
            });
            // return expenses so that we can chain the Promises
            dispatch(setExpenses(expenses));
        }).catch(error => {
            console.log('Error: ', error)
        });
    }
};  
