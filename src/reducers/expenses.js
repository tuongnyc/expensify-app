// 1 reducer for the expense array and 1 reducer for the filter, then combine them.

// this will be created with the Store!

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
        case 'SET_EXPENSES':
            return action.expenses; // return the state with all the expenses in the action!
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

export default expenseReducer;