import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            calendarFocused: null
        };

    }

    onDatesChange = ({ startDate, endDate }) => {
      this.props.setStartDate(startDate);
      this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFocused) => {
      this.setState(() => ({ calendarFocused }));
    }
    onTextChange = (e) => {
      this.props.setTextFilter(e.target.value);
    };
    onSortChange = (e) => {
      e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount();
    };

    render() {
      return (
        <div className="content-container">
          <div className="input-group">
            <div className="input-group__item">
              <input className="text-input"
                  placeholder="Search expenses"
                  type="text"
                  value={this.props.filters.text}
                  onChange={this.onTextChange}
              />
            </div>
            <div className="input-group__item">
                <select className="select"
                  value={this.props.filters.sortBy}
                  onChange={this.onSortChange}
                >
                  <option value="date">Date</option>
                  <option value="amount">Amount</option>
                </select>
            </div>
            <div className="input-group__item">
                <DateRangePicker
                startDateId="startDate"
                endDateId="endDate"
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}
              />
            </div>
          </div>
        </div>
      );
    }
  };

/*
const ExpenseListFilters = (props) => {
    return (
        <div>
        <input type="text" 
               value={props.filters.text} 
               onChange={(e) =>{  // control input through JS
                    // change the filters state
                    props.dispatch(setTextFilter(e.target.value));
               }}
        />
        <select 
         value={props.filters.sortBy} 
         onChange={(e) => {  // control input!
            e.target.value === 'date' ? props.dispatch(sortByDate()) : props.dispatch(sortByAmount()); 
        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>


        </div>
    );
}
*/


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => ({ 
    setTextFilter: (text) => dispatch(setTextFilter(text)),  // call action generator
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters); 

