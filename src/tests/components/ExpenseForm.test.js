import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
})

test('should render error for invalid from submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    // simulate an event.  
    wrapper.find('form').simulate('submit', {preventDefault: () => {}});
    // getting the state from wrapper!
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})

test('should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    // simulate the event!  the second argument is the event object
    wrapper.find('input').at(0).simulate('change', {
        target: { value: 'New description' }
    })    // first input!  there are multiple input on the form!
    expect(wrapper.state('description')).toBe('New description');
});

test('should set note on textarea change', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').at(0).simulate('change', {
        target: { value: 'There is a new note!'}
    });
    expect(wrapper.state('note')).toBe('There is a new note!');
})

test('should set amount if valid input', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value: '23.50' }
    })    // first input!  there are multiple input on the form!
    expect(wrapper.state('amount')).toBe('23.50');
})

test('should not set amount if invalid input 12.122', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value: '12.1222' }
    })    // first input!  there are multiple input on the form!
    expect(wrapper.state('amount')).toBe('');
})

test('should call onSubmit prop for valid from submission', () => {
    const onSubmitSpy = jest.fn();
   /* onSubmitSpy('Tuong', 'NYC');;
    expect(onSubmitSpy).toHaveBeenCalledWith('Tuong', 'NYC'); */
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {preventDefault: () => {}});
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    }); 
});

test('should set new date onDateChange', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    // can find the component
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
})

test('should set calendar focus on change', () => {
    const focused = true
    const wrapper = shallow(<ExpenseForm />);
    // can find the component
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')( { focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
})