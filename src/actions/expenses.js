import uuid from 'uuid';

// type of actions!  
// ADD-EXPENSE
export const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
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
