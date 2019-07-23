import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);  // accept an array of middleware

test('should setup remove expense action object', () => {
    const action = removeExpense('123abc');
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});


test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'new note value'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'new note value'}
    })
})

test('should setup add expense action object', () => {
    /*const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    }; */

    // to equal compare two arrays or objects.  ToBe compare strings, number!
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
        /*expense: {
            ...expenseData,
            id: expect.any(String)  // doesn't care for the value!
        } */
    });
});

/*
test('should setup add expense action object with default value', () => {
    const action = addExpense({}); // default value
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
}) */

// use redux-mock store to create a mock store.
// done the paramenter is for async, forcing jest to wait!
test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 30000,
        note: '',
        createdAt: 10000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {

        const actions = store.getActions();  // an array of all actions.
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),  // doesnt care of any value
                ...expenseData
            }
        });

        // return a Promise so we can do chaining!
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');

    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    })
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }

    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions();  // an array of all actions.
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),  // doesnt care of any value
                ...expenseData
            }
        });

        // return a Promise so we can do chaining!
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    })
})
