import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App component', () => {
  const wrapper = shallow(<App />);

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
