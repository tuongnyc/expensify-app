import React from 'react';
//import {connect} from 'react-redux';
//import { removeExpense, editExpense } from '../actions/expenses';
//import EditExpensePage from './EditExpensePage';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// export a stateless functional component
// render the description, amount, createdAt
// the props contain dispatch function!
/*const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={()=>{
        dispatch(removeExpense({id}));
    }}>
    Remove</button>
    </div>
); */

// alternatively
export const ExpenseListItem = (props) => {
    const id = props.expense.id
    return (
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title">{props.expense.description}</h3> 
            <span className="list-item__sub-title">{moment(props.expense.createdAt).format('MMMM Do, YYYY')}</span>
        </div>
        <h3 className="list-item__data">{numeral(props.expense.amount/100).format('$0,0.00')}</h3>
    </Link>
    );
}

// we don't need the state in here, so no need to mapToState function!
//export default connect()(ExpenseListItem);
export default ExpenseListItem;