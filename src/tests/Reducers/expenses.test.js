import expenseReducer from '../../reducers/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expenseReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
})

test('this should set up an add expense', () => {
    const state = [];
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
        id: '1',
        description: 'This is my expense',
        createdAt: moment(0).valueOf(),
        note: ''
        }
    };

    const expenses = expenseReducer(state, action);
    expect(expenses[0]).toEqual(action.expense)
})

test('this should remove an expense object', () => {
    const state = [{
        id: '1',
        description: 'This is my expense',
        createdAt: moment(0).valueOf(),
        note: ''
        }];

    const action = {
        type: 'REMOVE_EXPENSE',
        id: '1'
    };

    const expenses = expenseReducer(state, action);
    expect(expenses.length).toBe(0);
})

test('this should remove expense object with wrong id', () => {
    const state = [{
        id: '1',
        description: 'This is my expense',
        createdAt: moment(0).valueOf(),
        note: ''
        }];

        // remove wrong id that doesn't exist!
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '2'
    };

    const expenses = expenseReducer(state, action);
    expect(expenses.length).toBe(1);
})

test('this should edit an expense object', () => {
    const state = [{
        id: '1',
        description: 'This is my expense',
        createdAt: moment(0).valueOf(),
        note: ''
        }];
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: {
            note: 'I paid this already.'
        }
    };
    const expenses = expenseReducer(state, action);
    //console.log(expenses);
    expect(expenses[0].note).toBe('I paid this already.');
})

test('this should not edit an expense object', () => {
    const state = [{
        id: '1',
        description: 'This is my expense',
        createdAt: moment(0).valueOf(),
        note: ''
        }];
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            note: 'I paid this already.'
        }
    };
    const expenses = expenseReducer(state, action);
    //console.log(expenses);
    expect(expenses).toEqual(state);
})
