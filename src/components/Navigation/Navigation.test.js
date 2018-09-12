import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';


describe('Navigation component', () => {
  const wrapper = shallow(<Navigation />);

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
