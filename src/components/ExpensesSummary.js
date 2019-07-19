import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

// expenseCount, expensesTotal
export const ExpensesSummary = (props) => {
    const formattedExpensesTotal = numeral(props.expensesTotal/100).format('$0,0.00')
    const wordExpense = props.expenseCount > 1 ? ' expenses' : ' expense';
    return (
        <div>
            <h1> Viewing {props.expenseCount}
            {wordExpense} totalling {formattedExpensesTotal} </h1>
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