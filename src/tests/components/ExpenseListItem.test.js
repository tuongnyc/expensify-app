import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListItem } from '../../components/ExpenseListItem';  // named import must be in curly braces so that it will not use the default export
import expenses from '../fixtures/expenses';

test('should render expense list item', () => {
    const wrapper = shallow(<ExpenseListItem expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
})