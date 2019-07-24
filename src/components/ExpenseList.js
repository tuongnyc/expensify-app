import React from 'react';
// create a stateless component

import { connect } from 'react-redux';  // connect from redux store! 
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import { removeExpense } from '../actions/expenses';

// reading from the store.
// named export!
export const ExpenseList = (props) => (
    <div className="content-container">
    <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
     {
        props.expenses.length === 0 ? (
            <div className="list-item list-item--message">
                <span >No Expense</span>
            </div>
        ) : (
            props.expenses.map((expense) => {
                //return <ExpenseListItem key={expense.id} {...expense} /> })
                return <ExpenseListItem key={expense.id} expense={expense} /> })
        )
     }
     </div>
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
