//react-test-renderer

//import ReactShallowRenderer from 'react-test-renderer/shallow';  // only render a component
import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme'; 
import toJSON from 'enzyme-to-json';

/*
test('should render Header correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();

    //console.log(renderer.getRenderOutput());

}) */
test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    //expect(wrapper.find('h1').length).toBe(1);
    //expect(wrapper.find('h1').text()).toBe('Expensify');

    // create a snapshot
    //expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();
})
