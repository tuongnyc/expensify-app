import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense, startRemoveExpense, startEditExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit  = (expense) => {
        // Dispatch the action to edit the expense
        //this.props.editExpense(this.props.expense.id, expense)
        this.props.startEditExpense(this.props.expense.id, expense);
        console.log('===============', this.props.expense.id, expense);
        this.props.history.push('/');
        //console.log('updated', expense)}
        //return newExpense;
    }

    onClick = () => {
        //this.props.removeExpense(this.props.expense.id);
        this.props.startRemoveExpense(this.props.expense.id);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
            <ExpenseForm
                expense={this.props.expense}
                onSubmit={this.onSubmit} />
                <button onClick={this.onClick}>
                Remove</button>
            </div>
        );
    }
}
// props also contains history, location, match!
// localhost:8080/edit?query=rent&sort=date
// the query is in location.search
/*const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
        <ExpenseForm
            expense={props.expense}
            onSubmit={(expense)=>{
                // Dispatch the action to edit the expense
                const newExpense = props.dispatch(editExpense(props.expense.id, expense))
                props.history.push('/');
                //console.log('updated', expense)}
            } } />
            <button onClick={()=>{
                props.dispatch(removeExpense(props.expense.id));//{id: props.expense.id}));
                props.history.push('/');
            }}>
            Remove</button>
        </div>
    )
} */


// higher order component
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((exp) => (exp.id === props.match.params.id))
    };
}

const mapDispatchToProps = (dispatch) => ({
    //editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    //removeExpense: (id) => dispatch(removeExpense(id))
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);