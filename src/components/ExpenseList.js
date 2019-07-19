import React from 'react';
// create a stateless component

import { connect } from 'react-redux';  // connect from redux store! 
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import { removeExpense } from '../actions/expenses';

// reading from the store.
// named export!
export const ExpenseList = (props) => (
    <div>
     <h1> Expense List </h1>
     {props.expenses.map((expense) => {
         //return <ExpenseListItem key={expense.id} {...expense} /> })
         return <ExpenseListItem key={expense.id} expense={expense} /> })
     }
    </div>
);

const mapStateToProps = (state) => {
    return {
        //filters: state.filters,
        //expenses: state.expenses
        expenses: selectExpenses(state.expenses, state.filters)
    };
}

// connect get back a function.
export default connect(mapStateToProps)(ExpenseList);
