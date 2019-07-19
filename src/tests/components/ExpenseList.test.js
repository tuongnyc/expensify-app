import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';  // named import must be in curly braces so that it will not use the default export
import expenses from '../fixtures/expenses';

test('should render ExpenseList with expenses', () => {
    // render the component
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});


