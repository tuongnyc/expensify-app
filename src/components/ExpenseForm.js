import React from 'react';
import moment from 'moment';  // standard for date.
import { SingleDatePicker } from 'react-dates';  // date picker
import 'react-dates/initialize';
//import 'react-dates/lib/css/_datepicker.css';


const now = moment();  // current point in time!
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onDescriptionChange = (event) => {
        const description = event.target.value;
        this.setState(() => {
            return {description: description}
        })
    }

    onNoteChange = (event) => {
        const note = event.target.value;
        this.setState(() => {
            return {note: note}
        })
    }

    onAmountChange = (event) => {
        const amount = event.target.value;
        if(!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }

    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({ createdAt }));
        }
      };

      onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
      };

      onSubmit = (event) => {
        event.preventDefault();  // prevent full page refresh!  on all Submit form!

        if(!this.state.description || !this.state.amount) {
            // set error state equal to 'Please provide description and amount!'
            this.setState(() => {  // updater function!
                return {error: 'Please provide description and moment'};
            })
        }
        else {
            this.setState(() => {
                return { error: ''};
            })
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),  // convert to millisecond
                note: this.state.note
            })
        }
      }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                <input 
                type="text"
                placeholder="Description"
                autoFocus 
                value={this.state.description}
                onChange={this.onDescriptionChange}
                />
                <input
                type="text"
                placeholder="Amount"
                value={this.state.amount}
                onChange={this.onAmountChange}
                />
                <SingleDatePicker
                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
              />
                <textarea
                placeholder="Add a note for your expense(optional)"
                value={this.state.note}
                onChange={this.onNoteChange}
                >
                </textarea>
                <button>Add Expense</button>
                </form>
            </div>
        )
    }
} 
