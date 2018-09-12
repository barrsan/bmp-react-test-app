import React from 'react';
import { shallow } from 'enzyme';
import NewExhibitForm from './NewExhibitForm';


describe('NewExhibitForm component', () => {
  const createExhibit = jest.fn();
  const props = {
    createExhibit,
  };

  const wrapper = shallow(<NewExhibitForm {...props} />);

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
