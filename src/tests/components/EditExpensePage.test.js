import React from 'react';
import { EditExpensePage } from '../../components/EditExpensePage';  //named export, the class export, not connect
import { shallow } from 'enzyme'; 
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';

let editExpense, history, wrapper, removeExpense;
// will be called before  each test case
beforeEach(() => {
    editExpense = jest.fn();
    history = { push: jest.fn() };
    removeExpense = jest.fn();
    wrapper = shallow(<EditExpensePage editExpense={editExpense} history={history} removeExpense={removeExpense} expense={expenses[2]}/>);
})


test('should render EditExpensePage correctly', () => {
    /*
        const onSubmit = jest.fn();
        const history = { push: jest.fn() };
        const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />); */
        expect(wrapper).toMatchSnapshot();
    });

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
  });

  test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith(
      expenses[2].id
    );
  });