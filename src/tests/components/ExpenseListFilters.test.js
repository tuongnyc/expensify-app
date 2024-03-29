import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />)
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilters with alt data correctly', () => {
    // setProps can manipulate the props.
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
})

// should handle text change.
test('should handle ExpenseListFilters text change', () => {
    wrapper.find('input').at(0).simulate('change', {
        target: { value: 'gas' }
    })    // first input!  there are multiple input on the form!
    expect(setTextFilter).toHaveBeenLastCalledWith('gas');
  });
// should sort by date

test('should handle ExpenseListFilters sort by date change', () => {
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('select').at(0).simulate('change', {
        target: { value: 'date' }
    })    // first input!  there are multiple input on the form!
    expect(sortByDate).toHaveBeenCalled()//toHaveBeenLastCalledWith('date');
})
// should sort by amount
test('should handle ExpenseListFilters sort by amount change', () => {
    wrapper.setProps({
        filters: filters
    })
    wrapper.find('select').at(0).simulate('change', {
        target: { value: 'amount' }
    })    // first input!  there are multiple input on the form!
    expect(sortByAmount).toHaveBeenCalled()//toHaveBeenLastCalledWith('amount');
})
// should handle date changes
test('should handle ExpenseListFilters date changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
})

// should handle date focus changes
test('should handle ExpenseListFilters focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
})


