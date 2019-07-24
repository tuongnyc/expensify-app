import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

// expenseCount, expensesTotal
// named export!
export const ExpensesSummary = (props) => {
    const formattedExpensesTotal = numeral(props.expensesTotal/100).format('$0,0.00')
    const wordExpense = props.expenseCount > 1 ? ' expenses' : ' expense';
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title"> Viewing <span>{props.expenseCount}</span>
                {wordExpense} totalling <span>{formattedExpensesTotal}</span> </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);