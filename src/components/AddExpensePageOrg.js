import React from 'react';
import { prependOnceListener } from 'cluster';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit  = (expense) => {
            //props.dispatch(addExpense(expense));
            this.props.addExpense(expense);  // for testing.
            this.props.history.push('/'); // push the page back to the front page! Switch page!
    }

    render() {
        return (
                <div>
                    <h1>Add Expense</h1>
                    <ExpenseForm 
                        onSubmit={this.onSubmit}
                    />
                </div>
        );
    }
}

// onSubmit is the props that pass in a function.  This function will take the argument 
// of the expense and dispatch it!  The props.onSubmit from the ExpenseForm will invoke
// the function and dispatch the addExpense!
/*const AddExpensePage = (props) => ( 
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                //props.dispatch(addExpense(expense));
                props.onSubmit(expense);  // for testing.
                props.history.push('/');  // push the page back to the front page! Switch page!
            }}
        />
    </div>
); */

const mapDispatchToProps = (dispatch) => ({
        addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);  // connect to store so we can use dispatch!